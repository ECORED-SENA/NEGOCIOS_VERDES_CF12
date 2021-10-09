export default {
  global: {
    componenteFormativo: 'Portafolio del producto o servicio',
    descripcionCurso:
      'Un portafolio es un documento de suma importancia para la presentación de una empresa, porque detalla los productos y los beneficios que se ofertan, es importante resaltar que en los últimos años se ha experimentado con la utilización de los portafolios web para mejorar los ingresos económicos de una empresa.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Portafolio de productos y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación de los portafolios',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Partes de un portafolio de productos y servicios',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Campaña promocional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de campaña publicitaria',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estructura de una campaña publicitaria',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '<i>Brochure</i>',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Comunicación comercial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Identidad corporativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: '<i>Marketing</i> digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Herramientas de comercialización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: '<i>Social media marketing</i> (mercadeo redes sociales)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Beneficios del <i>social media marketing</i>',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo:
              'Pasos para implementar una estrategia de <i>social media marketing</i>',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Comercio electrónico',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Carazo, J. (2016). Comercio electrónico (ecommerce). Economipedia.com. ',
      link:
        'https://economipedia.com/definiciones/comercio-electronico-ecommerce.html',
    },
    {
      referencia:
        'Duarte, N. (s.f). Portafolio de servicios de la organización. Web Colegios. ',
      link: 'https://www.webcolegios.com/file/1b983a.pdf',
    },
    {
      referencia: 'Elisea, J. (2003). Desarrollo de una campaña publicitaria. ',
      link: 'http://cdigital.dgb.uanl.mx/te/1020149150.PDF',
    },
    {
      referencia:
        'Escuela de marketing and web. (2018). Qué es una campaña publicitaria y para qué sirve [Elementos principales]. ',
      link:
        'https://escuela.marketingandweb.es/campana-publicitaria/#:~:text=Si%20tuviera%20que%20quedarme%20con,de%20publicidad%20digital%20y%20offline.',
    },
    {
      referencia:
        'Newstrom, J. y Davis, K. (2011). Comportamiento humano en el trabajo. McGrawHill.',
    },
    {
      referencia:
        'Ortego, J. (2021). Pasos para una campaña promocional. Javier Ortego. ',
      link:
        'https://www.javierortego.com/marketing/pasos-para-campana-promociona/',
    },
    {
      referencia: 'Pascual, S. (2015). Comercio electrónico. McGraw Hill. ',
      link: 'https://www.mheducation.es/bcv/guide/capitulo/8448196848.pdf',
    },
    {
      referencia:
        'Santos, D. (2020). Social Media Marketing: todo lo que debes saber para implementarlo en tu empresa. ',
      link: 'https://blog.hubspot.es/marketing/social-media-marketingv',
    },
  ],
  glosario: [
    {
      termino: 'Briefing',
      terminoHtml: '<em>Briefing</em>',
      significado:
        'documento utilizado como herramienta de comunicación entre una empresa y sus proveedores.',
    },
    {
      termino: 'Eslogan',
      significado: 'palabra o frase corta fácil de recordar.',
    },
    {
      termino: 'Marca',
      significado:
        'identificador comercial de los bienes y servicios que ofrece una empresa y los diferencia de los de la competencia.',
    },
    {
      termino: 'Mercadotecnia',
      significado:
        'conjunto de técnicas y estudios que tienen como objeto mejorar la comercialización de un producto.',
    },
    {
      termino: 'Producto',
      significado:
        'bien tangible o producto que ofrece una empresa a los consumidores.',
    },
  ],
  complementario: [
    {
      texto:
        'Asistencia administrativa. (2020). Portafolio de servicios. [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GFSftLP2LrE',
    },
    {
      texto:
        'Marketing 2.0. (2020). Cómo hacer campaña publicitaria en 7 pasos/ Qué es campaña publicitaria. [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=s3DUFV8riIw',
    },
    {
      texto:
        'Uniplus - i. (2019). Identidad corporativa y comunicación. [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aX_6ECtXWJk',
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
        nombre: 'Jair Roberto Daza Palnecia',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria, Empresa y Servicios CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Paola Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología  - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Carlos Julián Ramírez Benítez',
        cargo: 'Diseño web',
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
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
