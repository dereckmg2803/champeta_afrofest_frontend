import { EVENTS } from '../data/events';

const TIME_ZONE = 'Australia/Melbourne';

/**
 * Calendar date YYYY-MM-DD in Australia/Melbourne for a given instant.
 */
export function getMelbourneDateISO(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}

export function isPast(event, now = new Date()) {
  return event.dateISO < getMelbourneDateISO(now);
}

export function isUpcoming(event, now = new Date()) {
  return !isPast(event, now);
}

export function getUpcomingEvents(events = EVENTS, now = new Date()) {
  return events
    .filter((event) => isUpcoming(event, now))
    .sort((a, b) => a.dateISO.localeCompare(b.dateISO));
}

export function getPastEvents(events = EVENTS, now = new Date()) {
  return events
    .filter((event) => isPast(event, now))
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO));
}

/**
 * Next upcoming event. If several share the same date, prefer one with ticketUrl.
 */
export function getNextEvent(events = EVENTS, now = new Date()) {
  const upcoming = getUpcomingEvents(events, now);
  if (upcoming.length === 0) return null;

  const firstDate = upcoming[0].dateISO;
  const sameDay = upcoming.filter((event) => event.dateISO === firstDate);
  return sameDay.find((event) => event.ticketUrl) || sameDay[0];
}

export function isEarlyBirdActive(event, now = new Date()) {
  if (!event?.earlyBirdUntilISO) return false;
  return getMelbourneDateISO(now) <= event.earlyBirdUntilISO;
}

export function localizedText(field, language = 'es') {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[language] || field.es || field.en || '';
}

export function formatEventDate(dateISO, language = 'es') {
  const [year, month, day] = dateISO.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day, 12));
  return new Intl.DateTimeFormat(language === 'en' ? 'en-AU' : 'es-CO', {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function getEventLocation(event) {
  if (!event) return '';
  const parts = [event.city, event.country].filter(Boolean);
  return parts.join(', ');
}
