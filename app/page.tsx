// import Image from "next/image";
import Download from "@/components/download";

export default function Home() {
  return (
    <div>
      {/* mobile */}
      <div className="py-4 md:hidden">
        <h1 className="text-white uppercase font-[900] text-xl text-center">
          Download the panalobet app onto your phone today
        </h1>
        <p className="mt-2 text-[#ffcc00] text-md italic text-center font-bold uppercase">
          download now and enjoy
        </p>
      </div>
      {/* web */}
      <div className="hidden md:block">
        <h1 className="text-white uppercase font-[900] text-xl text-center">
          Download our panalobet mobile app today
        </h1>
        <p className="mt-2 text-[#ffcc00] text-md italic text-center font-bold uppercase">
          experiece the thrill with panalobet
        </p>
      </div>
      <Download />
      <div className="hidden max-w-[1230px] mx-auto mt-10 md:bg-[#22286b] md:py-10 md:px-5 md:block">
        <div>{/* <Image src="/"/> */}</div>
      </div>
    </div>
  );
}
