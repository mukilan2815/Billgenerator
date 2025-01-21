"use client";
import GenerateBtn from "@/components/forms/GenerateBtn";
import Alert from "@mui/material/Alert";
import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "sonner";
import SuccessModal from "@/components/forms/SuccessDialog";
import { checkEnvironment } from "@/lib/checkenvironment";

export default function BillEditContainer({ children, finalData, session }) {
  const [pdf, setPdf] = useState(null);
  const [isGenerated, setIsGenerated] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [creditNeeded, setCreditNeeded] = useState(false);

  const addNewBill = async function (userinfo, bill) {
    console.log("addbill user", userinfo?.id);
    const res = await fetch(checkEnvironment().concat("/api/user/addbill"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userinfo.id,
        billData: bill,
      }),
    });

    if (res.ok) {
      setIsGenerated(true);
      GenerateInvoice(userinfo, bill, setMailSent, setPdf);
    }
    if (
      res.ok &&
      userinfo?.credit <
        userinfo.credit - finalData.template_data.creditRequired
    ) {
      setCreditNeeded(true);
    }
  };

  useEffect(() => {
    if (session?.user?.credit < finalData.template_data.creditRequired) {
      setCreditNeeded(true);
    }
  }, [session?.user?.credit]);

  return (
    <>
      <div className="bg-white prose-lg w-full py-14 px-7 lg:pl-14 lg:pr-28 border border-yellow-300 border-l-yellow-400 relative lg:shadow-2xl overflow-x-scroll">
        {creditNeeded ? (
          <Alert severity="warning" className="mb-10">
            You do not have enough credit to generate PDF! Please add credit.
          </Alert>
        ) : (
          ""
        )}

        <form
          id="BillForm"
          action={GenerateInvoice}
          onSubmit={(e) => {
            e.preventDefault();
            addNewBill(session?.user, finalData);
          }}
        >
          {children}
          <GenerateBtn
            finalData={finalData}
            session={session}
            creditNeeded={creditNeeded}
            isGenerated={isGenerated}
            GenerateInvoice={GenerateInvoice}
          />

          <p className="  text-sm  italic">
            Require {finalData.template_data.creditRequired} credit for this
            receipt.
          </p>
        </form>
      </div>
      {isGenerated && <SuccessModal pdf={pdf} />}
    </>
  );
}

export function GenerateInvoice(userinfo, bill, setMailSent, setPdf) {
  setTimeout(() => {
    const htmlElm = document.getElementById("doc");
    if (!htmlElm) {
      console.error("Element with id 'doc' not found");
      return;
    }

    const watermark = htmlElm.querySelector("#watermark");
    if (watermark) {
      watermark.remove();
    }

    const rect = htmlElm.getBoundingClientRect();
    const x = rect.width;
    const y = rect.height;

    html2canvas(htmlElm, { useCORS: true })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png", 1.0);
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "px",
          format: [x, y],
          compress: true,
        });
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        return pdf;
      })
      .then((pdf) => {
        if (pdf) {
          console.log(pdf);
          setPdf(pdf);
          sendMail(userinfo, bill, pdf, setMailSent);
        } else {
          console.error("Failed to create PDF");
        }
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  }, 1000);
}

export const sendMail = async function (userinfo, bill, pdf, setMailSent) {
  const pdfBase64 = pdf.output("datauristring").split(",")[1];
  try {
    const res = await fetch(checkEnvironment().concat("/api/email/sendbill"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userinfo?.email,
        subject: bill?.template_data?.tag + " Receipt",
        attachments: [
          {
            content: pdfBase64,
            ContentType: "application/pdf",
            filename: "receipt.pdf",
          },
        ],
      }),
    });

    if (res.ok) {
      setMailSent(true);
      toast.success("Bill generated", {
        description: "Bill successfully sent to your mailbox!",
      });
    } else {
      toast.error("Failed to send Bill to your mailbox!", {});
    }
  } catch (error) {
    console.error("Error sending email:", error);
    toast.error("Failed to send Bill to your mailbox!", {});
  }
};
