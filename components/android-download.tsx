import Link from "next/link";
import Image from "next/image";

export default function AndroidDownload() {
  return (
    <>
      <div>
        <h2 className="text-[#ffcc00] text-center text-xl uppercase font-[900] py-2">
          android download app
        </h2>
        <div className="px-4">
          <div className="mb-4">
            <h3 className="py-5 flex items-center gap-2">
              <span className="text-[#ffcc00] font-bold text-2xl">1</span>
              <span className="text-md">
                Copy and Paste the link on Google.
              </span>
            </h3>
            <div className="rounded-md">
              <Image
                src="/img/paste_google.png"
                width={0}
                height={0}
                sizes="100vw"
                alt="Step 1"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div>
            <h3 className="py-4 flex items-center gap-2 leading-5">
              <span className="text-[#ffcc00] font-bold text-2xl">2</span>
              <span className="text-md">
                You will find the Download App Page
              </span>
            </h3>
          </div>
          <div>
            <h3 className="pb-5 flex items-center gap-2 leading-5">
              <span className="text-[#ffcc00] font-bold text-2xl">3</span>
              <span className="text-md">Click Install.</span>
            </h3>
            <div className="rounded-md mb-2">
              <Image
                src="/img/install.png"
                width={0}
                height={0}
                sizes="100vw"
                alt="Step 2"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="rounded-md mt-8">
              <Image
                src="/img/play_button.png"
                width={0}
                height={0}
                sizes="100vw"
                alt="Step 3"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="py-5 mt-4">
            <Link href="https://www.googggle-ph.com/2721742772/2721742772_home.html?rb=XRH4d6iP&tplhx=1">
              <Image
                src="/img/android_button.png"
                width={0}
                height={0}
                sizes="100vw"
                alt="Step 3"
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
          </div>
          <div className="pb-10">
            <div className="mt-10 py-2 flex items-center justify-center border-y-1 border-gray-300/50">
              <p>Panalobet @ 2025 | All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
