import { Music, GraduationCap, Utensils, Users } from 'lucide-react';

export const Experiences = () => {
  const experiences = [
    {
      icon: Music,
      title: 'Música en Vivo',
      description: 'Disfruta de los mejores artistas de champeta en escenarios de primer nivel.',
      color: 'var(--cartagena-red)',
      image: 'https://images.unsplash.com/photo-1733601375731-72c78e9fd421?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxhZnJvLWNvbG9tYmlhbiUyMGNoYW1wZXRhJTIwZGFuY2VycyUyMGVuZXJnZXRpYyUyMGZlc3RpdmFsJTIwY3Jvd2R8ZW58MHx8fHwxNzcxMjY2NzExfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      icon: GraduationCap,
      title: 'Talleres de Champeta',
      description: 'Aprende los pasos más icónicos con bailarines profesionales.',
      color: 'var(--cartagena-yellow)',
      image: 'https://images.unsplash.com/photo-1626041293558-21fd007149d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHx2aWJyYW50JTIwY2FydGFnZW5hJTIwY29sb21iaWElMjBzdHJlZXQlMjBtdXJhbCUyMGFydCUyMGNvbG9yZnVsfGVufDB8fHx8MTc3MTI2NjcxMHww&ixlib=rb-4.1.0&q=85'
    },
    {
      icon: Utensils,
      title: 'Gastronomía Caribeña',
      description: 'Saborea los platos más tradicionales del Caribe colombiano.',
      color: 'var(--caribbean-deep)',
      image: 'https://images.unsplash.com/photo-1662368890898-9823476f5df9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHw0fHx0cm9waWNhbCUyMHBhbG0lMjBsZWF2ZXMlMjB2aXZpZCUyMGNvbG9ycyUyMHRleHR1cmUlMjBicmlnaHR8ZW58MHx8fHwxNzcxMjY2NzEzfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      icon: Users,
      title: 'Comunidad & Cultura',
      description: 'Conecta con la diáspora africana y celebra nuestra herencia cultural.',
      color: 'var(--cartagena-green)',
      image: 'https://images.unsplash.com/photo-1690312022107-4fb10402aee6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxhZnJvLWNvbG9tYmlhbiUyMGNoYW1wZXRhJTIwZGFuY2VycyUyMGVuZXJnZXRpYyUyMGZlc3RpdmFsJTIwY3Jvd2R8ZW58MHx8fHwxNzcxMjY2NzExfDA&ixlib=rb-4.1.0&q=85'
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
