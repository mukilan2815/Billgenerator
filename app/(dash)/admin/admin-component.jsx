"use client";
import { useState, useEffect } from "react";
import UserDashboard from "./usersData";
import { DollarSign } from "lucide-react";
import BillsbyTag from "./billsbytag";
import PaymentDashboard from "./paymentsData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export const dynamic = "force-dynamic";
export default function AdminDashboard({ session }) {
  const [users, setUsers] = useState([]);
  const [bills, setBills] = useState({});
  const [summary, setSummary] = useState({
    totalUsers: 0,
    totalPayments: 0,
    totalBills: 0,
  });
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetchAllUsers();
    fetchSummary();
    fetchAllPayments();
    fetchAllBills();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await fetch(`/api/stats/getall/users`, {
        cache: "no-store",
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching all users:", error);
    }
  };

  const fetchAllBills = async () => {
    try {
      const response = await fetch(`/api/stats/getall/bills`, {
        cache: "no-store",
      });
      const data = await response.json();
      // Process bills to count by tag
      const summary = data.reduce((acc, bill) => {
        const tag = bill.data.template_data.tag;
        if (!acc[tag]) {
          acc[tag] = 0;
        }
        acc[tag]++;
        return acc;
      }, {});

      setBills(summary);
    } catch (error) {
      console.error("Error fetching all bills:", error);
    }
  };

  const fetchAllPayments = async () => {
    try {
      const response = await fetch(`/api/stats/getall/payments`, {
        cache: "no-store",
      });
      const data = await response.json();
      setPayments(data);
    } catch (error) {
      console.error("Error fetching all payments:", error);
    }
  };

  const fetchSummary = async () => {
    try {
      const response = await fetch(`/api/stats/getall`, {
        cache: "no-store",
      });
      const data = await response.json();
      setSummary(data);
    } catch (error) {
      console.error("Error fetching summary data:", error);
    }
  };

  return (
    <div className="container m-auto mx-auto p-4 mt-7">
      <div className="grid lg:grid-cols-8 gap-7">
        <div className="col-span-6 space-y-7">
          <div className="space-y-10">
            <UserDashboard users={users} />
            <PaymentDashboard payments={payments} />
          </div>
        </div>
        <div className="col-span-2 flex flex-col space-y-4">
          <div className="grid grid-cols-3 gap-2">
            <TopCard title={"Users"} data={summary.totalUsers} />
            <TopCard title={"Payments"} data={summary.totalPayments} />
            <TopCard title={"Bills"} data={summary.totalBills} />
          </div>
          <BillsbyTag billSummary={bills} />
        </div>
      </div>
    </div>
  );
}

export function TopCard({ title, data }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xl font-bold">{data}</div>
        {/* <p className="text-xs text-muted-foreground">+20.1% from last month</p> */}
      </CardContent>
    </Card>
  );
}
