"use client";
import React from "react";
import { useState, useEffect } from "react";
import { checkEnvironment } from "@/lib/checkenvironment";
import { redirect } from "next/navigation";
import UserData from "./userdata";
import Loading from "@/components/ui/loading";
export default function DashSession({ session }) {
  const [user, setUser] = useState(null);
  const fetchUserData = async function (userid) {
    const response = await fetch(
      checkEnvironment().concat(`/api/user/getuser?id=${userid}`),
      { cache: "no-store" }
    );
    setUser(await response.json());
    // return await response.json();
  };

  useEffect(() => {
    // console.log(session);
    const userdata = fetchUserData(session?.user.id);
  }, [session?.[user]]);
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <div>
      {!user ? <Loading /> : <UserData session={session} user={user} />}
    </div>
  );
}
