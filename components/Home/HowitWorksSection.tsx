import Badge from "@/components/Badge";

export default function HowitWorksSection() {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-8">
      <div className="max-w-[1728px] mx-auto">
        <div className="bg-white rounded-[30px] p-8 lg:p-20">
          <div className="max-w-[879px] mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16 space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-[74px] font-extrabold leading-none tracking-tight text-neutral-900">
                How it works?
              </h2>
              <p className="text-sm lg:text-base text-neutral-500 font-medium max-w-[573px] mx-auto">
                Start trading in El Salvador with a simple, beginner-friendly flow designed for new users. Follow these three steps to get started safely and fast
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {/* Step 1 */}
              <div className="bg-white rounded-3xl p-5 flex flex-col justify-between min-h-[324px] border border-neutral-200">
                <div className="space-y-4">
                  <div className="w-12 h-10 rounded-full bg-primary-400 flex items-center justify-center">
                    <span className="text-sm font-medium text-white">01</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-neutral-900 tracking-tight">Create Account</h3>
                    <p className="text-sm font-medium text-neutral-700">
                      Sign up in minutes with email verification. Complete KYC for full access to all features and higher limits
                    </p>
                  </div>
                </div>
                <Badge size="sm">5 minutes</Badge>
              </div>

              {/* Step 2 - Highlighted */}
              <div className="bg-white rounded-3xl p-6 flex flex-col justify-between min-h-[382px] shadow-xl md:-mt-7 border border-neutral-200">
                <div className="space-y-5">
                  <div className="w-12 h-10 rounded-full bg-primary-400 flex items-center justify-center">
                    <span className="text-sm font-medium text-white">02</span>
                  </div>
                  <div className="space-y-5">
                    <h3 className="text-2xl font-semibold text-neutral-900 tracking-tight">Deposit USD</h3>
                    <p className="text-base font-medium text-neutral-700">
                      Fund your accoun using local bank transfer, debit card, or supported stablecoins. No conversion fees
                    </p>
                  </div>
                </div>
                <Badge size="lg">5 minutes</Badge>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-3xl p-5 flex flex-col justify-between min-h-[324px] border border-neutral-200">
                <div className="space-y-4">
                  <div className="w-12 h-10 rounded-full bg-primary-400 flex items-center justify-center">
                    <span className="text-sm font-medium text-white">03</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-neutral-900 tracking-tight">Trade Spot/Futures</h3>
                    <p className="text-sm font-medium text-neutral-700">
                      Access spot markets and perpetual futures with up to 100x leverage. Custom workspace included
                    </p>
                  </div>
                </div>
                <Badge size="sm">5 minutes</Badge>
              </div>
            </div>

            <p className="text-xs text-neutral-500 text-center font-medium max-w-[663px] mx-auto">
              {"You'll be ready to trade in minutes with secure onboarding and instant funding options. Our platform is built for both beginners and advanced traders, offering powerful tools, real-time charts, and responsive local support"}
            </p>
          </div>
        </div>
      </div>
    </section> 
  );
}