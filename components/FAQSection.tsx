import { FAQItem } from "./ui/FAQItem";

export default function FAQSection() {
  return (
    <section className=" px-2 sm:px-4">
      <div className="max-w-[1728px] mx-auto">
        <div className="bg-white rounded-[30px] p-8 lg:p-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl lg:text-[74px] font-extrabold leading-none tracking-tight text-neutral-900 max-w-[372px]">
                  Any questions?
                </h2>
                <p className="text-sm lg:text-base text-neutral-500 opacity-60 font-medium max-w-[384px]">
                  Find quick answers to common trading, deposits, security, and platform questions to help you start confidently and easily
                </p>
              </div>
              <button className="px-4 py-3 rounded-full bg-primary-400 text-white text-sm font-medium hover:bg-primary-700 transition-colors">
                Open Web App
              </button>
            </div>

            {/* FAQ List */}
            <div className="space-y-2">
              <FAQItem question="What's the difference between Spot and Futures?" />
              <div className="h-px bg-neutral-300"></div>
              <FAQItem question="Is demo data live?" answer="Yes, it mirrors real markets for realistic experience" expanded />
              <div className="h-px bg-neutral-300"></div>
              <FAQItem question="Can I customize workspace?" />
              <div className="h-px bg-neutral-300"></div>
              <FAQItem question="Is my data secure?" />
              <div className="h-px bg-neutral-300"></div>
              <FAQItem question="How to deposit funds?" />
              <div className="h-px bg-neutral-300"></div>
              <FAQItem question="Can I trade from phone and desktop?" />
              <div className="h-px bg-neutral-300"></div>
              <FAQItem question="What is Proof of Reserves?" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}