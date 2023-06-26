import { SignOutButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

function AppBar() {
  return (
    <div className="font-[inter]">
      <SignedIn>
        <SignInButton>
          <Link
            href={"/sign-in"}
            className="p-1 bg-slate-700 text-white rounded-md mr-1 "
          >
            Sign In
          </Link>{" "}
          <Link href={"/sign-up"}>Sign up</Link>
        </SignInButton>
      </SignedIn>

      <SignOutButton>
        <Link href={"/"}>sign out</Link>
      </SignOutButton>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default AppBar;
