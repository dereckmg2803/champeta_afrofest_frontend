import { Disc3, Music2, Flag, Speaker } from 'lucide-react';
import { VinylDisc, Sparkle, DancingCouple, WavePattern } from './CartagenaIllustrations';

export const Culture = () => {
  const cultureItems = [
    {
      icon: Disc3,
      title: 'Ritmo Afro-Caribeño',
      description: 'Ritmos y percusiones africanas fusionadas con sonidos caribeños que hacen vibrar el corazón.',
      color: 'var(--cartagena-green)'
    },
    {
      icon: Music2,
      title: 'Baile & Energía',
      description: 'Con pasos únicos y movimientos que expresan alegría, resistencia y libertad.',
      color: 'var(--cartagena-yellow)'
    },
    {
      icon: Flag,
      title: 'Cultura Popular',
      description: 'Comunidades que mantienen viva la tradición a través de generaciones en Cartagena.',
      color: 'var(--cartagena-red)'
    },
    {
      icon: Speaker,
      title: 'Instrumentos & Sonido',
      description: 'Instrumentos como las congas, timbales y el característico sonido del picó.',
      color: 'var(--caribbean-deep)'
    }
  ];

  return (
    <section 
      id="cultura" 
      data-testid="culture-section"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--dark-section)' }}
    >
      {/* Background mural texture */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1626041293558-21fd007149d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHx2aWJyYW50JTIwY2FydGFnZW5hJTIwY29sb21iaWElMjBzdHJlZXQlMjBtdXJhbCUyMGFydCUyMGNvbG9yZnVsfGVufDB8fHx8MTc3MTI2NjcxMHww&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Decorative brush strokes - Cartagena flag style */}
      <div className="absolute top-0 left-0 w-full h-6 bg-[var(--cartagena-green)]" style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }} />
      <div className="absolute top-6 left-0 w-full h-4 bg-[var(--cartagena-yellow)]" style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0 100%)' }} />
      <div className="absolute top-10 left-0 w-full h-3 bg-[var(--cartagena-red)]" style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }} />

      {/* Decorative elements */}
      <div className="absolute top-32 right-10 opacity-30 hidden lg:block animate-float">
        <VinylDisc size={100} />
      </div>
      <div className="absolute bottom-40 left-10 opacity-25 hidden lg:block animate-float" style={{ animationDelay: '1.5s' }}>
        <DancingCouple size={80} />
      </div>
      <Sparkle size={20} className="absolute top-40 left-1/4 opacity-50" color="var(--cartagena-yellow)" />
      <Sparkle size={16} className="absolute bottom-60 right-1/4 opacity-50" color="var(--cartagena-green)" />

      <div className="container-festival relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[var(--cartagena-green)]" />
            <span className="px-4 py-2 bg-[var(--cartagena-red)] text-white font-bold uppercase text-sm tracking-widest rounded-lg border-2 border-[var(--cartagena-yellow)]">
              Cultura
            </span>
            <div className="w-8 h-1 bg-[var(--cartagena-yellow)]" />
          </div>
          <h2 
            data-testid="culture-title"
            className="font-['Titan_One'] text-4xl md:text-5xl lg:text-6xl uppercase text-white mb-6"
          >
            ¿Qué es la <span className="text-[var(--cartagena-yellow)]">Champeta</span>?
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            "Amo este ritmo porque lo llevo en la sangre" - La champeta es un género musical de origen 
            afro-caribeño nacido en Cartagena, Colombia. Mezcla ritmos africanos con sonidos del Caribe 
            creando un estilo energético y único de baile y música que nace del corazón del pueblo.
          </p>
        </div>

        {/* Culture Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureItems.map((item, index) => (
            <div
              key={item.title}
              data-testid={`culture-card-${index}`}
              className="group relative overflow-hidden rounded-2xl animate-fade-in-up border-2"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                background: 'rgba(13, 13, 13, 0.9)',
                backdropFilter: 'blur(10px)',
                borderColor: item.color
              }}
            >
              {/* Header with icon */}
              <div 
                className="p-4 flex items-center gap-3"
                style={{ backgroundColor: item.color }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[var(--foreground)] rounded-lg">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-['Titan_One'] text-base uppercase text-[var(--foreground)]">
                  {item.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div 
                className="absolute -bottom-2 -right-2 w-8 h-8 opacity-30 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative - Cartagena flag style */}
      <div className="absolute bottom-10 left-0 w-full h-3 bg-[var(--cartagena-red)]" style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0 100%)' }} />
      <div className="absolute bottom-6 left-0 w-full h-4 bg-[var(--cartagena-yellow)]" style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }} />
      <div className="absolute bottom-0 left-0 w-full h-6 bg-[var(--cartagena-green)]" style={{ clipPath: 'polygon(2% 0, 98% 0, 100% 100%, 0 100%)' }} />
    </section>
  );
};
