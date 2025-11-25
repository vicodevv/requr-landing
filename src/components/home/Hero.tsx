import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-[#2C3449]">
      {/* Top Left Blob */}
      <div className="absolute top-0 left-0 w-[600px] sm:w-[800px] md:w-[1100px] h-[600px] sm:h-[800px] md:h-[1100px] -translate-x-[45%] -translate-y-[45%]">
        <Image
          src="/images/blob-1.svg"
          alt=""
          fill
          className="object-contain opacity-60"
          priority
        />
      </div>

      {/* Bottom Right Blobs */}
      <div className="absolute bottom-0 right-0 w-[500px] sm:w-[700px] md:w-[900px] h-[500px] sm:h-[700px] md:h-[900px] translate-x-[42%] translate-y-[38%]">
        <Image
          src="/images/blob-2.svg"
          alt=""
          fill
          className="object-contain opacity-60"
        />
      </div>
      
      <div className="absolute bottom-0 right-0 w-[480px] sm:w-[650px] md:w-[850px] h-[480px] sm:h-[650px] md:h-[850px] translate-x-[45%] translate-y-[42%]">
        <Image
          src="/images/blob-3.svg"
          alt=""
          fill
          className="object-contain opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center pt-8 sm:pt-12 md:pt-8">
        <h1 className="text-[56px] leading-[0.95] sm:text-[80px] md:text-[120px] lg:text-[140px] font-black mb-6 sm:mb-8 text-white tracking-tight font-circular -ml-1 sm:-ml-2 px-2">
          Manage your
          <br />
          Subscr<span className="relative inline-block">ı<span className="absolute top-3 left-2 sm:top-5 sm:left-3 md:top-10 md:left-5 -translate-x-1/2 w-[0.14em] h-[0.14em] bg-[#6FCF97] rounded-full -translate-y-[0.15em]"></span></span>ptions
        </h1>

        <p className="text-[15px] sm:text-[16px] md:text-[17px] text-white/70 mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-md md:max-w-2xl mx-auto font-normal px-4 leading-relaxed">
          Keep track and manage all your subscriptions in one place. Stop paying for services you don&rsquo;t use.
        </p>

        <Link href="/join" className="inline-block">
          <button className="bg-[#1A1D2E] hover:bg-[#14161F] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-colors shadow-lg">
            Join our waitlist
          </button>
        </Link>
      </div>
    </section>
  )
}