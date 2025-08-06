import Image from "next/image";
import Link from "next/link";
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
      <div className="hidden my-10 md:block">
        <h1 className="text-white uppercase font-[900] text-[38px]/10 text-center">
          Download our panalobet mobile app today
        </h1>
        <p className="mt-2 text-3xl text-[#ffcc00] text-md italic text-center font-bold uppercase">
          experience the thrill with panalobet
        </p>
      </div>
      <Download />
      <div className="hidden max-w-[1230px] mx-auto mt-10 md:px-5 md:block">
        <div className="flex items-center justify-center gap-10">
          <div className="">
            <Image
              src="/img/JOIN.png"
              width={300}
              height={300}
              alt="Join now"
              className=""
            />
          </div>
          <div className="w-[50%] text-white text-center">
            <p className="font-bold text-[26px] text-pretty mb-5">
              Join Millions of Players and enjoy endless array of games that we
              offer at your fingertips!
            </p>
            <p className="font-bold text-[26px] text-pretty">
              Exciting rewards everyday! Play for fun and win bing.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-[#ffcc00] text-center uppercase text-[36px]/10 font-[900] text-pretty">
            download panalobet mobile app now and start playing today!
          </h2>
          <div className="flex items-center justify-center mt-15 gap-10">
            <div className="flex flex-col items-center">
              <Image
                src="/img/QR_Android.png"
                width={300}
                height={300}
                alt="QR Android"
                className="mb-5"
              />
              <Link href="https://www.googggle-ph.com/2721742772/2721742772_home.html?rb=XRH4d6iP&tplhx=1">
                <Image
                  src="/img/android_button.png"
                  width={400}
                  height={130}
                  alt="Step 3"
                  // sizes="100vw"
                  // style={{ width: "100%", height: "auto" }}
                />
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/img/QR_IOS.png"
                width={300}
                height={300}
                alt="QR Android"
                className="mb-5"
              />
              <Link href="https://jk6.co/CPE6s7">
                <Image
                  src="/img/iosbutton.png"
                  width={400}
                  height={130}
                  alt="Step 3"
                  // sizes="100vw"
                  // style={{ width: "100%", height: "auto" }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center pb-10">
          <Image
            src="/img/webiste_lower.png"
            width={0}
            height={0}
            alt="Step 3"
            sizes="100vw"
            style={{ width: "85%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
