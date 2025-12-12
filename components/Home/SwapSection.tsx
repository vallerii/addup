import Badge from "@/components/Badge";

export default function SwapSection() {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-8">
      <div className="max-w-[1728px] mx-auto">
        <div className="bg-white rounded-[30px] p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[478px] aspect-[478/685]">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-[42px]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[360px] h-[685px] bg-neutral-900 rounded-[40px] shadow-2xl"></div>
                </div>
              </div>
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