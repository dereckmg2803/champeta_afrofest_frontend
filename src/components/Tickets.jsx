import { Link } from 'react-router-dom';
import { CalendarDays, Check, Clock, MapPin, Music, Ticket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  formatEventDate,
  getNextEvent,
  isEarlyBirdActive,
  localizedText,
} from '../lib/eventHelpers';

export const Tickets = () => {
  const { t, language } = useLanguage();
  const nextEvent = getNextEvent();
  const earlyBirdActive = nextEvent ? isEarlyBirdActive(nextEvent) : false;
  const features = nextEvent?.features?.[language] || nextEvent?.features?.es || [];

  return (
    <section
      id="entradas"
      data-testid="tickets-section"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--muted)' }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container-festival relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[var(--cartagena-red)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4 border-2 border-[var(--foreground)]">
            {t('tickets.event.badge')}
          </span>
          <h2
            data-testid="tickets-title"
            className="font-['Titan_One'] text-4xl md:text-5xl lg:text-6xl uppercase text-[var(--foreground)] mb-4"
          >
            {t('tickets.event.title')} <span className="text-[var(--cartagena-green)]">{t('tickets.event.highlight')}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {nextEvent ? (
            <div
              data-testid="ticket-event-card"
              className="relative overflow-hidden border-2 border-[var(--foreground)] rounded-3xl bg-white pico-shadow animate-fade-in-up"
            >
              <div className="absolute top-0 left-0 right-0 h-3 bg-[var(--cartagena-green)]" />
              <div className="absolute top-3 left-0 right-0 h-2 bg-[var(--cartagena-yellow)]" />
              <div className="absolute top-5 left-0 right-0 h-1 bg-[var(--cartagena-red)]" />

              <div className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[var(--cartagena-yellow)] border-2 border-[var(--foreground)]">
                    <Ticket className="w-8 h-8 text-[var(--foreground)]" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-['Titan_One'] text-3xl md:text-4xl uppercase text-[var(--foreground)] mb-4">
                      {localizedText(nextEvent.title, language)}
                    </h3>

                    <div className="space-y-4 text-[var(--foreground)]/80 text-base md:text-lg">
                      {localizedText(nextEvent.description, language) && (
                        <p>{localizedText(nextEvent.description, language)}</p>
                      )}
                      {localizedText(nextEvent.description2, language) && (
                        <p>{localizedText(nextEvent.description2, language)}</p>
                      )}
                      {localizedText(nextEvent.collaboration, language) && (
                        <p>{localizedText(nextEvent.collaboration, language)}</p>
                      )}
                      {earlyBirdActive && (
                        <p className="font-bold text-[var(--foreground)]">
                          {t('tickets.event.earlyBirdPrefix')}{' '}
                          {nextEvent.earlyBirdPrice ? `${nextEvent.earlyBirdPrice} · ` : ''}
                          {formatEventDate(nextEvent.earlyBirdUntilISO, language)}.
                        </p>
                      )}
                      {features.length > 0 && (
                        <ul className="space-y-2 pt-2">
                          {features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-[var(--foreground)]/80">
                              <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--cartagena-green)]" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {nextEvent.hashtags && (
                        <p className="text-sm font-bold text-[var(--cartagena-red)]">{nextEvent.hashtags}</p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--muted)] border border-[var(--foreground)]/10">
                        <MapPin className="w-5 h-5 text-[var(--cartagena-red)]" />
                        <span className="text-sm font-bold text-[var(--foreground)]">{nextEvent.city}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--muted)] border border-[var(--foreground)]/10">
                        <CalendarDays className="w-5 h-5 text-[var(--cartagena-green)]" />
                        <span className="text-sm font-bold text-[var(--foreground)]">
                          {formatEventDate(nextEvent.dateISO, language)}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--muted)] border border-[var(--foreground)]/10">
                        <Music className="w-5 h-5 text-[var(--caribbean-deep)]" />
                        <span className="text-sm font-bold text-[var(--foreground)]">{nextEvent.venue}</span>
                      </div>
                      {nextEvent.startTime && (
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--muted)] border border-[var(--foreground)]/10">
                          <Clock className="w-5 h-5 text-[var(--cartagena-yellow)]" />
                          <span className="text-sm font-bold text-[var(--foreground)]">{nextEvent.startTime}</span>
                        </div>
                      )}
                    </div>

                    {nextEvent.ticketUrl ? (
                      <a
                        href={nextEvent.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="ticket-eventbrite-link"
                        className="flex w-fit mx-auto mt-8 px-8 py-4 bg-[var(--cartagena-red)] text-white font-bold uppercase tracking-wider border-2 border-[var(--foreground)] rounded-xl pico-shadow-sm hover:bg-[var(--cartagena-green)] transition-colors"
                      >
                        {t('tickets.event.buy')}
                      </a>
                    ) : (
                      <p className="text-center mt-8 text-sm font-bold text-[var(--foreground)]/70">
                        {t('tickets.event.ticketsSoon')}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              data-testid="ticket-event-empty"
              className="relative overflow-hidden border-2 border-[var(--foreground)] rounded-3xl bg-white pico-shadow text-center p-10"
            >
              <h3 className="font-['Titan_One'] text-2xl md:text-3xl uppercase text-[var(--foreground)] mb-4">
                {t('tickets.event.emptyTitle')}
              </h3>
              <p className="text-[var(--foreground)]/70 mb-6">{t('tickets.event.emptyDescription')}</p>
            </div>
          )}
        </div>

        <div className="text-center mt-10">
          <p className="text-[var(--foreground)]/70 mb-4">
            {t('tickets.event.agendaText')}
          </p>
          <Link
            to="/agendas"
            data-testid="tickets-agenda-link"
            className="inline-flex px-6 py-3 bg-[var(--cartagena-yellow)] text-[var(--foreground)] font-bold uppercase tracking-wider border-2 border-[var(--foreground)] rounded-xl pico-shadow-sm hover:bg-[var(--cartagena-green)] transition-colors"
          >
            {t('tickets.event.agendaButton')}
          </Link>
        </div>
      </div>
    </section>
  );
};
