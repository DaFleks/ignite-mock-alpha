"use client";

import { FlagIcon, HeartIcon, TriangleAlertIcon } from "lucide-react";
import { Button } from "./ui/button";

const GraphButtons = () => {
  return (
    <div className="w-fit ml-auto">
      <Button variant="ghost">
        <HeartIcon />
      </Button>
      <Button variant="ghost">
        <FlagIcon />
      </Button>
      <Button variant="ghost">
        <TriangleAlertIcon />
      </Button>
    </div>
  );
};
export default GraphButtons;
