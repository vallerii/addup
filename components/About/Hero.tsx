import Badge from "@/components/Badge";
import LightningIcon from "@/components/LightningIcon";

export default function Hero() {
  return (
      <section className="px-2 sm:px-4 pt-[92px]">
        <div className="max-w-[1728px] mx-auto">
          <div className="bg-white rounded-[30px] py-20 lg:py-32">
            <div className="max-w-[724px] mx-auto">
              <div className="flex flex-col items-center gap-12 lg:gap-14">
                <Badge>About Us</Badge>
                
                <div className="flex flex-col items-center gap-8 lg:gap-10 w-full">
                  <h1 className="text-4xl sm:text-5xl lg:text-[74px] font-extrabold leading-none tracking-tight text-neutral-900 text-center">
                    Ut enim ad minim veniam, quis
                  </h1>
                  <p className="text-sm lg:text-base text-neutral-900 font-medium text-center max-w-[688px]">
                    AddUp Exchange (El Salvador) is an innovative platform that offers its clients a completely new way to interact with cryptocurrency. We offer a unique unified trading gateway that provides safe and seamless access to AddUp Exchange as well as to multiple crypto exchanges, allowing our clients to trade from a single platform.
                  </p>
                  
                  <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary-400 text-white text-sm font-medium hover:bg-primary-700 transition-colors">
                    <LightningIcon className="w-3 h-3" />
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}
