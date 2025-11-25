import Link from 'next/link'

export default function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#1D2034]" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left Content - Phone Mockups */}
          <div className="relative flex gap-4 sm:gap-6 md:gap-8 justify-center md:justify-start overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            {/* First Phone */}
            <div className="relative w-[180px] h-[360px] sm:w-[220px] sm:h-[440px] md:w-[250px] md:h-[500px] lg:w-[280px] lg:h-[560px] flex-shrink-0">
              {/* Outer border (black) */}
              <div className="absolute inset-0 bg-black rounded-[36px] sm:rounded-[42px] md:rounded-[48px] p-[2.5px] sm:p-[3px]">
                {/* Inner border layer */}
                <div className="w-full h-full bg-[#2E3854] rounded-[33.5px] sm:rounded-[39px] md:rounded-[45px] p-[2px]">
                  {/* Phone screen */}
                  <div className="w-full h-full bg-[#2E3854] rounded-[31.5px] sm:rounded-[37px] md:rounded-[43px] overflow-hidden">
                    {/* App screenshot placeholder */}
                    <div className="w-full h-full flex items-center justify-center">
                      {/* <Image 
                        src="/images/app-screen-1.png" 
                        alt="App Screen 1"
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-[2.5px] sm:top-[3px] left-1/2 -translate-x-1/2 w-[80px] h-[16px] sm:w-[100px] sm:h-[20px] md:w-[120px] md:h-[24px] bg-black rounded-b-[14px] sm:rounded-b-[16px] md:rounded-b-[18px] z-10" />
            </div>

            {/* Second Phone */}
            <div className="relative w-[180px] h-[360px] sm:w-[220px] sm:h-[440px] md:w-[250px] md:h-[500px] lg:w-[280px] lg:h-[560px] flex-shrink-0">
              {/* Outer border (black) */}
              <div className="absolute inset-0 bg-black rounded-[36px] sm:rounded-[42px] md:rounded-[48px] p-[2.5px] sm:p-[3px]">
                {/* Inner border layer */}
                <div className="w-full h-full bg-[#2E3854] rounded-[33.5px] sm:rounded-[39px] md:rounded-[45px] p-[2px]">
                  {/* Phone screen */}
                  <div className="w-full h-full bg-[#2E3854] rounded-[31.5px] sm:rounded-[37px] md:rounded-[43px] overflow-hidden">
                    {/* App screenshot placeholder */}
                    <div className="w-full h-full flex items-center justify-center">
                      {/* <Image 
                        src="/images/app-screen-2.png" 
                        alt="App Screen 2"
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-[2.5px] sm:top-[3px] left-1/2 -translate-x-1/2 w-[80px] h-[16px] sm:w-[100px] sm:h-[20px] md:w-[120px] md:h-[24px] bg-black rounded-b-[14px] sm:rounded-b-[16px] md:rounded-b-[18px] z-10" />
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="text-center md:text-left mt-8 md:mt-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Keep track of
              <br />
              all subscriptions
              <br />
              <span className="text-white/40">even free trails</span>
            </h2>
            
            <Link href="/join" className="inline-block mt-6 sm:mt-8">
              <button className="bg-black hover:bg-black/90 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-colors">
                Join our waitlist
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}