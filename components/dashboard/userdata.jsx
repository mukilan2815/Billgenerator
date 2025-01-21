import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiImageEditLine } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiPlusCircle } from "react-icons/fi";
import { TbReceipt } from "react-icons/tb";
import DashBills from "./DashBills";
import Moment from "react-moment";
import "moment-timezone";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { use } from "react";
export default function UserData({ session, user }) {
  return (
    <>
      <div className=" pb-0 border-b  pt-20 px-4 sm:px-0   ">
        <div className="max-w-7xl m-auto px-5 sm:px-10">
          <Profile session={session} user={user} />
        </div>
      </div>
      <div className=" bg-white">
        <div className="py-10 max-w-7xl m-auto px-5 sm:px-10">
          <div className=" grid sm:grid-cols-5 gap-7">
            <div className=" sm:col-span-3">
              <div className=" bg-gradient-to-r from-green-500 via-cyan-500  to-indigo-500  text-2xl  font-medium text-white  px-10 py-4 rounded-lg mb-4 space-y-2 ">
                <p>
                  🚀 Unlimited Bill & Invoice Generation for Life - Just at
                  <strong className=" ml-1  text-yellow-300 sm:text-xl">
                    ₹249
                  </strong>{" "}
                  <br /> Pay Once, Use Forever! 🕒
                </p>
                <div className="  text-right ">
                  <Link
                    href={"/payment"}
                    className=" whitespace-nowrap font-semibold bg-white rounded-full px-5 py-1 text-black "
                  >
                    Grab Now 🔥
                  </Link>
                </div>
              </div>
              <DataGrid session={session} user={user} />
              <div className=" mt-7">
                <DashBills user={user} />
                {/* <TaskHistory session={session} user={user} /> */}
              </div>
            </div>
            <div className=" sm:col-span-2 ">
              <PurcheseHistory session={session} user={user} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Profile({ session, user }) {
  function getFirstTwoCharacters(name) {
    if (name && name.length >= 2) {
      return name.slice(0, 2).toUpperCase();
    } else {
      return "Yo";
    }
  }
  return (
    <div className="py-6 flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-center">
      <div className=" ">
        <div className="flex  space-x-4">
          <Avatar>
            <AvatarImage src={user?.image} />
            <AvatarFallback>{getFirstTwoCharacters(user.name)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold flex items-center gap-1">
              {user?.name}
            </h4>
            <p className="text-sm">{user?.email}</p>
          </div>
        </div>
      </div>
      <div className=" flex gap-4">
        <Button asChild size="sm" variant={"outline"} className=" gap-1 w-full">
          <Link href="/tools" className=" flex items-center gap-3">
            New Bill
            <FiPlusCircle className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="sm" className=" gap-1 w-full">
          <Link href="/payment" className=" flex items-center gap-3">
            Add Credit
            <FiPlusCircle className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
export function DataGrid({ session, user }) {
  return (
    <>
      <div className="  grid sm:grid-cols-2 gap-7">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Available credits
            </CardTitle>
            <RiMoneyDollarCircleLine className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.credit}</div>
            <p className="text-xs text-muted-foreground">
              Generate upto {user.credit} bills
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Bill generated
            </CardTitle>
            <TbReceipt className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.bills.length}</div>
            <p className="text-xs text-muted-foreground">
              Total PDF bill generated
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export function PurcheseHistory({ session, user }) {
  const reverse_payments = [...user.payments].reverse();
  return (
    <Card className=" w-full">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Purchase history</CardTitle>
          <CardDescription>Credit purchase history details.</CardDescription>
        </div>
        {/* <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="#">
            View All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button> */}
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>

              <TableHead>Status</TableHead>
              <TableHead>Credits</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reverse_payments.map((payment, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>
                    <Moment format="DD-MM-YYYY" tz="Asia/Kolkata">
                      {payment.createdAt}
                    </Moment>
                  </TableCell>

                  <TableCell
                    className={
                      payment?.status ? " text-green-500" : "text-rose-500"
                    }
                  >
                    {payment?.status ? "Success" : "Failed"}
                  </TableCell>
                  <TableCell>{payment?.credit}</TableCell>
                  <TableCell className="text-right">
                    {payment?.amount !== 0 ? "₹" + payment?.amount : "Free"}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export const DataList = [
  {
    title: "Available credits",
    info: "102",
    description: "Proccess 102 images with these credits.",
    icon: RiMoneyDollarCircleLine,
  },
  {
    title: "Background removed",
    info: "06",
    description: "Total image proccessed.",
    icon: RiImageEditLine,
  },
];
