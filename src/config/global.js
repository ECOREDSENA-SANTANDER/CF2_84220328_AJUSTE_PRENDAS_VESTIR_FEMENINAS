export default {
  global: {
    Name: 'Máquinas, herramientas e insumos en el ajuste de prendas femeninas',
    Description:
      'Este componente brinda una visión general de los recursos técnicos esenciales en modistería, organizados en maquinaria, herramientas e insumos. El aprendiz conocerá el uso de diferentes máquinas de coser, instrumentos de medición y corte, así como las propiedades de insumos como hilos, entretelas y adornos, aprendiendo a seleccionarlos y combinarlos para lograr ajustes de calidad en prendas femeninas. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Maquinaria en la confección de prendas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación funcional de máquinas de coser',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Clasificación técnica de máquinas de coser según su uso y capacidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: '¿Cómo se forma una puntada en la máquina de coser?',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Complementos de las máquinas de coser',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Complementos esenciales en la maquinaria de confección',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas de modistería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Herramientas de medición y marcado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas de trazo y corte',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Herramientas de ensamblaje',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Herramientas de acabados',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Insumos en la modistería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Hilos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Entretelas y estabilizadores ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Insumos de <em>plackets</em>',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Cintas y elásticos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Materiales de decoración y acabados ',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Materiales de sujeción y refuerzos',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Manejo de máquinas y espacio de trabajo',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'Máquinas de confección ',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2022). La máquina de coser. Unidad instruccional No. 1 [PDF]. Repositorio SENA. ',
      tipo: 'PDF',
      link: 'https://repositorio.sena.edu.co/handle/11404/1437',
    },
    {
      tema: 'Insumos de confección ',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2021). Control de calidad en hilos y telas [PDF]. Repositorio SENA.',
      tipo: 'PDF',
      link:
        'https://repositorio.sena.edu.co/bitstream/11404/4252/1/3817_control_de_calidad_en_los_hilos_telas.pdf  ',
    },
  ],
  glosario: [
    {
      termino: 'Afiladora',
      significado:
        'Dispositivo que mantiene el filo de las herramientas de corte, garantizando cortes limpios y precisos.',
    },
    {
      termino: 'Altiler',
      significado:
        'Elemento metálico con punta fina y cabeza visible, utilizado para sujetar capas de tela en la preparación de costuras.',
    },
    {
      termino: 'Aplique',
      significado:
        'Adorno o parche decorativo que se fija a la superficie de la prenda para reforzar o embellecer zonas específicas.',
    },
    {
      termino: 'Cinta métrica',
      significado:
        'Instrumento flexible graduado en centímetros y pulgadas, empleado para tomar medidas corporales y de patrón con exactitud.',
    },
    {
      termino: 'Cortahilos',
      significado:
        'Herramienta de hoja curva diseñada para descoser puntadas sin dañar el tejido, esencial en correcciones y ajustes.',
    },
    {
      termino: 'Dedal',
      significado:
        'Protección para el dedo que permite empujar la aguja a través de tejidos difíciles sin riesgo de lesión.',
    },
    {
      termino: 'Diente de arrastre',
      significado:
        'Peine metálico que sujeta y avanza el tejido bajo la aguja, asegurando el transporte uniforme del material.',
    },
    {
      termino: 'Entretela',
      significado:
        'Material adhesivo o posible que se aplica al revés de la tela para aportar firmeza y estabilidad en áreas críticas.',
    },
    {
      termino: 'Forro',
      significado:
        'Tejido interno que cubre el interior de una prenda, ocultando costuras y mejorando la caída y el confort.',
    },
    {
      termino: 'Hilo con núcleo',
      significado:
        'Hilo multicapa con centro de filamento de poliéster recubierto de algodón o poliéster, que combina resistencia y manejabilidad.',
    },
    {
      termino: 'Máquina familiar',
      significado:
        'Equipo doméstico de costura de baja velocidad y potencia, apto para trabajos ligeros y prototipados.',
    },
    {
      termino: 'Máquina industrial',
      significado:
        'Equipo de alta velocidad y potencia destinado a la producción en serie, capaz de coser múltiples capas y materiales pesados.',
    },
    {
      termino: 'Prensatelas',
      significado:
        'Pie de la máquina que presiona el tejido contra el diente de arrastre, controlando la tensión y el desplazamiento del material.',
    },
    {
      termino: 'Ruleta de marcar',
      significado:
        'Rueda dentada montada en mango, empleada para transferir las líneas del patrón al tejido mediante impresiones discretas.',
    },
    {
      termino: 'Tapete de corte',
      significado:
        'Superficie autocicatrizante con cuadrícula impresa que protege las hojas de corte y facilita la precisión en el trazado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Caro Preciado, Y., Hernández Fontal, N., & López Olarte, A. (2012). Manual digital de patronaje masculino casual. Fundación Universitaria del Área Andina.',
      link:
        'https://digitk.areandina.edu.co/entities/publication/8510aa8b-321c-4670-a702-74fc7a86ea1c',
    },
    {
      referencia:
        'García Ramos, C. (2016). Método profesional de patronaje y escalado masculino para trazados manual geométrico e informático. Patrón XXI. Editorial Paraninfo. ',
    },
    {
      referencia:
        'León, K. (2018). Patronaje para indumentaria masculina. Universidad del Azuay.',
      link: 'https://dspace.uazuay.edu.ec/bitstream/datos/8123/1/13846.pdf',
    },
    {
      referencia:
        'Moda, C. d. (2015). Técnicas de patronaje. Tomo II - Hombre. Universidad Peruana de Ciencias Aplicadas (UPC).',
      link:
        'https://editorial.upc.edu.pe/tecnicas-de-patronaje-tomo-ii-hombre-28x89.html',
    },
    {
      referencia:
        'Muñoz, A. (2019). Manual de patronaje industrial para hombre: Trazado y escalado. Editorial Textil. ',
    },
    {
      referencia:
        'Pérez, C. (2018). Patronaje y confección de prendas masculinas: Enfoque industrial. Editorial Moda.',
    },
    {
      referencia:
        'Promopress. (2017). Técnicas de patronaje de moda: Alta costura y patronaje industrial. Promopress. ',
    },
    {
      referencia:
        'Rodríguez, L. (2020). Patronaje industrial de prendas de vestir: Estudios y aplicaciones. Editorial Bogotá.',
    },
    {
      referencia:
        'Rubio, J. (2021). Patronaje industrial: Del manuscrito al software CAD. Editorial Técnica. ',
    },
    {
      referencia:
        'Sánchez, P. (2018). Patronaje geométrico e informático para prendas masculinas. Patrón XXI. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar ',
          cargo: 'Experta en confección ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jenny Rocio Reyes Acevedo',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
