import Badge from "@/components/Badge";
import LightningIcon from "@/components/LightningIcon";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[92px] px-2 sm:px-4">
      <div className="max-w-[1728px] mx-auto">
        <div className="overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-[8px] ">
            {/* Left Content */}
            <div className="flex flex-col justify-center gap-12 lg:gap-16 bg-white rounded-[30px] p-8 lg:p-16">
              <div className="flex flex-col gap-12">
                <Badge>Trusted Licenses</Badge>
                
                <div className="flex flex-col gap-8 lg:gap-10">
                  <h1 className="text-5xl sm:text-6xl lg:text-[84px] font-extrabold leading-none tracking-tight text-neutral-900">
                    Your Trusted Crypto Broker
                  </h1>
                  <p className="text-base lg:text-lg text-neutral-500 font-medium max-w-[415px]">
                    Spot, Futures & instant USD transfers via Transfer365. Buy, sell & transfer digital assets
                  </p>
                </div>

                <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary-400 text-white text-sm font-medium hover:bg-primary-700 transition-colors w-fit">
                  <LightningIcon className="w-3 h-3" />
                  Open Demo Spot
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-3 px-4 py-2 border border-neutral-200 rounded-xl max-w-[145px]">
                  <svg width="16" className="min-w-[16px]" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 8.38095C7.375 8.38095 6.84375 8.15873 6.40625 7.71429C5.96875 7.26984 5.75 6.73016 5.75 6.09524C5.75 5.46032 5.96875 4.92064 6.40625 4.47619C6.84375 4.03175 7.375 3.80952 8 3.80952C8.625 3.80952 9.15625 4.03175 9.59375 4.47619C10.0312 4.92064 10.25 5.46032 10.25 6.09524C10.25 6.73016 10.0312 7.26984 9.59375 7.71429C9.15625 8.15873 8.625 8.38095 8 8.38095ZM3.5 16V10.1143C3.025 9.58095 2.65625 8.97143 2.39375 8.28571C2.13125 7.6 2 6.86984 2 6.09524C2 4.39365 2.58125 2.95238 3.74375 1.77143C4.90625 0.590476 6.325 0 8 0C9.675 0 11.0937 0.590476 12.2562 1.77143C13.4187 2.95238 14 4.39365 14 6.09524C14 6.86984 13.8688 7.6 13.6063 8.28571C13.3438 8.97143 12.975 9.58095 12.5 10.1143V16L8 14.4762L3.5 16ZM8 10.6667C9.25 10.6667 10.3125 10.2222 11.1875 9.33333C12.0625 8.44444 12.5 7.36508 12.5 6.09524C12.5 4.8254 12.0625 3.74603 11.1875 2.85714C10.3125 1.96825 9.25 1.52381 8 1.52381C6.75 1.52381 5.6875 1.96825 4.8125 2.85714C3.9375 3.74603 3.5 4.8254 3.5 6.09524C3.5 7.36508 3.9375 8.44444 4.8125 9.33333C5.6875 10.2222 6.75 10.6667 8 10.6667Z" fill="#2A2A2A"/>
                  </svg>
                  <span className="text-xs font-medium text-neutral-900">Board Support Package</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 border border-neutral-200 rounded-xl max-w-[156px]">
                  <svg width="16" className="min-w-[16px]" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 8.38095C7.375 8.38095 6.84375 8.15873 6.40625 7.71429C5.96875 7.26984 5.75 6.73016 5.75 6.09524C5.75 5.46032 5.96875 4.92064 6.40625 4.47619C6.84375 4.03175 7.375 3.80952 8 3.80952C8.625 3.80952 9.15625 4.03175 9.59375 4.47619C10.0312 4.92064 10.25 5.46032 10.25 6.09524C10.25 6.73016 10.0312 7.26984 9.59375 7.71429C9.15625 8.15873 8.625 8.38095 8 8.38095ZM3.5 16V10.1143C3.025 9.58095 2.65625 8.97143 2.39375 8.28571C2.13125 7.6 2 6.86984 2 6.09524C2 4.39365 2.58125 2.95238 3.74375 1.77143C4.90625 0.590476 6.325 0 8 0C9.675 0 11.0937 0.590476 12.2562 1.77143C13.4187 2.95238 14 4.39365 14 6.09524C14 6.86984 13.8688 7.6 13.6063 8.28571C13.3438 8.97143 12.975 9.58095 12.5 10.1143V16L8 14.4762L3.5 16ZM8 10.6667C9.25 10.6667 10.3125 10.2222 11.1875 9.33333C12.0625 8.44444 12.5 7.36508 12.5 6.09524C12.5 4.8254 12.0625 3.74603 11.1875 2.85714C10.3125 1.96825 9.25 1.52381 8 1.52381C6.75 1.52381 5.6875 1.96825 4.8125 2.85714C3.9375 3.74603 3.5 4.8254 3.5 6.09524C3.5 7.36508 3.9375 8.44444 4.8125 9.33333C5.6875 10.2222 6.75 10.6667 8 10.6667Z" fill="#2A2A2A"/>
                  </svg>
                  <span className="text-xs font-medium text-neutral-900">Digital Asset Service Provider</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex items-center justify-center lg:justify-end h-full">
              <div className="relative w-full  aspect-[4/5] h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-[30px]"></div>
                <Image
                  src="/Hero.png"
                  alt="Crypto Trading App" 
                  className="relative z-10 w-full h-full object-cover rounded-[30px]"
                  width={844}
                  height={841}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}