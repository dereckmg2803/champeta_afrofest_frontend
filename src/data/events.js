/**
 * Single source of truth for Champeta AfroFest events.
 * Status (upcoming / past) is derived from dateISO — do not mark it manually.
 * Edit this file to add or update events; the UI updates automatically.
 */
export const EVENTS = [
  {
    id: 'first-afrofest-2025-02-28',
    dateISO: '2025-02-28',
    title: {
      es: 'The First Champeta Afrofest in Melbourne',
      en: 'The First Champeta Afrofest in Melbourne',
    },
    venue: 'Pink Lemonade',
    city: 'Richmond',
    country: 'Australia',
    ticketUrl: null,
    earlyBirdUntilISO: null,
    color: 'var(--cartagena-green)',
    highlights: {
      es: ['Primera edición en Melbourne', 'Pink Lemonade, Richmond'],
      en: ['First edition in Melbourne', 'Pink Lemonade, Richmond'],
    },
  },
  {
    id: 'colombia-independence-2025-07-19',
    dateISO: '2025-07-19',
    title: {
      es: 'Colombia Independence Day Celebration',
      en: 'Colombia Independence Day Celebration',
    },
    venue: 'St Kilda Town Hall',
    city: 'Melbourne',
    country: 'Australia',
    ticketUrl: null,
    earlyBirdUntilISO: null,
    color: 'var(--cartagena-yellow)',
    highlights: {
      es: ['Celebración del Día de la Independencia'],
      en: ['Independence Day celebration'],
    },
  },
  {
    id: 'colombian-independence-2025-07-25',
    dateISO: '2025-07-25',
    title: {
      es: 'Colombian Independence Day',
      en: 'Colombian Independence Day',
    },
    venue: 'St Kilda Town Hall',
    city: 'Melbourne',
    country: 'Australia',
    ticketUrl: null,
    earlyBirdUntilISO: null,
    color: 'var(--cartagena-red)',
    highlights: {
      es: ['Día de la Independencia Colombiana'],
      en: ['Colombian Independence Day'],
    },
  },
  {
    id: 'champeta-pal-mundo-2025-08-29',
    dateISO: '2025-08-29',
    title: {
      es: 'Champeta Pal Mundo, Melbourne Edition',
      en: 'Champeta Pal Mundo, Melbourne Edition',
    },
    venue: 'Tropical Melbourne',
    city: 'Melbourne',
    country: 'Australia',
    ticketUrl: null,
    earlyBirdUntilISO: null,
    color: 'var(--caribbean-deep)',
    highlights: {
      es: ['Melbourne Edition', 'Tropical Melbourne'],
      en: ['Melbourne Edition', 'Tropical Melbourne'],
    },
  },
  {
    id: 'latin-party-2026-06-27',
    dateISO: '2026-06-27',
    title: {
      es: 'Latin Party',
      en: 'Latin Party',
    },
    venue: 'Vibras Club',
    city: 'Melbourne',
    country: 'Australia',
    ticketUrl: null,
    earlyBirdUntilISO: null,
    color: 'var(--cartagena-green)',
  },
  {
    id: 'colombian-night-2026-07-23',
    dateISO: '2026-07-23',
    title: {
      es: 'Colombian Night',
      en: 'Colombian Night',
    },
    venue: 'The Couch',
    city: 'Melbourne',
    country: 'Australia',
    ticketUrl: null,
    earlyBirdUntilISO: null,
    color: 'var(--cartagena-yellow)',
  },
  {
    id: 'afrocaribbean-party-2026-08-28',
    dateISO: '2026-08-28',
    title: {
      es: 'AfroCaribbean Party',
      en: 'AfroCaribbean Party',
    },
    venue: 'Tropical Melbourne',
    city: 'Melbourne',
    country: 'Australia',
    ticketUrl:
      'https://www.eventbrite.com.au/e/champeta-afrofest-tropical-night-tickets-1994484922092',
    earlyBirdUntilISO: '2026-08-15',
    earlyBirdPrice: '12 AUD',
    startTime: '5:00 PM',
    color: 'var(--cartagena-red)',
    description: {
      es: 'VIERNES 28 DE AGOSTO tenemos verbena 🔥 Llega temprano porque viene con TODO.',
      en: 'FRIDAY AUGUST 28 — we have verbena 🔥 Arrive early, this night comes with EVERYTHING.',
    },
    description2: {
      es: 'Es el lugar para bailar, comer rico y encontrarnos. Trae a tus amigos que se la quieran gozar con este frío. 😎 Cupos limitados!!! ¡Nos vemos para sacar los prohibidos! 💃🕺',
      en: 'The place to dance, eat well, and reconnect. Bring your friends ready to enjoy this cold weather. 😎 Limited spots!!! See you on the dance floor! 💃🕺',
    },
    collaboration: {
      es: 'Lugar: Tropical Melbourne · Desde las 5 PM',
      en: 'Venue: Tropical Melbourne · From 5 PM',
    },
    features: {
      es: [
        '2x1 en Bebidas al iniciar',
        'Clases de Baile',
        'Arepas rellenas y comida latina',
        'Feria de emprendimientos y libros',
        'Show de Baile en vivo',
      ],
      en: [
        '2-for-1 drinks at the start',
        'Dance classes',
        'Stuffed arepas and Latin food',
        'Entrepreneur & book fair',
        'Live dance show',
      ],
    },
    hashtags:
      '#ChampetaAfroFest #ChampetaEnMelbourne #CulturaAfro #SaborCosteño #NosVemosEnLaPista',
  },
  {
    id: 'independence-celebration-2026-11-07',
    dateISO: '2026-11-07',
    title: {
      es: 'Champeta Afrofest Cartagena Independence Celebration',
      en: 'Champeta Afrofest Cartagena Independence Celebration',
    },
    venue: 'Pavillion',
    city: 'Melbourne',
    country: 'Australia',
    ticketUrl: null,
    earlyBirdUntilISO: null,
    color: 'var(--caribbean-deep)',
  },
  {
    id: 'verbena-carnaval-2027-03-20',
    dateISO: '2027-03-20',
    title: {
      es: 'Verbena Carnaval 2027 with The Gran Mono & Vibrating Planet',
      en: 'Verbena Carnaval 2027 with The Gran Mono & Vibrating Planet',
    },
    venue: 'Spiegel Haus',
    city: 'Melbourne',
    country: 'Australia',
    ticketUrl: null,
    earlyBirdUntilISO: null,
    color: 'var(--cartagena-green)',
  },
];
