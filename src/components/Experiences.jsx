import { Music, GraduationCap, Utensils, Users } from 'lucide-react';

export const Experiences = () => {
  const experiences = [
    {
      icon: Music,
      title: 'Música en Vivo',
      description: 'Disfruta de los mejores artistas de champeta en escenarios de primer nivel.',
      color: 'var(--cartagena-red)',
      image: '/MusicaPic.jpg'
    },
    {
      icon: GraduationCap,
      title: 'Talleres de Champeta',
      description: 'Aprende los pasos más icónicos con bailarines profesionales.',
      color: 'var(--cartagena-yellow)',
      image: '/RitmoPic.jpg'
    },
    {
      icon: Utensils,
      title: 'Gastronomía Caribeña',
      description: 'Saborea los platos más tradicionales del Caribe colombiano.',
      color: 'var(--caribbean-deep)',
      image: '/GastronomiaPic.jpg'
    },
    {
      icon: Users,
      title: 'Comunidad & Cultura',
      description: 'Conecta con la diáspora africana y celebra nuestra herencia cultural.',
      color: 'var(--cartagena-green)',
      image: '/ComunidadPic.jpg'
    }
  ];

  return (
    <section
      id="experiencias"
      data-testid="experiences-section"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--background)' }}
    >
      {/* Top decorative stripe */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]" />

      <div className="container-festival">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[var(--caribbean-deep)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4 border-2 border-[var(--foreground)]">
            Experiencias
          </span>
          <h2
            data-testid="experiences-title"
            className="font-['Titan_One'] text-4xl md:text-5xl lg:text-6xl uppercase text-[var(--foreground)] mb-4"
          >
            Disfruta las <span className="text-[var(--cartagena-green)]">Experiencias</span> del Festival
          </h2>
          <p className="text-[var(--foreground)]/70 text-base md:text-lg max-w-2xl mx-auto">
            Más que un concierto, una experiencia cultural completa
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              data-testid={`experience-card-${index}`}
              className="group relative overflow-hidden border-2 border-[var(--foreground)] rounded-2xl bg-white pico-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 opacity-60"
                  style={{ backgroundColor: exp.color }}
                />
                {/* Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center bg-white rounded-xl border-2 border-[var(--foreground)]">
                  <exp.icon className="w-6 h-6 text-[var(--foreground)]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="font-['Titan_One'] text-lg uppercase mb-2"
                  style={{ color: exp.color }}
                >
                  {exp.title}
                </h3>
                <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative stripe */}
      <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-[var(--accent)] via-[var(--secondary)] to-[var(--primary)]" />
    </section>
  );
};
