import { LuFuel } from "react-icons/lu";
import { FaCarSide } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { TfiReceipt } from "react-icons/tfi";
import { SiYourtraveldottv } from "react-icons/si";
import { RiBillLine } from "react-icons/ri";
import { MdOutlineFastfood } from "react-icons/md";
import { MdOutlineMedicalServices } from "react-icons/md";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FaWifi } from "react-icons/fa6";
import { FaTaxi } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
export const AllBills = [
  {
    name: "Fuel Bill",
    link: "/tools/fuel-bill",
    description: "3 templates available",
    info: "If you have lost your fuel bill and now are willing to have a new one, use this easy Petrol Bill Generator and it will be done.",
    icon: LuFuel,
  },
  {
    name: "GST Invoice",
    link: "/tools/gst-invoice",
    description: "1 template available",
    info: "Generate accurate GST invoices effortlessly with our user-friendly generator. Save time, ensure compliance, and enhance efficiency in your billing process. Perfect for businesses of all sizes.",
    icon: LiaFileInvoiceDollarSolid,
  },
  {
    name: "Driver Salary",
    link: "/tools/driver-salary",
    description: "3 templates available",
    info: "To keep it easy to track and professional, using our Driver Salary tool for your monthly driver's salary invoice will do the work.",
    icon: FaCarSide,
  },
  {
    name: "General Bill",
    link: "/tools/general-bill",
    description: "1 template available",
    info: "If you're a business owner who sells their products online or offline, you can use this General Bill generator.",
    icon: RiBillLine,
  },
  {
    name: "Daily Helper Bill",
    link: "/tools/daily-helper",
    description: "3 templates available",
    info: "A suitable bill format for your daily helper service like maid, plumber, etc.",
    icon: GrUserWorker,
  },
  {
    name: "Rent Receipt",
    link: "/tools/rent-receipt",
    description: "1 template available",
    info: "You can use the rent receipt generator and create the rent bill easily for every month's rent.",
    icon: TfiReceipt,
  },
  {
    name: "LTA Receipt",
    link: "/tools/lta-receipt",
    description: "1 template available",
    info: "This LTA Receipt Online tool will be helpful for any employee willing to show the LTA Receipt for reimbursing all their expenses.",
    icon: SiYourtraveldottv,
  },
  {
    name: "Restaurant Bill",
    link: "/tools/restaurant-bill",
    description: "2 templates available",
    info: "Are you an owner of a cafe who cannot find a suitable restaurant bill format yet? Try out this restaurant bill generator online and make your life easy.",
    icon: MdOutlineFastfood,
  },
  {
    name: "Medical Bill",
    link: "/tools/medical-bill",
    description: "1 template available",
    info: "There is no need to track a record when you can easily create medical bills through this tool.",
    icon: MdOutlineMedicalServices,
  },
  {
    name: "Internet Bill",
    link: "/tools/wifi-bill",
    description: "2 templates available",
    info: "Generate detailed, customized WiFi bills effortlessly with our WiFi Bill Generator.",
    icon: FaWifi,
  },
  {
    name: "Cab Bill",
    link: "/tools/cab-bill",
    description: "2 templates available",
    info: "Generate cab bills easily, suitable for reimbursement or personal record-keeping.",
    icon: FaTaxi,
  },
  {
    name: "Gym Bill",
    link: "/tools/gym-bill",
    description: "1 template available",
    info: "Generate gym membership or fee receipts effortlessly using our Gym Bill Generator.",
    icon: GiWeightLiftingUp,
  },
];
