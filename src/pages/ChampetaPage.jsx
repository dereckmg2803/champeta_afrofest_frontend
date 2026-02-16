import { Link } from 'react-router-dom';
import { Music, Disc3, Users, Radio, Globe, Heart } from 'lucide-react';
import { VinylDisc, Sparkle, DancingCouple, MusicNote } from '../components/CartagenaIllustrations';

const champetaElements = [
  {
    icon: Disc3,
    title: 'Ritmo Africano',
    description: 'La champeta tiene sus raíces en los ritmos africanos traídos por los esclavos al Caribe colombiano. El soukous del Congo, el highlife de Ghana y el jùjú de Nigeria son algunas de sus influencias.',
    color: 'var(--cartagena-green)'
  },
  {
    icon: Radio,
    title: 'El Picó',
    description: 'Los picós son enormes sistemas de sonido que se convirtieron en el símbolo de la champeta. Cada picó tiene su nombre, su DJ y sus seguidores fieles. Son verdaderas catedrales del sonido.',
    color: 'var(--cartagena-yellow)'
  },
  {
    icon: Users,
    title: 'Baile Perreo',
    description: 'El baile de la champeta es energético, sensual y lleno de movimientos rápidos de cadera. Se baila en pareja con movimientos pegados que expresan la conexión entre los bailarines.',
    color: 'var(--cartagena-red)'
  },
  {
    icon: Globe,
    title: 'Identidad Cartagenera',
    description: 'La champeta nació en los barrios populares de Cartagena como expresión de resistencia y orgullo afrodescendiente. Hoy es patrimonio cultural de la ciudad.',
    color: 'var(--caribbean-deep)'
  }
];

const timeline = [
  { year: '1970s', event: 'Llegan los primeros discos africanos a Cartagena a través de marineros' },
  { year: '1980s', event: 'Nacen los primeros picós y DJs comienzan a mezclar ritmos africanos con sonidos locales' },
  { year: '1990s', event: 'La champeta se consolida como género propio con artistas como El Afinaíto y Louis Towers' },
  { year: '2000s', event: 'Mr. Black, Kevin Florez y nuevos artistas llevan la champeta a nivel nacional' },
  { year: '2010s', event: 'La champeta se fusiona con reggaetón y urbano, alcanzando audiencias internacionales' },
  { year: '2020s', event: 'Reconocimiento como patrimonio cultural y festivales como Champeta AfroFest celebran su legado' }
];

const artists = [
  { name: 'Louis Towers', era: 'Pionero', description: 'Uno de los padres de la champeta criolla' },
  { name: 'Mr. Black', era: 'Leyenda', description: 'El rey de la champeta moderna' },
  { name: 'Kevin Florez', era: 'Nueva Generación', description: 'Fusión de champeta con urbano' },
  { name: 'Zaider', era: 'Actual', description: 'Representante del nuevo sonido' }
];

export default function ChampetaPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: 'var(--dark-section)' }}>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1626041293558-21fd007149d6?w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 opacity-60 hidden md:block animate-float">
          <VinylDisc size={100} />
        </div>
        <div className="absolute bottom-32 left-10 opacity-40 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
          <DancingCouple size={80} />
        </div>
        <MusicNote size={40} className="absolute top-40 left-1/4 opacity-50 hidden md:block" color="var(--cartagena-yellow)" />
        <Sparkle size={24} className="absolute bottom-40 right-1/4" color="var(--cartagena-green)" />
        
        <div className="container-festival relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-[var(--cartagena-yellow)] text-[var(--foreground)] font-bold uppercase text-sm tracking-widest rounded-lg mb-6">
            Cultura
          </span>
          <h1 className="font-['Titan_One'] text-4xl md:text-6xl lg:text-7xl uppercase text-white mb-6">
            ¿Qué es la <span className="text-[var(--cartagena-yellow)]">Champeta</span>?
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto italic">
            "Amo este ritmo porque lo llevo en la sangre"
          </p>
        </div>

        {/* Decorative stripes */}
        <div className="absolute bottom-0 left-0 w-full h-3 bg-[var(--cartagena-green)]" />
        <div className="absolute bottom-3 left-0 w-full h-2 bg-[var(--cartagena-yellow)]" />
        <div className="absolute bottom-5 left-0 w-full h-1 bg-[var(--cartagena-red)]" />
      </section>

      {/* Definition Section */}
      <section className="py-20 md:py-32">
        <div className="container-festival">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[var(--cartagena-green)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
                Definición
              </span>
              <h2 className="font-['Titan_One'] text-3xl md:text-4xl uppercase text-[var(--foreground)] mb-6">
                El Ritmo del <span className="text-[var(--cartagena-red)]">Caribe</span>
              </h2>
              <div className="space-y-4 text-[var(--foreground)]/80">
                <p>
                  La <strong>champeta</strong> es un género musical de origen afro-caribeño nacido en 
                  Cartagena de Indias, Colombia. Surgió en los barrios populares de la ciudad como 
                  una fusión de ritmos africanos con sonidos del Caribe.
                </p>
                <p>
                  Su nombre proviene del cuchillo "champeta", una herramienta usada por pescadores 
                  y vendedores de los mercados populares, reflejando su origen humilde y callejero.
                </p>
                <p>
                  Más que un género musical, la champeta es una <strong>forma de vida</strong>, 
                  una expresión de identidad afrodescendiente y un símbolo de resistencia cultural 
                  que ha trascendido fronteras.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden border-4 border-[var(--foreground)] pico-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1733601375731-72c78e9fd421?w=800"
                  alt="Baile Champeta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4">
                <VinylDisc size={60} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elements Grid */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-red)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              Elementos
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-[var(--foreground)]">
              Los Pilares de la <span className="text-[var(--cartagena-green)]">Champeta</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {champetaElements.map((element, index) => (
              <div 
                key={index}
                className="p-8 bg-white rounded-2xl border-2 border-[var(--foreground)] pico-shadow"
              >
                <div 
                  className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl"
                  style={{ backgroundColor: element.color }}
                >
                  <element.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-['Titan_One'] text-xl uppercase mb-3" style={{ color: element.color }}>
                  {element.title}
                </h3>
                <p className="text-[var(--foreground)]/70 leading-relaxed">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--dark-section)' }}>
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-yellow)] text-[var(--foreground)] font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              Historia
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-white">
              Línea del <span className="text-[var(--cartagena-red)]">Tiempo</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center font-['Titan_One'] text-sm border-2"
                    style={{ 
                      backgroundColor: index % 4 === 0 ? 'var(--cartagena-green)' : 
                                       index % 4 === 1 ? 'var(--cartagena-yellow)' :
                                       index % 4 === 2 ? 'var(--cartagena-red)' : 'var(--caribbean-deep)',
                      borderColor: 'var(--cartagena-yellow)',
                      color: index % 4 === 1 ? 'var(--foreground)' : 'white'
                    }}
                  >
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-16 bg-white/20" />
                  )}
                </div>
                <div className="flex-1 pt-3">
                  <p className="text-white/80">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-20 md:py-32">
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-green)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              Artistas
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-[var(--foreground)]">
              Leyendas de la <span className="text-[var(--cartagena-yellow)]">Champeta</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {artists.map((artist, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-2xl border-2 border-[var(--foreground)] pico-shadow-sm"
              >
                <div 
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: index % 4 === 0 ? 'var(--cartagena-green)' : 
                                     index % 4 === 1 ? 'var(--cartagena-yellow)' :
                                     index % 4 === 2 ? 'var(--cartagena-red)' : 'var(--caribbean-deep)'
                  }}
                >
                  <Music className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-['Titan_One'] text-lg uppercase text-[var(--foreground)]">
                  {artist.name}
                </h3>
                <span 
                  className="inline-block px-2 py-1 text-xs font-bold uppercase rounded mt-2"
                  style={{ 
                    backgroundColor: index % 4 === 0 ? 'var(--cartagena-green)' : 
                                     index % 4 === 1 ? 'var(--cartagena-yellow)' :
                                     index % 4 === 2 ? 'var(--cartagena-red)' : 'var(--caribbean-deep)',
                    color: index % 4 === 1 ? 'var(--foreground)' : 'white'
                  }}
                >
                  {artist.era}
                </span>
                <p className="text-[var(--foreground)]/60 text-sm mt-2">{artist.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container-festival text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 text-[var(--cartagena-red)]" />
          <h2 className="font-['Titan_One'] text-3xl md:text-4xl uppercase text-[var(--foreground)] mb-6">
            Vive la <span className="text-[var(--cartagena-green)]">Champeta</span> en Persona
          </h2>
          <p className="text-[var(--foreground)]/70 mb-8 max-w-2xl mx-auto">
            Experimenta la energía, el ritmo y la cultura en Champeta AfroFest
          </p>
          <Link 
            to="/"
            className="inline-block px-8 py-4 bg-[var(--cartagena-red)] text-white font-bold uppercase tracking-wider rounded-xl border-2 border-[var(--foreground)] pico-shadow hover:bg-[var(--cartagena-red)]/90 transition-colors"
          >
            Ver Próximo Festival
          </Link>
        </div>
      </section>
    </div>
  );
}
