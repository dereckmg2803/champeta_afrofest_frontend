import { CalendarDays, MapPin } from 'lucide-react';
import { VinylDisc, Sparkle, MusicNote } from '../components/CartagenaIllustrations';
import { useLanguage } from '../contexts/LanguageContext';

const upcomingEvents = [
  {
    date: 'June 20, 2026',
    title: 'Latin Party',
    venue: 'Vibras Club',
    color: 'var(--cartagena-green)'
  },
  {
    date: 'July 23, 2026',
    title: 'Colombian Night',
    venue: 'The Couch',
    color: 'var(--cartagena-yellow)'
  },
  {
    date: 'August 29, 2026',
    title: 'AfroCaribbean Party',
    venue: 'Tropical Melbourne',
    color: 'var(--cartagena-red)'
  },
  {
    date: 'November 7, 2026',
    title: 'Champeta Afrofest Cartagena Independence Celebration',
    venue: 'Pavillion',
    color: 'var(--caribbean-deep)'
  },
  {
    date: 'March 20, 2027',
    title: 'Verbena Carnaval 2027 with The Gran Mono & Vibrating Planet',
    venue: 'Spiegel Haus',
    color: 'var(--cartagena-green)'
  }
];

export default function AgendaPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: 'var(--dark-section)' }}>
        <div className="absolute inset-0 opacity-20">
          <img
            src="/ExperienciasBanner.jpg"
            alt={t('agenda.hero.imageAlt')}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 opacity-60 hidden md:block animate-float">
          <VinylDisc size={80} />
        </div>
        <MusicNote size={35} className="absolute top-40 left-1/4 opacity-50 hidden md:block" color="var(--cartagena-green)" />
        <Sparkle size={24} className="absolute bottom-32 right-1/4" color="var(--cartagena-yellow)" />

        <div className="container-festival relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-[var(--cartagena-red)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-6 border-2 border-[var(--cartagena-yellow)]">
            {t('agenda.hero.badge')}
          </span>
          <h1 className="font-['Titan_One'] text-4xl md:text-6xl lg:text-7xl uppercase text-white mb-6">
            {t('agenda.hero.title1')} <span className="text-[var(--cartagena-yellow)]">{t('agenda.hero.title2')}</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
            {t('agenda.hero.description')}
          </p>
        </div>

        {/* Decorative stripes */}
        <div className="absolute bottom-0 left-0 w-full h-3 bg-[var(--cartagena-green)]" />
        <div className="absolute bottom-3 left-0 w-full h-2 bg-[var(--cartagena-yellow)]" />
        <div className="absolute bottom-5 left-0 w-full h-1 bg-[var(--cartagena-red)]" />
      </section>

      {/* Upcoming Events */}
      <section className="py-20 md:py-32">
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-green)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              {t('agenda.upcoming.badge')}
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-[var(--foreground)]">
              {t('agenda.upcoming.title1')} <span className="text-[var(--cartagena-red)]">{t('agenda.upcoming.title2')}</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {upcomingEvents.map((event, index) => (
              <article
                key={`${event.date}-${event.title}`}
                className="relative overflow-hidden bg-white border-2 border-[var(--foreground)] rounded-3xl pico-shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row">
                  <div
                    className="md:w-56 p-6 flex flex-col items-center justify-center text-center border-b-2 md:border-b-0 md:border-r-2 border-[var(--foreground)]"
                    style={{ backgroundColor: event.color }}
                  >
                    <CalendarDays className="w-10 h-10 text-white mb-3" />
                    <p className="font-['Titan_One'] text-2xl uppercase text-white leading-tight">
                      {event.date}
                    </p>
                  </div>

                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
                      <div>
                        <span className="inline-block px-3 py-1 bg-[var(--muted)] text-[var(--foreground)]/70 font-bold uppercase text-xs tracking-widest rounded-lg mb-3">
                          {t('agenda.event.status')}
                        </span>
                        <h3 className="font-['Titan_One'] text-2xl md:text-3xl uppercase text-[var(--foreground)]">
                          {event.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--muted)] border border-[var(--foreground)]/10">
                        <MapPin className="w-5 h-5 flex-shrink-0 text-[var(--cartagena-red)]" />
                        <span className="font-bold text-[var(--foreground)]">{event.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <div className="text-center pt-6">
              <Sparkle size={28} color="var(--cartagena-yellow)" className="mx-auto mb-3" />
              <p className="text-[var(--foreground)]/70 text-lg">
                {t('agenda.more.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
