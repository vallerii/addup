import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="px-4 sm:px-8">
      <div className="max-w-[1728px] mx-auto">
        <div className="relative h-[400px] lg:h-[800px] rounded-[30px] overflow-hidden">
          <Image 
            src="/Mission.png" 
            alt="Mission background" 
            className="absolute inset-0 w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="max-w-[756px] text-center space-y-12">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-white">Mission</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-white leading-tight tracking-tight">
                Our mission is to build a trusted, reliable, and accessible trading environment that connects our clients to the global crypto ecosystem with ease and confidence.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

