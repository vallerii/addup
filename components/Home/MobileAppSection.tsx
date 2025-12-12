import Badge from "@/components/Badge";
import Image from "next/image";

export default function MobileAppSection() {
  return (
    <section className=" px-2 sm:px-4 mb-[-119px]">
      <div className="max-w-[1728px] mx-auto">
        <div className="bg-neutral-1000 rounded-t-[30px] p-8 lg:p-20">
          <div className="max-w-[804px] mx-auto text-center mb-12 lg:mb-20 space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-[74px] font-extrabold leading-none tracking-tight text-white">
              Unlock the future finance
            </h2>
            <p className="text-sm lg:text-base text-neutral-100 opacity-60 font-medium max-w-[772px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-xs text-neutral-400 opacity-60 font-medium max-w-[486px] mx-auto">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            </p>
          </div>

          {/* Mobile Mockups */}
          <div className="relative max-w-[1255px] mx-auto aspect-[1255/711]">

            <Image
              src="/screen.png"
              alt="Crypto Trading App"
              className="w-full h-full object-cover rounded-[30px]"
              quality={80}
              layout="fill"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}