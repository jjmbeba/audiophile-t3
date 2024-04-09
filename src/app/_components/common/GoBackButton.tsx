"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "~/components/ui/button";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <Button
      className="mb-[1.9375rem] text-[#7d7d7d] capitalize"
      variant={"link"}
      onClick={() => router.back()}
    >
      Go Back
    </Button>
  );
};

export default GoBackButton;
