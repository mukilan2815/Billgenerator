"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MdFeedback } from "react-icons/md";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { checkEnvironment } from "@/lib/checkenvironment";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { LuSend } from "react-icons/lu";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function FeedbackModal({ userEmail }) {
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState(userEmail);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  async function PostFeedback(email, data) {
    if (data?.length > 50) {
      setIsSending(true);
      const res = await fetch(
        checkEnvironment().concat(`/api/data/feedback/addfeedback`),

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            message: data,
            platform: "billgenerator",
            date: new Date(),
          }),
        }
      );
      if (res.ok) {
        setIsSending(false);
        setIsSuccess(true);
      }
    } else {
      setIsSending(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    if (isError) {
      toast.error("Error", {
        description: "Please enter your message atleast 50 charecters.",
      });
    }
    if (isSuccess) {
      toast.success("Message sent", {
        description: "Thank you for giving feedback!",
      });
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    if (message) {
      setIsError(false);
    }
  }, [message]);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={"default"}
          className=" h-8  rounded-3xl  text-xs font-medium flex items-center justify-center"
        >
          <span className=" sm:hidden">
            <MdFeedback size={22} />
          </span>
          <span className=" hidden sm:flex items-center">Report Issue</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className=" text-center">
            Report issue
          </AlertDialogTitle>
          <AlertDialogDescription className=" text-center">
            If you are facing any issue using the website, please provide
            information so that we can fix it to improve the experience.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Input
          disabled={isSuccess}
          placeholder="Type your email id."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          disabled={isSuccess}
          placeholder="Type your message here."
          onChange={(e) => setMessage(e.target.value)}
        />
        {isError && (
          <p className=" text-xs my-1 text-zinc-700">
            Please enter your message atleast 50 charecters.
          </p>
        )}{" "}
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <Button
            disabled={isSuccess}
            onClick={() => PostFeedback(email, message)}
            className=" min-w-[112px]"
          >
            {isSending ? (
              <LuSend className="mr-2 h-4 w-4 animate-ping" />
            ) : isSuccess ? (
              <IoCheckmarkDoneOutline className="mr-2 h-4 w-4" />
            ) : (
              <LuSend className="mr-2 h-4 w-4" />
            )}
            {isSending ? "Sending" : isSuccess ? "Sent" : "Send"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
