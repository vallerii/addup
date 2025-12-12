import LightningIcon from "@/components/LightningIcon";

export default function CompanyInfoSection() {
  return (
    <section className=" mb-[8px] px-2 sm:px-4">
      <div className="max-w-[1728px] mx-auto">
        <div className="bg-white rounded-[30px] py-16 lg:py-24">
          <div className="flex flex-col items-center gap-12 lg:gap-14 max-w-[626px] mx-auto">
            <svg width="76" height="64" viewBox="0 0 76 64" fill="none" className="w-16 lg:w-20">
              <g clipPath="url(#clip0_company)">
                <path d="M74.8222 32.0185C75.5051 31.6822 75.1084 30.6576 74.3735 30.8601L54.99 36.2008L41.8304 11.8091C40.6075 9.54237 38.2237 8.12695 35.629 8.12695C33.1176 8.12695 30.7968 9.45377 29.5406 11.6078L4.89578 53.8645C3.49021 56.2745 3.89498 59.3194 5.88249 61.2868C7.76738 63.1527 10.6445 63.6181 13.0308 62.4432L74.8222 32.0185ZM21.0117 48.0536C20.279 48.2977 19.6312 47.5134 20.0179 46.8504L34.9427 21.2598C35.274 20.6916 36.1082 20.7102 36.4135 21.2925L45.3899 38.413C45.7457 39.0917 45.4062 39.9249 44.6744 40.1688L21.0117 48.0536Z" fill="#232323"/>
                <path d="M33.2529 62.8161C32.6518 63.1048 32.8594 64 33.5274 64L58.8984 63.9999C62.7038 63.9999 65.1327 59.9779 63.3329 56.6566L60.7204 51.8354C60.1885 50.8538 58.9696 50.4626 57.9576 50.9488L33.2529 62.8161Z" fill="#232323"/>
              </g>
              <defs>
                <clipPath id="clip0_company">
                  <rect width="75.1746" height="64" fill="white"/>
                </clipPath>
              </defs>
            </svg>

            <p className="text-lg lg:text-[22px] text-neutral-900 font-medium text-center leading-relaxed tracking-tight">
              AddUp Exchange is an innovative platform that offers its clients a completely new way to interact with cryptocurrency
              <br /><br />
              We offer a unique unified trading gateway that provides safe and seamless access to AddUp Exchange as well as to multiple crypto exchanges, allowing our clients to trade from a single platform
            </p>

            <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary-400 text-white text-sm font-medium hover:bg-primary-700 transition-colors">
              <LightningIcon className="w-3 h-3" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

