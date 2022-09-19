export default {
  global: {
    componenteFormativo: 'Información documentada y elaboración de diagnóstico',
    descripcionCurso:
      'La recopilación de información conlleva el diseño de estrategias y actividades en los procesos de manufactura con la construcción del diagnóstico. Busca establecer filosofías de mejora continua, donde se reconoce el Sistema de gestión de la calidad, e integra el ciclo P.H.V.A, conectando las áreas de trabajo con canales de comunicación pertinentes a los servicios o productos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La información documentada',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Documentar procesos y procedimientos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Registro de la información',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Indicadores de gestión',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diagnósticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de diagnósticos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Plan de implementación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Definiciones de actividades',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'La Información Documentada',
      referencia:
        'García-Morales, E. (2017). Información documentada y gestión del conocimiento en la ISO 9001:2015: aportación del profesional de la información. Anuario ThinkEPI, 11, 269–273.  ',
      tipo: 'Libro',
      link:
        'https://thinkepi.profesionaldelainformacion.com/index.php/ThinkEPI/article/view/thinkepi.2017.52',
    },
    {
      tema: 'Indicadores de gestión',
      referencia: 'Portugal, V. (2017). Diagnóstico empresarial.',
      tipo: 'Libro',
      descarga: '/downloads/diagnostico_empresarial.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Andon',
      significado:
        'Sistema de gestión visual en planta de producción que indica el estado de esta, avisa cuando se necesita ayuda y permite a los colaboradores parar el proceso de producción.',
    },
    {
      termino: 'Actividad económica',
      significado:
        'Para satisfacer necesidades y expectativas, se requiere hacer ciertos procedimientos que permitan la producción y el intercambio de bienes y servicios. A esa misión, se le denomina actividad económica.',
    },
    {
      termino: 'Área de trabajo',
      significado:
        'Espacio o sitio destinado para que se realicen funciones de transformación de materiales en productos, o para prestar un servicio.',
    },
    {
      termino: 'Flujo continuo',
      significado:
        'Proceso equilibrado donde el flujo de las prendas sigue una secuencia operacional con cambios rápidos de referencia, contando siempre con los mínimos recursos para obtener la producción deseada.',
    },
    {
      termino: 'Información documentada',
      significado:
        'Información que una organización tiene que documentar y mantener.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'El conjunto de habilidades gerenciales o de las directivas que un individuo tiene para influir en la forma de ser y actuar de las personas o en un grupo de trabajo determinado.',
    },
    {
      termino: 'Manual de calidad',
      significado:
        'Documento que específica el sistema de gestión de la calidad en la organización.',
    },
    {
      termino: 'Plan de Mejora',
      significado:
        'Esta actividad está centrada en realizar una propuesta para mejorar el método actual de producción.',
    },
    {
      termino: 'Sistema de gestión de calidad',
      significado:
        'Es la gestión de servicios que se ofrecen, y que incluye planear, controlar, y mejorar, aquellos elementos de una organización.',
    },
    {
      termino: 'Perfil',
      significado:
        'El perfil define características específicas para ser seleccionado con un fin.',
    },
    {
      termino: 'Talento Humano',
      significado:
        'Constituido por las personas que participan en la ejecución y coordinación de las actividades empresariales en una organización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Sangüesa Sánchez, M., Mateo R., Ilzarbe, L. (2019) Teoría y práctica de la calidad. 2ª edición revisada y actualizada. Paraninfo.',
    },
    {
      referencia:
        'Sevilla Tendero, J. (2019). Auditoría de los sistemas integrados de gestión: ISO 9001:2015, ISO 14001:2015, ISO 45001:2018. Fundación Confemetal.',
    },
    {
      referencia:
        'UNE-ISO 10005:2018: (2019). Sistema de gestión de la Calidad, Directrices para los planes de calidad. AENOR. ',
    },
    {
      referencia:
        'UNE-ISO 10002:2018: (2018). Gestión de la calidad, Satisfacción del cliente, Directrices para el tratamiento de las quejas en las organizaciones. AENOR.',
    },
    {
      referencia:
        'UNE-ISO 10006:2018: (2018). Gestión de la calidad, Directrices para la gestión de la calidad en los proyectos. AENOR. ',
    },
    {
      referencia:
        'López Lemos, P. (2016). Novedades ISO 9001:2015. Fundación Confemetal.',
    },
    {
      referencia:
        'Curso de gestión de calidad. (2015). Normas ISO. Oviedo: FORMASTUR.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Manuel   Isaza Córdoba',
        cargo: 'Experto técnico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñadora instruccional ',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital - Centro de diseño y metrología',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yerson Fabian Zarate Saavedra',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle Ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
