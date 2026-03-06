import { Check, Star, Crown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Tickets = () => {
  const { t } = useLanguage();
  const ticketTypes = [
    {
      name: t('tickets.types.earlyBird'),
      price: '$49',
      color: 'var(--cartagena-green)',
      icon: Check,
      features: [
        t('tickets.features.generalAccess'),
        t('tickets.features.allStages'),
        t('tickets.features.eventMap'),
        t('tickets.features.welcomeKit')
      ],
      popular: false
    },
    {
      name: t('tickets.types.general'),
      price: '$69',
      color: 'var(--cartagena-yellow)',
      icon: Star,
      features: [
        t('tickets.features.generalAccess'),
        t('tickets.features.allStages'),
        t('tickets.features.foodZone'),
        t('tickets.features.exclusiveMerch'),
        t('tickets.features.meetGreetRaffle')
      ],
      popular: true
    },
    {
      name: t('tickets.types.vip'),
      price: '$119',
      color: 'var(--cartagena-red)',
      icon: Crown,
      features: [
        t('tickets.features.vipAccess'),
        t('tickets.features.priorityZone'),
        t('tickets.features.premiumOpenBar'),
        t('tickets.features.guaranteedMeet'),
        t('tickets.features.vipMerch'),
        t('tickets.features.backstage')
      ],
      popular: false
    }
  ];

  return (
    <section
      id="entradas"
      data-testid="tickets-section"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--muted)' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container-festival relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[var(--cartagena-red)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4 border-2 border-[var(--foreground)]">
            {t('tickets.badge')}
          </span>
          <h2
            data-testid="tickets-title"
            className="font-['Titan_One'] text-4xl md:text-5xl lg:text-6xl uppercase text-[var(--foreground)] mb-4"
          >
            {t('tickets.title')}<span className="text-[var(--cartagena-green)]">{t('tickets.highlight')}</span>
          </h2>
          <p className="text-[var(--foreground)]/70 text-base md:text-lg">
            {t('tickets.subtitle')}
          </p>
        </div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {ticketTypes.map((ticket, index) => (
            <div
              key={ticket.name}
              data-testid={`ticket-card-${index}`}
              className={`relative overflow-hidden border-2 border-[var(--foreground)] rounded-2xl bg-white animate-fade-in-up ${ticket.popular ? 'pico-shadow md:scale-105 md:-translate-y-2' : 'pico-shadow-sm'
                }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Popular badge */}
              {ticket.popular && (
                <div className="absolute -top-1 -right-1 px-4 py-1 bg-[var(--foreground)] text-white text-xs font-bold uppercase rounded-bl-xl">
                  {t('tickets.popular')}
                </div>
              )}

              {/* Header */}
              <div
                className="p-6 text-center"
                style={{ backgroundColor: ticket.color }}
              >
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-[var(--foreground)] rounded-full">
                  <ticket.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-['Titan_One'] text-xl uppercase text-[var(--foreground)]">
                  {ticket.name}
                </h3>
                <p className="font-['Titan_One'] text-4xl text-[var(--foreground)] mt-2">
                  {ticket.price}
                </p>
              </div>

              {/* Features */}
              <div className="p-6">
                <ul className="space-y-3">
                  {ticket.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: ticket.color }}
                      />
                      <span className="text-sm text-[var(--foreground)]/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  data-testid={`ticket-buy-${index}`}
                  className="w-full mt-6 px-6 py-4 font-bold uppercase tracking-wider border-2 border-[var(--foreground)] rounded-xl transition-colors"
                  style={{
                    backgroundColor: ticket.color,
                    color: 'var(--foreground)'
                  }}
                >
                  {t('tickets.buy')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center mt-8 text-sm text-[var(--foreground)]/60">
          {t('tickets.note')}
        </p>
      </div>
    </section>
  );
};
