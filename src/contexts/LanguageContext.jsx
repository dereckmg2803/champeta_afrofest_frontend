import { createContext, useContext, useState, useEffect } from 'react';

// Translations object - easily extensible for more languages
const translations = {
  es: {
    nav: {
      inicio: 'Inicio',
      festival: 'Festival',
      champeta: 'Champeta',
      experiencias: 'Experiencias',
      comunidad: 'Comunidad',
      joinCommunity: 'Únete a la Comunidad',
      joinCommunityShort: 'Únete',
    },

    hero: {
      buyTickets: 'Comprar Entradas',
      knowFestival: 'Conoce el Festival',
      scroll: 'Scroll',
    },
    experiences: {
      badge: 'Experiencias',
      title: 'Disfruta las Experiencias del Festival',
      highlight: 'Experiencias',
      subtitle: 'Más que un concierto, una experiencia cultural completa',

      items: {
        musicTitle: 'Música en Vivo',
        musicDesc: 'Disfruta de los mejores artistas de champeta en escenarios de primer nivel.',

        workshopTitle: 'Talleres de Champeta',
        workshopDesc: 'Aprende los pasos más icónicos con bailarines profesionales.',

        foodTitle: 'Gastronomía Caribeña',
        foodDesc: 'Saborea los platos más tradicionales del Caribe colombiano.',

        communityTitle: 'Comunidad & Cultura',
        communityDesc: 'Conecta con la diáspora africana y celebra nuestra herencia cultural.'
      }
    },
    culture: {
      badge: 'Cultura',

      title: '¿Qué es la ',
      highlight: 'Champeta',

      description:
        '"Amo este ritmo porque lo llevo en la sangre" - La champeta es un género musical de origen afro-caribeño nacido en Cartagena, Colombia. Mezcla ritmos africanos con sonidos del Caribe creando un estilo energético y único de baile y música que nace del corazón del pueblo.',

      items: {
        rhythmTitle: 'Ritmo Afro-Caribeño',
        rhythmDesc:
          'Ritmos y percusiones africanas fusionadas con sonidos caribeños que hacen vibrar el corazón.',

        danceTitle: 'Baile & Energía',
        danceDesc:
          'Con pasos únicos y movimientos que expresan alegría, resistencia y libertad.',

        cultureTitle: 'Cultura Popular',
        cultureDesc:
          'Comunidades que mantienen viva la tradición a través de generaciones en Cartagena.',

        instrumentsTitle: 'Instrumentos & Sonido',
        instrumentsDesc:
          'Instrumentos como las congas, timbales y el característico sonido del picó.'
      }
    },
    tickets: {
      badge: 'Entradas',
      title: 'Cultura & ',
      highlight: 'Gastronomía',
      subtitle: '¡Sabor Caribeño Único!',

      types: {
        earlyBird: 'Early Bird',
        general: 'General',
        vip: 'VIP Imperio'
      },

      popular: 'Popular',
      buy: 'Comprar Ahora',

      features: {
        generalAccess: 'Acceso general al festival',
        allStages: 'Entrada a todos los escenarios',
        eventMap: 'Mapa del evento',
        welcomeKit: 'Kit de bienvenida digital',

        foodZone: 'Zona de comidas incluida',
        exclusiveMerch: 'Merchandise exclusivo',
        meetGreetRaffle: 'Meet & Greet (sorteo)',

        vipAccess: 'Acceso VIP a todas las áreas',
        priorityZone: 'Zona preferencial en escenarios',
        premiumOpenBar: 'Barra libre premium',
        guaranteedMeet: 'Meet & Greet garantizado',
        vipMerch: 'Merchandise VIP exclusivo',
        backstage: 'Acceso backstage'
      },

      note: '* Los precios pueden variar. Consulta términos y condiciones.'
    },
    community: {
      badge: 'Comunidad & Diáspora',

      title: 'Unimos ',
      highlightCity: 'Cartagena',
      titleMiddle: ' con el ',
      highlightWorld: 'Mundo',

      formTitle: 'Sé Parte del ',
      formHighlight: 'Movimiento',

      formSubtitle:
        '¿Quieres ser aliado de Champeta AfroFest? Llena este formulario.',

      successTitle: '¡Gracias por unirte!',
      successMessage:
        'Te contactaremos pronto con más información sobre el festival.',

      placeholders: {
        name: 'Nombre',
        phone: 'Teléfono',
        email: 'Correo Electrónico',
        city: 'Ciudad',
        country: 'País',
        message: 'Tu Mensaje (Opcional)'
      },

      checkbox:
        'Autorizo el uso de mis datos para recibir información del festival.',

      submit: 'Enviar',

      privacy: 'Revisar políticas de privacidad',

      errors: {
        name: 'Nombre requerido',
        phone: 'Teléfono requerido',
        email: 'Correo requerido',
        invalidEmail: 'Correo inválido',
        city: 'Ciudad requerida',
        country: 'País requerido',
        terms: 'Debe autorizar el uso de datos',
        submitError: 'Error enviando el formulario'
      }
    },
    allies: {
      title: 'Nuestros ',
      highlight: 'Valecitas',

      subtitleStart: 'Empresas y organizaciones que creen en nuestra ',
      subtitleHighlight: 'misión',

      communityTextStart: 'La ',
      communityBold: 'COMUNIDAD',
      communityMiddle: ' hace posible el ',
      communityFestival: 'FESTIVAL',

      ctaText: '¿Quieres ser aliado de Champeta AfroFest? Apoya la ',
      champeta: 'CHAMPETA AFROCARIBEÑA',

      contact: 'Contáctanos'
    },
    about: {
      badge: 'Sobre el Festival',
      title: '¡La Champeta se Vive!',
      highlight: 'Vive',
      description:
        'Champeta AfroFest surge como una iniciativa para celebrar la cultura en las fiestas de la independencia, y ha evolucionado para convertirse en un espacio intercultural donde personas de diversas nacionalidades pueden experimentar la riqueza de la champeta, la música, la danza, la gastronomía y las tradiciones caribeñas.',

      videoDescription:
        'Así se vivió la energía, el ritmo y la fuerza cultural de Champeta AfroFest. Una celebración donde la música une corazones y la champeta se convierte en identidad.',

      cta: 'Nuestra Historia',

      features: {
        musicTitle: 'Música en Vivo',
        musicDesc:
          'Los mejores artistas de champeta y música afro-caribeña en un solo escenario.',

        communityTitle: 'Comunidad',
        communityDesc:
          'Un espacio inclusivo para colombianos y personas de diversas nacionalidades.',

        cartagenaTitle: 'Cartagena',
        cartagenaDesc:
          'En el corazón de la ciudad más caribeña de Colombia, cuna de la champeta.',

        experienceTitle: 'Experiencia Única',
        experienceDesc:
          'Música, danza, gastronomía y tradiciones caribeñas en un solo lugar.',
      },
    },
    footer: {
      nav: {
        inicio: 'Inicio',
        lineup: 'Lineup',
        experiencias: 'Experiencias',
        cultura: 'Cultura',
        entradas: 'Entradas'
      },

      copyright: '© 2025 Champeta AfroFest. Todos los derechos reservados.',

      terms: 'Términos y Condiciones',
      privacy: 'Política de Privacidad'
    },

    spotify: {
      listen: 'Escuchar Playlist',
      close: 'Cerrar',
    },

    languages: {
      es: 'Español',
      en: 'English',
    },
    festival: {
      hero: {
        badge: "Nuestra Historia",
        title1: "El",
        title2: "Festival",
        description: "El evento busca visibilizar, fortalecer y celebrar la champeta como expresión artística y patrimonial del Caribe colombiano y está orientado a la promoción de la diversidad cultural y la inclusión social."
      },

      stats: {
        attendees: "Asistentes",
        artists: "Artistas",
        editions: "Ediciones",
        satisfaction: "Satisfacción"
      },

      origin: {
        badge: "Origen",
        title1: "¿Cómo",
        title2: "Nació?",
        p1: "Champeta AfroFest surge como una idea de la comunidad costeña residente en la ciudad...",
        p2: "La música, la danza, la gastronomía y la diversidad de tradiciones caribeñas...",
        p3: "El 15 de noviembre de 2025 celebramos nuestra primera edición..."
      },

      editions: {
        badge: "Ediciones",
        title1: "Versiones",
        title2: "Anteriores",
        edition: "Edición",
        comingSoon: "¡Próximamente!",
        cta: "Únete a la Comunidad"
      },

      gallery: {
        badge: "Galería",
        title1: "Momentos",
        title2: "Inolvidables",
        description: "Revive los mejores momentos de nuestras ediciones anteriores"
      },

      cta: {
        title1: "¿Quieres ser parte de la ",
        title2: "historia",
        description: "Únete a nuestra comunidad y sé el primero en enterarte de la próxima edición",
        button: "Únete a la Comunidad"
      }
    },
    champeta: {
      hero: {
        badge: 'Cultura',
        title1: '¿Qué es la',
        title2: 'Champeta',
        quote: '“Amo este ritmo porque lo llevo en la sangre”'
      },

      definition: {
        badge: 'Definición',
        title1: 'El Ritmo del',
        title2: 'Caribe',

        paragraph11:
          'La ',
        paragraph12:
          'champeta',
        paragraph13:
          'es un género musical de origen afrocaribeño nacido en Cartagena de Indias, Colombia. Surgió en los barrios populares de la ciudad como una fusión de ritmos africanos con sonidos del Caribe.',

        paragraph2:
          'Su nombre proviene del cuchillo "champeta", una herramienta usada por pescadores y vendedores de los mercados populares, reflejando su origen humilde y callejero.',

        paragraph31:
          'Más que un género musical, la champeta es una ',
        paragraph32:
          'forma de vida',
        paragraph33:
          ', una expresión de identidad afrodescendiente y un símbolo de resistencia cultural que ha trascendido fronteras.'
      },

      elements: {
        badge: 'Elementos',
        title1: 'Los Pilares de la',
        title2: 'Champeta',

        africanRhythm: {
          title: 'Ritmo Africano',
          description:
            'La champeta tiene sus raíces en ritmos africanos como el soukous, highlife y mbaqanga que llegaron al Caribe colombiano.'
        },

        pico: {
          title: 'Cultura Picó',
          description:
            'Los poderosos sistemas de sonido llamados “picós” fueron esenciales para difundir la champeta en los barrios de Cartagena.'
        },

        dance: {
          title: 'Baile',
          description:
            'La champeta se vive a través del baile: movimientos sensuales, libres y llenos de energía que representan la identidad del Caribe.'
        },

        identity: {
          title: 'Identidad Cultural',
          description:
            'La champeta representa orgullo afrodescendiente, resistencia cultural y la historia de los barrios populares.'
        }
      },

      timeline: {
        badge: 'Historia',
        title1: 'Línea del',
        title2: 'Tiempo',

        seventies:
          'Llegan a Cartagena discos africanos traídos por marineros. Nace la base musical de la champeta.',

        eighties:
          'Los picós comienzan a popularizar estos sonidos africanos en los barrios.',

        nineties:
          'La champeta se consolida como género propio con artistas locales.',

        twoThousands:
          'El género comienza a expandirse fuera de Cartagena.',

        twentyTens:
          'La champeta gana reconocimiento nacional e internacional.',

        twentyTwenties:
          'La champeta se convierte en símbolo cultural global del Caribe colombiano.'
      },

      artists: {
        badge: 'Artistas',
        title1: 'Leyendas de la',
        title2: 'Champeta',

        louis: {
          era: 'Pionero',
          description:
            'Uno de los primeros exponentes de la champeta moderna en Cartagena.'
        },

        mrblack: {
          era: 'Rey de la Champeta',
          description:
            'Artista icónico que llevó la champeta a escenarios internacionales.'
        },

        kevin: {
          era: 'Nueva Generación',
          description:
            'Representante de la evolución moderna del género.'
        },

        zaider: {
          era: 'Champeta Urbana',
          description:
            'Parte de la nueva ola que mezcla champeta con sonidos contemporáneos.'
        }
      },

      cta: {
        title1: 'Vive la',
        title2: 'Champeta',
        title3: 'en Persona',
        subtitle:
          'Experimenta la energía, el ritmo y la cultura en Champeta AfroFest',
        button: 'Ver Próximo Festival'
      }
    },
    experiences: {
      hero: {
        badge: "Actividades",
        title1: "Las",
        title2: "Experiencias",
        description:
          "Más que un concierto, Champeta AfroFest es una experiencia cultural completa. Música, baile, gastronomía y comunidad en un solo lugar."
      },

      main: {
        badge: "Lo Que Encontrarás",
        title1: "Vive el",
        title2: "Festival"
      },

      music: {
        title: "Música en Vivo",
        description:
          "Disfruta de los mejores artistas de champeta en escenarios de primer nivel. Desde leyendas hasta nuevos talentos, todos unidos por el ritmo.",
        details: [
          "Escenario principal con sistema de sonido profesional",
          "Presentaciones de artistas nacionales e internacionales",
          "DJ sets especializados en champeta",
          "Música continua durante todo el evento"
        ]
      },

      dance: {
        title: "Talleres de Baile",
        description:
          "Aprende los pasos más icónicos del baile de champeta con bailarines profesionales. Desde lo básico hasta movimientos avanzados.",
        details: [
          "Clases para todos los niveles",
          "Instructores profesionales de Cartagena",
          "Aprende el estilo de perreo champeta",
          "Sesiones libres de práctica"
        ]
      },

      food: {
        title: "Gastronomía Caribeña",
        description:
          "Prueba los platos más tradicionales del Caribe colombiano. Desde ceviches hasta fritos típicos.",
        details: [
          "Food trucks con comida tradicional",
          "Bebidas tropicales refrescantes",
          "Opciones vegetarianas disponibles",
          "Postres tradicionales"
        ]
      },

      community: {
        title: "Zona de Comunidad",
        description:
          "Conecta con otros amantes de la champeta y la cultura afrocaribeña. Un espacio para compartir y crear conexiones.",
        details: [
          "Networking cultural",
          "Intercambio de experiencias",
          "Activaciones de marcas",
          "Photo booth temático"
        ]
      },

      workshops: {
        badge: "Aprende",
        title1: "Talleres de",
        title2: "Baile",
        subtitle:
          "Aprende a bailar champeta con los mejores instructores de Cartagena",

        basic: {
          title: "Champeta Básica",
          duration: "45 min",
          level: "Principiante",
          description: "Aprende los pasos fundamentales del baile de champeta"
        },

        perreo: {
          title: "Perreo Champeta",
          duration: "1 hora",
          level: "Intermedio",
          description: "Domina los movimientos de cadera característicos"
        },

        choreography: {
          title: "Coreografía Grupal",
          duration: "1.5 horas",
          level: "Todos los niveles",
          description: "Aprende una coreografía completa para bailar en grupo"
        },

        history: {
          title: "Historia del Baile",
          duration: "30 min",
          level: "Todos los niveles",
          description: "Descubre el origen y evolución del baile de champeta"
        }
      },

      schedule: {
        badge: "Programación",
        title1: "Agenda",
        title2: "Del Día",
        subtitle: "Un día completo de actividades para disfrutar",

        open: "Apertura de Puertas",
        basicWorkshop: "Taller de Champeta Básica",
        djSet: "Primer DJ Set",
        perreoWorkshop: "Taller de Perreo Champeta",
        guestArtist: "Artista Invitado #1",
        groupChoreo: "Coreografía Grupal",
        mainShow: "Show Principal",
        closing: "DJ Set de Cierre",

        types: {
          workshop: "Taller",
          music: "Música",
          general: "General"
        },

        note: "* La programación puede variar según la edición del festival"
      },

      cta: {
        title1: "Listo para",
        title2: "Sentir la Vibra",
        subtitle: "No te pierdas la próxima edición de Champeta AfroFest",
        tickets: "Comprar Entradas",
        community: "Unirse a la Comunidad"
      }
    },
    community: {

      hero: {
        badge: "Nuestra Gente",
        title1: "La",
        title2: "Comunidad",
        description:
          "Detrás de cada festival hay personas apasionadas que hacen posible la magia. Conoce a quienes construyen este movimiento."
      },

      mission: {
        title1: "Juntos Hacemos",
        title2: "Historia",
        paragraph:
          "Champeta AfroFest es más que un festival, es un movimiento comunitario. Nació de la iniciativa de la comunidad caribeña con el sueño de crear un espacio donde nuestra cultura se celebre, se preserve y se comparta con el mundo. Cada persona que participa, cada aliado que nos apoya y cada asistente que vibra con nosotros es una parte fundamental de esta familia."
      },

      testimonials: {
        badge: "Testimonios",
        title1: "Lo que Dice la",
        title2: "Comunidad",

        glenia: {
          role: "Administradora de Empresas | Especialista en Gerencia de Mercadeo",
          testimonial:
            "Apasionada por nuestra música caribeña y su gastronomía. Y por supuesto, por nuestro fuerte acento costeño.",
          favorites: "Mi champeta favorita: Paola"
        },

        heidy: {
          role: "Músico Percusionista | Maestría en Gerencia de las Artes y la Cultura",
          testimonial:
            "Me apasiona diseñar proyectos culturales inclusivos que conecten con diversas comunidades, mejoren el acceso a las artes y generen oportunidades para creativos y artistas en Colombia y Latinoamérica.",
          favorites:
            "Favoritas: El Reemplazo - Sayayin, El Tambor - Koffee El Cafetero, La Pupileta - Bazurto All Stars"
        },

        lilibeth: {
          role: "Creadora de Zimbabwe Collection",
          testimonial:
            "Fusiono moda y cultura afro, celebrando nuestras raíces a través del diseño.",
          favorites: "Favorita: La Voladora"
        },

        victor: {
          role: "Contador Público | Maestría en Contabilidad",
          testimonial:
            "Amante de los libros y del pensamiento antirracista y decolonial. También expreso mi identidad a través de estilos protectores en mi cabello, llevando con orgullo mi cultura en cada espacio.",
          favorites: "Champeta favorita: El Agite"
        },

        joyce: {
          role: "Abogada | DDHH y Derecho Internacional Humanitario",
          testimonial:
            "He trabajado con comunidades indígenas, campesinas y víctimas del conflicto armado en la Sierra de Santa Marta. También soy artista de teatro y promotora cultural. Para mí, la champeta es una de las expresiones culturales más valiosas de nuestra historia.",
          favorites: "Champeta favorita: Los Trapitos al Agua - Mr Black"
        },

        ilia: {
          role: "Empresaria independiente | Servicios de mensajería",
          testimonial:
            "Como afrocolombiana llevo mi cultura en cada paso. El ritmo, la alegría y la fuerza de mis raíces guían tanto mi trabajo como mi forma de vivir. Creo en el poder de la identidad y la expresión para transformar realidades.",
          favorites: "Champeta favorita: Ochae en concierto"
        },

        mariapaula: {
          role: "Ingeniera Industrial | Fundadora de Aloe Braids",
          testimonial:
            "Nacida en Cartagena y ahora radicada en Melbourne, combino mi profesión con mi pasión por el trenzado. Crecí rodeada de ritmo y música, por eso la champeta es una parte esencial de mi identidad.",
          favorites:
            "Favoritas: La Cometa - Zaider | La Moral - DJ Tremendo, Lil Silvio, Cris y Rony"
        },

        jenn: {
          role: "Profesional en Gestión y Análisis de Datos | Coordinadora de Proyectos en Australia",
          testimonial:
            "Mujer latina apasionada por la cultura, la música y el poder de las comunidades. Creo en la música como un puente cultural y en la champeta como una expresión viva de identidad, resistencia y alegría caribeña. Me inspira crear espacios donde nuestra cultura se celebre con orgullo, conexión y autenticidad.",
          favorites:
            "Favoritas: El Gato Volador | Tú Eres Bandida | El Serrucho"
        }
      },

      members: {
        badge: "Nuestra Gente",
        title1: "Quienes Hacen el Festival",
        title2: "Posible",

        founders: {
          title: "Fundadores",

          community: {
            name: "Comunidad Costeña",
            role: "Fundadores del movimiento",
            description:
              "El colectivo que soñó con crear este espacio para la celebración cultural."
          }
        },

        collaborators: {
          title: "Colaboradores",

          artists: {
            name: "Artistas Locales",
            role: "Talento Musical",
            description:
              "Los artistas que dan vida al festival con su música y energía."
          },

          dancers: {
            name: "Bailarines",
            role: "Instructores de Baile",
            description:
              "Expertos en champeta que comparten su conocimiento durante los talleres."
          },

          volunteers: {
            name: "Voluntarios",
            role: "Equipo de Apoyo",
            description:
              "Personas comprometidas que hacen posible cada edición."
          }
        },

        allies: {
          title: "Aliados",

          production: {
            name: "Trident Agency",
            role: "Producción",
            description: "Aliado estratégico en la producción del evento."
          },

          culture: {
            name: "AfroCaribe",
            role: "Cultura",
            description: "Promotores de la cultura afrocaribeña."
          },

          audio: {
            name: "Tropical Sounds",
            role: "Audio",
            description: "Especialistas en sistemas de sonido."
          }
        }
      },

      allies: {
        badge: "Aliados",
        title1: "Nuestros",
        title2: "Aliados",
        description1:
          "Empresas y organizaciones que creen en nuestra",
        description2: "misión"
      },

      contact: {
        question: "¿Quieres convertirte en aliado del festival?",
        button: "Contáctanos"
      },

      cta: {
        title1: "Únete a la",
        title2: "Familia",
        button: "Registrarse"
      }

    }
  },

  en: {
    nav: {
      inicio: 'Home',
      festival: 'Festival',
      champeta: 'Champeta',
      experiencias: 'Experiences',
      comunidad: 'Community',
      joinCommunity: 'Join the Community',
      joinCommunityShort: 'Join',
    },

    hero: {
      buyTickets: 'Buy Tickets',
      knowFestival: 'Discover Festival',
      scroll: 'Scroll',
    },
    experiences: {
      badge: 'Experiences',
      title: 'Enjoy the Festival ',
      highlight: 'Experiences',
      subtitle: 'More than a concert, a complete cultural experience',

      items: {
        musicTitle: 'Live Music',
        musicDesc: 'Enjoy the best champeta artists on world-class stages.',

        workshopTitle: 'Champeta Workshops',
        workshopDesc: 'Learn the most iconic dance steps with professional dancers.',

        foodTitle: 'Caribbean Gastronomy',
        foodDesc: 'Taste the most traditional dishes from the Colombian Caribbean.',

        communityTitle: 'Community & Culture',
        communityDesc: 'Connect with the African diaspora and celebrate our cultural heritage.'
      }
    },
    culture: {
      badge: 'Culture',

      title: 'What is ',
      highlight: 'Champeta',

      description:
        '"I love this rhythm because it runs in my blood." Champeta is a musical genre of Afro-Caribbean origin born in Cartagena, Colombia. It blends African rhythms with Caribbean sounds, creating an energetic and unique style of music and dance born from the heart of the people.',

      items: {
        rhythmTitle: 'Afro-Caribbean Rhythm',
        rhythmDesc:
          'African rhythms and percussion fused with Caribbean sounds that make the heart vibrate.',

        danceTitle: 'Dance & Energy',
        danceDesc:
          'With unique steps and movements that express joy, resistance, and freedom.',

        cultureTitle: 'Popular Culture',
        cultureDesc:
          'Communities that keep the tradition alive across generations in Cartagena.',

        instrumentsTitle: 'Instruments & Sound',
        instrumentsDesc:
          'Instruments such as congas, timbales, and the characteristic sound of the picó.'
      }
    },
    tickets: {
      badge: 'Tickets',
      title: 'Culture & ',
      highlight: 'Gastronomy',
      subtitle: 'Unique Caribbean Flavor!',

      types: {
        earlyBird: 'Early Bird',
        general: 'General',
        vip: 'VIP Empire'
      },

      popular: 'Popular',
      buy: 'Buy Now',

      features: {
        generalAccess: 'General festival access',
        allStages: 'Access to all stages',
        eventMap: 'Event map',
        welcomeKit: 'Digital welcome kit',

        foodZone: 'Food zone included',
        exclusiveMerch: 'Exclusive merchandise',
        meetGreetRaffle: 'Meet & Greet (raffle)',

        vipAccess: 'VIP access to all areas',
        priorityZone: 'Priority stage zones',
        premiumOpenBar: 'Premium open bar',
        guaranteedMeet: 'Guaranteed Meet & Greet',
        vipMerch: 'Exclusive VIP merchandise',
        backstage: 'Backstage access'
      },

      note: '* Prices may vary. See terms and conditions.'
    },
    community: {
      badge: 'Community & Diaspora',

      title: 'Connecting ',
      highlightCity: 'Cartagena',
      titleMiddle: ' with the ',
      highlightWorld: 'World',

      formTitle: 'Be Part of the ',
      formHighlight: 'Movement',

      formSubtitle:
        'Want to become a Champeta AfroFest partner? Fill out this form.',

      successTitle: 'Thanks for joining!',
      successMessage:
        'We will contact you soon with more information about the festival.',

      placeholders: {
        name: 'Name',
        phone: 'Phone',
        email: 'Email',
        city: 'City',
        country: 'Country',
        message: 'Your Message (Optional)'
      },

      checkbox:
        'I authorize the use of my data to receive festival information.',

      submit: 'Send',

      privacy: 'Review privacy policies',

      errors: {
        name: 'Name required',
        phone: 'Phone required',
        email: 'Email required',
        invalidEmail: 'Invalid email',
        city: 'City required',
        country: 'Country required',
        terms: 'You must accept the data policy',
        submitError: 'Error submitting the form'
      }
    },
    allies: {
      title: 'Our ',
      highlight: 'Partners',

      subtitleStart: 'Companies and organizations that believe in our ',
      subtitleHighlight: 'mission',

      communityTextStart: 'The ',
      communityBold: 'COMMUNITY',
      communityMiddle: ' makes the ',
      communityFestival: 'FESTIVAL',

      ctaText: 'Want to become a Champeta AfroFest partner? Support ',
      champeta: 'AFRO-CARIBBEAN CHAMPETA',

      contact: 'Contact Us'
    },
    about: {
      badge: 'About the Festival',
      title: 'Champeta is ',
      highlight: 'Lived',

      description:
        'Champeta AfroFest began as an initiative to celebrate culture during the independence festivities and has evolved into an intercultural space where people from different nationalities can experience the richness of champeta, music, dance, gastronomy, and Caribbean traditions.',

      videoDescription:
        'This is how the energy, rhythm, and cultural strength of Champeta AfroFest were experienced. A celebration where music unites hearts and champeta becomes identity.',

      cta: 'Our Story',

      features: {
        musicTitle: 'Live Music',
        musicDesc:
          'The best champeta and Afro-Caribbean artists on one stage.',

        communityTitle: 'Community',
        communityDesc:
          'An inclusive space for Colombians and people from different nationalities.',

        cartagenaTitle: 'Cartagena',
        cartagenaDesc:
          'In the heart of Colombia’s most Caribbean city, birthplace of champeta.',

        experienceTitle: 'Unique Experience',
        experienceDesc:
          'Music, dance, gastronomy, and Caribbean traditions in one place.',
      },
    },
    footer: {
      nav: {
        inicio: 'Home',
        lineup: 'Lineup',
        experiencias: 'Experiences',
        cultura: 'Culture',
        entradas: 'Tickets'
      },

      copyright: '© 2025 Champeta AfroFest. All rights reserved.',

      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy'
    },

    spotify: {
      listen: 'Listen Playlist',
      close: 'Close',
    },

    languages: {
      es: 'Español',
      en: 'English',
    },
    festival: {
      hero: {
        badge: "Our Story",
        title1: "The",
        title2: "Festival",
        description: "The event aims to promote, strengthen and celebrate champeta as an artistic and cultural expression of the Colombian Caribbean while promoting cultural diversity and social inclusion."
      },

      stats: {
        attendees: "Attendees",
        artists: "Artists",
        editions: "Editions",
        satisfaction: "Satisfaction"
      },

      origin: {
        badge: "Origin",
        title1: "How Did It",
        title2: "Start?",
        p1: "Champeta AfroFest emerged as an idea from the Caribbean community living in the city...",
        p2: "Music, dance, gastronomy and Caribbean traditions come together...",
        p3: "On November 15th 2025 we celebrated our first edition..."
      },

      editions: {
        badge: "Editions",
        title1: "Previous",
        title2: "Editions",
        edition: "Edition",
        comingSoon: "Coming Soon!",
        cta: "Join the Community"
      },

      gallery: {
        badge: "Gallery",
        title1: "Unforgettable",
        title2: "Moments",
        description: "Relive the best moments from our previous editions"
      },

      cta: {
        title1: "Do you want to be part of the ",
        title2: "history",
        description: "Join our community and be the first to know about the next edition",
        button: "Join the Community"
      }
    },
    champeta: {
      hero: {
        badge: 'Culture',
        title1: 'What is',
        title2: 'Champeta',
        quote: '“I love this rhythm because it runs in my blood”'
      },

      definition: {
        badge: 'Definition',
        title1: 'The Rhythm of the',
        title2: 'Caribbean',

        paragraph11: 'The ',
        paragraph12: 'champeta',
        paragraph13:
          ' is an Afro-Caribbean music genre born in Cartagena de Indias, Colombia. It emerged in the popular neighborhoods of the city as a fusion of African rhythms with Caribbean sounds.',

        paragraph2:
          'Its name comes from the "champeta" knife, a tool used by fishermen and vendors in local markets, reflecting its humble and street-born origins.',

        paragraph31: 'More than a music genre, champeta is a ',
        paragraph32: 'way of life',
        paragraph33:
          ', an expression of Afro-descendant identity and a symbol of cultural resistance that has transcended borders.'
      },

      elements: {
        badge: 'Elements',
        title1: 'The Pillars of',
        title2: 'Champeta',

        africanRhythm: {
          title: 'African Rhythm',
          description:
            'Champeta has its roots in African rhythms such as soukous, highlife, and mbaqanga that arrived on the Colombian Caribbean coast.'
        },

        pico: {
          title: 'Picó Culture',
          description:
            'The powerful sound systems known as “picós” were essential for spreading champeta throughout Cartagena’s neighborhoods.'
        },

        dance: {
          title: 'Dance',
          description:
            'Champeta is lived through dance: sensual, free, and energetic movements that represent the identity of the Caribbean.'
        },

        identity: {
          title: 'Cultural Identity',
          description:
            'Champeta represents Afro-descendant pride, cultural resistance, and the history of the popular neighborhoods.'
        }
      },

      timeline: {
        badge: 'History',
        title1: 'Timeline',
        title2: ' ',

        seventies:
          'African records brought by sailors arrive in Cartagena. The musical foundation of champeta is born.',

        eighties:
          'Picós begin to popularize these African sounds in the neighborhoods.',

        nineties:
          'Champeta becomes established as its own genre with local artists.',

        twoThousands:
          'The genre begins expanding beyond Cartagena.',

        twentyTens:
          'Champeta gains national and international recognition.',

        twentyTwenties:
          'Champeta becomes a global cultural symbol of the Colombian Caribbean.'
      },

      artists: {
        badge: 'Artists',
        title1: 'Legends of',
        title2: 'Champeta',

        louis: {
          era: 'Pioneer',
          description:
            'One of the first exponents of modern champeta in Cartagena.'
        },

        mrblack: {
          era: 'King of Champeta',
          description:
            'An iconic artist who brought champeta to international stages.'
        },

        kevin: {
          era: 'New Generation',
          description:
            'Representative of the modern evolution of the genre.'
        },

        zaider: {
          era: 'Urban Champeta',
          description:
            'Part of the new wave blending champeta with contemporary sounds.'
        }
      },

      cta: {
        title1: 'Experience',
        title2: 'Champeta',
        title3: 'Live',
        subtitle:
          'Feel the energy, rhythm, and culture at Champeta AfroFest',
        button: 'See Next Festival'
      }
    },
    experiences: {
      hero: {
        badge: "Activities",
        title1: "The",
        title2: "Experiences",
        description:
          "More than a concert, Champeta AfroFest is a complete cultural experience. Music, dance, gastronomy, and community all in one place."
      },

      main: {
        badge: "What You'll Find",
        title1: "Experience the",
        title2: "Festival"
      },

      music: {
        title: "Live Music",
        description:
          "Enjoy the best champeta artists on world-class stages. From legends to new talents, all united by rhythm.",
        details: [
          "Main stage with professional sound system",
          "Performances by national and international artists",
          "DJ sets specialized in champeta",
          "Continuous music throughout the event"
        ]
      },

      dance: {
        title: "Dance Workshops",
        description:
          "Learn the most iconic champeta dance steps with professional dancers. From the basics to advanced moves.",
        details: [
          "Classes for all levels",
          "Professional instructors from Cartagena",
          "Learn the champeta perreo style",
          "Free practice sessions"
        ]
      },

      food: {
        title: "Caribbean Gastronomy",
        description:
          "Taste the most traditional dishes from the Colombian Caribbean. From ceviches to typical fried foods.",
        details: [
          "Food trucks with traditional cuisine",
          "Refreshing tropical drinks",
          "Vegetarian options available",
          "Traditional desserts"
        ]
      },

      community: {
        title: "Community Zone",
        description:
          "Connect with other lovers of champeta and Afro-Caribbean culture. A space to share and create connections.",
        details: [
          "Cultural networking",
          "Experience exchange",
          "Brand activations",
          "Themed photo booth"
        ]
      },

      workshops: {
        badge: "Learn",
        title1: "Dance",
        title2: "Workshops",
        subtitle:
          "Learn to dance champeta with the best instructors from Cartagena",

        basic: {
          title: "Basic Champeta",
          duration: "45 min",
          level: "Beginner",
          description: "Learn the fundamental steps of champeta dance"
        },

        perreo: {
          title: "Champeta Perreo",
          duration: "1 hour",
          level: "Intermediate",
          description: "Master the signature hip movements"
        },

        choreography: {
          title: "Group Choreography",
          duration: "1.5 hours",
          level: "All levels",
          description: "Learn a full choreography to dance in groups"
        },

        history: {
          title: "Dance History",
          duration: "30 min",
          level: "All levels",
          description: "Discover the origin and evolution of champeta dance"
        }
      },

      schedule: {
        badge: "Schedule",
        title1: "Daily",
        title2: "Program",
        subtitle: "A full day of activities to enjoy",

        open: "Doors Open",
        basicWorkshop: "Basic Champeta Workshop",
        djSet: "First DJ Set",
        perreoWorkshop: "Champeta Perreo Workshop",
        guestArtist: "Guest Artist #1",
        groupChoreo: "Group Choreography",
        mainShow: "Main Show",
        closing: "Closing DJ Set",

        types: {
          workshop: "Workshop",
          music: "Music",
          general: "General"
        },

        note: "* Schedule may vary depending on the festival edition"
      },

      cta: {
        title1: "Ready to",
        title2: "Feel the Vibe",
        subtitle: "Don't miss the next edition of Champeta AfroFest",
        tickets: "Buy Tickets",
        community: "Join the Community"
      }
    },
    community: {

      hero: {
        badge: "Our People",
        title1: "The",
        title2: "Community",
        description:
          "Behind every festival there are passionate people who make the magic possible. Meet those who build this movement."
      },

      mission: {
        title1: "Together We Make",
        title2: "History",
        paragraph:
          "Champeta AfroFest is more than a festival, it is a community movement. It was born from the initiative of the Caribbean community with the dream of creating a space where our culture is celebrated, preserved, and shared with the world. Every person who participates, every ally who supports us, and every attendee who vibrates with us is a fundamental part of this family."
      },

      testimonials: {
        badge: "Testimonials",
        title1: "What the",
        title2: "Community Says",

        glenia: {
          role: "Business Administrator | Specialist in Marketing Management",
          testimonial:
            "Passionate about our Caribbean music and gastronomy. And of course, about our strong coastal accent.",
          favorites: "My favorite champeta: Paola"
        },

        heidy: {
          role: "Percussionist Musician | Master's in Arts and Cultural Management",
          testimonial:
            "I am passionate about designing inclusive cultural projects that connect with diverse communities, improve access to the arts, and create opportunities for creatives and artists in Colombia and Latin America.",
          favorites:
            "Favorites: El Reemplazo - Sayayin, El Tambor - Koffee El Cafetero, La Pupileta - Bazurto All Stars"
        },

        lilibeth: {
          role: "Founder of Zimbabwe Collection",
          testimonial:
            "I blend fashion and Afro culture, celebrating our roots through design.",
          favorites: "Favorite: La Voladora"
        },

        victor: {
          role: "Public Accountant | Master's in Accounting",
          testimonial:
            "A lover of books and anti-racist, decolonial thinking. I also express my identity through protective hairstyles, proudly carrying my culture in every space.",
          favorites: "Favorite champeta: El Agite"
        },

        joyce: {
          role: "Lawyer | Human Rights and International Humanitarian Law",
          testimonial:
            "I have worked with indigenous communities, farmers, and victims of the armed conflict in the Sierra de Santa Marta. I am also a theater artist and cultural promoter. For me, champeta is one of the most valuable cultural expressions of our history.",
          favorites: "Favorite champeta: Los Trapitos al Agua - Mr Black"
        },

        ilia: {
          role: "Independent Entrepreneur | Courier Services",
          testimonial:
            "As an Afro-Colombian woman, I carry my culture in every step. The rhythm, joy, and strength of my roots guide both my work and my way of life. I believe in the power of identity and expression to transform realities.",
          favorites: "Favorite champeta: Ochae en concierto"
        },

        mariapaula: {
          role: "Industrial Engineer | Founder of Aloe Braids",
          testimonial:
            "Born in Cartagena and now living in Melbourne, I combine my profession with my passion for braiding. I grew up surrounded by rhythm and music, which is why champeta is an essential part of my identity.",
          favorites:
            "Favorites: La Cometa - Zaider | La Moral - DJ Tremendo, Lil Silvio, Cris y Rony"
        },

        jenn: {
          role: "Data Management and Analysis Professional | Project Coordinator in Australia",
          testimonial:
            "A Latin woman passionate about culture, music, and the power of communities. I believe in music as a cultural bridge and in champeta as a living expression of identity, resistance, and Caribbean joy. I am inspired to create spaces where our culture is celebrated with pride, connection, and authenticity.",
          favorites:
            "Favorites: El Gato Volador | Tú Eres Bandida | El Serrucho"
        }
      },

      members: {
        badge: "Our People",
        title1: "Those Who Make the Festival ",
        title2: "Possible",

        founders: {
          title: "Founders",

          community: {
            name: "Coast Community",
            role: "Founders of the movement",
            description:
              "The collective that dreamed of creating this space for cultural celebration."
          }
        },

        collaborators: {
          title: "Collaborators",

          artists: {
            name: "Local Artists",
            role: "Musical Talent",
            description:
              "The artists who bring the festival to life with their music and energy."
          },

          dancers: {
            name: "Dancers",
            role: "Dance Instructors",
            description:
              "Champeta experts who share their knowledge during workshops."
          },

          volunteers: {
            name: "Volunteers",
            role: "Support Team",
            description:
              "Committed people who make every edition possible."
          }
        },

        allies: {
          title: "Allies",

          production: {
            name: "Trident Agency",
            role: "Production",
            description: "Strategic partner in the event production."
          },

          culture: {
            name: "AfroCaribe",
            role: "Culture",
            description: "Promoters of Afro-Caribbean culture."
          },

          audio: {
            name: "Tropical Sounds",
            role: "Audio",
            description: "Specialists in sound systems."
          }
        }
      },

      allies: {
        badge: "Partners",
        title1: "Our",
        title2: "Partners",
        description1:
          "Companies and organizations that believe in our",
        description2: "mission",
      },

      contact: {
        question: "Do you want to become a festival partner?",
        button: "Contact Us"
      },

      cta: {
        title1: "Join the",
        title2: "Family",
        button: "Register"
      }

    }
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check localStorage or browser language
    const saved = localStorage.getItem('champeta-lang');
    if (saved && translations[saved]) return saved;

    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    return translations[browserLang] ? browserLang : 'es';
  });

  useEffect(() => {
    localStorage.setItem('champeta-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const availableLanguages = Object.keys(translations);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
