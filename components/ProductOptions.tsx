"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";

const ProductOptions = () => {
  return (
    <div className="flex items-center gap-2">
      <Button className="w-28" variant="outline">
        Catalog
      </Button>
      <Button className="w-28" variant="outline">
        Log
      </Button>
      <Button variant="outline">
        <ChevronLeftIcon />
      </Button>
      <Button variant="outline">
        <ChevronRightIcon />
      </Button>
    </div>
  );
};
export default ProductOptions;
