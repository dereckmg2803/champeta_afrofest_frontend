import { Link } from 'react-router-dom';
import { Users, Heart, Handshake, Star, Award } from 'lucide-react';
import { DancingCouple, Sparkle } from '../components/CartagenaIllustrations';
import { useLanguage } from '../contexts/LanguageContext';

const allies = [
  { name: 'Latam Bridge', logo: '/allies/latam-bridge.png' },
  { name: 'HMS Music & Sound', logo: '/allies/hms-music.png' },
  { name: 'Lemar Ilustre', logo: '/allies/lemar-ilustre.png' },
  { name: 'Mincultura', logo: '/allies/mincultura.png' },
  { name: 'SBS Spanish', logo: '/allies/sbs-spanish.png' }
];

export default function ComunidadPage() {
  const { t } = useLanguage();

  const communityMembers = [
    {
      type: t('community.members.founders.title'),
      icon: Star,
      color: 'var(--cartagena-yellow)',
      members: [
        {
          name: t('community.members.founders.community.name'),
          role: t('community.members.founders.community.role'),
          description: t('community.members.founders.community.description')
        }
      ]
    },
    {
      type: t('community.members.collaborators.title'),
      icon: Heart,
      color: 'var(--cartagena-red)',
      members: [
        {
          name: t('community.members.collaborators.artists.name'),
          role: t('community.members.collaborators.artists.role'),
          description: t('community.members.collaborators.artists.description')
        },
        {
          name: t('community.members.collaborators.dancers.name'),
          role: t('community.members.collaborators.dancers.role'),
          description: t('community.members.collaborators.dancers.description')
        },
        {
          name: t('community.members.collaborators.volunteers.name'),
          role: t('community.members.collaborators.volunteers.role'),
          description: t('community.members.collaborators.volunteers.description')
        }
      ]
    },
    {
      type: t('community.members.allies.title'),
      icon: Handshake,
      color: 'var(--cartagena-green)',
      members: [
        {
          name: t('community.members.allies.production.name'),
          role: t('community.members.allies.production.role'),
          description: t('community.members.allies.production.description')
        },
        {
          name: t('community.members.allies.culture.name'),
          role: t('community.members.allies.culture.role'),
          description: t('community.members.allies.culture.description')
        },
        {
          name: t('community.members.allies.audio.name'),
          role: t('community.members.allies.audio.role'),
          description: t('community.members.allies.audio.description')
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Glenia Zúñiga Orozco",
      role: t('community.testimonials.glenia.role'),
      image: "/testimonials/glenia.jpg",
      objectPosition: "object-center",
      testimonial: t('community.testimonials.glenia.testimonial'),
      favorites: t('community.testimonials.glenia.favorites')
    },
    {
      name: "Heidy Montes Garces",
      role: t('community.testimonials.heidy.role'),
      image: "/testimonials/heidy.jpg",
      objectPosition: "object-[50%_30%]",
      testimonial: t('community.testimonials.heidy.testimonial'),
      favorites: t('community.testimonials.heidy.favorites')
    },
    {
      name: "Lilibeth María Salas Cassiani",
      role: t('community.testimonials.lilibeth.role'),
      image: "/testimonials/lilibeth.jpg",
      objectPosition: "object-center",
      testimonial: t('community.testimonials.lilibeth.testimonial'),
      favorites: t('community.testimonials.lilibeth.favorites')
    },
    {
      name: "Victor David Villadiego Alvarez",
      role: t('community.testimonials.victor.role'),
      image: "/testimonials/victor.jpg",
      objectPosition: "object-center",
      testimonial: t('community.testimonials.victor.testimonial'),
      favorites: t('community.testimonials.victor.favorites')
    },
    {
      name: "Joyce Patricia Navarro Anaya",
      role: t('community.testimonials.joyce.role'),
      image: "/testimonials/joyce.jpg",
      objectPosition: "object-top",
      testimonial: t('community.testimonials.joyce.testimonial'),
      favorites: t('community.testimonials.joyce.favorites')
    },
    {
      name: "Ilia Tapias Zuniga",
      role: t('community.testimonials.ilia.role'),
      image: "/testimonials/ilia.jpg",
      objectPosition: "object-center",
      testimonial: t('community.testimonials.ilia.testimonial'),
      favorites: t('community.testimonials.ilia.favorites')
    },
    {
      name: "María Paula Villadiego",
      role: t('community.testimonials.mariapaula.role'),
      image: "/testimonials/mariapaula.jpg",
      objectPosition: "object-[50%_40%]",
      testimonial: t('community.testimonials.mariapaula.testimonial'),
      favorites: t('community.testimonials.mariapaula.favorites')
    },
    {
      name: "Jenn Bonilla",
      role: t('community.testimonials.jenn.role'),
      image: "/testimonials/jennbonilla.jpg",
      objectPosition: "object-[45%_30%]",
      testimonial: t('community.testimonials.jenn.testimonial'),
      favorites: t('community.testimonials.jenn.favorites')
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">

      {/* HERO */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: 'var(--dark-section)' }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/ComunidadPic.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="absolute top-20 left-10 opacity-50 hidden md:block">
          <DancingCouple size={80} />
        </div>

        <Sparkle size={24} className="absolute top-32 right-20" color="var(--cartagena-yellow)" />

        <div className="container-festival relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-[var(--cartagena-green)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-6">
            {t('community.hero.badge')}
          </span>
          <h1 className="font-['Titan_One'] text-4xl md:text-6xl lg:text-7xl uppercase text-white mb-6">
            {t('community.hero.title1')} <span className="text-[var(--cartagena-yellow)]">{t('community.hero.title2')}</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
            {t('community.hero.description')}
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
              {t('community.mission.title1')} <span className="text-[var(--cartagena-red)]">{t('community.mission.title2')}</span>
            </h2>
            <p className="text-[var(--foreground)]/80 text-lg leading-relaxed">
              {t('community.mission.paragraph')}
            </p>
          </div>
        </div>
      </section>
      {/* TESTIMONIOS REDISEÑADOS */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--dark-section)' }}>
        <div className="container-festival">

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-green)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              {t('community.testimonials.badge')}
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-white">
              {t('community.testimonials.title1')} <span className="text-[var(--cartagena-yellow)]">{t('community.testimonials.title2')}</span>
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden border-2 border-[var(--foreground)] pico-shadow-sm hover:-translate-y-2 transition-all duration-300"
              >

                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className={`w-full h-full object-cover ${person.objectPosition}`}
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-['Titan_One'] text-lg uppercase text-[var(--foreground)]">
                    {person.name}
                  </h3>

                  <p className="text-sm text-[var(--cartagena-green)] font-bold mb-3">
                    {person.role}
                  </p>

                  <p className="text-[var(--foreground)]/80 text-sm mb-4 leading-relaxed">
                    {person.testimonial}
                  </p>

                  {person.favorites && (
                    <p className="text-xs italic text-[var(--foreground)]/60">
                      {person.favorites}
                    </p>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Members */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container-festival">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--cartagena-red)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4">
              {t('community.members.badge')}
            </span>
            <h2 className="font-['Titan_One'] text-3xl md:text-5xl uppercase text-[var(--foreground)]">
              {t('community.members.title1')}<span className="text-[var(--cartagena-green)]">{t('community.members.title2')}</span>
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
              {t('community.allies.badge')}
            </span>
            <h2
              data-testid="allies-title"
              className="font-['Titan_One'] text-4xl md:text-5xl lg:text-6xl uppercase text-[var(--foreground)] mb-4"
            >
              {t('community.allies.title1')} <span className="text-[var(--cartagena-red)]">{t('community.allies.title2')}</span>
            </h2>
            <p className="text-[var(--foreground)]/70 text-base md:text-lg">
              {t('community.allies.description1')} <span className="text-[var(--cartagena-green)] font-bold">{t('community.allies.description2')}</span>
            </p>
          </div>

          <div className="text-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
              {allies.map((ally, index) => (
                <div
                  key={ally.name}
                  data-testid={`ally-card-${index}`}
                  className="group relative p-6 bg-white border-2 border-[var(--foreground)] rounded-xl flex items-center justify-center aspect-[4/3] hover:scale-105 transition-transform cursor-pointer"
                >
                  {/* Placeholder logo */}
                  <div className="text-center">
                    <div className="h-16 flex items-center justify-center mb-2">
                      {ally.logo ? (
                        <img
                          src={ally.logo}
                          alt={ally.name}
                          className="max-h-12 w-auto object-contain bg-transparent"
                        />
                      ) : (
                        <div className="w-12 h-12 flex items-center justify-center bg-[var(--foreground)] rounded-lg text-white font-bold text-lg">
                          {ally.initials}
                        </div>
                      )}
                    </div>

                    <span className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider">
                      {ally.name}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/10 rounded-xl transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-[var(--foreground)]/60 mb-4">{t('community.contact.question')}</p>
            <Link
              to="/#comunidad"
              className="inline-block px-6 py-3 bg-[var(--cartagena-green)] text-white font-bold uppercase tracking-wider rounded-xl border-2 border-[var(--foreground)] hover:bg-[var(--cartagena-green)]/90 transition-colors"
            >
              {t('community.contact.button')}
            </Link>
          </div>
        </div>
      </section>
      {/* CTA 
      <section className="py-20" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container-festival text-center">
          <Award className="w-12 h-12 mx-auto mb-4 text-[var(--cartagena-yellow)]" />
          <h2 className="font-['Titan_One'] text-3xl md:text-4xl uppercase text-[var(--foreground)] mb-6">
            Únete a la <span className="text-[var(--cartagena-green)]">Familia</span>
          </h2>
          <Link
            to="/#comunidad"
            className="inline-block px-8 py-4 bg-[var(--cartagena-red)] text-white font-bold uppercase tracking-wider rounded-xl border-2 border-[var(--foreground)] pico-shadow hover:bg-[var(--cartagena-red)]/90 transition-colors"
          >
            Registrarme
          </Link>
        </div>
      </section>
*/}
    </div>
  );
}