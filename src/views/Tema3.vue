<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Insumos en la modistería

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(:style="{'background-image':`url(${require('@/assets/curso/temas/t3/1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Los insumos son los materiales esenciales para confeccionar una prenda. Su elección influye en la calidad, apariencia y durabilidad del producto final.#[br] #[br]
        p Las telas pueden ser naturales (como algodón o lino) o sintéticas (como poliéster o #[em nylon]), y se seleccionan según el tipo de prenda y el uso previsto. Los hilos, por su parte, unen las piezas: se usa algodón para acabados suaves y poliéster cuando se requiere mayor resistencia.#[br] #[br]
        p Entre los insumos de soporte, las entretelas y estabilizadores refuerzan áreas como cuellos y puños, mientras que cierres, botones y velcros permiten ajustar y decorar. Otros elementos como cintas al bies, elásticos y cintas de refuerzo ayudan a dar forma y rematar bordes.

    .row.justify-content-center.align-items-center(data-aos="fade")
      .col-lg-3.col-md-5
        .bg-1.tarjeta.p-4.mb-4.mb-lg-0
          p.mb-0 #[strong Cinta al bies:] tira de tela cortada en diagonal, flexible, usada para rematar bordes curvos o rectos con buen acabado.
      .col-lg-4.col-md-7
        p También se utilizan accesorios decorativos como encajes o pasamanerías, que aportan estilo, y productos de mantenimiento como #[em sprays] de marcado o lubricantes, que facilitan el proceso de confección.
      .col-lg-2.col-md-4.col-4
        img(src='@/assets/curso/temas/t3/2.svg', alt='')
      .col-lg-3.col-md-8.col-8
        .bg-10.tarjeta.p-4
          p.mb-0 Una adecuada selección de insumos permite confeccionar prendas funcionales, cómodas y con un acabado estético de calidad.


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1.	Hilos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-5.col-md-8.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/t3/3.png', alt='')
      .col-lg-4.col-md-6.mb-4.mb-md-0
        img.w-60.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t3/4.svg', alt='')
        p El hilo es el material que da firmeza a las costuras, puede ser de algodón, ideal para prendas suaves y transpirables, o de poliéster, que se destaca por su resistencia y variedad de colores; también existen hilos especiales como los de núcleo combinado, que ofrecen fuerza y flexibilidad.
        .bg-6.tarjeta.p-4
          p.mb-0 Seleccionar el hilo adecuado garantiza una costura resistente, de buen acabado y coherente con las características de la prenda.
      .col-lg-3.col-md-6.col-8
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 27.
          span Estructura general del hilo
        figure.mb-3  
          img(src='@/assets/curso/temas/t3/fig27.png', alt='Tres filamentos cilíndricos están entrelazados en espiral, formando una hebra compacta con textura uniforme.')
        figcaption Fuente: 
          a(href="https://www.coats.com/es/info-hub/selecting-your-sewing-threads/" target="_blank") https://www.coats.com/es/info-hub/selecting-your-sewing-threads/

    TabsB.color-acento-contenido.mb-5(data-aos="fade-down")
      .py-4.py-md-5(titulo="El hilo con núcleo" :icono="require('@/assets/curso/temas/t3/tab-ico1.svg')")
        .row.justify-content-center
          .col-md-11
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-4.col-md-6.col-8.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 28.
                  span Hilo con núcleo
                figure.mb-3  
                  img(src='@/assets/curso/temas/t3/fig28.png', alt='Tres hebras trenzadas forman una estructura externa que recubre un núcleo central compuesto por varios filamentos delgados alineados verticalmente.')
                figcaption Fuente: 
                  a(href="https://www.coats.com/es/info-hub/selecting-your-sewing-threads/" target="_blank") https://www.coats.com/es/info-hub/selecting-your-sewing-threads/
              .col-lg-8.col-md-6
                p El hilo con núcleo combina un filamento de poliéster en el centro con un recubrimiento de fibras (algodón o poliéster), lo que le aporta resistencia y suavidad. Esta estructura facilita el paso por la máquina y produce costuras firmes, ideales para confección a alta velocidad y prendas de alto esfuerzo. Por su parte, los hilos de filamento continuo (como poliéster, #[em nylon] o acetato) ofrecen mayor resistencia que los de fibra corta y se utilizan en aplicaciones industriales por su durabilidad y uniformidad.
      .py-4.py-md-5(titulo="El hilo monofilamento" :icono="require('@/assets/curso/temas/t3/tab-ico1.svg')")
        .row.justify-content-center
          .col-md-11      
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-6.col-8.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 29.
                  span Hilo monofilamento
                figure.mb-3  
                  img(src='@/assets/curso/temas/t3/fig29.png', alt='Cilindro continuo con superficie lisa y uniforme, sin divisiones visibles ni textura trenzada.')
                figcaption Fuente: 
                  a(href="https://www.coats.com/es/info-hub/selecting-your-sewing-threads/" target="_blank") https://www.coats.com/es/info-hub/selecting-your-sewing-threads/
              .col-lg-8.col-md-6
                h4 El hilo monofilamento 
                p Consiste en un solo filamento continuo de diámetro controlado, lo que le confiere una resistencia y uniformidad destacadas a un coste de producción relativamente bajo. Sin embargo, su rigidez y textura áspera limitan su flexibilidad y confort, por lo que su aplicación se concentra principalmente en confecciones donde estas propiedades resultan deseables, tales como bastillas, cortinas y tapicería. Gracias a su consistencia dimensional y su estabilidad frente a la tensión, el monofilamento garantiza bordes definidos y duraderos en usos decorativos y de tapizado, aunque no se recomienda para prendas de vestir que requieran suavidad o elasticidad.
      .py-4.py-md-5(titulo="El hilo multifilamento suave" :icono="require('@/assets/curso/temas/t3/tab-ico2.svg')")
        .row.justify-content-center
          .col-md-11
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-6.col-8.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 30.
                  span Hilo multifilamento
                figure.mb-3  
                  img(src='@/assets/curso/temas/t3/fig30.png', alt='Cilindro compuesto por múltiples hilos finos enrollados en espiral alrededor de un núcleo central, generando un patrón de textura densa.')
                figcaption Fuente: 
                  a(href="https://www.coats.com/es/info-hub/selecting-your-sewing-threads/" target="_blank") https://www.coats.com/es/info-hub/selecting-your-sewing-threads/
              .col-lg-8.col-md-6
                p Se fabrica principalmente a partir de filamentos continuos de #[em nylon] o poliéster torcidos en conjunto, lo que le confiere una resistencia excepcional. Esta construcción, que integra dos o más hilos finos en un único cordón, garantiza una alta tenacidad y flexibilidad, atributos esenciales para aplicaciones sometidas a elevados esfuerzos mecánicos. Por ello, resulta idóneo para la confección de calzado, artículos de cuero y productos industriales, donde la durabilidad de la costura es prioritaria. Además, su superficie suave reduce el desgaste del material base y facilita el deslizamiento por las máquinas de coser, contribuyendo a un proceso de alta productividad y calidad constante.
      .py-4.py-md-5(titulo="El hilo de filamento texturizado" :icono="require('@/assets/curso/temas/t3/tab-ico3.svg')")
        .row.justify-content-center
          .col-md-11
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-6.col-8.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 31.
                  span Hilo de filamento texturizado
                figure.mb-3  
                  img(src='@/assets/curso/temas/t3/fig31.png', alt='Dos haces de filamentos con estructura alargada se enrollan entre sí generando una torsión visible, con texturas internas marcadas y acabado fibroso.')
                figcaption Fuente: 
                  a(href="https://www.coats.com/es/info-hub/selecting-your-sewing-threads/" target="_blank") https://www.coats.com/es/info-hub/selecting-your-sewing-threads/
              .col-lg-8.col-md-6
                p Se elabora a partir de filamentos continuos de poliéster sometidos a un proceso de texturización que incrementa su volumen y elasticidad. Se emplea principalmente como hilo de lanzadera en puntadas de cobertura, donde aporta un acabado más denso y una mayor capacidad de recuperación en zonas sometidas a estiramiento. Gracias a su estructura voluminosa, mejora la cobertura del pespunte y la extensibilidad de la costura; sin embargo, su mayor volumen y menor tensión superficial incrementan la tendencia al enredo, por lo que es imprescindible ajustar con precisión los parámetros de tensión y guía durante el cosido para asegurar la uniformidad y continuidad de la puntada.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Características del hilo y su composición
        .tabla-a.color-acento-contenido
          table(alt="Tabla con cuatro tipos de insumos textiles: algodón, poliéster, mercerizado y lubricado. Se especifica que el algodón es una fibra natural de alto confort, el poliéster es un filamento sintético con resistencia y elasticidad, el mercerizado es un tratamiento químico que mejora las fibras, y el lubricado es un acabado para facilitar el proceso de cosido.")
            caption Fuente: SENA, (2021)
            thead
              tr.bg-color-primario
                th.w-25 Insumo
                th.text-center Descripción
            tbody
              tr
                td Algodón
                td Fibra natural que permanece en contacto con la piel, reconocida por su suavidad, alta capacidad de absorción y tacto fresco, lo cual minimiza la irritación y brinda confort.
              tr
                td Poliéster
                td Filamento sintético que forma el núcleo del hilo, aporta elasticidad y resistencia al estiramiento, permitiendo que la costura mantenga su integridad bajo tensión.
              tr
                td Mercerizado
                td Tratamiento químico en el que el hilo se baña en solución de hidróxido de sodio para mejorar su brillo, suavidad y durabilidad, al reforzar la estructura de las fibras.
              tr
                td Lubricado
                td Acabado final aplicado al hilo mediante agentes especiales que reducen la fricción con la aguja, evitando roturas y asegurando un deslizamiento uniforme en el proceso de cosido.
      .col-lg-3(data-aos="fade-left")        
        img.d-none.d-lg-block(src="@/assets/curso/temas/t3/5.png")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3(data-aos="fade-right")        
        img.d-none.d-lg-block(src="@/assets/curso/temas/t3/6.png")
      .col-lg-9(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Tamaño de hilo y aplicaciones  
        .tabla-a.color-acento-contenido
          table(alt="Tabla que relaciona el tipo de tejido con el grosor del hilo (medido en TEX) y las prendas recomendadas. El tejido liviano corresponde a hilos TEX 24 a 27 para blusas y ropa interior. El semipesado emplea TEX 30 a 40 para pantalones y overoles. El tejido pesado, con TEX de 60 a 120, se usa en prendas como chaquetas y pantalones de mezclilla.")
            caption Fuente: SENA, (2021)
            thead
              tr.bg-color-primario
                th.text-center Tejido
                th.text-center Textiles 
                th.text-center Prenda
            tbody
              tr
                td Liviano
                td 24, 25, 27.
                td Blusas, ropa interior.
              tr
                td Semipesado
                td 30, 35, 40.
                td Pantalones, overol drill.
              tr
                td Pesado
                td 60, 70 hasta 120.
                td #[em Jeans], chaquetas.
      
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Relación del hilo con la aguja y el tejido en la formación de puntadas y costuras

    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-2
        h5 Tabla 9.
        span Relación del hilo respecto a la aguja y tejido
      .tabla-a.color-acento-contenido
        table(alt="Cuadro comparativo que presenta cinco aspectos técnicos relacionados con el comportamiento del hilo, contrastando sus implicaciones tanto en la interacción con la aguja como con el tejido. Se abordan grosor, tensión, formación de puntada, velocidad de costura y acabado, señalando su influencia en la calidad del pespunte y la integridad del material.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-color-primario
              th.w-25 Aspecto
              th.text-center Hilo y aguja
              th.text-center Hilo y tejido
          tbody
            tr
              td Grosor y calibre
              td Coincidencia entre diámetro del hilo y calibre de aguja para evitar roturas y asegurar paso limpio.
              td Selección de hilo compatible con el espesor y la textura del tejido para evitar arrugas o deslizamientos.
            tr
              td Tensión
              td Ajuste de tensión que permita formación de la lazada sin exceso ni defecto de puntada.
              td Tensión adecuada para garantizar el anclaje del hilo en la trama sin distorsionar la estructura del textil.
            tr
              td Formación de puntada
              td Recorrido del hilo alrededor del gancho o tomador de lazada, definiendo longitud y firmeza del pespunte.
              td Integración de la puntada en los hilos de trama y urdimbre para crear una costura resistente y estable.
            tr
              td Velocidad de costura
              td Influye en la regularidad del hilo al entrar y salir de la aguja; requiere sincronía entre aguja y gancho.
              td A mayor velocidad, mayor fricción; el hilo debe deslizarse sin enredos ni desgaste en la superficie textil.
            tr
              td Acabado visual
              td Longitud y uniformidad de puntada afectan la apariencia sobre y bajo la tela.
              td Cobertura y densidad del pespunte realzan o amortiguan la textura del tejido según el tipo de hilo empleado.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Relación entre hilo, aguja y tejido en la confección

    .bg-5.mb-5
      .row.align-items-center 
        .col-lg-5.col-md-8
          img(src='@/assets/curso/temas/t3/7.png', alt='')
        .col-lg-7
          .p-4.p-lg-5
            p.mb-0 La correcta integración del hilo con la aguja y el tejido fortalece todo el proceso de confección. Un ajuste preciso entre el hilo y la aguja permite formar puntadas limpias que no generan roturas ni deformaciones en la tela. Al mismo tiempo, una selección adecuada del hilo en función del tejido asegura que la costura se integre de manera uniforme con el material, brindando resistencia y un acabado profesional. Esta visión complementaria mejora la eficiencia en la producción, la calidad del producto final y la durabilidad de las prendas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .subt.mb-4(data-aos="fade")
          img(src="@/assets/curso/temas/t4/subt.svg")
          h3.ps-3.pe-4.mb-0 Importancia de las puntadas en la calidad textil
        p Las puntadas son un elemento fundamental en la confección, ya que inciden directamente en la calidad, resistencia, seguridad y elasticidad de las prendas. Además de cumplir una función estructural, aportan valor estético y decorativo. Cada tipo de puntada ofrece propiedades específicas que responden a distintas exigencias, desde soportar tensión constante hasta adaptarse a tejidos con gran flexibilidad. A continuación, se presentan algunos ejemplos representativos, destacando sus características técnicas y principales aplicaciones.
      .col-lg-6.col-md-8
        img(src='@/assets/curso/temas/t3/8.png', alt='')

    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 10.
        span Tipos de puntada y parámetros
      .tabla-a.color-acento-contenido
        table(alt="Tabla con seis tipos de puntadas utilizadas en confección, organizadas por criterios técnicos como durabilidad, elongación, seguridad, apariencia decorativa y usos frecuentes. Incluye variantes como recta, zigzag, overlock, cobertura, triple puntada y festón, detallando su función estructural o estética en distintos acabados.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-color-primario
              th Tipo de puntada
              th Durabilidad
              th Elongación
              th Seguridad
              th Apariencia y decoración
              th Usos habituales
          tbody
            tr
              td Puntada recta simple
              td Alta en uniones básicas
              td Nula
              td Estable en costuras verticales.
              td Líneas limpias y discretas; acabado clásico.
              td Costura de ensamblaje principal.
            tr
              td Zigzag
              td Media - alta
              td Moderada (recupera forma)
              td Refuerzo en bordes.
              td Aspecto decorativo; volumen moderado.
              td Acabados de prensatelas, dobladillos.
            tr
              td Puntada #[em overlock]
              td Muy alta
              td Alta
              td Protección de bordes.
              td Ligeramente visible en el borde; acabado uniforme.
              td Remates de orillo, acabado de costura.
            tr
              td Puntada #[em cover] (cobertura)
              td Alta
              td Muy alta
              td Refuerzo de costuras planas.
              td Dos líneas paralelas decorativas en el derecho; suave al tacto.
              td Dobladillos elásticos, costura de punto.
            tr
              td Triple puntada
              td Muy alta
              td Baja
              td Máxima resistencia.
              td Tres pasadas juntas; apariencia contundente.
              td Costuras sometidas a alta tensión.
            tr
              td Festón (#[em overcast])
              td Media
              td Baja
              td Asegura bordes.
              td Bordes decorativos; efecto de festón.
              td Orillas de tela curva, refuerzo decorativo.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Selección de puntadas en el diseño industrial de prendas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-8.col-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/9.png', alt='')
      .col-lg-6(data-aos="fade-left")
        p En el diseño industrial de prendas, la elección adecuada de la puntada influye directamente en el valor agregado del producto final. Las puntadas rectas simples se utilizan en costuras principales por su discreción y alta durabilidad. Las puntadas en zigzag y las puntadas #[em overlock] permiten elongación y protección de los bordes, combinando resistencia con un acabado decorativo. La puntada #[em cover] es ideal para dobladillos en tejidos elásticos, ya que ofrece gran elasticidad y un perfil estético limpio.
        .bg-9.tarjeta.p-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-md-2.col-3
              img(src='@/assets/curso/temas/t3/10.svg', alt='')
            .col-lg-9.col-md-10.col-9
              p.mb-0 Para zonas sometidas a esfuerzos constantes, la puntada triple proporciona máxima resistencia estructural. Por su parte, la puntada tipo festón se emplea como remate visual, reforzando y embelleciendo bordes curvos o decorativos. Este conjunto de opciones permite mejorar la calidad, la seguridad y la apariencia de las prendas en cada etapa del proceso productivo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        p Por lo tanto, las características se definen según el tipo de puntada:
        p.mb-4 La tabla corresponde a la clasificación de las puntadas industriales según su serie (primer dígito), tipo (código completo) y características de construcción.
        .bg-11.tarjeta.p-4
          ol.lista-ol--cuadro.color-2.fa-lista
            li
              .lista-ol--cuadro__vineta
                span.fw-bold a.
              span.mb-0 Serie: es el primer dígito del código de la puntada y agrupa grandes familias de puntada. Cada serie define un método general de formación de la puntada.
            li
              .lista-ol--cuadro__vineta
                span.fw-bold b.
              span.mb-0 Tipo: corresponde al código completo de la puntada (tres dígitos) y precisa la variante o subtipo dentro de cada familia. Por ejemplo, dentro de la serie 100 aparecen las puntadas 101, 102 y 103, todas ellas “cadeneta sencilla de un solo hilo”.
            li
              .lista-ol--cuadro__vineta
                span.fw-bold c.
              span.mb-0 Características: describe brevemente el modo en que se forma la puntada y el número de hilos o pasadas implicadas:
      .col-lg-6(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Tabla 11.
          span Tipos de puntada por serie
        .tabla-a.color-acento-contenido.mw-300
          table(alt="Tabla con clasificación de puntadas industriales por series, desde la 100 hasta la 600. Cada serie agrupa tipos específicos como cadeneta sencilla, doble pespunte, sobrehilado o puntadas ornamentales, destacando su aplicación técnica y número de hilos utilizados.")
            caption Fuente: SENA, (2025)
            thead
              tr.bg-color-primario
                th.w-25 Serie
                th Tipo
                th Características
            tbody
              tr
                td 100
                td 101 - 103
                td Cadeneta sencilla 1 solo hilo.
              tr
                td 200
                td 200
                td Ornamentales.
              tr
                td 300
                td 301 - 304 - 315
                td Doble pespunte.
              tr
                td 400
                td 401 - 406 - 407
                td Cadeneta doble.
              tr
                td 500
                td 504 - 514 - 516
                td Sobrehilado.
              tr
                td 600
                td 602 - 605 - 609
                td #[em Flatseamers].

    .row.bgc-intro.align-items-center.p-2.pt-5.p-md-3.pt-md-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center.mb-4
            .col-lg-4.d-none.d-lg-block
              img.px-lg-4(src='@/assets/curso/temas/t3/11.svg', alt='')
            .col-lg-8
              SlyderF.circl-arrow(columnas="col-12")
                .tarjeta.bg-14.p-4.px-lg-5
                  .row.justify-content-center.align-items-center.mb-3
                    .col-md-6.col-lg-7
                      img.h-99.mb-3(src='@/assets/curso/temas/t3/tarj1-1.svg', alt='')
                      h4.text-center.ct-1.mb-1 100 (101 - 103). 
                      h4.bg-3.w-fit.text-white.px-2.py-1.m-auto.mb-1 Cadeneta sencilla 
                      h4.text-center.ct-1.mb-4 de un solo hilo
                      p.text-center Una puntada en la que un único hilo forma una cadena de lazo sobre el revés de la tela, muy utilizada para costuras ligeras y flexibles.
                    .col-md-6.col-lg-5
                      .titulo-sexto.color-acento-contenido.mb-2
                        h5 Figura 32.
                        span Puntada clase 100
                      figure.mb-2  
                        img(src='@/assets/curso/temas/t3/fig32.png', alt='Puntada formada por bucles que se entrelazan en línea horizontal, generando una cadena continua sobre la superficie. Se identifica como clase 100 y se utiliza comúnmente para costuras temporales o decorativas.')
                      figcaption Fuente: 
                        a(href="https://seampedia.com/clasificacion-de-costura-segun-tipo-puntada/" target="_blank") https://seampedia.com/clasificacion-de-costura-segun-tipo-puntada/
                .tarjeta.bg-14.p-4.px-lg-5
                  .row.justify-content-center.align-items-center.mb-3
                    .col-md-6.col-lg-7
                      img.h-99.mb-3(src='@/assets/curso/temas/t3/tarj1-2.svg', alt='')
                      h4.text-center.ct-1.mb-1 200
                      h4.bg-3.w-fit.text-white.px-2.py-1.m-auto.mb-4 (Ornamentales)
                      p.text-center Familias de puntadas decorativas, usadas para aplicaciones estéticas más que para unir cargamentos de tejido
                    .col-md-6.col-lg-5
                      .titulo-sexto.color-acento-contenido.mb-2
                        h5 Figura 33.
                        span Puntada clase 200 
                      figure.mb-2  
                        img(src='@/assets/curso/temas/t3/fig33.png', alt='Puntadas individuales dispuestas en línea horizontal, realizadas una por una con hilo continuo.')
                      figcaption Fuente: 
                        a(href="https://seampedia.com/clasificacion-de-costura-segun-tipo-puntada/" target="_blank") https://seampedia.com/clasificacion-de-costura-segun-tipo-puntada/
                .tarjeta.bg-14.p-4.px-lg-5
                  .row.justify-content-center.align-items-center.mb-3
                    .col-md-6.col-lg-7
                      img.h-99.mb-3(src='@/assets/curso/temas/t3/tarj1-3.svg', alt='')
                      h4.text-center.ct-1.mb-1 300 (301 - 304 - 315).
                      h4.bg-3.w-fit.text-white.px-2.py-1.m-auto.mb-4 Doble pespunte
                      p.text-center Dos líneas paralelas de puntada recta proporcionan alta resistencia y son comunes en costuras de alta tensión, como en #[em jeans] o artículos deportivos.
                    .col-md-6.col-lg-5
                      .titulo-sexto.color-acento-contenido.mb-2
                        h5 Figura 34.
                        span Puntada clase 300
                      figure.mb-2  
                        img(src='@/assets/curso/temas/t3/fig34.png', alt='Puntadas alineadas que atraviesan la tela de arriba hacia abajo y regresan, formando un trazo firme en ambas caras.')
                      figcaption Fuente: 
                        a(href="https://seampedia.com/clasificacion-de-costura-segun-tipo-puntada/" target="_blank") https://seampedia.com/clasificacion-de-costura-segun-tipo-puntada/
                .tarjeta.bg-14.p-4.px-lg-5
                  .row.justify-content-center.align-items-center.mb-3
                    .col-md-6.col-lg-7
                      img.h-99.mb-3(src='@/assets/curso/temas/t3/tarj1-4.svg', alt='')
                      h4.text-center.ct-1.mb-1 400 (401 - 406 - 407). 
                      h4.bg-3.w-fit.text-white.px-2.py-1.m-auto.mb-4 Cadeneta doble
                      p.text-center Similar a la cadeneta sencilla, pero con dos hilos entrelazados, ofrece mayor firmeza y moderada elasticidad.
                    .col-md-6.col-lg-5
                      .titulo-sexto.color-acento-contenido.mb-2
                        h5 Figura 35.
                        span Puntada clase 400
                      figure.mb-2  
                        img(src='@/assets/curso/temas/t3/fig35.png', alt='Puntadas formadas por dos hilos que se entrelazan en zigzag en la parte inferior y recto en la superior, creando una unión flexible.')
                      figcaption Fuente: 
                        a(href="https://seampedia.com/clasificacion-de-costura-segun-tipo-puntada/" target="_blank") https://seampedia.com/clasificacion-de-costura-segun-tipo-puntada/
                .tarjeta.bg-14.p-4.px-lg-5
                  .row.justify-content-center.align-items-center.mb-3
                    .col-md-6.col-lg-7
                      img.h-99.mb-3(src='@/assets/curso/temas/t3/tarj1-5.svg', alt='')
                      h4.text-center.ct-1.mb-1 500 (504 - 514 - 516).
                      h4.bg-3.w-fit.text-white.px-2.py-1.m-auto.mb-4 Sobrehilado
                      p.text-center Puntada de remate de orillo, envuelve el borde del tejido para evitar deshilachados y asegurar un acabado limpio.
                    .col-md-6.col-lg-5
                      .titulo-sexto.color-acento-contenido.mb-2
                        h5 Figura 36.
                        span Puntada clase 500
                      figure.mb-2
                        img(src='@/assets/curso/temas/t3/fig36.png', alt='Puntadas que envuelven el borde de la tela con múltiples hilos entrelazados, formando una unión cerrada y continua.')
                      figcaption Fuente: 
                        a(href="https://seampedia.com/clasificacion-de-costura-segun-tipo-puntada/" target="_blank") https://seampedia.com/clasificacion-de-costura-segun-tipo-puntada/
                .tarjeta.bg-14.p-4.px-lg-5
                  .row.justify-content-center.align-items-center.mb-3
                    .col-md-6.col-lg-7
                      img.h-99.mb-3(src='@/assets/curso/temas/t3/tarj1-6.svg', alt='')
                      h4.text-center.ct-1.mb-1 600 (602 - 605 - 609).
                      h4.bg-3.w-fit.text-white.px-2.py-1.m-auto.mb-4 #[em Flatseamers]
                      p.text-center Puntada de cobertura plana, usada para unir dos capas de tela con un acabado plano y suave, muy habitual en ropa deportiva y de punto.
                    .col-md-6.col-lg-5
                      .titulo-sexto.color-acento-contenido.mb-2
                        h5 Figura 37.
                        span Puntada clase 600
                      figure.mb-2
                        img(src='@/assets/curso/temas/t3/fig37.png', alt='Puntadas múltiples que cubren por completo la unión de las telas, con hilos visibles en ambos lados y entrelazados en zigzag en la parte inferior.')
                      figcaption Fuente: 
                        a(href="https://seampedia.com/clasificacion-de-costura-segun-tipo-puntada/" target="_blank") https://seampedia.com/clasificacion-de-costura-segun-tipo-puntada/

    .tarjeta.bg-3.p-3.py-md-4(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t4/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1.ct-color-primario Clasificación de los hilos
              p.mb-0.text-white Se invita a revisar la clasificación general de los hilos.
            .col-sm-auto
              a.boton.bg-4(:href="('https://www.youtube.com/watch?v=XmnGaIHLbro&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA')" target="_blank")
                span Ver video
                i.fas.fa-circle-play


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2.	 Entretelas y estabilizadores    

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-6.col-md-8.pe-lg-0
        .bg-16.p-4.pb-0.h-100
          img.w-50.m-auto(src='@/assets/curso/temas/t3/12.svg', alt='')
      .col-lg-6.ps-lg-0
        .bg-15.p-4.p-lg-5.h-100.d-flex.align-items-center
          p.mb-0 Son materiales que se colocan en el interior de las prendas para darles firmeza y estabilidad. Las entretelas se cosen o se fijan con calor al reverso de la tela, reforzando áreas como cuellos, puños, cinturillas y tapetas, y ayudando a que la prenda mantenga su forma con el uso y el lavado. Los estabilizadores, en cambio, se usan principalmente en bordados y aplicaciones, brindando soporte temporal o permanente para evitar que la tela se estire o deforme durante la confección.

    .bg-2.tarjeta.p-4.pt-lg-5.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-lg-5.col-md-11
            p Existen distintos tipos de entretelas, según el tipo de tela y el nivel de rigidez que se requiera:
            ul.lista-ul--color.fa-lista
              li
                i.far.fa-circle
                span.mb-0 #[strong Fusibles tejidos:] tienen una estructura de malla con algo de elasticidad, ideales para dar cuerpo sin restar movilidad.
              li
                i.far.fa-circle
                span.mb-0 #[strong Fusibles no tejidos:] están hechos de fibras compactadas que refuerzan de forma uniforme, perfectos para piezas estructuradas como uniformes.
              li
                i.far.fa-circle
                span.mb-0 #[strong Entretelas de costura:] se colocan con puntadas y son adecuadas para telas delicadas o cuando no se puede aplicar calor.
          .col-lg-5.col-md-9
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 38.
              span Entretela
            figure.mb-2
              img(src='@/assets/curso/temas/t3/fig38.png', alt='Bolsa de papel con forma trapezoidal, pliegues laterales hacia adentro y borde inferior con terminación en picos.')
            figcaption Fuente: 
              a(href="https://n9.cl/28rw01" target="_blank") https://n9.cl/28rw01
        .row.justify-content-around.align-items-center
          .col-lg-5.col-md-11
            p Los estabilizadores, por su parte, se clasifican según su modo de retirada:
            ul.lista-ul--color.fa-lista
              li
                i.far.fa-circle
                span.mb-0 #[strong Desprendiese (#[em tear-away]):] que se recogen con un tirón lento una vez finalizado el bordado, ideales para tejidos con poca elasticidad.
              li
                i.far.fa-circle
                span.mb-0 #[strong Recortables (#[em cut-away]):] que permanecen en la prenda y se ajustan alrededor del diseño, ofreciendo un soporte duradero en tejidos elásticos o de punto.
              li
                i.far.fa-circle
                span.mb-0 #[strong Solubles (#[em wash-away]):] que desaparecen al contacto con el agua, perfectos para tejidos muy finos o translúcidos donde no puede quedar rastro alguno.
          .col-lg-5.col-md-9
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 39.
              span Estabilizadores para tela
            figure.mb-2
              img(src='@/assets/curso/temas/t3/fig39.png', alt='Rollos de tela colocados en posición horizontal sobre una estructura metálica con barras cilíndricas.')
            figcaption Fuente: 
              a(href="https://n9.cl/y66ks" target="_blank") https://n9.cl/y66ks


    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Criterios de selección

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-8.col-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/13.png', alt='')
      .col-lg-7(data-aos="fade-left")
        ol.lista-ol--cuadro.lista-ol--separador.color-2.fa-lista
          li
            .lista-ol--cuadro__vineta
              span.fw-bold a.
            span.mb-0 #[strong Compatibilidad con la tela:] tejidos ligeros requieren entretelas fusibles ligeras, mientras que telas pesadas precisan estabilizadores de mayor densidad.
          li
            .lista-ol--cuadro__vineta
              span.fw-bold b.
            span.mb-0 #[strong Método de aplicación:] planchado versus cosido; el #[em sew-in] es preferido en materiales que no toleran alta temperatura.
          li
            .lista-ol--cuadro__vineta
              span.fw-bold c.
            span.mb-0 #[strong Finalidad del refuerzo:] estructural (cuellos, cinturillas), decorativo (apliques) o técnico (bordados de alta densidad).
          li
            .lista-ol--cuadro__vineta
              span.fw-bold d.
            span.mb-0 #[strong Tipo de acabado:] si la entretela o estabilizador debe quedar visible, optar por opciones transparentes o de color similar al forro.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Procedimiento de aplicación

    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-7(data-aos="fade-right")
        ol.lista-ol--cuadro.lista-ol--separador.color-2.fa-lista
          li
            .lista-ol--cuadro__vineta
              span.fw-bold a.
            span.mb-0 #[strong Preparación:] cortar la entretela o estabilizador con un margen de 5–10 mm más pequeño que la pieza de tela.
          li
            .lista-ol--cuadro__vineta
              span.fw-bold b.
            span.mb-0 #[strong Posicionamiento:] alinear con precisión sobre la cara interna de la pieza.
          li
            .lista-ol--cuadro__vineta
              span.fw-bold c.
            span.mb-0 #[strong Adherencia:] aplicar plancha (fusible) siguiendo recomendaciones de temperatura y tiempo, o fijar con hilvanes (#[em sew-in]).
          li
            .lista-ol--cuadro__vineta
              span.fw-bold d.
            span.mb-0 #[strong Verificación:] tras el planchado o costura, comprobar la estabilidad, evitar pliegues y garantizar un soporte uniforme.
          li
            .lista-ol--cuadro__vineta
              span.fw-bold e.
            span.mb-0 #[strong Remoción (si aplica):] retirar estabilizadores #[em tear-away] o #[em wash-away] con cuidado para no dañar bordados o apliques.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img.w-50.m-auto(src='@/assets/curso/temas/t3/14.png', alt='')

    TabsA.color-secundario(data-aos="fade-down")
      .tarjeta.bg-12.p-4(titulo="<em>Sew-in</em> (cosible)")
        h4 #[em Sew-in] (cosible)
        p Estabilizador que se incorpora permanentemente a la prenda mediante puntadas o hilvanes y permanece en ella durante toda su vida útil. No requiere retirada, ya que forma parte de la estructura interna, aportando soporte continuo en zonas que necesitan refuerzo (por ejemplo: cuellos, puños o cinturillas).
      .tarjeta.bg-12.p-4(titulo="<em>Tear-away</em> (desprendible)")
        h4 #[em Tear-away] (desprendible)
        p Estabilizador de un solo uso que se coloca bajo el área de bordado o aplique y, una vez terminado el trabajo, se retira tirando lentamente de sus bordes. Está formulado para despegarse sin dejar restos ni dañar la tela, y es ideal en tejidos planos que no se distienden.
      .tarjeta.bg-12.p-4(titulo="<em>Wash-away</em> (soluble)")
        h4 #[em Wash-away] (soluble)
        p Estabilizador que se disuelve al entrar en contacto con agua. Se utiliza sobre todo en tejidos delicados o transparentes, donde no se tolera ningún residuo. Tras completar el bordado o la aplicación, basta con lavar la pieza para eliminar por completo el estabilizador.


    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3.	Insumos de #[em plackets]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Los #[em plackets] o tapetas requieren insumos específicos que aseguren su funcionalidad y apariencia; entre los más comunes se encuentran entretelas para dar estructura, botones o broches como sistema de cierre, hilos resistentes y cintas de refuerzo. La elección de estos materiales varía según el tipo de prenda, tejido base y nivel de acabado deseado.
      .col-lg-5.col-md-8(data-aos="fade-left")
        .bg-1.tarjeta.px-5.py-2
          img(src='@/assets/curso/temas/t3/15.svg', alt='')

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Cierres de cremallera

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-3.col-md-7.col-10.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 40.
          span Tipos de cremalleras
        figure.mb-2
          img(src='@/assets/curso/temas/t3/fig40.png', alt='Serie de siete cremalleras alineadas en vertical, con variaciones en el diseño del deslizador y forma de los dientes.')
        figcaption Fuente: 
          a(href="https://n9.cl/fr05z" target="_blank") https://n9.cl/fr05z 
      .col-lg-5.col-md-7
        p Los cierres de cremallera desempeñan un papel esencial en el acceso y el ajuste de las prendas. Se clasifican principalmente según el material de la cadena y los dientes: los cierres de #[em nylon] integran dientes inyectados directamente en una cinta de poliéster, lo que le confiere ligereza, flexibilidad y resistencia al desgaste; por su parte, los cierres metálicos (generalmente de aluminio o latón) ofrecen una mayor solidez y un acabado más robusto, habitualmente empleado en #[em jeans] y prendas exteriores. La selección del tipo de cremallera considera el grosor del tejido, la frecuencia de uso y el diseño estético; en todos los casos, es imprescindible garantizar una instalación precisa, con entalle uniforme de la cinta y fijación segura de los deslizadores, para asegurar un funcionamiento suave y duradero.
      .col-lg-4.col-md-5.col-8
        img(src='@/assets/curso/temas/t3/16.png', alt='')

    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-2
        h5 Tabla 13.
        span Tipos de cremalleras y sus características 
      .tabla-a.color-acento-contenido
        table(alt="Cuadro con cuatro filas que describen tipos de cremalleras, agrupadas por insumo, característica, uso, tipos y ejemplos. Cada fila incluye información técnica sobre materiales como nylon, metal o plástico, y su aplicación en prendas, bolsos o ropa técnica.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-color-primario
              th.text-center Insumo
              th.text-center Característica
              th.text-center Uso
              th.text-center Tipos
              th.text-center Ejemplos
          tbody
            tr
              td Cierre de cremallera con dientes metálicos
              td Dentado inyectado sobre cinta de poliéster (#[em nylon]) o dientes metálicos unidos a cinta textil.
              td Apertura y cierre de prendas ligeras y medias.
              td #[em Nylon], metálico.
              td Cremallera invisible en vestidos; cremallera metálica en #[em jeans].
            tr
              td Cierre de cremallera con doble cabeza
              td Flexibilidad y bajo peso (#[em nylon]) versus alta resistencia y apariencia robusta (metálico).
              td Bolsillos, cierres centrales, aberturas laterales.
              td Separación estándar, bidireccional.
              td Cremallera bidireccional en chaquetas; cremallera estándar en ropa deportiva.
            tr
              td Cierre de cremallera plástica
              td Deslizadores con tiradores ergonómicos o decorativos.
              td Vestimenta deportiva, prendas exteriores, ropa técnica.
              td Con dientes de #[em nylon], dientes metálicos, autobloqueo.
              td Cremallera autobloqueo en ropa exterior; cremallera laminada en carpas.
            tr
              td Cierre de cremallera metálico para bolsos
              td Resistencia a la corrosión (aluminio, latón) y facilidad de teñido de la cinta (#[em nylon]).
              td Textiles de alto uso y lavados frecuentes.
              td Tonos coordinados o contrastantes.
              td Cremallera contrastante en bolsos; cremallera metálica en chaquetas de mezclilla.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Botones

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-4
        p Los botones constituyen elementos de cierre y, a la vez, detalles de ornamentación. Se fabrican en materiales diversos: plásticos inyectados (económicos y de infinitas formas y colores), metales laminados que aportan brillo y resistencia, y nácar natural valorizado por su lustre iridiscente en prendas de vestir elegantes. Cada tipo de botón requiere un método de fijación distinto: el cosido a través de ojales reforzados, la inserción mediante remaches o la soldadura en el caso de botones metálicos de dos piezas. La elección del botón adecuado depende del estilo de la prenda, la carga de esfuerzo sobre el cierre y el acabado deseado; asimismo, se deben considerar el diámetro, el grosor y la separación entre los ojos para asegurar una costura firme y sin deformaciones.
      .col-lg-4.col-md-6.col-10.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 41.
          span Botones de presión
        figure 
          img(src='@/assets/curso/temas/t3/fig41.png', alt='Seis botones metálicos dispuestos en dos filas, con formas circulares y cuadradas, superficies lisas o con relieve.')
        figcaption Fuente: 
          a(href="https://n9.cl/6gns81" target="_blank") https://n9.cl/6gns81
      .col-lg-4.col-md-6.col-10.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 42.
          span Botones metálicos y plásticos
        figure.mb-3.mb-lg-4 
          img(src='@/assets/curso/temas/t3/fig42.png', alt='Superficie cubierta por botones de distintos tamaños, materiales y formas, distribuidos de manera uniforme sobre fondo de madera.')
        figcaption Fuente: 
          a(href="https://n9.cl/norqz" target="_blank") https://n9.cl/norqz 

    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 14.
        span Tipos de botones
      .tabla-a.color-acento-contenido
        table(alt="Cuadro con tres filas que describen tipos de botones según insumo, característica, uso, tipos y ejemplos. Se mencionan materiales como plástico, metal, nácar y madera, con aplicaciones en prendas decorativas, de ajuste o de uso intensivo.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-color-primario
              th Insumo
              th Característica
              th Uso
              th Tipos
              th Ejemplos
          tbody
            tr
              td Botones metálicos / plásticos / nácar
              td Materiales diversos (plástico, metal, nácar).
              td Cierre de prendas y detalle decorativo.
              td Plástico inyectado, metal laminado, nácar natural.
              td Botón plano de nácar en camisas formales; botón metálico de presión en cazadoras.
            tr
              td Botones plásticos y de madera
              td Dimensiones variables (diámetro y grosor).
              td Ajuste de tensión y estética.
              td Grande, mediano, pequeño.
              td Botón grande decorativo en abrigos; botón pequeño en puños de blusa.
            tr
              td Botón de presión
              td Resistencia mecánica según método de fijación.
              td Prendas de uso intenso y lavados frecuentes.
              td Cosido, remache, soldadura.
              td Botón remachado en ropa de trabajo; botón soldado en equipamiento industrial.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Broches y #[em snaps]

    .bg-1.p-4.p-lg-5.h-100.d-flex.align-items-center.mb-4
      p.mb-0 Los broches de presión (#[em snaps]) son cierres de dos piezas que se ensamblan con un simple “#[em clic]”, combinando rapidez de apertura y resistencia mecánica. Están compuestos por un casquillo hembra y un macho, disponibles en acero niquelado, latón o plástico, lo que permite su uso en prendas infantiles, ropa técnica y accesorios de moda. Su instalación se realiza mediante herramientas de prensa manual o hidráulica, insertando primero el casquillo y luego el elemento macho, de manera que queden firmemente unidos. Gracias a su bajo perfil y a su capacidad de soportar múltiples ciclos de apertura, los broches resultan idóneos en aplicaciones donde se requiere un cierre rápido y discreto, tales como bolsillos, cuellos desmontables y complementos de diseño.   
        
    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 15.
        span Tipos de broches y #[em snaps]
      .tabla-a.color-acento-contenido
        table(alt="Tabla con cuatro filas que describen tipos de cierres tipo snap y broches, organizados por insumo, característica, uso, tipos y ejemplos. Se incluyen materiales como acero, latón y plástico, con aplicaciones en prendas, accesorios y producción industrial.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-color-primario
              th.text-center Insumo
              th.text-center Característica
              th.text-center Uso
              th.text-center Tipos
              th.text-center Ejemplos
          tbody
            tr
              td #[em Snaps]
              td Cierre de dos piezas con encaje a presión (hembra y macho).
              td Cierres rápidos en bolsillos, cuellos y accesorios.
              td Acero niquelado, latón, plástico.
              td #[em Snap] de acero en chaquetas de esquí; #[em snap] de plástico en prendas infantiles.
            tr
              td #[em Snaps]
              td Bajo perfil y acabado discreto.
              td Ropa técnica, accesorios, prendas infantiles.
              td De presión estándar, marine (resistente al agua).
              td #[em Snap] marine en ropa de lluvia; #[em snap] estándar en bolsos.
            tr
              td Broches
              td Soporta múltiples ciclos de apertura y cierre sin deformarse.
              td Prendas que requieren uso frecuente.
              td Con bordes biselados o planos.
              td Broche plano en prendas.
            tr
              td #[em Snaps]
              td Instalación mediante prensa manual o hidráulica.
              td Montaje seguro y uniforme en zona de aplicación
              td De montaje manual, de prensa.
              td #[em Snap] montado con herramienta de mano en talleres domésticos; #[em snap] hidráulico en producción industrial.

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-6.col-md-6.col-10.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 43.
          span Broches de acero
        .row.justify-content-center
          .col-lg-8.col-md-9
            figure.mb-3
              img(src='@/assets/curso/temas/t3/fig43.png', alt='Exhibidor de botones metálicos y recubiertos, organizados en seis filas, cada uno acompañado por una referencia que indica acabado o tono.')
        figcaption Fuente: 
          a(href="https://peleteriamilano.com/producto/broche-de-presion-ideal-para-chamarra-rt-100-o-1000-juegos/" target="_blank") https://peleteriamilano.com/producto/broche-de-presion-ideal-para-chamarra-rt-100-o-1000-juegos/
      .col-lg-6.col-md-6.col-10.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 44.          
          span #[em Snap] montado
        .row.justify-content-center
          .col-lg-8.col-md-9
            figure.mb-3
              img(src='@/assets/curso/temas/t3/fig44.png', alt='Cuatro piezas plásticas blancas dispuestas sobre una base cuadriculada, con etiquetas que indican dos partes huecas y dos salientes, comúnmente utilizadas como broches a presión.')
        figcaption Fuente: 
          a(href="https://coloursforbaby.blogspot.com/2016/09/como-poner-y-quitar-snaps.html" target="_blank") https://coloursforbaby.blogspot.com/2016/#[br]09/como-poner-y-quitar-snaps.html


    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4. Cintas y elásticos    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="fade-right")
        p Son insumos fundamentales en la confección, utilizados para ajustar, decorar o reforzar prendas. Las cintas pueden ser decorativas o funcionales, y se emplean en acabados, tirantes, dobladillos o detalles visuales. Los elásticos, por su parte, permiten que la prenda se adapte al cuerpo, brindando comodidad y ajuste en zonas como pretinas, puños o espalda; se eligen según su ancho, resistencia y tipo de aplicación.
      .col-lg-6.col-md-8(data-aos="fade-left")
        img(src="@/assets/curso/temas/t3/17.png")

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Cintas al bies y decorativas


    .bg-17.p-4.p-lg-5.h-100.d-flex.align-items-center.mb-4
      p.mb-0 Las cintas al bies resultan imprescindibles en el ajuste de prendas femeninas, pues su corte sesgado les permite adaptarse sin arrugas a contornos curvos como escotes, sisas y bastas. Su aplicación refuerza el borde de la prenda y ofrece un acabado limpio, al tiempo que facilita ligeros ajustes de ancho o largo. Por su parte, las cintas decorativas (galones, pasamanerías y encajes) añaden valor estético al borde o costura vista, al mismo tiempo que ocultan refuerzos y permiten modular la tensión del trazo final, asegurando que el escote o la cintura se ciñan con comodidad y elegancia al torso femenino.    
      
    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 16.
        span Tipos de cintas 
      .tabla-a.color-acento-contenido
        table(alt="Tabla con dos filas que describen tipos de cintas según insumo, característica, uso, tipos y ejemplos. Incluye la cinta al bies y la cinta decorativa, utilizadas para acabados, refuerzos o detalles visibles en prendas y textiles.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-color-primario
              th.text-center Insumo
              th.text-center Característica
              th.text-center Uso
              th.text-center Tipos
              th.text-center Ejemplos
          tbody
            tr
              td Cinta al bies
              td Corte sesgado que permite adaptarse a curvas y bordes.
              td Rematar escotes, sisas y orillas en prendas y mantelería.
              td Algodón, poliéster, seda.
              td Ribete de escote en vestido; borde de servilleta.
            tr
              td Cinta decorativa
              td Variedad de anchuras, estampados y texturas.
              td Adorno y refuerzo en costuras vistas.
              td Galones, pasamanerías, encajes.
              td Galón de terciopelo en chaqueta; encaje en blusa.

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-6.col-md-6.col-10.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 45.
          span Cinta al bies
        .row.justify-content-center
          .col-lg-8.col-md-9
            figure.mb-3 
              img(src='@/assets/curso/temas/t3/fig45.png', alt='Tijeras abiertas cortando una cinta ondulada dispuesta en diagonal.')
        figcaption Fuente: 
          a(href="https://n9.cl/1rncsv" target="_blank") https://n9.cl/1rncsv
      .col-lg-6.col-md-6.col-10.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 46.          
          span Cinta decorativa
        .row.justify-content-center
          .col-lg-8.col-md-9
            figure.mb-3 
              img(src='@/assets/curso/temas/t3/fig46.png', alt='Doce cintas decorativas dispuestas en filas, con patrones geométricos repetitivos y bordes recortados en forma de ondas o picos.')
        figcaption Fuente: 
          a(href="https://n9.cl/8knqf" target="_blank") https://n9.cl/8knqf


    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Elásticos planos y de cordón

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        p En el diseño de prendas femeninas ajustadas al cuerpo, los elásticos planos se utilizan comúnmente en cinturillas, puños y bajos para garantizar un agarre uniforme y confortable. Su capacidad de recuperación longitudinal mantiene la forma de la prenda tras múltiples usos y lavados, permitiendo ajustes dinámicos de cintura en faldas y pantalones de talle alto. Los elásticos de cordón, más finos y flexibles facilitan ajustes puntuales en aplicaciones como la capucha de vestidos deportivos o la parte superior de tops y vestidos ligeros, aportando un sistema de tensión regulable sin añadir volumen ni comprometer la silueta.
      .col-lg-2.d-none.d-lg-block
        img(src="@/assets/curso/temas/t3/18.svg")
      .col-lg-5.col-md-8
        img(src="@/assets/curso/temas/t3/19.png")

    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 17.
        span  Tipos de elásticos
      .tabla-a.color-acento-contenido
        table(alt="Tabla con dos filas que describen tipos de elásticos según insumo, característica, uso, tipos y ejemplos. Se distingue entre banda plana para cintura o puños y cordón elástico para ajustes en prendas o accesorios.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-color-primario
              th.text-center Insumo
              th.text-center Característica
              th.text-center Uso
              th.text-center Tipos
              th.text-center Ejemplos
          tbody
            tr
              td Elástico plano
              td Banda ancha y plana con gran recuperación longitudinal.
              td Cinturas, puños y tobillos.
              td Tejido (algodón / poliéster), caucho interno.
              td Cinturilla de pantalón deportivo; puño de sudadera.
            tr
              td Elástico
              td Hilo tubular elástico, estrecho y con gran capacidad de estiramiento.
              td Ajuste en prendas y accesorios.
              td #[em Lycra, spandex], goma natural.
              td Cordón de capucha; ajuste de bolsa de cintura.

    .subt2.mb-4(data-aos="fade")    
      h3.pb-1.mb-0 Velcro y cierres de contacto

    .row.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-17.p-4.p-lg-5.h-100.d-flex.align-items-center
          p.mb-0 Los sistemas de velcro y cierres de contacto ofrecen soluciones rápidas y discretas para ajustes en prendas femeninas donde se busca practicidad y versatilidad. En ropa deportiva o de maternidad, permiten modificar el contorno del busto o la cintura de forma sencilla y sin costuras adicionales. Asimismo, resultan útiles en prendas de corte envolvente, como chaquetas y blusas cruzadas, donde el velcro garantiza un cierre firme sin desalinear el tejido. Gracias a su bajo perfil, no interfieren con el drapeado ni la caída de géneros delicados, y facilitan la adaptación de la prenda a diferentes volúmenes corporales.
      .col-lg-4.col-md-7.col-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 47.
          span Velcro
        figure.mb-3  
          img(src='@/assets/curso/temas/t3/fig47.png', alt='Dos tiras textiles superpuestas, una con superficie de ganchos rígidos y otra con bucles suaves, unidas por contacto a presión.')
        figcaption Fuente: 
          a(href="https://n9.cl/vvyxx" target="_blank") https://n9.cl/vvyxx

    .mb-1(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 18.
        span Tipos de velcros y cierres de contacto
      .tabla-a.color-acento-contenido
        table(alt="Tabla con tres filas que describen tipos de velcro y cierres de contacto, organizados por insumo, característica, uso, tipos y ejemplos. Incluye versiones con gancho rígido, bucle suave y soporte combinado, utilizados en prendas, bolsos y equipos.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-color-primario
              th Insumo
              th Característica
              th Uso
              th Tipos
              th Ejemplos
          tbody
            tr
              td Velcro (Cinta Macho).
              td Cara con gancho rígido.
              td Cierre rápido y regulable.
              td #[em Nylon], poliéster.
              td Ajuste de calzado infantil; cierres de bolsillos.
            tr
              td Velcro (Cinta Hembra).
              td Cara con bucle suave.
              td Fijación sin costura visible.
              td #[em Nylon], poliéster.
              td Sujeción de fundas; cierre de bolsas de deporte.
            tr
              td Cierre de Contacto.
              td Sistema integrado de gancho y bucle en un mismo soporte.
              td Cierre de tapas y accesorios.
              td Adhesivo, costible.
              td Cierre en bolsos multifunción; cierre en equipo médico.


    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.5. Materiales de decoración y acabados 

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Encajes

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-8.mb-3.mb-lg-0
        img(src="@/assets/curso/temas/t3/20.png")
      .col-lg-7
        p Los encajes constituyen un elemento decorativo y estructural esencial en la confección femenina, ya que combinan artesanía y sofisticación. Se obtienen mediante técnicas de tejido manual (ganchillo, bolillos) o industrial (tejido de máquina #[em raschel, schiffli]), y ofrecen un juego de transparencia, textura y relieve que enmarca y realza las zonas donde se aplican.
        .row.justify-content-center
          .col-lg-2.col-md-2.d-none.d-md-block
            img(src='@/assets/curso/temas/t3/21.svg', alt='')
          .col-lg-10.col-md-10
            .bg-17.tarjeta.p-4.h-100.d-flex.align-items-center
              p.mb-0 Además de su función ornamental (marcando escotes, puños, cinturillas y faldas) los encajes pueden servir como refuerzo ligero en piezas delicadas, aportando estabilidad al tejido base sin volúmenes excesivos. Su versatilidad de diseño (motivos florales, geométricos, festoneados) permite adaptarlos tanto a prendas de día como de noche, desde #[em lingerie] y blusas hasta vestidos de novia y tops de fiesta.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Tipos de encaje y su aplicabilidad
    
    TabsC.color-primario.mb-5(data-aos="fade")
      .bg-11.py-4.py-md-5(titulo="<em>Chantilly</em>")
        .row.justify-content-center.align-items-center
          .col-9.col-md-5.col-lg-3.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 48.
              span Encaje #[em chantilly]
            figure.mb-2  
              img(src='@/assets/curso/temas/t3/fig48.png', alt='Tejido calado con diseño floral repetitivo, compuesto por formas curvas, espirales y entramados finos.')
            figcaption Fuente: 
              a(href="https://n9.cl/qvrtc" target="_blank") https://n9.cl/qvrtc
          .col-10.col-md-6.col-lg-7
            ul.lista-ul--color.fa-lista
              li.mb-4
                i.far.fa-circle
                span.mb-0 #[strong Características:]#[br] Ligero, fino, con motivos florales y fondo de tul; alta transparencia.
              li.mb-4
                i.far.fa-circle
                span.mb-0 #[strong Aplicabilidad en prendas femeninas:]#[br] Escotes, mangas largas o cortas, páneles laterales.
              li
                i.far.fa-circle
                span.mb-0 #[strong Ejemplos:]#[br] #[em Top] de encaje transparente; vestido de gala con cuerpo de #[em chantilly].
      .bg-11.py-4.py-md-5(titulo="<em>Guipur</em>")
        .row.justify-content-center.align-items-center
          .col-9.col-md-5.col-lg-3.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 49.
              span Encaje #[em guipur]
            figure.mb-2  
              img(src='@/assets/curso/temas/t3/fig49.png', alt='Siete franjas horizontales con encajes decorativos, cada una con patrones simétricos de flores, ondas o puntas, sobre fondo liso.')
            figcaption Fuente: 
              a(href="https://n9.cl/nlgfo" target="_blank") https://n9.cl/nlgfo
          .col-10.col-md-6.col-lg-7
            ul.lista-ul--color.fa-lista
              li.mb-4
                i.far.fa-circle
                span.mb-0 #[strong Características:]#[br] Sin base de tul; puntadas de hilo grueso formando relieves sobre fondo calado.
              li.mb-4
                i.far.fa-circle
                span.mb-0 #[strong Aplicabilidad en prendas femeninas:]#[br] Aplicaciones centrales en #[em bodys], camisas de oficina y abrigos ligeros.
              li
                i.far.fa-circle
                span.mb-0 #[strong Ejemplos:]#[br] Blusa con espalda de #[em guipur]; detalles de #[em guipur] en chaquetas.
      .bg-11.py-4.py-md-5(titulo="Veneciano")
        .row.justify-content-center.align-items-center
          .col-9.col-md-5.col-lg-3.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 50.
              span Encaje veneciano
            figure.mb-2  
              img(src='@/assets/curso/temas/t3/fig50.png', alt='Tela transparente con bordado de flores y hojas, dispuestas en dos franjas verticales con detalles simétricos y contornos definidos.')
            figcaption Fuente: 
              a(href="https://n9.cl/efcpbr" target="_blank") https://n9.cl/efcpbr
          .col-10.col-md-6.col-lg-7
            ul.lista-ul--color.fa-lista
              li.mb-4
                i.far.fa-circle
                span.mb-0 #[strong Características:]#[br] Bordado denso sobre base resistente; patrón elevado con efecto tridimensional.
              li.mb-4
                i.far.fa-circle
                span.mb-0 #[strong Aplicabilidad en prendas femeninas:]#[br] Escotes, cinturillas y puños en vestidos de novia y prendas de alta costura.
              li
                i.far.fa-circle
                span.mb-0 #[strong Ejemplos:]#[br] Vestido de novia con cenefa veneciana; cinturón decorativo.
      .bg-11.py-4.py-md-5(titulo="Tul bordado")
        .row.justify-content-center.align-items-center
          .col-9.col-md-5.col-lg-3.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 51.
              span Tul bordado
            figure.mb-2  
              img(src='@/assets/curso/temas/t3/fig51.png', alt='Diseño textil compuesto por franjas horizontales con patrones de zigzag y manchas irregulares, decorado con puntos brillantes distribuidos en toda la superficie.')
            figcaption Fuente: 
              a(href="https://n9.cl/cziha9" target="_blank") https://n9.cl/cziha9
          .col-10.col-md-6.col-lg-7
            ul.lista-ul--color.fa-lista
              li.mb-4
                i.far.fa-circle
                span.mb-0 #[strong Características:]#[br] Base de tul bruñido con bordados hilos y lentejuelas; combinación de ligereza y brillo.
              li.mb-4
                i.far.fa-circle
                span.mb-0 #[strong Aplicabilidad en prendas femeninas:]#[br] Faldas de tutú, capas de vestido de fiesta, detalles en tops y faldas amplias.
              li
                i.far.fa-circle
                span.mb-0 #[strong Ejemplos:]#[br] Falda con superposición de tul bordado; top de fiesta con paneles bordados.
      .bg-11.py-4.py-md-5(titulo="Bolillos")
        .row.justify-content-center.align-items-center
          .col-9.col-md-5.col-lg-3.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 52.
              span Encaje bolillos
            figure.mb-2  
              img(src='@/assets/curso/temas/t3/fig52.png', alt='Cintas de encaje dispuestas en paralelo, con bordes ondulados y motivos calados de flores y líneas, sobre fondo liso.')
            figcaption Fuente: 
              a(href="https://www.telasyropas.com/tipos-de-encaje/#24_Encaje_de_bolillos" target="_blank") https://www.telasyropas.com/tipos-de-encaje/#24_Encaje_de_bolillos
          .col-10.col-md-6.col-lg-7
            ul.lista-ul--color.fa-lista
              li.mb-4
                i.far.fa-circle
                span.mb-0 #[strong Características:]#[br] Tejido manual con encaje de agujas o bolillos; patrón abierto y flexible.
              li.mb-4
                i.far.fa-circle
                span.mb-0 #[strong Aplicabilidad en prendas femeninas:]#[br] Apliques en blusas #[em boho] flecos decorativos en blusas y vestidos vaporosos.
              li
                i.far.fa-circle
                span.mb-0 #[strong Ejemplos:]#[br] Blusa bohemia con cenefa de bolillos; vestido con terminación de fleco.
      .bg-11.py-4.py-md-5(titulo="<em>Schiffli (machine)</em>")
        .row.justify-content-center.align-items-center
          .col-9.col-md-5.col-lg-3.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 53.
              span Encaje #[em Schiffli]
            figure.mb-2  
              img(src='@/assets/curso/temas/t3/fig53.png', alt='Encaje con dos secciones diferenciadas: una superior con flores en relieve y otra inferior con figuras geométricas caladas, unidas por una línea diagonal decorativa.')
            figcaption Fuente: 
              a(href="https://n9.cl/qluah" target="_blank") https://n9.cl/qluah
          .col-10.col-md-6.col-lg-7
            ul.lista-ul--color.fa-lista
              li.mb-4
                i.far.fa-circle
                span.mb-0 #[strong Características:]#[br] Encaje de máquina con diseños complejos; buena estabilidad dimensional y precios accesibles.
              li.mb-4
                i.far.fa-circle
                span.mb-0 #[strong Aplicabilidad en prendas femeninas:]#[br] Prendas #[em prêt-à-porter:] vestidos diarios, faldas midi y blusas modernas
              li
                i.far.fa-circle
                span.mb-0 #[strong Ejemplos:]#[br] Vestido de cóctel con encaje #[em schiffli]; blusa casual con top de encaje integrado.

    .subt2.mb-4(data-aos="fade")    
      h3.pb-1.mb-0 Lentejuelas y pedrería
    
    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-6.mb-3
        .bg-13.p-4
          p.mb-0 Las lentejuelas y la pedrería son elementos clave para conferir brillo y sofisticación a las prendas femeninas, especialmente en diseños de noche, colecciones de alta costura y detalles focales. Las lentejuelas, generalmente discos planos o cóncavos de metal o poliéster, se cosen o adhieren sobre el tejido para reflejar la luz y generar movimiento visual. La pedrería, que agrupa cuentas de cristal, perlas y gemas sintéticas, añade volumen y textura, elevando el carácter ornamental de cuellos, escotes y puños. Ambos insumos requieren un respaldo estable (como estabilizadores o entretelas de alta densidad) y una técnica de fijación precisa para prevenir desprendimientos y asegurar una caída uniforme.
      .col-lg-3.col-md-6.col-10.mb-3
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 54.
          span Piedras para uso textil
        figure.mb-2  
          img(src='@/assets/curso/temas/t3/fig54.png', alt='Caja con compartimientos que contienen piedras de diversos tamaños, junto a tijeras, apliques bordados, cinta textil y piezas decorativas circulares.')
        figcaption Fuente: 
          a(href="https://n9.cl/q9lt2" target="_blank") https://n9.cl/q9lt2
      .col-lg-3.col-md-6.col-10
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 55.
          span Lentejuelas
        figure.mb-2  
          img(src='@/assets/curso/temas/t3/fig55.png', alt='Superficie cubierta por lentejuelas circulares dispuestas en sentido uniforme, generando un efecto brillante y reflectante.')
        figcaption Fuente: 
          a(href="https://n9.cl/lu67y" target="_blank") https://n9.cl/lu67y

    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 19.
        span Tipos de lentejuelas y pedrería
      .tabla-a.color-acento-contenido
        table(alt="Cuadro con dos categorías: lentejuelas y pedrería. Cada una presenta tipos, características, uso en prendas femeninas y ejemplos. Se destacan acabados reflectantes, iridiscentes, y aplicaciones decorativas en blusas, vestidos y chaquetas.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-color-primario
              th Categoría
              th.text-center Tipo
              th.text-center Características
              th.text-center Aplicabilidad en prendas femeninas
              th.text-center Ejemplos
          tbody
            tr
              td(rowspan="3") Lentejuelas
              td Planas metálicas.
              td Discos de metal con orificio central; acabado reflectante y rígido.
              td Apliques en vestidos de gala, faldas y tops de fiesta.
              td Vestido de lentejuelas entero; top con cenefa de lentejuelas.
            tr
              td Holográficas.
              td Superficie iridiscente que cambia de color según el ángulo de incidencia.
              td Detalles localizados en escotes, espaldas y cinturillas.
              td #[em Body] con lentejuelas holográficas; falda midi decorativa.
            tr
              td Microlentejuelas de PVC.
              td Pequeñas y flexibles; permiten bordados densos sin endurecer el tejido.
              td Bordados en blusas vaporosas y mangas volumétricas.
              td Blusa ligera con bordado de microlentejuelas.
            tr
              td(rowspan="3") Pedrería
              td Cuentas de cristal facetado.
              td Superficie tallada que refracta la luz; alta resistencia al desgaste
              td Collares integrados, aplicaciones de hombro y solapa en chaquetas.
              td Chaqueta con hombreras de cuentas facetadas.
            tr            
              td Perlas sintéticas.
              td Esferas lisas de vidrio o resina; acabado nacarado
              td Botones decorativos, guarniciones en cuellos y puños.
              td Blusa de seda con borde de perlas en cuello.
            tr            
              td Gemas acrílicas.
              td Formas geométricas y facetadas; muy ligeras.
              td Parches y apliques en faldas, bolsos y complementos.
              td Falda lápiz con parches de gemas acrílicas.

    .subt2.mb-4(data-aos="fade")    
      h3.pb-1.mb-0 Apliques y parches
    
    .row.justify-content-center.mb-5.mb-lg-4(data-aos="fade")
      .col-lg-6.mb-3
        .bg-13.p-4
          p.mb-0 Los apliques y parches son elementos decorativos y funcionales que permiten intervenir zonas específicas de la prenda, ya sea para cubrir desperfectos, reforzar áreas de alto desgaste o añadir un detalle de diseño. Se fabrican en diversos materiales (tela bordada, cuero, goma, vinilo o lentejuelas) y pueden fijarse mediante costura, adhesivo textil o transferencia por calor. En prendas femeninas, resultan especialmente útiles en codos, hombros, bolsillos y demás puntos de fricción, además de aportar un sello distintivo que refuerza la identidad de la pieza. Su correcta elección y ubicación, junto con un respaldo adecuado de entretelas o estabilizadores, garantizan una integración armónica con la silueta y aseguran la durabilidad del acabado.
      .col-lg-6.col-md-9
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 56.
          span Parches / apliques
        figure.mb-2  
          img(src='@/assets/curso/temas/t3/fig56.png', alt='Prenda de mezclilla decorada con tres parches bordados: un arco curvo, una hoja y una palabra en letras grandes adherida sobre el bolsillo.')
        figcaption Fuente: 
          a(href="https://n9.cl/blp28i" target="_blank") https://n9.cl/blp28i


    .mb-1(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 20.
        span Tipos de apliques y parches
      .tabla-a.color-acento-contenido
        table(alt="Tabla con dos categorías: apliques y parches. Cada fila presenta tipo, características, uso en prendas femeninas y ejemplos. Se describen bordados, encajes, cuero, impresiones y materiales como silicona para refuerzo o decoración en prendas.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-color-primario
              th Categoría 
              th.text-center Tipo
              th.text-center Características
              th.text-center Aplicabilidad en prendas femeninas
              th.text-center Ejemplos
          tbody
            tr
              td(rowspan="3") Apliques
              td Bordados termoadhesivos.
              td Motivos bordados con respaldo adhesivo; se fijan con calor.
              td Refuerzo de hombros, puños y solapas.
              td Chaqueta de algodón con apliques florales.
            tr
              td Apliques de encaje.
              td Piezas de encaje recortado, cosibles o termoadhesivos.
              td Detalles en escotes, espalda y bajos de vestidos.
              td Vestido de gala con aplicación de encaje.
            tr
              td Apliques de cuero o vinilo.
              td Material resistente, acabado mate o brillante.
              td Refuerzo de codos, bolsillos y hombros en chaquetas técnicas.
              td Chaqueta #[em biker] con parches de cuero.
            tr
              td(rowspan="3") Parches
              td Parches bordados cosidos.
              td Diseños densos de hilo sobre base textil; alta resistencia.
              td Decoración en la parte frontal de blusas y bolsillos.
              td Camiseta con parche bordado de logo.
            tr
              td Parches impresos termoadhesivos.
              td Impresión digital sobre lona o poliéster; aplicación por calor.
              td Personalización de #[em jeans], faldas y mochilas.
              td #[em Jeans] customizados con parche termoadhesivo.
            tr
              td Parches de silicona o goma.
              td Material flexible y duradero; perfil bajo.
              td Zonas de alto desgaste como rodillas y codos.
              td #[em Leggings] con parches de silicona en rodillas.


    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.6. Materiales de sujeción y refuerzos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-3.col-5
         img(src='@/assets/curso/temas/t3/22.svg', alt='')
      .col-lg-5.col-md-9
        p Se emplean para fijar, ajustar o dar mayor resistencia a las prendas. Entre ellos se encuentran broches, botones, cierres, ganchos, corchetes y velcro, que permiten abrir, cerrar o ajustar partes específicas. También se incluyen refuerzos como varillas, ballenas, barbas y hombreras, que ayudan a mantener la forma de la prenda, mejorar su estructura y prolongar su durabilidad, especialmente en prendas formales o de alta confección.
      .col-lg-4.col-md-8.col-10
        img(src='@/assets/curso/temas/t3/23.svg', alt='')

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Ojales y presillas 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-6.col-10.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 57.
          span Ojal cortado y rematado
        figure.mb-3  
          img(src='@/assets/curso/temas/t3/fig57.png', alt='Ilustración de unas manos realizando una costura con aguja e hilo. ')
        figcaption Fuente: 
          a(href="https://manualidades.facilisimo.com/reciclaje-de-ropa-tipos-de-sobrehilado-de-orillos-parte-2_1272178.html" target="_blank") https://manualidades.facilisimo.com/reciclaje-de-ropa-tipos-de-sobrehilado-de-orillos-parte-2_1272178.html
      .col-lg-4.col-md-6.col-10.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 58.
          span Presilla de hilo
        figure.mb-3  
          img(src='@/assets/curso/temas/t3/fig58.png', alt='Una presilla de hilo en forma curvada con un botón.')
        figcaption Fuente: 
          a(href="https://www.elbauldelacosturera.com/2009/02/como-elaborar-las-presillas-con-hilo.html" target="_blank") https://www.elbauldelacosturera.com/2009/02/como-elaborar-las-presillas-con-hilo.html
      .col-lg-4
        p Los ojales y las presillas son elementos esenciales para la funcionalidad y el acabado de las prendas, ya que permiten la inserción de botones, cintas o cordones, además de reforzar zonas de tensión. Un ojal es una abertura rematada, ya sea mediante puntada en máquina o a mano, que presenta un borde limpio y resistente; las presillas, en cambio, son pequeños lazos de hilo, cinta o tela que se cosen sobre la superficie y actúan como anclaje para los botones. Ambos componentes deben contar con la rigidez suficiente para soportar el uso repetido y mantener la integridad de la prenda sin deformaciones.

    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 21.
        span Tipos de ojales y presillas
      .tabla-a.color-acento-contenido
        table(alt="Tabla con cuatro filas que describe tipos de ojales y presillas, detallando características, uso en prendas femeninas y ejemplos. Se incluyen aberturas en tejido, piezas metálicas o plásticas, y lazos de hilo o cinta aplicados en camisas, vestidos o chaquetas.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-color-primario
              th.text-center Tipo
              th.text-center Características
              th.text-center Aplicabilidad en prendas femeninas
              th.text-center Ejemplos
          tbody
            tr
              td Ojal cortado y rematado
              td Abertura lineal en tejido con bordes de puntada densa; puede ser recto o de lágrima.
              td Camisas, blusas, chaquetas, abrigos.
              td Ojal recto en camisas formales; ojal de lágrima en #[em blazers].
            tr
              td Ojal de botón automático
              td Pieza prefabricada de metal o plástico que se inserta con prensa; sin puntadas visibles.
              td Ropa deportiva, vestidos informales, prendas exteriores.
              td Ojal metálico en chaquetas de lona; ojal plástico en ropa técnica.
            tr
              td Presilla de hilo
              td Lazo cosido con hilo en puntada enrollada o bordada; alta flexibilidad.
              td Blusas, #[em cardigans], abrigos ligeros.
              td Presilla de hilo en #[em cardigans] de punto.
            tr
              td Presilla de cinta
              td Lazo de cinta cortada al Dies o entresacada; ofrece resistencia y volumen moderado.
              td Faldas con botonadura frontal, vestidos, cinturillas.
              td Presilla de cinta de algodón en faldas midi.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Forros y cintas de hombro

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        p Los forros y las cintas de hombro cumplen funciones estructurales y de confort en las prendas femeninas. El forro es un tejido interno que oculta costuras, mejora la caída de la prenda y facilita su deslizamiento sobre otras capas de ropa. La cinta de hombro, fabricada comúnmente en algodón, poliéster o satín, se incorpora en la unión entre hombros y sisas para reforzar la costura, evitar deformaciones y proporcionar un acabado limpio en la zona de la sisa y el escote.
      .col-lg-2.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/24.svg', alt='')
      .col-lg-5.col-md-9
        img(src='@/assets/curso/temas/t3/25.png', alt='')

    .mb-2(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 22.
        span Tipos de forros y cintas de hombro
      .tabla-a.color-acento-contenido
        table(alt="Tabla que presenta cuatro categorías de tipos de forros y cintas, descritas con características, aplicabilidad y ejemplo en prendas.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-color-primario
              th.text-center Tipo
              th.text-center Características
              th.text-center Aplicabilidad en prendas femeninas
              th.text-center Ejemplos 
          tbody
            tr
              td Forro plano
              td Tejido liso y fino (acetato, viscosa, poliéster); ligero, evita transparencias y facilita el movimiento.
              td #[em Blazers], vestidos de fiesta, faldas de gala.
              td Forro de acetato en #[em blazer] de traje; forro de viscosa en vestido de noche.
            tr
              td Forro elástico
              td Mezcla de elastano con poliéster o #[em nylon]; se ajusta al cuerpo y aporta confort en prendas entalladas.
              td Vestidos ajustados, faldas lápiz, blusas ceñidas.
              td Vestido de cóctel con forro elástico; falda lápiz con forro flexible.
            tr
              td Cinta de hombro de algodón
              td Banda tejida de alta resistencia; previene estiramientos y mantiene forma en sisas y hombros.
              td Chaquetas, #[em blazers], abrigos ligeros.
              td Cinta interior de hombro en #[em blazer] de algodón.
            tr
              td Cinta de hombro de satín
              td Cinta brillante y suave al contacto; refuerza costuras invisibles en sisa y cuello, aporta confort.
              td Vestidos sin mangas, blusas de seda.
              td Cinta satín en vestido de fiesta sin mangas.



    



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
