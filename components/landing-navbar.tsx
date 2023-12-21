"use client";

import { Poppins } from "next/font/google";

import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Poppins({ weight: "600", subsets: ["latin"] });


export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/home" className="flex items-center">
      <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-white", font.className)}>
            Joi.ai
          </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={"/home"}>
          <Button variant="outline" className="rounded-full bg-white text-black">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  )
}