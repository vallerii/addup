import Badge from "@/components/Badge";
import Image from "next/image";

export default function SwapSection() {
  return (
    <section className=" px-2 sm:px-4">
      <div className="max-w-[1728px] mx-auto">
        <div className="bg-white rounded-[30px] p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/Swap.png"
                alt="Crypto Trading App"
                className="w-full h-full object-cover rounded-[30px]"
                width={844}
                height={841}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-12 lg:gap-20 max-w-[548px]">
              <div className="space-y-8 lg:space-y-10">
                <Badge>Features</Badge>
                
                <div className="space-y-6">
                  <h2 className="text-4xl sm:text-5xl lg:text-[74px] font-extrabold leading-none tracking-tight text-neutral-900">
                    Swap at the best price
                  </h2>
                  <p className="text-sm lg:text-base text-neutral-500 font-medium max-w-[386px]">
                    Exchange any asset in seconds with transparent rates and zero complexity
                  </p>
                </div>

                {/* Feature Tabs */}
                <div className="flex flex-wrap items-center gap-2">
                  <button className="px-4 py-2 rounded-full bg-primary-400 text-white text-sm font-medium">
                    Swap
                  </button>
                  <button className="px-4 py-2 rounded-full border border-primary-400 text-primary-400 text-sm font-medium hover:bg-primary-400 hover:text-white transition-colors">
                    Terminal
                  </button>
                  <button className="px-4 py-2 rounded-full border border-primary-400 text-primary-400 text-sm font-medium hover:bg-primary-400 hover:text-white transition-colors">
                    Analytics
                  </button>
                </div>
              </div>

              <p className="text-xs text-neutral-500 font-medium max-w-[348px]">
                Smart routing automatically finds the best price so you always get maximum value
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}