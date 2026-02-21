import { ChevronDown } from 'lucide-react';
import { VinylDisc, Sparkle, MusicNote, WavePattern, DancingCouple } from './CartagenaIllustrations';

export const Hero = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="relative min-h-screen flex items-end justify-center overflow-hidden pb-32 md:pb-40"
    >
      {/* Background with mural texture */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/hero.jpg')`,
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--foreground)]/85 via-[var(--foreground)]/70 to-[var(--foreground)]/95" />
      </div>

      {/* Decorative vinyl discs */}
      <div className="absolute top-20 left-10 animate-float opacity-80 hidden md:block">
        <VinylDisc size={80} className="drop-shadow-2xl" />
      </div>
      <div className="absolute bottom-32 right-8 animate-float opacity-70 hidden md:block" style={{ animationDelay: '1.5s' }}>
        <VinylDisc size={60} />
      </div>

      {/* Dancing couple */}
      <div className="absolute bottom-20 left-16 animate-float opacity-60 hidden lg:block" style={{ animationDelay: '2s' }}>
        <DancingCouple size={70} />
      </div>

      {/* Sparkles and music notes */}
      <Sparkle size={24} className="absolute top-32 right-20 animate-pulse" color="var(--cartagena-yellow)" />
      <Sparkle size={16} className="absolute top-48 left-1/4 animate-pulse" style={{ animationDelay: '0.5s' }} color="var(--cartagena-green)" />
      <Sparkle size={20} className="absolute bottom-40 right-1/3 animate-pulse" style={{ animationDelay: '1s' }} color="var(--cartagena-red)" />
      <MusicNote size={35} className="absolute top-40 right-1/4 animate-float hidden md:block" color="var(--cartagena-green)" />
      <MusicNote size={25} className="absolute bottom-60 left-20 animate-float hidden md:block" style={{ animationDelay: '1s' }} color="var(--cartagena-yellow)" />

      {/* Caribbean wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <WavePattern className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-festival text-center px-4">

        <div className="mb-6 animate-fade-in-up">
          {/* Title with Cartagena flag colors - styled like the logo 
          <h1
            data-testid="hero-title"
            className="font-['Titan_One'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-none"
          >
            <span
              className="block"
              style={{
                color: 'var(--cartagena-green)',
                textShadow: '3px 3px 0 var(--cartagena-yellow), 6px 6px 0 var(--foreground)',
                WebkitTextStroke: '2px var(--cartagena-yellow)'
              }}
            >
              Champeta
            </span>
            <span
              className="block -mt-2 md:-mt-4"
              style={{
                color: 'var(--cartagena-red)',
                textShadow: '3px 3px 0 var(--cartagena-yellow), 6px 6px 0 var(--foreground)',
                WebkitTextStroke: '1px var(--cartagena-yellow)'
              }}
            >
              AfroFest
            </span>
          </h1>
          */}
          {/* Decorative sparkle like in the logo 
          <div className="flex justify-center -mt-2">
            <Sparkle size={28} color="white" />
          </div>*/}
        </div>

        {/* Tagline 
        <p
          data-testid="hero-tagline"
          className="font-['Space_Grotesk'] text-lg sm:text-xl md:text-2xl text-white/90 mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Desde el Caribe para el mundo
        </p>*/}

        {/* Date Badge
        <div
          data-testid="hero-date"
          className="inline-block mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <span className="px-6 py-3 bg-[var(--cartagena-red)] text-white font-['Titan_One'] text-xl md:text-2xl uppercase tracking-wider border-2 border-[var(--cartagena-yellow)] rounded-xl shadow-lg">
            Next Version in 2026
          </span>
        </div>
 */}
        {/* Location 
        <p
          data-testid="hero-location"
          className="text-white/80 text-base md:text-lg mb-8 animate-fade-in-up flex items-center justify-center gap-2"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="inline-block w-3 h-3 bg-[var(--cartagena-green)] rounded-full"></span>
          Cartagena de Indias, Colombia
          <span className="inline-block w-3 h-3 bg-[var(--cartagena-red)] rounded-full"></span>
        </p>
*/}
        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href="#entradas"
            onClick={(e) => scrollToSection(e, '#entradas')}
            data-testid="hero-cta-tickets"
            className="px-8 py-4 bg-[var(--cartagena-yellow)] text-[var(--foreground)] font-bold uppercase tracking-wider border-2 border-[var(--foreground)] pico-shadow rounded-xl text-lg hover:bg-[var(--cartagena-yellow)]/90 transition-colors"
          >
            Comprar Entradas
          </a>
          <a
            href="#sobre"
            onClick={(e) => scrollToSection(e, '#sobre')}
            data-testid="hero-cta-about"
            className="px-8 py-4 bg-[var(--cartagena-green)] text-white font-bold uppercase tracking-wider border-2 border-[var(--cartagena-green)] rounded-xl text-lg hover:bg-[var(--cartagena-green)] transition-all duration-300"
          >
            Conoce el Festival
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <a
          href="#sobre"
          onClick={(e) => scrollToSection(e, '#sobre')}
          data-testid="hero-scroll-indicator"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section >
  );
};
