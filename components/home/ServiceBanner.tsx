import { SERVICES } from '@/lib/constants'

export default function ServiceBanner() {
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-text-secondary">
          Subscriptions like
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-background-secondary/50 border border-white/5 hover:border-primary/30 hover:bg-background-secondary transition-all duration-300 group cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {service.icon}
              </span>
              <span className="text-sm text-text-secondary group-hover:text-white transition-colors">
                {service.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm">
          and 100+ more services
        </p>
      </div>
    </section>
  )
}