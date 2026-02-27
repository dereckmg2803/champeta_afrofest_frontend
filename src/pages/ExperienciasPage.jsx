import { Link } from 'react-router-dom';
import { Music, GraduationCap, Utensils, Users, Camera, Palette, Sparkles, Clock } from 'lucide-react';
import { VinylDisc, Sparkle, DancingCouple, MusicNote } from '../components/CartagenaIllustrations';

const experiences = [
  {
    icon: Music,
    title: 'Música en Vivo',
    description: 'Disfruta de los mejores artistas de champeta en escenarios de primer nivel. Desde leyendas hasta nuevos talentos, todos unidos por el ritmo.',
    details: [
      'Escenario principal con sistema de sonido profesional',
      'Presentaciones de artistas nacionales e internacionales',
      'Sets de DJs especializados en champeta',
      'Música continua durante todo el evento'
    ],
    color: 'var(--cartagena-red)',
    image: '/MusicaPic.jpg'
  },
  {
    icon: GraduationCap,
    title: 'Talleres de Baile',
    description: 'Aprende los pasos más icónicos de la champeta con bailarines profesionales. Desde lo básico hasta movimientos avanzados.',
    details: [
      'Clases para todos los niveles',
      'Instructores profesionales de Cartagena',
      'Aprende el perreo champetúo',
      'Sesiones de práctica libre'
    ],
    color: 'var(--cartagena-yellow)',
    image: '/TalleresPic.jpg'
  },
  {
    icon: Utensils,
    title: 'Gastronomía Caribeña',
    description: 'Saborea los platos más tradicionales del Caribe colombiano. Desde ceviches hasta frituras típicas.',
    details: [
      'Food trucks con comida típica',
      'Bebidas tropicales y refrescantes',
      'Opciones vegetarianas disponibles',
      'Postres tradicionales'
    ],
    color: 'var(--cartagena-green)',
    image: '/GastronomiaPic.jpg'
  },
  {
    icon: Users,
    title: 'Zona de Comunidad',
    description: 'Conecta con otros amantes de la champeta y la cultura afrocaribeña. Un espacio para compartir y crear lazos.',
    details: [
      'Networking cultural',
      'Intercambio de experiencias',
      'Activaciones de marca',
      'Photo booth temático'
    ],
    color: 'var(--caribbean-deep)',
    image: '/ComunidadPic.jpg'
  }
];

const workshops = [
  {
    title: 'Champeta Básica',
    duration: '45 min',
    level: 'Principiante',
    description: 'Aprende los pasos fundamentales del baile champeta',
    color: 'var(--cartagena-green)'
  },
  {
    title: 'Perreo Champetúo',
    duration: '1 hora',
    level: 'Intermedio',
    description: 'Domina los movimientos de cadera característicos',
    color: 'var(--cartagena-yellow)'
  },
  {
    title: 'Coreografía Grupal',
    duration: '1.5 horas',
    level: 'Todos los niveles',
    description: 'Aprende una coreografía completa para bailar en grupo',
    color: 'var(--cartagena-red)'
  },
  {
    title: 'Historia del Baile',
    duration: '30 min',
    level: 'Todos los niveles',
    description: 'Conoce el origen y evolución del baile champeta',
    color: 'var(--caribbean-deep)'
  }
];

const schedule = [
  { time: '12:00 PM', activity: 'Apertura de puertas', type: 'general' },
  { time: '1:00 PM', activity: 'Taller de Champeta Básica', type: 'workshop' },
  { time: '2:30 PM', activity: 'Primer set de DJ', type: 'music' },
  { time: '4:00 PM', activity: 'Taller de Perreo Champetúo', type: 'workshop' },
  { time: '5:30 PM', activity: 'Artista invitado #1', type: 'music' },
  { time: '7:00 PM', activity: 'Coreografía Grupal', type: 'workshop' },
  { time: '8:30 PM', activity: 'Show principal', type: 'music' },
  { time: '11:00 PM', activity: 'Cierre con DJ set', type: 'music' }
];

export default function ExperienciasPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: 'var(--dark-section)' }}>
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url('/ExperienciasBanner.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%'
          }}
        />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 opacity-60 hidden md:block animate-float">
          <VinylDisc size={80} />
        </div>
        <div className="absolute bottom-32 left-10 opacity-40 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
          <DancingCouple size={70} />
        </div>
        <MusicNote size={35} className="absolute top-40 left-1/4 opacity-50 hidden md:block" color="var(--cartagena-green)" />

        <div className="container-festival relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-[var(--caribbean-deep)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-6">
            Actividades
          </span>
          <h1 className="font-['Titan_One'] text-4xl md:text-6xl lg:text-7xl uppercase text-white mb-6">
            Las <span className="text-[var(--cartagena-yellow)]">Experiencias</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
            Más que un concierto, Champeta AfroFest es una experiencia cultural completa.
            Música, baile, gastronomía y comunidad en un solo lugar.
          </p>
        </div>

        {/* Decorative stripes */}
        <div className="absolute bottom-0 left-0 w-full h-3 bg-[var(--cartagena-green)]" />
        <div className="absolute bottom-3 left-0 w-full h-2 bg-[var(--cartagena-yellow)]" />
        <div className="absolute bottom-5 left-0 w-full h-1 bg-[var(--cartagena-red)]" />
      </section>

      {/* Main Experiences */}
      <section className="py-20 md:py-32">
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-red)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              Qué Encontrarás
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-[var(--foreground)]">
              Vive el <span className="text-[var(--cartagena-green)]">Festival</span>
            </h2>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div
                    className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-lg"
                    style={{ backgroundColor: exp.color }}
                  >
                    <exp.icon className="w-5 h-5 text-white" />
                    <span className="font-bold uppercase text-white text-sm tracking-wider">
                      {exp.title}
                    </span>
                  </div>
                  <h3 className="font-['Titan_One'] text-2xl md:text-3xl uppercase text-[var(--foreground)] mb-4">
                    {exp.title}
                  </h3>
                  <p className="text-[var(--foreground)]/80 mb-6">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-center gap-3 text-[var(--foreground)]/70">
                        <Sparkle size={12} color={exp.color} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div
                    className="aspect-video rounded-2xl overflow-hidden border-4 pico-shadow"
                    style={{ borderColor: exp.color }}
                  >
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-yellow)] text-[var(--foreground)] font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              Aprende
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-[var(--foreground)]">
              Talleres de <span className="text-[var(--cartagena-red)]">Baile</span>
            </h2>
            <p className="text-[var(--foreground)]/70 mt-4 max-w-2xl mx-auto">
              Aprende a bailar champeta con los mejores instructores de Cartagena
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border-2 border-[var(--foreground)] pico-shadow-sm"
              >
                <div
                  className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: workshop.color }}
                >
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-['Titan_One'] text-lg uppercase text-[var(--foreground)] mb-2">
                  {workshop.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-2 py-1 text-xs font-bold uppercase rounded"
                    style={{ backgroundColor: workshop.color, color: 'white' }}
                  >
                    {workshop.level}
                  </span>
                  <span className="text-[var(--foreground)]/60 text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {workshop.duration}
                  </span>
                </div>
                <p className="text-[var(--foreground)]/70 text-sm">
                  {workshop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--dark-section)' }}>
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-green)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              Agenda
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-white">
              Programación del <span className="text-[var(--cartagena-yellow)]">Día</span>
            </h2>
            <p className="text-white/60 mt-4">
              Un día completo de actividades para disfrutar
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 mb-4 last:mb-0"
              >
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="font-['Titan_One'] text-white/80">{item.time}</span>
                </div>
                <div
                  className="w-3 h-3 mt-2 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: item.type === 'workshop' ? 'var(--cartagena-yellow)' :
                      item.type === 'music' ? 'var(--cartagena-red)' : 'var(--cartagena-green)'
                  }}
                />
                <div className="flex-1 pb-4 border-b border-white/10">
                  <p className="text-white">{item.activity}</p>
                  <span
                    className="text-xs uppercase"
                    style={{
                      color: item.type === 'workshop' ? 'var(--cartagena-yellow)' :
                        item.type === 'music' ? 'var(--cartagena-red)' : 'var(--cartagena-green)'
                    }}
                  >
                    {item.type === 'workshop' ? 'Taller' : item.type === 'music' ? 'Música' : 'General'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/60 text-sm">
              * La programación puede variar según la edición del festival
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container-festival text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-[var(--cartagena-yellow)]" />
          <h2 className="font-['Titan_One'] text-3xl md:text-4xl uppercase text-[var(--foreground)] mb-6">
            ¿Listo para <span className="text-[var(--cartagena-red)]">Vibrar</span>?
          </h2>
          <p className="text-[var(--foreground)]/70 mb-8 max-w-2xl mx-auto">
            No te pierdas la próxima edición de Champeta AfroFest
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#entradas"
              className="inline-block px-8 py-4 bg-[var(--cartagena-red)] text-white font-bold uppercase tracking-wider rounded-xl border-2 border-[var(--foreground)] pico-shadow hover:bg-[var(--cartagena-red)]/90 transition-colors"
            >
              Comprar Entradas
            </Link>
            <Link
              to="/#comunidad"
              className="inline-block px-8 py-4 bg-[var(--cartagena-green)] text-white font-bold uppercase tracking-wider rounded-xl border-2 border-[var(--foreground)] pico-shadow hover:bg-[var(--cartagena-green)]/90 transition-colors"
            >
              Unirme a la Comunidad
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
