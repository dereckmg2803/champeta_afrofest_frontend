import { useLanguage } from '../contexts/LanguageContext';
export const Allies = () => {
  const { t } = useLanguage();
  const allies = [
    { name: 'Latam Bridge', logo: '/allies/latam-bridge.png' }, // sin logo
    { name: 'HMS Music & Sound', logo: '/allies/hms-music.png' },
    { name: 'Lemar Ilustre', logo: '/allies/lemar-ilustre.png' },
    { name: 'Mincultura', logo: '/allies/mincultura.png' },
    { name: 'SBS Spanish', logo: '/allies/sbs-spanish.png' }
  ];

  return (
    <section
      id="aliados"
      data-testid="allies-section"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--background)' }}
    >
      {/* Background crowd silhouette */}
      <div
        className="absolute bottom-0 left-0 w-full h-48 opacity-10"
        style={{
          backgroundImage: `url('/FestivalBanner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center'
        }}
      />

      <div className="container-festival relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            data-testid="allies-title"
            className="font-['Titan_One'] text-4xl md:text-5xl lg:text-6xl uppercase text-[var(--foreground)] mb-4"
          >
            {t('allies.title')} <span className="text-[var(--cartagena-green)]">{t('allies.highlight')}</span>
          </h2>
          <p className="text-[var(--foreground)]/70 text-base md:text-lg">
            {t('allies.subtitleStart')}<span className="text-[var(--cartagena-red)] font-bold">{t('allies.subtitleHighlight')}</span>
          </p>
        </div>

        {/* Logo call to action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <img
            src="/logo.png"
            alt="Champeta AfroFest"
            className="h-12 md:h-14 w-auto object-contain bg-transparent"
          />
          <span className="text-[var(--foreground)]/50 hidden sm:block">|</span>
          <p className="text-sm md:text-base text-[var(--foreground)] text-center sm:text-left">
            {t('allies.communityTextStart')} <span className="font-bold">{t('allies.communityBold')}</span> {t('allies.communityMiddle')} <span className="font-bold text-[var(--cartagena-red)]"> {t('allies.communityFestival')}</span>
          </p>
        </div>

        {/* CTA Text */}
        <p className="text-center text-[var(--foreground)]/70 mb-8">
          {t('allies.ctaText')} <span className="text-[var(--cartagena-green)] font-bold">{t('allies.champeta')}</span>
        </p>

        {/* Allies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
          {allies.map((ally, index) => (
            <div
              key={ally.name}
              data-testid={`ally-card-${index}`}
              className="group relative p-6 bg-white border-2 border-[var(--foreground)] rounded-xl flex items-center justify-center aspect-[4/3] hover:scale-105 transition-transform cursor-pointer"
            >
              {/* Placeholder logo */}
              <div className="text-center">
                <div className="h-16 flex items-center justify-center mb-2">
                  {ally.logo ? (
                    <img
                      src={ally.logo}
                      alt={ally.name}
                      className="max-h-12 w-auto object-contain bg-transparent"
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center bg-[var(--foreground)] rounded-lg text-white font-bold text-lg">
                      {ally.initials}
                    </div>
                  )}
                </div>

                <span className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider">
                  {ally.name}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/10 rounded-xl transition-colors" />
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <a
            href="#comunidad"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#comunidad')?.scrollIntoView({ behavior: 'smooth' });
            }}
            data-testid="allies-cta"
            className="inline-block px-8 py-4 bg-[var(--cartagena-green)] text-white font-bold uppercase tracking-wider border-2 border-[var(--foreground)] pico-shadow rounded-xl hover:bg-[var(--cartagena-green)]/90 transition-colors"
          >
            {t('allies.contact')}
          </a>
        </div>
      </div>
    </section>
  );
};
