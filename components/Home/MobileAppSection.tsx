import Badge from "@/components/Badge";

export default function MobileAppSection() {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-8">
      <div className="max-w-[1728px] mx-auto">
        <div className="bg-neutral-1000 rounded-[30px] p-8 lg:p-20">
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
            <div className="absolute inset-0 flex items-center justify-center gap-4 lg:gap-8">
              {/* Left Phone */}
              <div className="w-[250px] lg:w-[358px] aspect-[358/748] bg-neutral-900 rounded-[40px] lg:rounded-[50px] shadow-2xl"></div>
              {/* Center Phone */}
              <div className="w-[290px] lg:w-[416px] aspect-[416/791] bg-neutral-900 rounded-[40px] lg:rounded-[50px] shadow-2xl -mt-8"></div>
              {/* Right Phone */}
              <div className="w-[240px] lg:w-[344px] aspect-[344/761] bg-neutral-900 rounded-[40px] lg:rounded-[50px] shadow-2xl"></div>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Badge variant="secondary">Coming Soon</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}