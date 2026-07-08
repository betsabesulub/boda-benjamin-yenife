export type SectionType =
  | 'hero'
  | 'parents'
  | 'sponsors'
  | 'date'
  | 'countdown'
  | 'itinerary'
  | 'dressCode'
  | 'rsvp'
  | 'gift'
  | 'gallery'
  | 'closing';

export type SectionConfig = {
  id: string;
  type: SectionType;
  enabled: boolean;
};

type PersonGroup = {
  role?: string;
  names: string[];
};

export const weddingData: {
  couple: {
    bride: string;
    groom: string;
    monogram: string;
  };
  eventDate: string;
  images: {
    hero: string;
    gallery: Array<{ src: string; alt: string }>;
  };
  content: {
    hero: {
      enabled: boolean;
      title: string;
      titleLines: string[];
      names: string;
      subtitle: string;
      message: string;
      background: {
        enabled: boolean;
        src: string;
        size: string;
        position: string;
      };
      ringsImage: {
        enabled: boolean;
        src: string;
        alt: string;
      };
      music: {
        enabled: boolean;
        playLabel: string;
        pauseLabel: string;
        unavailableLabel: string;
        errorMessage: string;
        audioSrc: string;
      };
      decorations: {
        enabled: boolean;
        style: string;
        referenceSrc: string;
        topLeftSrc: string;
        topRightSrc: string;
        bottomRightSrc: string;
      };
    };
    parents: {
      title: string;
      intro: string;
      list: PersonGroup[];
    };
    sponsors: {
      title: string;
      intro: string;
      list: PersonGroup[];
    };
    date: {
      title: string;
      dayName: string;
      day: string;
      month: string;
      year: string;
      displayDate: string;
      note: string;
    };
    countdown: {
      title: string;
      labels: {
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
      };
      completeMessage: string;
      unavailableMessage: string;
    };
    itinerary: {
      title: string;
      events: Array<{
        category: string;
        title: string;
        time: string;
        venue: string;
        description: string;
        locationLabel: string;
        image: {
          src: string;
          alt: string;
        };
        buttonLabel: string;
        mapUrl: string;
      }>;
    };
    dressCode: {
      title: string;
      text: string;
      note: string;
    };
    rsvp: {
      title: string;
      text: string;
      buttonLabel: string;
      url: string;
    };
    gift: {
      title: string;
      text: string;
      details: string;
    };
    gallery: {
      title: string;
    };
    closing: {
      title: string;
      text: string;
    };
  };
  sections: SectionConfig[];
} = {
  couple: {
    bride: 'Yenife',
    groom: 'Benjamín',
    monogram: 'B&J',
  },
  eventDate: '2026-09-12T12:00:00-06:00',
  images: {
    hero: '',
    gallery: [
      { src: '/images/gallery/58bf1fe5-9697-424f-baad-7ebb244fb267.jpg', alt: 'Recuerdo de nuestra historia 1' },
      { src: '/images/gallery/d9aa3633-4b61-4cc3-bf35-799eb98fda0c.jpg', alt: 'Recuerdo de nuestra historia 2' },
      { src: '/images/gallery/7709aa4b-ed9a-49c9-9070-5436428c2f48.jpg', alt: 'Recuerdo de nuestra historia 3' },
      { src: '/images/gallery/43198e36-3a82-4f3a-b181-14cd320cd99c.jpg', alt: 'Recuerdo de nuestra historia 4' },
    ],
  },
  content: {
    hero: {
      enabled: true,
      title: '¡Nos Casamos!',
      titleLines: ['¡Nos', 'Casamos!'],
      names: 'Benjamín & Yenife',
      subtitle: 'Y tenemos el honor de invitarte a celebrar nuestro matrimonio',
      message:
        'Hay momentos en la vida que son especiales por sí solos, pero al compartirlos con quienes más queremos, se convierten en inolvidables...',
      background: {
        enabled: true,
        src: '/decor/fondo-floral-rojo.png',
        size: 'cover',
        position: '44% top',
      },
      ringsImage: {
        enabled: true,
        src: '/decor/anillos-boda.png',
        alt: 'Anillos de boda con flores rojas',
      },
      music: {
        enabled: true,
        playLabel: 'Reproducir música',
        pauseLabel: 'Pausar música',
        unavailableLabel: 'Música próximamente',
        errorMessage: 'No pudimos reproducir la música en este momento.',
        audioSrc: '/audio/musica-boda.mp3',
      },
      decorations: {
        enabled: false,
        style: 'red-floral',
        referenceSrc: '/decor/fondo-floral-rojo.png',
        topLeftSrc: '',
        topRightSrc: '',
        bottomRightSrc: '',
      },
    },
    parents: {
      title: 'Nuestros Padres',
      intro: 'Con mucho cariño, compartimos los nombres de quienes nos han acompañado con amor y bendición.',
      list: [
        {
          role: 'PAPÁS DEL NOVIO',
          names: ['Ángela Rachel Sánchez Ornelas †', 'Benjamín Yam Quintal'],
        },
        {
          role: 'PAPÁS DE LA NOVIA',
          names: ['Ana Estelí Quintal Durán', 'Simón Dagoberto Cáceres Pinto'],
        },
      ],
    },
    sponsors: {
      title: 'Nuestros Padrinos',
      intro: 'Con gratitud, compartimos los nombres de quienes nos acompañarán de manera especial en este día tan importante.',
      list: [
        {
          role: 'PADRINOS DE VELACIÓN',
          names: ['Víctor Daniel Mis Martín', 'Maria Juvencia Bojorquez Chan'],
        },
        {
          names: ['José Manuel Cob Ek', 'Eugenia Gpe. Ancona Suárez'],
        },
        {
          names: ['Ángel de Jesús Cob Ek', 'Gladys Janet Sosa Grajales'],
        },
      ],
    },
    date: {
      title: 'Fecha Especial',
      dayName: 'Sábado',
      day: '12',
      month: 'Septiembre',
      year: '2026',
      displayDate: '12 de septiembre de 2026',
      note: 'Reserva este día para celebrar con nosotros.',
    },
    countdown: {
      title: 'Cuenta regresiva',
      labels: {
        days: 'DÍAS',
        hours: 'HORAS',
        minutes: 'MINUTOS',
        seconds: 'SEGUNDOS',
      },
      completeMessage: 'Hoy celebramos nuestro gran día.',
      unavailableMessage: 'La cuenta regresiva estará disponible cuando configuremos la fecha.',
    },
    itinerary: {
      title: 'Itinerario',
      events: [
        {
          category: 'Ceremonia religiosa',
          title: 'Misa',
          time: '12:00 p.m.',
          venue: 'Iglesia Inmaculada Concepción',
          description: 'Nos reuniremos para dar gracias y ser testigos de este momento tan especial.',
          locationLabel: '',
          image: {
            src: '/images/parroquia-inmaculada-concepcion.png',
            alt: 'Iglesia Inmaculada Concepción',
          },
          buttonLabel: 'Ir al mapa',
          mapUrl: 'https://maps.app.goo.gl/qTrvg9kjMDYCAM24A',
        },
        {
          category: 'Celebración',
          title: 'Recepción',
          time: 'Después de la misa',
          venue: 'Salón de eventos Rodríguez',
          description: 'Después de la ceremonia, celebraremos juntos con mucho cariño.',
          locationLabel: '',
          image: {
            src: '/images/salon-rodriguez.png',
            alt: 'Salón de eventos Rodríguez',
          },
          buttonLabel: 'Ir al mapa',
          mapUrl: 'https://maps.app.goo.gl/yUNBC2BNkqcmg4zq9',
        },
      ],
    },
    dressCode: {
      title: 'Código de vestimenta',
      text: 'Formal',
      note: 'Tu presencia es lo más importante; te pedimos acompañarnos con vestimenta formal.',
    },
    rsvp: {
      title: 'Confirmación de asistencia',
      text: 'Será un honor contar con tu presencia en este día tan especial. Ayúdanos confirmando tu asistencia.',
      buttonLabel: 'Confirmar asistencia',
      url: '#',
    },
    gift: {
      title: 'Regalo',
      text: 'Lluvia de sobres',
      details:
        'Tu presencia es lo más importante, pero si deseas hacernos un obsequio te agradeceremos que fuera en forma de lluvia de sobres.',
    },
    gallery: {
      title: 'Galería',
    },
    closing: {
      title: 'Gracias por acompañarnos',
      text: 'Con amor, gracias por ser parte de nuestra historia.',
    },
  },
  sections: [
    { id: 'hero', type: 'hero', enabled: true },
    { id: 'parents', type: 'parents', enabled: true },
    { id: 'sponsors', type: 'sponsors', enabled: true },
    { id: 'date', type: 'date', enabled: true },
    { id: 'countdown', type: 'countdown', enabled: true },
    { id: 'itinerary', type: 'itinerary', enabled: true },
    { id: 'dress-code', type: 'dressCode', enabled: true },
    { id: 'rsvp', type: 'rsvp', enabled: true },
    { id: 'gift', type: 'gift', enabled: true },
    { id: 'gallery', type: 'gallery', enabled: true },
    { id: 'closing', type: 'closing', enabled: true },
  ],
};
