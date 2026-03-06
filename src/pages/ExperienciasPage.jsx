import { Link } from 'react-router-dom';
import { Music, GraduationCap, Utensils, Users, Camera, Palette, Sparkles, Clock } from 'lucide-react';
import { VinylDisc, Sparkle, DancingCouple, MusicNote } from '../components/CartagenaIllustrations';
import { useLanguage } from '../contexts/LanguageContext';


export default function ExperienciasPage() {
  const { t } = useLanguage();

  const experiences = [
    {
      icon: Music,
      title: t('experiences.music.title'),
      description: t('experiences.music.description'),
      details: t("experiences.music.details", { returnObjects: true }),
      color: 'var(--cartagena-red)',
      image: '/MusicaPic.jpg'
    },
    {
      icon: GraduationCap,
      title: t('experiences.dance.title'),
      description: t('experiences.dance.description'),
      details: t("experiences.dance.details", { returnObjects: true }),
      color: 'var(--cartagena-yellow)',
      image: '/TalleresPic.jpg'
    },
    {
      icon: Utensils,
      title: t('experiences.food.title'),
      description: t('experiences.food.description'),
      details: t("experiences.food.details", { returnObjects: true }),
      color: 'var(--cartagena-green)',
      image: '/GastronomiaPic.jpg'
    },
    {
      icon: Users,
      title: t('experiences.community.title'),
      description: t('experiences.community.description'),
      details: t("experiences.community.details", { returnObjects: true }),
      color: 'var(--caribbean-deep)',
      image: '/ComunidadPic.jpg'
    }
  ];

  const workshops = [
    {
      title: t('experiences.workshops.basic.title'),
      duration: '45 min',
      level: t('experiences.workshops.basic.level'),
      description: t('experiences.workshops.basic.description'),
      color: 'var(--cartagena-green)'
    },
    {
      title: t('experiences.workshops.perreo.title'),
      duration: '1 hora',
      level: t('experiences.workshops.perreo.level'),
      description: t('experiences.workshops.perreo.description'),
      color: 'var(--cartagena-yellow)'
    },
    {
      title: t('experiences.workshops.choreography.title'),
      duration: '1.5 horas',
      level: t('experiences.workshops.choreography.level'),
      description: t('experiences.workshops.choreography.description'),
      color: 'var(--cartagena-red)'
    },
    {
      title: t('experiences.workshops.history.title'),
      duration: '30 min',
      level: t('experiences.workshops.history.level'),
      description: t('experiences.workshops.history.description'),
      color: 'var(--caribbean-deep)'
    }
  ];

  const schedule = [
    { time: '12:00 PM', activity: t('experiences.schedule.open'), type: 'general' },
    { time: '1:00 PM', activity: t('experiences.schedule.basicWorkshop'), type: 'workshop' },
    { time: '2:30 PM', activity: t('experiences.schedule.djSet'), type: 'music' },
    { time: '4:00 PM', activity: t('experiences.schedule.perreoWorkshop'), type: 'workshop' },
    { time: '5:30 PM', activity: t('experiences.schedule.guestArtist'), type: 'music' },
    { time: '7:00 PM', activity: t('experiences.schedule.groupChoreo'), type: 'workshop' },
    { time: '8:30 PM', activity: t('experiences.schedule.mainShow'), type: 'music' },
    { time: '11:00 PM', activity: t('experiences.schedule.closing'), type: 'music' }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: 'var(--dark-section)' }}>
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url('/ExperienciasBanner.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%'
          }}
        />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 opacity-60 hidden md:block animate-float">
          <VinylDisc size={80} />
        </div>
        <div className="absolute bottom-32 left-10 opacity-40 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
          <DancingCouple size={70} />
        </div>
        <MusicNote size={35} className="absolute top-40 left-1/4 opacity-50 hidden md:block" color="var(--cartagena-green)" />

        <div className="container-festival relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-[var(--caribbean-deep)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-6">
            {t('experiences.hero.badge')}
          </span>
          <h1 className="font-['Titan_One'] text-4xl md:text-6xl lg:text-7xl uppercase text-white mb-6">
            {t('experiences.hero.title1')} <span className="text-[var(--cartagena-yellow)]">{t('experiences.hero.title2')}</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
            {t('experiences.hero.description')}
          </p>
        </div>

        {/* Decorative stripes */}
        <div className="absolute bottom-0 left-0 w-full h-3 bg-[var(--cartagena-green)]" />
        <div className="absolute bottom-3 left-0 w-full h-2 bg-[var(--cartagena-yellow)]" />
        <div className="absolute bottom-5 left-0 w-full h-1 bg-[var(--cartagena-red)]" />
      </section>

      {/* Main Experiences */}
      <section className="py-20 md:py-32">
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-red)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              {t('experiences.main.badge')}
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-[var(--foreground)]">
              {t('experiences.main.title1')} <span className="text-[var(--cartagena-green)]"> {t('experiences.main.title2')}</span>
            </h2>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div
                    className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-lg"
                    style={{ backgroundColor: exp.color }}
                  >
                    <exp.icon className="w-5 h-5 text-white" />
                    <span className="font-bold uppercase text-white text-sm tracking-wider">
                      {exp.title}
                    </span>
                  </div>
                  <h3 className="font-['Titan_One'] text-2xl md:text-3xl uppercase text-[var(--foreground)] mb-4">
                    {exp.title}
                  </h3>
                  <p className="text-[var(--foreground)]/80 mb-6">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-center gap-3 text-[var(--foreground)]/70">
                        <Sparkle size={12} color={exp.color} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div
                    className="aspect-video rounded-2xl overflow-hidden border-4 pico-shadow"
                    style={{ borderColor: exp.color }}
                  >
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-yellow)] text-[var(--foreground)] font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              {t('experiences.workshops.badge')}
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-[var(--foreground)]">
              {t('experiences.workshops.title1')} <span className="text-[var(--cartagena-red)]">{t('experiences.workshops.title2')}</span>
            </h2>
            <p className="text-[var(--foreground)]/70 mt-4 max-w-2xl mx-auto">
              {t('experiences.workshops.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border-2 border-[var(--foreground)] pico-shadow-sm"
              >
                <div
                  className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: workshop.color }}
                >
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-['Titan_One'] text-lg uppercase text-[var(--foreground)] mb-2">
                  {workshop.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-2 py-1 text-xs font-bold uppercase rounded"
                    style={{ backgroundColor: workshop.color, color: 'white' }}
                  >
                    {workshop.level}
                  </span>
                  <span className="text-[var(--foreground)]/60 text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {workshop.duration}
                  </span>
                </div>
                <p className="text-[var(--foreground)]/70 text-sm">
                  {workshop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--dark-section)' }}>
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-green)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              {t('experiences.schedule.badge')}
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-white">
              {t('experiences.schedule.title1')} <span className="text-[var(--cartagena-yellow)]">{t('experiences.schedule.title2')}</span>
            </h2>
            <p className="text-white/60 mt-4">
              {t('experiences.schedule.subtitle')}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 mb-4 last:mb-0"
              >
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="font-['Titan_One'] text-white/80">{item.time}</span>
                </div>
                <div
                  className="w-3 h-3 mt-2 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: item.type === 'workshop' ? 'var(--cartagena-yellow)' :
                      item.type === 'music' ? 'var(--cartagena-red)' : 'var(--cartagena-green)'
                  }}
                />
                <div className="flex-1 pb-4 border-b border-white/10">
                  <p className="text-white">{item.activity}</p>
                  <span
                    className="text-xs uppercase"
                    style={{
                      color: item.type === 'workshop' ? 'var(--cartagena-yellow)' :
                        item.type === 'music' ? 'var(--cartagena-red)' : 'var(--cartagena-green)'
                    }}
                  >
                    {item.type === 'workshop' ? 'Taller' : item.type === 'music' ? 'Música' : 'General'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/60 text-sm">
              {t('experiences.schedule.note')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container-festival text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-[var(--cartagena-yellow)]" />
          <h2 className="font-['Titan_One'] text-3xl md:text-4xl uppercase text-[var(--foreground)] mb-6">
            {t('experiences.cta.title1')} <span className="text-[var(--cartagena-red)]">{t('experiences.cta.title2')}</span>?
          </h2>
          <p className="text-[var(--foreground)]/70 mb-8 max-w-2xl mx-auto">
            {t('experiences.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#entradas"
              className="inline-block px-8 py-4 bg-[var(--cartagena-red)] text-white font-bold uppercase tracking-wider rounded-xl border-2 border-[var(--foreground)] pico-shadow hover:bg-[var(--cartagena-red)]/90 transition-colors"
            >
              {t('experiences.cta.tickets')}
            </Link>
            <Link
              to="/#comunidad"
              className="inline-block px-8 py-4 bg-[var(--cartagena-green)] text-white font-bold uppercase tracking-wider rounded-xl border-2 border-[var(--foreground)] pico-shadow hover:bg-[var(--cartagena-green)]/90 transition-colors"
            >
              {t('experiences.cta.community')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
