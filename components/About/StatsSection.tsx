
export default function StatsSection() {
  return (
    <section className=" px-2 sm:px-4">
      <div className="max-w-[1728px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-2">
          <StatCard 
            number="3,5k"
            title="Dolore magna aliqua"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
          />
          <StatCard 
            number="60+"
            title="Dolore magna aliqua"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
          />
          <StatCard 
            number="1,2k"
            title="Dolore magna aliqua"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
          />
        </div>
      </div>
    </section>
 );
}

function StatCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex flex-col gap-8 bg-white rounded-[30px] p-[70px]">
      <div className="space-y-3">
        <h3 className="text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tight">
          {number}
        </h3>
        <h4 className="text-sm font-medium text-neutral-900">
          {title}
        </h4>
      </div>
      <p className="text-sm font-medium text-neutral-900 max-w-[418px]">
        {description}
      </p>
    </div>
  );
}


