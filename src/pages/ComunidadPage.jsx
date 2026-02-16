import { Link } from 'react-router-dom';
import { Users, Building2, Heart, Handshake, Star, Award } from 'lucide-react';
import { VinylDisc, Sparkle, DancingCouple } from '../components/CartagenaIllustrations';

const communityMembers = [
  {
    type: 'Fundadores',
    icon: Star,
    color: 'var(--cartagena-yellow)',
    members: [
      { name: 'Comunidad Costeña', role: 'Fundadores del movimiento', description: 'El colectivo que soñó con crear este espacio de celebración cultural' }
    ]
  },
  {
    type: 'Colaboradores',
    icon: Heart,
    color: 'var(--cartagena-red)',
    members: [
      { name: 'Artistas Locales', role: 'Talento Musical', description: 'Los artistas que dan vida al festival con su música y energía' },
      { name: 'Bailarines', role: 'Instructores de Baile', description: 'Expertos en champeta que comparten su conocimiento en los talleres' },
      { name: 'Voluntarios', role: 'Equipo de Apoyo', description: 'Personas comprometidas que hacen posible cada edición' }
    ]
  },
  {
    type: 'Aliados',
    icon: Handshake,
    color: 'var(--cartagena-green)',
    members: [
      { name: 'Trident Agency', role: 'Producción', description: 'Socio estratégico en la producción del evento' },
      { name: 'AfroCaribe', role: 'Cultura', description: 'Promotores de la cultura afrocaribeña' },
      { name: 'Tropical Sounds', role: 'Audio', description: 'Especialistas en sistemas de sonido' }
    ]
  }
];

const sponsors = [
  { name: 'Trident Agency', initials: 'TA' },
  { name: 'AfroCaribe', initials: 'AC' },
  { name: 'Tropical Sounds', initials: 'TS' },
  { name: 'EventGo', initials: 'EG' },
  { name: 'DiscoWave', initials: 'DW' }
];

const testimonials = [
  {
    quote: "Champeta AfroFest me hizo reconectar con mis raíces. Fue una experiencia inolvidable.",
    author: "María González",
    location: "Cartagena"
  },
  {
    quote: "Por fin un espacio donde nuestra cultura es celebrada como se merece.",
    author: "Carlos Mendoza",
    location: "Bogotá"
  },
  {
    quote: "La energía del festival es única. Ya espero la próxima edición.",
    author: "Ana Martínez",
    location: "Miami, USA"
  }
];

export default function ComunidadPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: 'var(--dark-section)' }}>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1690312022107-4fb10402aee6?w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 opacity-50 hidden md:block">
          <DancingCouple size={80} />
        </div>
        <Sparkle size={24} className="absolute top-32 right-20" color="var(--cartagena-yellow)" />
        <Sparkle size={18} className="absolute bottom-40 left-1/4" color="var(--cartagena-green)" />
        
        <div className="container-festival relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-[var(--cartagena-green)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-6">
            Nuestra Gente
          </span>
          <h1 className="font-['Titan_One'] text-4xl md:text-6xl lg:text-7xl uppercase text-white mb-6">
            La <span className="text-[var(--cartagena-yellow)]">Comunidad</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
            Detrás de cada festival hay personas apasionadas que hacen posible la magia. 
            Conoce a quienes construyen este movimiento.
          </p>
        </div>

        {/* Decorative stripes */}
        <div className="absolute bottom-0 left-0 w-full h-3 bg-[var(--cartagena-green)]" />
        <div className="absolute bottom-3 left-0 w-full h-2 bg-[var(--cartagena-yellow)]" />
        <div className="absolute bottom-5 left-0 w-full h-1 bg-[var(--cartagena-red)]" />
      </section>

      {/* Mission Statement */}
      <section className="py-20 md:py-32">
        <div className="container-festival">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-[var(--cartagena-green)]" />
            <h2 className="font-['Titan_One'] text-3xl md:text-4xl uppercase text-[var(--foreground)] mb-6">
              Juntos Hacemos <span className="text-[var(--cartagena-red)]">Historia</span>
            </h2>
            <p className="text-[var(--foreground)]/80 text-lg leading-relaxed">
              Champeta AfroFest es más que un festival, es un movimiento comunitario. Nació de la 
              iniciativa de la comunidad costeña con el sueño de crear un espacio donde nuestra 
              cultura sea celebrada, preservada y compartida con el mundo. Cada persona que 
              participa, cada aliado que nos apoya, y cada asistente que vibra con nosotros, 
              es parte fundamental de esta familia.
            </p>
          </div>
        </div>
      </section>

      {/* Community Members */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-red)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              Nuestra Gente
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-[var(--foreground)]">
              Quienes Hacen <span className="text-[var(--cartagena-green)]">Posible</span> el Festival
            </h2>
          </div>

          <div className="space-y-12">
            {communityMembers.map((category, catIndex) => (
              <div key={catIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: category.color }}
                  >
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-['Titan_One'] text-2xl uppercase" style={{ color: category.color }}>
                    {category.type}
                  </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.members.map((member, memIndex) => (
                    <div 
                      key={memIndex}
                      className="p-6 bg-white rounded-2xl border-2 border-[var(--foreground)] pico-shadow-sm"
                    >
                      <h4 className="font-['Titan_One'] text-lg uppercase text-[var(--foreground)] mb-1">
                        {member.name}
                      </h4>
                      <span 
                        className="inline-block px-2 py-1 text-xs font-bold uppercase rounded mb-3"
                        style={{ backgroundColor: category.color, color: 'white' }}
                      >
                        {member.role}
                      </span>
                      <p className="text-[var(--foreground)]/70 text-sm">
                        {member.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-20 md:py-32">
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-yellow)] text-[var(--foreground)] font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              Aliados
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-[var(--foreground)]">
              Nuestros <span className="text-[var(--cartagena-red)]">Sponsors</span>
            </h2>
            <p className="text-[var(--foreground)]/70 mt-4">
              Empresas y organizaciones que creen en nuestra misión
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="aspect-square p-6 bg-white rounded-2xl border-2 border-[var(--foreground)] flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer pico-shadow-sm"
              >
                <div className="w-14 h-14 mb-3 flex items-center justify-center bg-[var(--foreground)] rounded-xl text-white font-bold text-lg">
                  {sponsor.initials}
                </div>
                <span className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider text-center">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[var(--foreground)]/60 mb-4">¿Quieres ser aliado del festival?</p>
            <Link 
              to="/#comunidad"
              className="inline-block px-6 py-3 bg-[var(--cartagena-green)] text-white font-bold uppercase tracking-wider rounded-xl border-2 border-[var(--foreground)] hover:bg-[var(--cartagena-green)]/90 transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--dark-section)' }}>
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-green)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              Testimonios
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-white">
              Lo Que Dice la <span className="text-[var(--cartagena-yellow)]">Comunidad</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border-2"
                style={{ 
                  borderColor: index % 3 === 0 ? 'var(--cartagena-green)' : 
                               index % 3 === 1 ? 'var(--cartagena-yellow)' : 'var(--cartagena-red)'
                }}
              >
                <p className="text-white/90 italic mb-6 text-lg">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container-festival text-center">
          <Award className="w-12 h-12 mx-auto mb-4 text-[var(--cartagena-yellow)]" />
          <h2 className="font-['Titan_One'] text-3xl md:text-4xl uppercase text-[var(--foreground)] mb-6">
            Únete a la <span className="text-[var(--cartagena-green)]">Familia</span>
          </h2>
          <p className="text-[var(--foreground)]/70 mb-8 max-w-2xl mx-auto">
            Sé parte del movimiento que celebra y preserva la cultura champeta
          </p>
          <Link 
            to="/#comunidad"
            className="inline-block px-8 py-4 bg-[var(--cartagena-red)] text-white font-bold uppercase tracking-wider rounded-xl border-2 border-[var(--foreground)] pico-shadow hover:bg-[var(--cartagena-red)]/90 transition-colors"
          >
            Registrarme
          </Link>
        </div>
      </section>
    </div>
  );
}
