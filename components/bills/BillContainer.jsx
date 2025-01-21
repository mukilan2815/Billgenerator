import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
// import IconBill from "../icons/IconBill";
export default function BillContainer({ children }) {
  return (
    <>
      <div className=" max-w-7xl  m-auto pt-16 pb-20 relative  rounded-xl px-5 sm:px-10  xl:px-0 ">
        {children}
      </div>
    </>
  );
}
