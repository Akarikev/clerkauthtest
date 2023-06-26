import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Test from "@/components/test";
import TestComponent from "@/components/TestComponent";

export default function Home() {
  return (
    <div className="font-[inter]">
      DASHBOARD
      <pre>
        <Test />
      </pre>
      <TestComponent />
    </div>
  );
}
