"use client";

import { FlameIcon } from "lucide-react";

import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="h-[75px] shadow fixed w-full bg-white">
        <div className="h-full w-2/3 mx-auto flex items-center p-4">
          <Link href="#" className="flex items-center gap-2 font-semibold text-2xl">
            <FlameIcon className="space-x-4" />
            Ignite
          </Link>

          <div className="ml-8 flex items-center gap-8 w-full">
            <Button variant="link">Dashboard</Button>
            <Button variant="link">Setup</Button>
            <Button variant="link">Report</Button>
            <Button variant="link">Collaborate</Button>
            <Button variant="link">Help</Button>
          </div>
        </div>
      </nav>
      <nav className="h-[75px]"></nav>
    </>
  );
};

export default Navbar;
