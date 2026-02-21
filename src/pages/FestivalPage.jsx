import { Link } from 'react-router-dom';
import { Calendar, Users, Star, Trophy } from 'lucide-react';
import { VinylDisc, Sparkle, DancingCouple } from '../components/CartagenaIllustrations';

// Galería de fotos del festival (placeholders - reemplazar con fotos reales)
const galleryImages = [
  {
    url: '/im1.jpg',
    caption: 'Baile champeta en vivo'
  },
  {
    url: '/im2.jpg',
    caption: 'Comunidad celebrando'
  },
  {
    url: '/im3.jpg',
    caption: 'Arte callejero cartagenero'
  },
  {
    url: '/im4.jpg',
    caption: 'Artistas en escenario'
  },
  {
    url: '/im5.jpg',
    caption: 'Energía del público'
  },
  {
    url: '/im6.jpg',
    caption: 'Momentos únicos'
  }
];

const editions = [
  {
    year: '2025',
    date: '15 de Noviembre',
    location: 'Melbourne, Australia',
    highlights: ['Primera edición histórica', 'Más de 500 asistentes', '8 artistas en vivo', 'Talleres de baile'],
    color: 'var(--cartagena-green)'
  }
];

const stats = [
  { icon: Users, value: '500+', label: 'Asistentes', color: 'var(--cartagena-green)' },
  { icon: Star, value: '8', label: 'Artistas', color: 'var(--cartagena-yellow)' },
  { icon: Calendar, value: '1', label: 'Edición', color: 'var(--cartagena-red)' },
  { icon: Trophy, value: '100%', label: 'Satisfacción', color: 'var(--caribbean-deep)' }
];

export default function FestivalPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: 'var(--dark-section)' }}>
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1733601375731-72c78e9fd421?w=1920"
            alt="Festival background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 opacity-50 hidden md:block">
          <VinylDisc size={80} />
        </div>
        <Sparkle size={24} className="absolute top-32 right-20" color="var(--cartagena-yellow)" />

        <div className="container-festival relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-[var(--cartagena-red)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-6 border-2 border-[var(--cartagena-yellow)]">
            Nuestra Historia
          </span>
          <h1 className="font-['Titan_One'] text-4xl md:text-6xl lg:text-7xl uppercase text-white mb-6">
            El <span className="text-[var(--cartagena-yellow)]">Festival</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
            El evento busca visibilizar, fortalecer y celebrar la champeta como expresión artística y patrimonial del Caribe colombiano y está orientado a la promoción de la diversidad cultural y la inclusión social.
          </p>
        </div>

        {/* Decorative stripes */}
        <div className="absolute bottom-0 left-0 w-full h-3 bg-[var(--cartagena-green)]" />
        <div className="absolute bottom-3 left-0 w-full h-2 bg-[var(--cartagena-yellow)]" />
        <div className="absolute bottom-5 left-0 w-full h-1 bg-[var(--cartagena-red)]" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--muted)]">
        <div className="container-festival">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl border-2 border-[var(--foreground)] pico-shadow"
              >
                <div
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl"
                  style={{ backgroundColor: stat.color }}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-['Titan_One'] text-3xl md:text-4xl" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="text-[var(--foreground)]/70 text-sm uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32">
        <div className="container-festival">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[var(--cartagena-green)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
                Origen
              </span>
              <h2 className="font-['Titan_One'] text-3xl md:text-4xl uppercase text-[var(--foreground)] mb-6">
                ¿Cómo <span className="text-[var(--cartagena-red)]">Nació</span>?
              </h2>
              <div className="space-y-4 text-[var(--foreground)]/80">
                <p>
                  Champeta AfroFest surge como una idea de la comunidad costeña residente en la ciudad,
                  con el propósito de crear un espacio inclusivo donde tanto colombianos como personas
                  de diversas nacionalidades pudieran experimentar la riqueza de la cultura alrededor
                  de la champeta.
                </p>
                <p>
                  La música, la danza, la gastronomía y la diversidad de tradiciones caribeñas se
                  unen en un solo lugar para celebrar nuestra herencia africana y el espíritu festivo
                  de Cartagena de Indias.
                </p>
                <p>
                  El 15 de noviembre de 2025 celebramos nuestra primera edición, un hito histórico
                  que reunió a más de 500 personas en una noche inolvidable de ritmo y cultura.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-[var(--foreground)] pico-shadow">
                <img
                  src="https://images.unsplash.com/photo-1690312022107-4fb10402aee6?w=600"
                  alt="Comunidad Champeta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <DancingCouple size={100} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editions Timeline */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--dark-section)' }}>
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-yellow)] text-[var(--foreground)] font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              Ediciones
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-white">
              Versiones <span className="text-[var(--cartagena-green)]">Anteriores</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {editions.map((edition, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border-2 mb-8"
                style={{ borderColor: edition.color }}
              >
                <div
                  className="absolute -left-4 top-8 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: edition.color }}
                >
                  {index + 1}
                </div>
                <div className="ml-6">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="font-['Titan_One'] text-2xl text-white">
                      Edición {edition.year}
                    </h3>
                    <span
                      className="px-3 py-1 rounded-full text-sm font-bold"
                      style={{ backgroundColor: edition.color, color: 'white' }}
                    >
                      {edition.date}
                    </span>
                  </div>
                  <p className="text-white/60 mb-4">{edition.location}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {edition.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center gap-2 text-white/80 text-sm">
                        <Sparkle size={12} color={edition.color} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Next Edition Teaser */}
            <div className="relative p-8 rounded-2xl border-2 border-dashed border-white/30 text-center">
              <h3 className="font-['Titan_One'] text-2xl text-white mb-2">
                Edición 2026
              </h3>
              <p className="text-white/60 mb-4">¡Próximamente!</p>
              <Link
                to="/"
                className="inline-block px-6 py-3 bg-[var(--cartagena-red)] text-white font-bold uppercase tracking-wider rounded-xl border-2 border-[var(--cartagena-yellow)] hover:bg-[var(--cartagena-red)]/90 transition-colors"
              >
                Únete a la Comunidad
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 md:py-32">
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-red)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              Galería
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-[var(--foreground)]">
              Momentos <span className="text-[var(--cartagena-green)]">Inolvidables</span>
            </h2>
            <p className="text-[var(--foreground)]/70 mt-4 max-w-2xl mx-auto">
              Revive los mejores momentos de nuestras ediciones anteriores
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden border-2 border-[var(--foreground)] cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container-festival text-center">
          <h2 className="font-['Titan_One'] text-3xl md:text-4xl uppercase text-[var(--foreground)] mb-6">
            ¿Quieres ser parte de la <span className="text-[var(--cartagena-red)]">historia</span>?
          </h2>
          <p className="text-[var(--foreground)]/70 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad y sé el primero en enterarte de la próxima edición
          </p>
          <Link
            to="/#comunidad"
            className="inline-block px-8 py-4 bg-[var(--cartagena-green)] text-white font-bold uppercase tracking-wider rounded-xl border-2 border-[var(--foreground)] pico-shadow hover:bg-[var(--cartagena-green)]/90 transition-colors"
          >
            Únete a la Comunidad
          </Link>
        </div>
      </section>
    </div>
  );
}
