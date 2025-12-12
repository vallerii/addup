
export default function Footer() {
  return (
     <footer className=" px-2 sm:px-4 ">
        <div className="max-w-[1728px] mx-auto space-y-14 bg-neutral-1000  px-8 sm:px-16 ">
          {/* Footer Links */}
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Logo & Language */}
            <div className="space-y-8">
              <svg width="104" height="21" viewBox="0 0 104 21" fill="none">
                <path d="M39.7794 4.68652C36.3577 4.68652 33.5847 7.42761 33.5847 10.809C33.5847 14.1904 36.3584 16.9314 39.7794 16.9314C41.0921 16.9314 42.31 16.5286 43.3114 15.8387V16.9314H45.9728V10.809C45.9728 7.42761 43.1991 4.68652 39.7781 4.68652H39.7794ZM39.7794 14.2975C37.8294 14.2975 36.2475 12.7345 36.2475 10.807C36.2475 8.87951 37.8294 7.31648 39.7794 7.31648C41.7294 7.31648 43.3114 8.87951 43.3114 10.807C43.3114 12.7345 41.7294 14.2975 39.7794 14.2975Z" fill="#EFEFF2"/>
                <path d="M59.6897 10.1594V0.872559H57.0282V5.77926C56.0268 5.09134 54.809 4.68521 53.4963 4.68521C50.0746 4.68521 47.3009 7.42629 47.3009 10.8077C47.3009 14.189 50.0746 16.9301 53.4963 16.9301C54.809 16.9301 56.0268 16.5273 57.0282 15.8374V16.9301H59.6897V10.8077C59.6897 10.5881 59.6777 10.3731 59.6549 10.1601H59.6897V10.1594ZM53.495 14.2975C51.545 14.2975 49.963 12.7345 49.963 10.807C49.963 8.87952 51.5443 7.31649 53.495 7.31649C55.4456 7.31649 57.0269 8.87952 57.0269 10.807C57.0269 12.7345 55.445 14.2975 53.495 14.2975Z" fill="#EFEFF2"/>
                <path d="M73.3749 0.872559H70.7642V5.79447C69.7581 5.0973 68.5343 4.68653 67.2115 4.68653C63.7898 4.68653 61.0168 7.42761 61.0168 10.809C61.0168 14.1904 63.7905 16.9315 67.2115 16.9315C68.5242 16.9315 69.7421 16.5286 70.7435 15.8387V16.9315H73.4049V10.809C73.4049 10.5986 73.3942 10.3923 73.3729 10.1879V0.872559H73.3742H73.3749ZM67.2115 14.2975C65.2615 14.2975 63.6796 12.7345 63.6796 10.807C63.6796 8.87952 65.2609 7.31649 67.2115 7.31649C69.1622 7.31649 70.7435 8.87952 70.7435 10.807C70.7435 12.7345 69.1616 14.2975 67.2115 14.2975Z" fill="#EFEFF2"/>
                <path d="M94.6428 4.65123C93.3301 4.65123 92.1123 5.05604 91.1109 5.74396V4.65123H88.4494V19.9184H91.1109V15.8008C92.1123 16.4894 93.3301 16.8948 94.6428 16.8948C98.0645 16.8948 100.838 14.1537 100.838 10.7724C100.838 7.39099 98.0638 4.6499 94.6428 4.6499V4.65123ZM94.6428 14.2622C92.6928 14.2622 91.1109 12.6992 91.1109 10.7717C91.1109 8.84421 92.6921 7.28119 94.6428 7.28119C96.5935 7.28119 98.1747 8.84421 98.1747 10.7717C98.1747 12.6992 96.5928 14.2622 94.6428 14.2622Z" fill="#EFEFF2"/>
                <path d="M84.4543 10.7724C84.4543 12.6999 82.8724 14.2629 80.9224 14.2629C78.9724 14.2629 77.3905 12.6999 77.3905 10.7724V4.6499H74.729V10.7724C74.729 14.1537 77.5027 16.8948 80.9238 16.8948C84.3448 16.8948 87.1185 14.1537 87.1185 10.7724V4.6499H84.457V10.7724H84.4537H84.4543Z" fill="#EFEFF2"/>
                <path d="M27.6475 8.43052C27.8894 8.31186 27.7489 7.95031 27.4886 8.02175L20.6227 9.90629L15.9615 1.29932C15.5283 0.499452 14.6839 0 13.7649 0C12.8753 0 12.0533 0.468188 11.6083 1.22829L2.87889 16.1392C2.38102 16.9896 2.52439 18.0641 3.22839 18.7583C3.89604 19.4167 4.91514 19.5809 5.76037 19.1663L27.6475 8.43052ZM8.58731 14.0887C8.32778 14.1749 8.09832 13.8981 8.2353 13.6642L13.5218 4.63412C13.6392 4.43365 13.9346 4.44019 14.0428 4.64565L17.2223 10.6869C17.3483 10.9264 17.2281 11.2204 16.9689 11.3065L8.58731 14.0887Z" fill="#EFEFF2"/>
                <path d="M12.9232 19.2979C12.7103 19.3998 12.7839 19.7157 13.0205 19.7157L22.0071 19.7157C23.3551 19.7157 24.2154 18.2964 23.5779 17.1244L22.6525 15.4232C22.4641 15.0769 22.0324 14.9388 21.6739 15.1104L12.9232 19.2979Z" fill="#EFEFF2"/>
              </svg>
              
              <div className="flex items-center gap-3 px-4 py-2 border border-neutral-700 rounded-full w-fit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M0.5 10C0.5 13.8661 3.6339 17 7.5 17C11.3661 17 14.5 13.8661 14.5 10C14.5 6.1339 11.3661 3 7.5 3C3.6339 3 0.5 6.1339 0.5 10Z" stroke="#8C8C8C"/>
                  <path d="M8.1965 3.03662C8.1965 3.03662 10.2965 5.80162 10.2965 10.0016C10.2965 14.2016 8.1965 16.9666 8.1965 16.9666M6.7965 16.9666C6.7965 16.9666 4.6965 14.2016 4.6965 10.0016C4.6965 5.80162 6.7965 3.03662 6.7965 3.03662M0.9375 12.4516H14.0555M0.9375 7.55162H14.0555" stroke="#8C8C8C"/>
                </svg>
                <span className="text-white text-sm font-medium">English</span>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M0.5 3.29297C0.498694 3.22284 0.511341 3.15313 0.537109 3.08789C0.562926 3.02256 0.601404 2.96245 0.650391 2.91211C0.699237 2.86196 0.757909 2.82247 0.822266 2.79492C0.886718 2.76739 0.956285 2.7526 1.02637 2.75195C1.09649 2.75137 1.16649 2.76459 1.23145 2.79102C1.29572 2.81722 1.35388 2.85658 1.40332 2.90527L4.50195 5.91992L7.59863 2.90625L7.67969 2.83984C7.70882 2.82056 7.73996 2.80427 7.77246 2.79102C7.83751 2.7645 7.9073 2.75137 7.97754 2.75195C8.04776 2.75254 8.11706 2.76734 8.18164 2.79492C8.24605 2.82244 8.30462 2.86196 8.35352 2.91211C8.40249 2.96244 8.44098 3.02259 8.4668 3.08789C8.49259 3.15315 8.50521 3.22281 8.50391 3.29297C8.50257 3.3632 8.48727 3.43277 8.45898 3.49707C8.43072 3.56124 8.3906 3.6196 8.33984 3.66797L8.33887 3.66797L4.87305 7.04102C4.77387 7.13751 4.64032 7.19141 4.50195 7.19141C4.36371 7.19135 4.23095 7.13739 4.13184 7.04102L0.663086 3.66602C0.613079 3.61794 0.572869 3.56058 0.544922 3.49707C0.516638 3.43277 0.501337 3.3632 0.5 3.29297Z" fill="#898989" stroke="#898989" strokeWidth="0.5"/>
                </svg>
              </div>
            </div>

            {/* Footer Navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-15">
              <FooterColumn title="Products" links={["Demo Spot", "Demo Futures"]} />
              <FooterColumn title="Trust" links={["Security", "Proof of Reserves"]} />
              <FooterColumn title="Support" links={["Support Hub", "FAQ"]} />
              <FooterColumn title="Apps" links={["App Store", "Play Market"]} />
            </div>
          </div>

          <div className="h-px bg-neutral-700"></div>

          {/* Legal & Copyright */}
          <div className="space-y-10">
            <p className="text-xs text-neutral-500 font-medium leading-relaxed">
              {`ADDUP EXCHANGE EL SALVADOR, S.A. DE C.V., a Company incorporated in El Salvador under the registration number 2024117852, having its registered office at AVENIDA REVOLUCION #12 APTO. PISO 6, COLONIA SAN BENITO, PRESIDENTE PLAZA, Distrito SAN SALVADOR, Municipio de SAN SALVADOR CENTRO, Departamento de SAN SALVADOR ("Company") is a Salvadorian future Digital Assets Service Provider ("DASP") that will serve as a platform for crypto-asset trading, crypto-asset secure storage, crypto-to-fiat and fiat-to-crypto exchanges and other related services. In view of the Company's plans to engage in regulated activities in El Salvador, the Company has already applied for the DASP license with intentions to be licensed as Digital Assets Service Provider ("DASP"). Once the license is obtained, it will be published on this website, and the company will begin its work.`}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 font-medium">
              <span className="hover:text-neutral-300 cursor-pointer transition-colors">Terms & Conditions</span>
              <span className="hover:text-neutral-300 cursor-pointer transition-colors">Privacy Policy</span>
              <div className="w-px h-3.5 bg-neutral-700"></div>
              <span className="hover:text-neutral-300 cursor-pointer transition-colors">Complaints Policy</span>
              <div className="w-px h-3.5 bg-neutral-700"></div>
              <span className="hover:text-neutral-300 cursor-pointer transition-colors">Risk disclosure/ Risk Warning</span>
              <div className="w-px h-3.5 bg-neutral-700"></div>
              <span className="hover:text-neutral-300 cursor-pointer transition-colors">Website Disclaimer</span>
              <div className="w-px h-3.5 bg-neutral-700"></div>
              <span className="hover:text-neutral-300 cursor-pointer transition-colors">Cost and charges</span>
              <div className="w-px h-3.5 bg-neutral-700"></div>
              <span className="hover:text-neutral-300 cursor-pointer transition-colors">Cookie Policy</span>
            </div>

            <p className="text-xs text-neutral-500 font-medium">© AddUp 2025</p>
          </div>
        </div>
      </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="space-y-2">
      <h4 className="text-base font-medium text-white tracking-tight mb-2">{title}</h4>
      <div className="space-y-2">
        {links.map((link, i) => (
          <div key={i} className="text-sm font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer">
            {link}
          </div>
        ))}
      </div>
    </div>
  );
}