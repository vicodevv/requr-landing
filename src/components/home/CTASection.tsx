import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#245040]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left Content - Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Have an idea of
              <br />
              how much you spend
              <br />
              <span className="text-[#3D8960]">on subscriptions</span>
            </h2>
            
            <Link href="/join" className="inline-block mt-6 sm:mt-8">
              <button className="bg-black hover:bg-black/90 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-colors">
                Join our waitlist
              </button>
            </Link>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
            {/* Phone Frame */}
            <div className="relative w-[280px] h-[460px] sm:w-[320px] sm:h-[525px] md:w-[350px] md:h-[575px] lg:w-[380px] lg:h-[620px]">
              {/* Outer border (black) */}
              <div className="absolute inset-0 bg-black rounded-[40px] sm:rounded-[44px] md:rounded-[48px] p-[2.5px] sm:p-[3px]">
                {/* Inner border layer */}
                <div className="w-full h-full bg-[#245040] rounded-[37.5px] sm:rounded-[41px] md:rounded-[45px] p-[2px]">
                  {/* Phone screen */}
                  <div className="w-full h-full bg-[#245040] rounded-[35.5px] sm:rounded-[39px] md:rounded-[43px] overflow-hidden">
                    {/* App screenshot placeholder */}
                    <div className="w-full h-full flex items-center justify-center">
                      {/* <Image 
                        src="/images/app-spending-screen.png" 
                        alt="Spending Overview"
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-[2.5px] sm:top-[3px] left-1/2 -translate-x-1/2 w-[100px] h-[20px] sm:w-[120px] sm:h-[24px] md:w-[140px] md:h-[28px] bg-black rounded-b-[16px] sm:rounded-b-[18px] md:rounded-b-[20px] z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}