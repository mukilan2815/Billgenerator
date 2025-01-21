// app/maintenance/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MaintenancePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">We'll be back soon!</h1>
      <p className="mt-4 text-xl">
      </p>
    </div>
  );
}
