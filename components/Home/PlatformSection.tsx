import { FeatureCard } from "../ui/featureCard";

export default function PlatformSection() {
  return (
    <section className=" px-2 sm:px-4">
      <div className="max-w-[1728px] mx-auto">
        <div className="bg-neutral-1000 rounded-[30px] p-8 lg:p-20">
          <div className="max-w-[1320px] mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-20 space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl lg:text-[74px] font-extrabold leading-none tracking-tight text-white max-w-[676px] mx-auto">
                  Unlock the power of our platform
                </h2>
                <p className="text-sm lg:text-base text-neutral-300 opacity-60 font-medium max-w-[518px] mx-auto">
                  A professional trading terminal with seamless customization, advanced tools, and unified access to spot and futures markets
                </p>
              </div>
              <button className="px-4 py-3 rounded-full bg-primary-400 text-white text-sm font-medium hover:bg-primary-700 transition-colors">
                Open Demo Terminal
              </button>
            </div>

            {/* Terminal Preview */}
            <div className="relative aspect-[1320/786] bg-neutral-900 rounded-3xl mb-12 overflow-hidden">
              <video src="/powerofplatform.mp4" autoPlay loop muted className="w-full h-full object-cover" />
            </div>

            <p className="text-sm text-neutral-300 opacity-60 text-center font-medium max-w-[546px] mx-auto mb-20">
              Start trading instantly with a powerful, browser-based platform optimized for speed, precision, and uninterrupted market performance
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-2">
              <FeatureCard
                icon="license"
                title="Licensed & Regulated (BSP + DASP)"
                description="Fully compliant operations backed by regulated licensing, ensuring trust, transparency, and safe access to global crypto markets"
              />
              <FeatureCard 
                icon="security"
                title="Security & Proof of Reserves"
                description="Your assets are protected with industry-grade security, real-time reserve verification, and continuous monitoring of all balances"
              />
              <FeatureCard 
                icon="coins"
                title="Low Fees"
                description="Trade with some of the lowest fees in El Salvador, reducing your costs across every spot and futures order"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}