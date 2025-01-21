import React from "react";
// import "@/public/css/template.css";
import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });
export default function LTAReceipt1({ data }) {
  function formatDate(dateString) {
    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Split the input date string into day, month, and year
    if (dateString) {
      let parts = dateString.split("/");
      let day = parseInt(parts[0], 10);
      let month = parseInt(parts[1], 10) - 1; // JavaScript months are 0-based
      let year = parseInt(parts[2], 10);

      // Create a Date object
      let date = new Date(year, month, day);

      // Get the day, month, and year
      let dateDay = date.getDate();
      let dateMonth = date.getMonth();
      let dateYear = date.getFullYear();

      // Format the date as 21 June 2024
      let formattedDate =
        dateDay + " " + monthNames[dateMonth] + " " + dateYear;

      return formattedDate;
    }
  }
  function getPreviousDate(dateString) {
    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Split the input date string into day, month, and year
    if (dateString) {
      let parts = dateString.split("/");
      let day = parseInt(parts[0], 10);
      let month = parseInt(parts[1], 10) - 1; // JavaScript months are 0-based
      let year = parseInt(parts[2], 10);

      // Create a Date object
      let date = new Date(year, month, day);

      // Subtract one day
      date.setDate(date.getDate() - 1);

      // Get the previous day, month, and year
      let prevDay = date.getDate();
      let prevMonth = date.getMonth();
      let prevYear = date.getFullYear();

      // Format the date as 21 June 2024
      let prevDateString =
        prevDay + " " + monthNames[prevMonth] + " " + prevYear;

      return prevDateString;
    }
  }
  return (
    <div id="doc" className="  w-[600px]   ">
      <div
        data-v-7f5c160c=""
        className={`${nunito_sans}  mt-5 container p-2.5  `}
      >
        <p className="  bg-[yellow] inline text-center m-auto  font-bold   ">
          Congratulations! You have booked a reschedulable ticket. You can
          advance or postpone this journey till{" "}
          {getPreviousDate(data.reporting_date)} {data.departure_time}.
        </p>
        <div className=" grid grid-cols-2 border-b-2 border-[#A3A3A3] mt-5">
          <div className=" w-full relative px-[15px]">
            <div>
              <h4 className=" mt-10  ml-[50%] mb-2 text-2xl font-medium leading-[1.2]     ">
                eTICKET{" "}
              </h4>
            </div>
          </div>
          <div className=" w-full px-[15px] relative  mt-5">
            <div className="text-right">
              <h6 className=" mb-2 leading-[1.2] text-base font-bold">
                Need help with your trip?{" "}
              </h6>
              <h6 className=" mb-2 leading-[1.2] text-base font-bold">
                Boarding Point Ph. No.:
              </h6>{" "}
              <span>{data.boarding_point_number}</span>
              <h6 className=" mb-2 leading-[1.2] text-base font-bold">
                Travels-Customer Care:
              </h6>{" "}
              <span>{data.customer_care_number}</span>
              <h6>Write to us here </h6>
            </div>
          </div>
        </div>
        <table>
          <tbody>
            <tr className=" h-[60px] overflow-hidden mt-5 ">
              <td className="  border-b border-[#ffcc00] w-1/2">
                <div className=" text-[18px]">
                  <span className="  inline-block  mb-[7px] font-bold p-0">
                    <span></span>
                  </span>
                  <span className=" inline-block mx-2.5 ">To</span>
                  <span className=" inline-block mb-[7px] font-bold mr-[19px]">
                    <span></span>
                  </span>
                  <span>
                    <span>{formatDate(data.reporting_date)}</span>
                  </span>
                </div>
              </td>
              <td className="  border-b border-[#ffcc00] w-[15%] text-right">
                <p className=" text-sm font-semibold">
                  {" "}
                  Ticket no: <span>{data.ticket_number}</span>
                </p>
                <p className=" text-xs">
                  PNR no: <span>{data.pnr_number}</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className=" grid grid-cols-4  border-b  p-5 border-[#ccc]">
          <div className="  relative px-[15px]">
            <span className=" block  font-bold"></span>
            <span></span>
          </div>
          <div className="  relative px-[15px]">
            <span className=" block  font-bold">
              {formatDate(data.reporting_date)}
            </span>
            <span>Reporting Date</span>
          </div>
          <div className="  relative px-[15px]">
            <span className=" block  font-bold">{data.departure_time}</span>
            <span>Departure time</span>
          </div>
          <div className="  relative px-[15px]">
            <span className=" block  font-bold">{data.passenger_number}</span>
            <span>Number of Passengers</span>
          </div>
        </div>
        <div className=" grid grid-cols-4  border-b  p-5 border-[#ccc]">
          <div className="  relative px-[15px]">
            <span className=" block  font-bold">Boarding point details</span>
          </div>
          <div className="  relative px-[15px]">
            <span className=" block  font-bold">{data.boarding_location}</span>
            <span>Location</span>
          </div>
          <div className="  relative px-[15px]">
            <span className=" block  font-bold">{data.boarding_landmark}</span>
            <span>Landmark</span>
          </div>
          <div className="  relative px-[15px]">
            <span className=" block  font-bold">{data.boarding_address}</span>
            <span>Address</span>
          </div>
        </div>
        <div className=" grid grid-cols-4 border-b  p-5 border-[#ccc]">
          <div className="  relative px-[15px]">
            <span className=" block  font-bold">Dropping point details</span>
          </div>
          <div className="  relative px-[15px]">
            <span className=" block  font-bold">{data.dropping_time}</span>
            <span>Dropping point time</span>
          </div>
          <div className="  relative px-[15px]">
            <span className=" block  font-bold">
              {formatDate(data.dropping_date)}
            </span>
            <span>Dropping point Date</span>
          </div>
          <div className="  relative px-[15px]">
            <span className=" block  font-bold">Address</span>
            <span>{data.dropping_address}</span>
          </div>
        </div>
        <div className=" grid grid-cols-2  border-b  p-5 border-[#ccc]">
          <div className=" w-full px-[15px] relative">
            <span className=" block  font-bold">
              Passenger Details (Age, Gender)
            </span>
            <span>{data.passenger_names}</span>
          </div>
          <div className=" w-full px-[15px] relative">
            <span className=" block  font-bold">Seat Number</span>
            <span>{data.total_seat}</span>
          </div>
        </div>
        <div className=" flex flex-wrap">
          <div className=" w-full relative px-[15px]">
            <span>
              {" "}
              NOTE : This operator accepts mTicket, you need not carry a print
              out
            </span>
          </div>
        </div>
        <div className="   grid grid-cols-2">
          <div></div>
          <div className="offset-lg-6  w-full px-[15px] relative">
            <span className=" font-bold">Total Fare :</span>
            <span className="font_Size  font-bold">
              ₹{" "}
              {parseInt(data.amount) + parseInt((data.amount * data.tax) / 100)}
            </span>
            <span className=" block">
              ( % GST and service charge applicable, if any)
            </span>
            <span className=" block">
              Net amount : <b>₹ {data.amount}</b>
            </span>
            <span className=" block">
              Taxable amount :{" "}
              <b>₹ {((data.amount * data.tax) / 100).toFixed(0)}</b>
            </span>
          </div>
        </div>
        <div className=" flex flex-wrap  mt-4">
          <div className=" w-full relative ">
            <div className=" flex flex-wrap">
              <div className=" w-full relative px-[15px]">
                <p className=" h-[3px] bg-[#333] mt-2.5 w-full mb-4"></p>
              </div>
              <div className=" w-full px-[15px] relative">
                <h6 className=" mb-2 leading-[1.2] text-base text-center  font-bold">
                  Terms &amp; Conditions
                </h6>
              </div>
              <div className=" w-full relative px-[15px]">
                <p className=" h-[3px] bg-[#333] mt-2.5 w-full mb-4"></p>
              </div>
            </div>
            <div className=" grid grid-cols-2">
              <div className=" w-full px-[15px] relative  text-[8px]">
                <p className=" mb-4">
                  Please note the following regarding the luggage policy for
                  your journey
                </p>
                <p className=" mb-4">
                  Each passenger is allowed to carry one bag of upto 10 kgs and
                  one personal item such as a laptop bag, handbag, or briefcase
                  of upto 5 kgs.
                </p>
                <p className=" mb-4">
                  assengers should not carry any goods like weapons,
                  inflammable, firearms, ammunition, drugs, liquor, smuggled
                  goods etc and any other articles that are prohibited under law
                </p>
                <p className=" mb-4">
                  Travel Operator reserves the right to deny boarding or charge
                  additional amount in case passenger is travelling with extra
                  luggage than what is mentioned above
                </p>
                <p className=" mb-4">
                  Partial Cancellation is <b>NOT</b> allowed for this ticket.
                  Charges for complete ticket cancellation are mentioned
                </p>
              </div>
              <div className=" w-full px-[15px] relative  text-[8px]">
                <table className="table">
                  <thead>
                    <tr className=" space-x-5">
                      <th className=" text-left">Cancellation time</th>
                      <th className=" text-left">Cancellation charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" space-x-5">
                      <td>
                        {" "}
                        After {data.departure_time}{" "}
                        {getPreviousDate(data.reporting_date)}{" "}
                      </td>
                      <td> ₹ {data.amount} </td>
                    </tr>
                    <tr className=" space-x-5">
                      <td>
                        Before {data.departure_time}{" "}
                        {getPreviousDate(data.reporting_date)}{" "}
                      </td>
                      <td>
                        ₹ {(data.amount * 9) / 100} will be cut as cancellation
                        charges
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
