import { Link } from 'react-router-dom';
import { Music, Disc3, Users, Radio, Globe, Heart } from 'lucide-react';
import { VinylDisc, Sparkle, DancingCouple, MusicNote } from '../components/CartagenaIllustrations';
import { useLanguage } from '../contexts/LanguageContext';






export default function ChampetaPage() {
  const { t } = useLanguage();

  const artists = (t) => [
    {
      name: "Louis Towers",
      era: t("champeta.artists.louis.era"),
      description: t("champeta.artists.louis.description")
    },
    {
      name: "Mr. Black",
      era: t("champeta.artists.mrblack.era"),
      description: t("champeta.artists.mrblack.description")
    },
    {
      name: "Kevin Florez",
      era: t("champeta.artists.kevin.era"),
      description: t("champeta.artists.kevin.description")
    },
    {
      name: "Zaider",
      era: t("champeta.artists.zaider.era"),
      description: t("champeta.artists.zaider.description")
    }
  ];
  const artistsm = artists(t);

  const timeline = (t) => [
    { year: '1970s', event: t("champeta.timeline.seventies") },
    { year: '1980s', event: t("champeta.timeline.eighties") },
    { year: '1990s', event: t("champeta.timeline.nineties") },
    { year: '2000s', event: t("champeta.timeline.twoThousands") },
    { year: '2010s', event: t("champeta.timeline.twentyTens") },
    { year: '2020s', event: t("champeta.timeline.twentyTwenties") }
  ];
  const timelines = timeline(t);
  const champetaElements = (t) => [
    {
      icon: Disc3,
      title: t("champeta.elements.africanRhythm.title"),
      description: t("champeta.elements.africanRhythm.description"),
      color: 'var(--cartagena-green)'
    },
    {
      icon: Radio,
      title: t("champeta.elements.pico.title"),
      description: t("champeta.elements.pico.description"),
      color: 'var(--cartagena-yellow)'
    },
    {
      icon: Users,
      title: t("champeta.elements.dance.title"),
      description: t("champeta.elements.dance.description"),
      color: 'var(--cartagena-red)'
    },
    {
      icon: Globe,
      title: t("champeta.elements.identity.title"),
      description: t("champeta.elements.identity.description"),
      color: 'var(--caribbean-deep)'
    }
  ];
  const elements = champetaElements(t);
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: 'var(--dark-section)' }}>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/ChampetaBanner.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%'
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
            <span>
              {t("champeta.hero.badge")}
            </span>
          </span>
          <h1 className="font-['Titan_One'] text-4xl md:text-6xl lg:text-7xl uppercase text-white mb-6">
            {t("champeta.hero.title1")}  <span className="text-[var(--cartagena-yellow)]">{t("champeta.hero.title2")} </span>?
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto italic">
            {t("champeta.hero.quote")}
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
                {t("champeta.definition.badge")}
              </span>
              <h2 className="font-['Titan_One'] text-3xl md:text-4xl uppercase text-[var(--foreground)] mb-6">
                {t("champeta.definition.title1")} <span className="text-[var(--cartagena-red)]">{t("champeta.definition.title2")}</span>
              </h2>
              <div className="space-y-4 text-[var(--foreground)]/80">
                <p>
                  {t("champeta.definition.paragraph11")} <strong>{t("champeta.definition.paragraph12")} </strong> {t("champeta.definition.paragraph13")}
                </p>
                <p>
                  {t("champeta.definition.paragraph2")}
                </p>
                <p>
                  {t("champeta.definition.paragraph31")} <strong>{t("champeta.definition.paragraph32")}</strong>
                  {t("champeta.definition.paragraph33")}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden border-4 border-[var(--foreground)] pico-shadow">
                <img
                  src="/RitmoPic.jpg"
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
              {t("champeta.elements.badge")}
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-[var(--foreground)]">
              {t("champeta.elements.title1")} <span className="text-[var(--cartagena-green)]">{t("champeta.elements.title2")}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {elements.map((element, index) => (
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
              {t("champeta.timeline.badge")}
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-white">
              {t("champeta.timeline.title1")}  <span className="text-[var(--cartagena-red)]"> {t("champeta.timeline.title2")}  </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timelines.map((item, index) => (
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
              {t("champeta.artists.badge")}
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-[var(--foreground)]">
              {t("champeta.artists.title1")}  <span className="text-[var(--cartagena-yellow)]">{t("champeta.artists.title2")} </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {artistsm.map((artist, index) => (
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
            {t("champeta.cta.title1")}  <span className="text-[var(--cartagena-green)]">{t("champeta.cta.title2")} </span> {t("champeta.cta.title3")}
          </h2>
          <p className="text-[var(--foreground)]/70 mb-8 max-w-2xl mx-auto">
            {t("champeta.cta.subtitle")}
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-[var(--cartagena-red)] text-white font-bold uppercase tracking-wider rounded-xl border-2 border-[var(--foreground)] pico-shadow hover:bg-[var(--cartagena-red)]/90 transition-colors"
          >
            {t("champeta.cta.button")}
          </Link>
        </div>
      </section>
    </div>
  );
}
