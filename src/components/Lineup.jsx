export const Lineup = () => {
  const artists = [
    {
      name: 'Kevin Florez',
      time: '12:30 PM',
      stage: 'Escenario Principal',
      image: 'https://images.unsplash.com/photo-1735885684713-da6317cebe90?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwzfHxyZWdnYWV0b24lMjBzaW5nZXIlMjBwZXJmb3JtaW5nJTIwbGl2ZWx5JTIwc3RhZ2UlMjBjb25jZXJ0fGVufDB8fHx8MTc3MTI2NjcyNHww&ixlib=rb-4.1.0&q=85',
      color: 'var(--cartagena-yellow)'
    },
    {
      name: 'Mr. Black',
      time: '3:00 PM',
      stage: 'Escenario A',
      image: 'https://images.unsplash.com/photo-1695314286227-fb84c004b74d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwxfHxyZWdnYWV0b24lMjBzaW5nZXIlMjBwZXJmb3JtaW5nJTIwbGl2ZWx5JTIwc3RhZ2UlMjBjb25jZXJ0fGVufDB8fHx8MTc3MTI2NjcyNHww&ixlib=rb-4.1.0&q=85',
      color: 'var(--cartagena-green)'
    },
    {
      name: 'Zaider',
      time: '11:30 PM',
      stage: 'Escenario A',
      image: 'https://images.unsplash.com/photo-1735885684742-39a7c835eb68?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwyfHxyZWdnYWV0b24lMjBzaW5nZXIlMjBwZXJmb3JtaW5nJTIwbGl2ZWx5JTIwc3RhZ2UlMjBjb25jZXJ0fGVufDB8fHx8MTc3MTI2NjcyNHww&ixlib=rb-4.1.0&q=85',
      color: 'var(--cartagena-red)'
    },
    {
      name: 'Lil Silvio & El Vega',
      time: '12:00 PM',
      stage: 'Escenario A',
      image: 'https://images.unsplash.com/photo-1690312022107-4fb10402aee6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxhZnJvLWNvbG9tYmlhbiUyMGNoYW1wZXRhJTIwZGFuY2VycyUyMGVuZXJnZXRpYyUyMGZlc3RpdmFsJTIwY3Jvd2R8ZW58MHx8fHwxNzcxMjY2NzExfDA&ixlib=rb-4.1.0&q=85',
      color: 'var(--caribbean-deep)'
    }
  ];

  return (
    <section 
      id="lineup" 
      data-testid="lineup-section"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--muted)' }}
    >
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1626041293558-21fd007149d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHx2aWJyYW50JTIwY2FydGFnZW5hJTIwY29sb21iaWElMjBzdHJlZXQlMjBtdXJhbCUyMGFydCUyMGNvbG9yZnVsfGVufDB8fHx8MTc3MTI2NjcxMHww&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="container-festival relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[var(--cartagena-green)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4 border-2 border-[var(--foreground)]">
            Lineup
          </span>
          <h2 
            data-testid="lineup-title"
            className="font-['Titan_One'] text-4xl md:text-5xl lg:text-6xl uppercase text-[var(--foreground)] mb-4"
          >
            ¡Prepárate para <span className="text-[var(--cartagena-red)]">Vibrar</span>!
          </h2>
          <p className="text-[var(--foreground)]/70 text-base md:text-lg max-w-2xl mx-auto">
            Los artistas más icónicos de la champeta reunidos en un solo lugar
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {artists.map((artist, index) => (
            <div
              key={artist.name}
              data-testid={`artist-card-${index}`}
              className="group relative overflow-hidden border-2 border-[var(--foreground)] rounded-2xl bg-white pico-shadow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Artist Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Color overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ backgroundColor: artist.color }}
                />
              </div>

              {/* Artist Info */}
              <div 
                className="p-4 text-center"
                style={{ backgroundColor: artist.color }}
              >
                <h3 className="font-['Titan_One'] text-base md:text-lg uppercase text-[var(--foreground)] leading-tight">
                  {artist.name}
                </h3>
                <p className="text-xs md:text-sm text-[var(--foreground)]/80 mt-1">
                  {artist.time} - {artist.stage}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            data-testid="lineup-cta"
            className="px-8 py-4 bg-[var(--cartagena-yellow)] text-[var(--foreground)] font-bold uppercase tracking-wider border-2 border-[var(--foreground)] pico-shadow rounded-xl hover:bg-[var(--cartagena-yellow)]/90 transition-colors"
          >
            Ver Todo el Lineup
          </button>
        </div>
      </div>
    </section>
  );
};
