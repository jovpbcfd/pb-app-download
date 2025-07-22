"use client";

import { useState } from "react";
import Image from "next/image";
import AndroidDownload from "./android-download";

export default function Download() {
  const [selected, setSelected] = useState("android");
  return (
    <div className="text-white md:hidden">
      <div className="space-x-2 flex flex-row mx-2">
        <button
          type="button"
          className={`${
            selected === "android"
              ? "bg-[linear-gradient(135deg,#8EE4FF_0%,#3495FF_100%)] shadow-md"
              : "bg-[#0e2062]"
          } uppercase font-semibold rounded-md px-3 py-2 text-pretty text-wrap max-w-xs leading-6`}
          onClick={() => setSelected("android")}
        >
          android download
        </button>
        <button
          type="button"
          className={`${
            selected === "ios"
              ? "bg-[linear-gradient(135deg,#8EE4FF_0%,#3495FF_100%)] shadow-md"
              : "bg-[#0e2062]"
          } uppercase font-semibold rounded-md px-3 py-2 text-pretty text-wrap max-w-xs leading-6`}
          onClick={() => setSelected("ios")}
        >
          pb ios home screen
        </button>
      </div>
      <div>
        {selected === "android" && (
          <div className="pt-5 relative w-full h-auto">
            <AndroidDownload />
          </div>
        )}
        {selected === "ios" && (
          <div className="pt-5 relative w-full h-auto">
            <Image
              src="/img/ios.webp"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="Steps for andriod"
            />
          </div>
        )}
      </div>
    </div>
  );
}
