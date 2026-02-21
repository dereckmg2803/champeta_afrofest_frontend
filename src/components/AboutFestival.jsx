import { Music, Users, MapPin, Calendar } from 'lucide-react';
import { VinylDisc, Sparkle, BrushStroke, CartagenaFlag } from './CartagenaIllustrations';

export const AboutFestival = () => {
  const features = [
    {
      icon: Music,
      title: 'Música en Vivo',
      description: 'Los mejores artistas de champeta y música afro-caribeña en un solo escenario.',
      color: 'var(--cartagena-red)'
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Un espacio inclusivo para colombianos y personas de diversas nacionalidades.',
      color: 'var(--cartagena-green)'
    },
    {
      icon: MapPin,
      title: 'Cartagena',
      description: 'En el corazón de la ciudad más caribeña de Colombia, cuna de la champeta.',
      color: 'var(--caribbean-deep)'
    },
    {
      icon: Calendar,
      title: 'Experiencia Única',
      description: 'Música, danza, gastronomía y tradiciones caribeñas en un solo lugar.',
      color: 'var(--cartagena-yellow)'
    }
  ];

  return (
    <section
      id="sobre"
      data-testid="about-section"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--background)' }}
    >
      {/* Decorative brush strokes - Cartagena flag colors */}
      <div className="absolute top-0 left-0 w-full h-4 bg-[var(--cartagena-green)]" />
      <div className="absolute top-4 left-0 w-full h-3 bg-[var(--cartagena-yellow)]" />
      <div className="absolute top-7 left-0 w-full h-2 bg-[var(--cartagena-red)]" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-20 hidden lg:block">
        <VinylDisc size={120} />
      </div>
      <Sparkle size={18} className="absolute top-40 left-20 opacity-40" color="var(--cartagena-yellow)" />
      <Sparkle size={14} className="absolute bottom-32 right-40 opacity-40" color="var(--cartagena-green)" />

      <div className="container-festival relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[var(--cartagena-green)]" />
            <span className="px-4 py-2 bg-[var(--cartagena-yellow)] text-[var(--foreground)] font-bold uppercase text-sm tracking-widest rounded-lg border-2 border-[var(--foreground)]">
              Sobre el Festival
            </span>
            <div className="w-8 h-1 bg-[var(--cartagena-red)]" />
          </div>
          <h2
            data-testid="about-title"
            className="font-['Titan_One'] text-4xl md:text-5xl lg:text-6xl uppercase text-[var(--foreground)] mb-6"
          >
            ¡La Champeta se <span className="text-[var(--cartagena-red)]">Vive</span>!
          </h2>
          <p
            data-testid="about-description"
            className="max-w-3xl mx-auto text-base md:text-lg text-[var(--foreground)]/80 leading-relaxed"
          >
            Champeta AfroFest surge como una iniciativa para celebrar la cultura en las fiestas de la independencia, y ha evolucionado para convertirse en un espacio intercultural donde personas de diversas nacionalidades pueden experimentar la riqueza de la champeta, la música, la danza, la gastronomía y las tradiciones caribeñas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-testid={`about-feature-${index}`}
              className="group p-6 md:p-8 bg-white border-2 border-[var(--foreground)] rounded-2xl pico-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl border-2 border-[var(--foreground)] group-hover:scale-110 transition-transform"
                style={{ backgroundColor: feature.color }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-['Titan_One'] text-xl uppercase text-[var(--foreground)] mb-2">
                {feature.title}
              </h3>
              <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#cultura"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#cultura')?.scrollIntoView({ behavior: 'smooth' });
            }}
            data-testid="about-cta"
            className="inline-block px-8 py-4 bg-[var(--cartagena-red)] text-white font-bold uppercase tracking-wider border-2 border-[var(--foreground)] pico-shadow rounded-xl hover:bg-[var(--cartagena-red)]/90 transition-colors"
          >
            Nuestra Historia
          </a>
        </div>
      </div>

      {/* Bottom decorative - Cartagena flag colors */}
      <div className="absolute bottom-7 left-0 w-full h-2 bg-[var(--cartagena-red)]" />
      <div className="absolute bottom-4 left-0 w-full h-3 bg-[var(--cartagena-yellow)]" />
      <div className="absolute bottom-0 left-0 w-full h-4 bg-[var(--cartagena-green)]" />
    </section>
  );
};
