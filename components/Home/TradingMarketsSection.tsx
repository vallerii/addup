import LightningIcon from "@/components/LightningIcon";
import clsx from "clsx";

export default function TradingMarketsSection() {
  return (
    <section className="px-2 sm:px-4">
      <div className="max-w-[1728px] mx-auto">
        <div className="bg-white rounded-[30px] p-8 lg:p-20">
          <div className="max-w-[1206px] mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16 space-y-6 lg:space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl lg:text-[74px] font-extrabold leading-none tracking-tight text-neutral-900">
                  Trade Spot & Futures Instantly
                </h2>
                <p className="text-sm lg:text-base text-neutral-500 font-medium max-w-[460px] mx-auto">
                  Spot, Futures & instant USD transfers via Transfer365. Buy, sell & transfer digital assets
                </p>
              </div>

              {/* Tabs */}
              <div className="flex items-center justify-center gap-2">
                <button className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary-400 text-white text-sm font-medium">
                  <LightningIcon className="w-3 h-3" />
                  Spot
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-primary-400 text-primary-400 text-sm font-medium hover:bg-primary-400 hover:text-white transition-colors">
                  <LightningIcon className="w-3 h-3 color-primary-400" />
                  Futures
                </button>
              </div>
            </div>

            {/* Markets Grid */}
            <div className="grid lg:grid-cols-3 gap-2 mb-8">
              {/* Spot Market Table */}
              <div className="lg:col-span-2 bg-neutral-1000 rounded-3xl p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-white">Spot</h3>
                    <button className="text-xs font-medium text-neutral-500 px-2 py-1 hover:text-neutral-300 transition-colors">
                      View all
                    </button>
                  </div>
                  
                  {/* Table Header */}
                  <div className="grid grid-cols-4 gap-4 px-3.5 py-2">
                    <div className="text-xs font-medium text-neutral-500">Coin</div>
                    <div className="text-xs font-medium text-neutral-500 text-right">Price</div>
                    <div className="text-xs font-medium text-neutral-500 text-right">Change 24h</div>
                    <div className="text-xs font-medium text-neutral-500 text-right">Action</div>
                  </div>

                  {/* Table Rows */}
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className={`grid grid-cols-4 gap-4 px-3.5 py-[8px] rounded-lg ${i === 1 ? 'bg-neutral-900' : ''} hover:bg-neutral-900 transition-colors mb-0`}>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-orange-500 flex-shrink-0"></div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-white truncate">Bitcoin</div>
                          <div className="text-xs font-medium text-neutral-500">0 Fees</div>
                        </div>
                      </div>
                      <div className="text-xs font-medium text-white text-right self-center">$112,566.56</div>
                      <div className="text-xs font-medium text-accent-green-400 text-right self-center">+1.08%</div>
                      <div className="text-right self-center">
                        <button className={clsx("text-xs font-medium text-[12px] leading-[20px] text-white px-3 py-[4px] rounded-full hover:bg-primary-400 transition-colors", i === 1 ? 'bg-primary-400' : 'bg-neutral-900')}>
                          Trade
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Futures & Newest */}
              <div className="space-y-2">
                {/* Futures */}
                <div className="bg-neutral-1000 rounded-3xl p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-white">Futures</h3>
                      <button className="text-xs font-medium text-neutral-500 px-2 py-1 hover:text-neutral-300 transition-colors">View all</button>
                    </div>
                    
                    {['BTC/USDC', 'ETH/USDC'].map((coin, i) => (
                      <div key={i} className={`flex items-center justify-between px-3.5 py-3 rounded-lg ${i === 1 ? 'bg-neutral-900' : ''} hover:bg-neutral-900 transition-colors`}>
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full ${i === 0 ? 'bg-orange-500' : 'bg-blue-500'} flex-shrink-0`}></div>
                          <div>
                            <div className="text-sm font-medium text-white">{coin}</div>
                            <div className="text-xs font-medium text-neutral-500">0 Fees</div>
                          </div>
                        </div>
                        <div className="text-xs font-medium text-accent-green-400">+1.08%</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newest */}
                <div className="bg-neutral-1000 rounded-3xl p-6">
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-white mb-4">Newest</h3>
                    
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className={`flex items-center justify-between px-3.5 py-3 rounded-lg ${i === 1 ? 'bg-neutral-900' : ''} hover:bg-neutral-900 transition-colors`}>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-purple-500 flex-shrink-0"></div>
                          <div>
                            <div className="text-sm font-medium text-white">Bitcoin</div>
                            <div className="text-xs font-medium text-neutral-500">0 Fees</div>
                          </div>
                        </div>
                        <div className="text-xs font-medium text-accent-green-400">+1.08%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-500 text-center font-medium max-w-[429px] mx-auto">
              {"Trade fast with local payments, low fees, and instant crypto-to-USD conversions built for El Salvador's 24/7 market"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}