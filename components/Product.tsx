"use client";

import Image from "next/image";
import toaster from "@/public/img/toaster.jpg";

const Product = () => {
  return (
    <div className="bg-white border p-4 rounded flex items-center gap-8">
      <div className="relative w-[75px] aspect-[1/1]">
        <Image src={toaster.src} alt="" fill style={{ objectFit: "contain" }} />
      </div>
      <div>
        <p className="text-xl font-semibold">Cuisinart Compact 2-Slice Toaster</p>
        <p>
          <b>SKU:</b> CPT-122
        </p>
      </div>
    </div>
  );
};
export default Product;
