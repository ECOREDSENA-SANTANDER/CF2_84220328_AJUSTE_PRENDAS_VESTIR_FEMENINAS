<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Maquinaria en la confección de prendas

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-down")
      .bloque-texto-g__img(:style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 La identificación de las máquinas y equipos utilizados en la confección de prendas permite optimizar, facilitar y organizar de manera eficiente los distintos procesos productivos del sector, no solo optimiza el flujo de trabajo, sino que también mejora la calidad final de las prendas, reduce errores y favorece un uso eficiente de los recursos. Ahora el concepto de identificación de maquinaria comprende el análisis de las características técnicas de cada equipo, su funcionalidad dentro del proceso de confección, y su clasificación según las líneas de producción a las que pertenece; esto incluye el conocimiento de los tipos de puntadas que ejecuta cada máquina, los sistemas de tomadores de lazada, los mecanismos de alimentación o arrastre del tejido, y sus aplicaciones específicas según el tipo de prenda o material a trabajar.

    .bg-color-primario.text-center.p-3(data-aos="fade")
      p.mb-0 Este dominio técnico es fundamental para garantizar la precisión, la productividad y la seguridad en los entornos de confección.

    
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1.	Clasificación funcional de máquinas de coser

    p A partir de la capacidad de confección, entendida como la potencia de motor y la velocidad de puntada, las máquinas se dividen en tres categorías principales:

    .row.justify-content-center.mb-3(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-3
        .tarjeta.tarjeta-btn.p-4.h-100
          img.mb-3(src='@/assets/curso/temas/t1/tarj1-1.svg', alt='')
          .title.mb-4
            h4.text-center.mb-0 Alta potencia y velocidad
          ul.lista-ul--color.fa-lista
            li
              i.far.fa-circle
              span.mb-0 Diseñadas para materiales de gran espesor (cuero, lona, #[em jean] pesado).
            li
              i.far.fa-circle
              span.mb-0 Velocidad de puntada: 4000 - 6000 ppm (puntadas por minuto).
            li
              i.far.fa-circle
              span.mb-0 Motores de 1000 - 1500 W, refuerzos de estructura y biela robusta.
            li
              i.far.fa-circle
              span.mb-0 Ejemplos: máquina de doble pespunte para #[em jeans], máquina de cadeneta industrial.
      .col-lg-4.col-md-6.mb-3
        .tarjeta.tarjeta-btn.p-4.h-100
          img.mb-3(src='@/assets/curso/temas/t1/tarj1-2.svg', alt='')
          .title.mb-4
            h4.text-center.mb-0 Media potencia y velocidad
          ul.lista-ul--color.fa-lista
            li
              i.far.fa-circle
              span.mb-0 Adecuadas para tejidos de grosor medio (algodón, mezclilla ligera, sintéticos).
            li
              i.far.fa-circle
              span.mb-0 Velocidad de puntada: 3000 - 4000 ppm.
            li
              i.far.fa-circle
              span.mb-0 Motores de 500 - 1000 W, componentes equilibrados para versatilidad.
            li
              i.far.fa-circle
              span.mb-0 Ejemplos: máquina plana de ciclo automático, #[em overlock] de 4 hilos.
      .col-lg-4.col-md-6.mb-3
        .tarjeta.tarjeta-btn.p-4.h-100
          img.mb-3(src='@/assets/curso/temas/t1/tarj1-3.svg', alt='')
          .title.mb-4
            h4.text-center.mb-0 Baja potencia y velocidad
          ul.lista-ul--color.fa-lista
            li
              i.far.fa-circle
              span.mb-0 Indicadas para telas finas y delicadas (seda, gasa, encaje).
            li
              i.far.fa-circle
              span.mb-0 Velocidad de puntada: 1500 - 3000 ppm.
            li
              i.far.fa-circle
              span.mb-0 Motores de 200 - 500 W, construcción ligera y de bajo ruido.
            li
              i.far.fa-circle
              span.mb-0 Ejemplos: fileteadora doméstica, máquina de sobrehilado de 3 hilos.

    .bg-8.tarjeta.mb-4(data-aos="fade")
      .row.justify-content-center
        .col-lg-4.mb-n7p.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/2.svg', alt='')
        .col-lg-8
          .p-4
            p Estas categorías permiten seleccionar el equipo óptimo según:
            ul.lista-ul--color.color-primario.fa-lista.mb-0
              li.mb-2
                i.far.fa-circle
                span.mb-0 El proceso productivo (preparación, ensamble, terminación).
              li.mb-2
                i.far.fa-circle
                span.mb-0 La línea de producción (interior, exterior, #[em jean], hogar, deportivo, etc.).
              li.mb-0 
                i.far.fa-circle
                span.mb-0 El tipo de puntada y funcionalidad requerida (doble pespunte, cadeneta, sobrehilado, ciclo, etc.).
            

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2.	Clasificación técnica de máquinas de coser según su uso y capacidad

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/3.svg', alt='')
      .col-lg-5(data-aos="fade-left")
        img.w-60.mb-3(src='@/assets/curso/temas/t1/4.svg', alt='')
        p La maquinaria de confección se clasifica en función de su uso, potencia y nivel de producción, lo que permite seleccionar el equipo más adecuado para cada contexto textil. En este bloque se presentan las características, aplicaciones y diferencias clave entre las máquinas familiares, semiindustriales e industriales, brindando al aprendiz una comprensión técnica para tomar decisiones informadas en procesos de ajuste, ensamble y acabado de prendas.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Máquinas familiares o domésticas

    p Se destacan por su versatilidad que, gracias a su diseño compacto y bajo consumo, resultan idóneas para talleres pequeños, prototipado y uso doméstico.

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-2.p-4.mb-2
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span Máquina de coser familiar
          .row.justify-content-center
            .col-lg-8.col-md-9
              figure.mb-3  
                img(src='@/assets/curso/temas/t1/fig1.png', alt='Máquina de coser de uso doméstico con diseño compacto. Tiene estructura rectangular, dos perillas circulares al frente y una palanca de aguja en el costado izquierdo. Incluye base plana para apoyar la tela y brazo libre para costuras tubulares.')
        figcaption Fuente: 
          a(href="https://flamingo.vteximg.com.br/arquivos/ids/174362-412-528/7393033099411--1-.jpg?v=637257653012400000" target="_blank") https://flamingo.vteximg.com.br/arquivos/ids/174362-412-528/7393033099411--1-.jpg?v=637257653012400000     
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        .bg-2.p-4.mb-2
          .titulo-sexto.color-acento-contenido.mb-lg-5
            h5 Figura 2.
            span Tipos de costura maquina familiar
          .row.justify-content-center.py-lg-4
            .col-lg-11.col-md-9
              figure.mb-3.py-lg-5
                img(src='@/assets/curso/temas/t1/fig2.svg', alt='Conjunto de ocho gráficos lineales identificados con letras de la A a la H. Cada uno representa un tipo de puntada distinta: la primera es recta, las siguientes varían en formas de zigzag, ondas y combinaciones simétricas. Están dispuestas horizontalmente en línea.')
        figcaption Fuente: 
          a(href="https://n9.cl/bwkob" target="_blank") https://n9.cl/bwkob

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Características de una máquina familiar.
        .tabla-a.color-acento-contenido
          table(alt="Tabla con dos columnas. La primera contiene seis características de una máquina familiar: velocidad, potencia, portabilidad, lubricación, materiales y diversidad de puntadas. La segunda columna describe cada una, indicando que es un equipo de baja velocidad y potencia, portátil, de mantenimiento manual, fabricado principalmente con materiales plásticos y que ofrece funciones básicas de costura.")
            caption Fuente: SENA, (2025)
            thead
              tr.bg-color-primario
                th.w-25 Característica
                th.text-center Descripción
            tbody
              tr
                td Velocidad
                td Muy baja (500 - 1000 rpm), ideal para trabajos de detalle y control de costura.
              tr
                td Potencia
                td Muy baja, suficiente para telas de grosor ligero a medio.
              tr
                td Portabilidad
                td Equipos ligeros y, en su mayoría, portátiles, facilitando su traslado.
              tr
                td Lubricación
                td Manual, lo que simplifica el mantenimiento en entornos sin sistemas automáticos de engrase.
              tr
                td Materiales
                td Predominantemente componentes plásticos, reduciendo peso y costo.
              tr
                td Diversidad de puntadas
                td Costura recta, zigzag (1 y 3 pasos), ojal recto, pega botones y algunas puntadas decorativas. 
      .col-lg-4(data-aos="fade-left")        
        img.w-75.m-auto.d-none.d-lg-block(src="@/assets/curso/temas/t1/5.png")
        .bg-9.p-4.pt-lg-5.tarjeta.mt-n8p
          p.mb-0 Este tipo de máquinas son especialmente útiles para procesos de preparación y acabado de prendas ligeras, donde la precisión y la flexibilidad de puntadas son más relevantes que la velocidad o la potencia bruta.
          
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Máquinas semiindustriales

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-4
        p Las máquinas semiindustriales se caracterizan por operar a una velocidad de 1725 revoluciones por minuto, lo que permite un ritmo de producción intermedio apropiado para talleres de volumen moderado. Su potencia media habilita el cosido de múltiples capas de materiales, superando la capacidad de las máquinas domésticas sin requerir la infraestructura pesada de equipos industriales completos. 
      .col-lg-3.col-md-8
        .bg-4
          img(src='@/assets/curso/temas/t1/6.svg', alt='')
      .col-lg-5
        p En la mayoría de los modelos, la lubricación se realiza de forma manual, aunque algunos incorporan sistemas de bombeo automático para mantener el engrase continuo. Estas máquinas ofrecen una diversidad de puntadas que incluye costura recta, zigzag sencillo, confección de ojales rectos y fijación de botones y apliques, lo que amplía sus aplicaciones en el ensamblaje y acabado de prendas. Gracias a su diseño equilibrado entre versatilidad y rendimiento, resultan idóneas para procesos de confección que exigen tanto robustez técnica como flexibilidad operativa.

    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right")
        .bg-2.p-4
          .titulo-sexto.color-acento-contenido
            h5 Figura 3.
            span Máquina semiindustrial
          figure
            img(src='@/assets/curso/temas/t1/fig3.png', alt='Máquina de coser con estructura robusta. Presenta dos perillas frontales circulares para seleccionar funciones y puntadas, una palanca para el prensatelas, y base amplia con brazo libre. Incluye compartimiento superior para accesorios.')
          figcaption.des Fuente: 
            a(href="https://flamingo.vteximg.com.br/arquivos/ids/174362-412-528/7393033099411--1-.jpg?v=637257653012400000" target="_blank") https://flamingo.vteximg.com.br/arquivos/ids/174362-412-528/7393033099411--1-.jpg?v=637257653012400000
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Características de una máquina semiindustrial
        .tabla-a.color-acento-contenido
          table(alt="Tabla con dos columnas. La primera enumera características de una máquina semiindustrial: velocidad, potencia, lubricación, diversidad de puntadas y ámbito de uso. La segunda describe cada una, señalando que la máquina opera a una velocidad intermedia, tiene potencia media para coser varias capas, utiliza lubricación manual o automática, realiza puntadas básicas y es adecuada para talleres con producción moderada.")
            caption Fuente: SENA, (2025)
            thead
              tr.bg-color-primario
                th.w-25 Característica
                th.text-center Especificación
            tbody
              tr
                td Velocidad
                td Opera a 1725 rpm, lo que proporciona un ritmo de producción intermedio, ideal para talleres con volumen de trabajo moderado.
              tr
                td Potencia
                td Potencia media que permite el cosido de múltiples capas de material, superando las capacidades de equipos domésticos.
              tr
                td Lubricación
                td Lubricación manual en la mayoría de los modelos; algunos incluyen sistemas de bombeo automático para mantenimiento continuo.
              tr
                td Diversidad de puntadas
                td Admite costura recta, zigzag sencillo, confección de ojales rectos y fijación de botones y apliques.
              tr
                td Ámbito de uso
                td Optimizada para procesos de ensamblaje y acabado en talleres que requieren un equilibrio entre robustez técnica y flexibilidad operativa.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Máquinas industriales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-9.col-md-9.col-8
            p Las máquinas industriales de confección alcanzan velocidades de hasta 6000 revoluciones por minuto y cuentan con alta potencia para penetrar múltiples capas de material, lo que optimiza la productividad y la calidad en el sistema moda contemporáneo. Su lubricación automática garantiza un funcionamiento continuo y reduce los tiempos de mantenimiento. 
          .col-lg-3.col-md-3.col-4
            img(src='@/assets/curso/temas/t1/7.svg', alt='')
        .bg-11.tarjeta.p-4.mb-4.mb-lg-0
          p.mb-0 Entre los modelos más comunes se incluyen máquinas de puntada zigzag (sencilla, doble y triple), máquinas planas de una y dos agujas, combinadas de coser y cortar, fileteadoras simples y de refuerzo, recubridoras o collarín, pretinadoras, multiagujas, cerradoras de codo, entre otras; cada una diseñada para procesos específicos de ensamblaje y acabado industrial.
      .col-lg-5.col-md-9(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/8.png', alt='')

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-2.p-4.mb-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 4.
            span Máquina fileteadora industrial
          figure.py-lg-5
            img(src='@/assets/curso/temas/t1/fig4.png', alt='Máquina industrial con diseño robusto y estructura compacta. Dispone de múltiples tensores en la parte superior para controlar hilos, área de corte lateral integrada y base ancha con ventilación inferior. Indicada para procesos de sobrehilado o remate de bordes.')
        figcaption Fuente: 
          a(href="https://maquinasparaconfeccion.com/wp-content/uploads/2018/01/KT-757.jpg" target="_blank") https://maquinasparaconfeccion.com/wp-content/uploads/2018/01/KT-757.jpg
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Características de una máquina industrial
        .tabla-a.color-acento-contenido
          table(alt="Tabla con dos columnas. La primera presenta características de máquinas industriales: velocidad, potencia, lubricación, tipos de máquinas y ámbito de uso. La segunda columna especifica que operan a velocidades muy altas, tienen gran potencia, usan sistemas de lubricación automática y ofrecen variedad de funciones especializadas.")
            caption Fuente: SENA, (2025)
            thead
              tr.bg-color-primario
                th.w-25 Característica
                th.text-center Especificación
            tbody
              tr
                td Velocidad
                td Hasta 6000 rpm, adecuada para mantener altos ritmos de producción en entornos industriales de confección.
              tr
                td Potencia
                td Alta capacidad de trabajo, con mecanismos reforzados que permiten coser varias capas de tejido, incluso materiales gruesos y pesados.
              tr
                td Sistema de lubricación
                td Lubricación automática mediante sistemas internos que garantizan un engrase constante y eficiente, sin requerir intervención manual.
              tr
                td Tipos de máquinas
                td 
                  ul.lista-ul.fa-lista.circle.mb-0
                    li.mb-1
                      i.fas.fa-circle
                      span.mb-0 Zigzag: sencilla, doble y triple puntada.
                    li.mb-1
                      i.fas.fa-circle
                      span.mb-0 Planas: de una o dos agujas.
                    li.mb-1
                      i.fas.fa-circle
                      span.mb-0 Coser y cortar: fileteadoras simples y con puntada de seguridad.
                    li.mb-1
                      i.fas.fa-circle
                      span.mb-0 Recubridoras, pretinadoras, multiaquías.
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Cerradoras de codo.
              tr
                td Ámbito de uso
                td Diseñadas para líneas de producción de alta exigencia, donde se requiere eficiencia, precisión operativa y durabilidad en los acabados.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4.bg-10(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/9.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Dentro del conjunto de máquinas industriales especializadas, se destacan las denominadas máquinas de ciclo, diseñadas para ejecutar una única operación de forma automática, precisa y repetitiva, como la confección de ojales, la fijación de botones, la aplicación de adornos o la elaboración de presillas. Estas máquinas operan mediante un sistema de programación predeterminado que automatiza el proceso: el operario únicamente debe posicionar el material y accionar el comando correspondiente, tras lo cual el equipo ejecuta el ciclo completo de forma autónoma. Esta automatización garantiza uniformidad, exactitud y alta velocidad de producción, elementos esenciales en contextos industriales de gran volumen. Además, dichas unidades minimizan la intervención manual, reducen significativamente el margen de error y optimizan el flujo operativo en las líneas de confección. Entre los modelos más representativos de esta categoría se encuentran la presilladora, la botonadora, la ojaladora de ojal recto y la ojaladora de ojal tipo lágrima.

    .row.justify-content-center.mb-3
      .col-lg-6.mb-3(fade="fade-right")
        .bg-2.p-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 5.
            span Máquina ojaladora
          figure.px-lg-3 
            img(src='@/assets/curso/temas/t1/fig5.png', alt='Máquina industrial automatizada con estructura robusta. Incorpora brazo articulado, sistema electrónico integrado y pantalla lateral de control táctil. Está instalada sobre mesa de trabajo y equipada para tareas programables de confección de precisión.')          
      .col-lg-6.mb-3(data-aos="fade-left")
        .bg-2.p-3.mb-2
          .titulo-sexto.color-acento-contenido
            h5 Figura 6.
            span Máquina botonadora
          figure.px-lg-3 
            img(src='@/assets/curso/temas/t1/fig6.png', alt='Máquina industrial de estructura vertical, diseñada para realizar ojales automatizados. Posee un cabezal compacto, área de costura delimitada con prensa y alimentación precisa de tela. Se encuentra integrada a una mesa de trabajo con panel digital auxiliar.')
        figcaption Fuente: 
          a(href="https://amexicol.com/producto/maquina-botonadora-electronica-juki/" target="_blank") https://amexicol.com/producto/maquina-botonadora-electronica-juki/

    .row.justify-content-center.mb-3
      .col-lg-6.mb-3(fade="fade-right")
        .bg-2.p-3.mb-2
          .titulo-sexto.color-acento-contenido
            h5 Figura 7.
            span Máquina presilladora
          figure 
            img.py-lg-3(src='@/assets/curso/temas/t1/fig7.png', alt='Máquina industrial con estructura compacta. Está montada sobre una mesa de trabajo y equipada con brazo prensatelas automatizado, controles de tensión visibles y guía para tela. Dispone de mecanismos reforzados para realizar costuras precisas y repetitivas en serie.')    
        figcaption Fuente: 
          a(href="https://amexicol.com/producto/presilladora-electronica-siruba/" target="_blank") https://amexicol.com/producto/presilladora-electronica-siruba/      
      .col-lg-6.mb-3(data-aos="fade-left")
        .bg-2.p-3.mb-2
          .titulo-sexto.color-acento-contenido
            h5 Figura 8.
            span Máquina encauchadora
          figure 
            img.py-lg-3.px-lg-2(src='@/assets/curso/temas/t1/fig8.png', alt='Máquina industrial recubridora diseñada para unir y reforzar costuras en prendas elásticas. Cuenta con múltiples portaconos para hilos, varias agujas alineadas en el cabezal y sistema de alimentación inferior. Su base plana facilita el trabajo en telas ligeras o medianamente gruesas.')
        figcaption Fuente: 
          a(href="https://amexicol.com/producto/encauchadora-mecanica-tres-agujas-pegasus/" target="_blank") https://amexicol.com/producto/encauchadora-mecanica-tres-agujas-pegasus/

    .bg-1.mb-4.p-4(data-aos="fade")
      p.mb-0 Los cabezotes de las máquinas de confección industrial constituyen la estructura mecánica principal que integra y soporta los sistemas responsables de la formación de la puntada. Su diseño responde tanto a criterios funcionales como estructurales, y se compone de cuatro secciones fundamentales:

    .tarjeta--gris(data-aos="fade-down")
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t1/img-infog.png', alt='')            
        .tarjeta.color-acento-contenido.p-3(x="36%" y="36%" numero="+")
          h4.mb-2 Cabeza
          p.mb-0 Contiene los mecanismos de accionamiento y regulación de la puntada, tales como el eje principal, la biela y el sistema de toma de lazada. Es el núcleo funcional donde se generan los movimientos de costura.
        .tarjeta.color-acento-contenido.p-3(x="56%" y="20%" numero="+")
          h4.mb-2 Brazo
          p.mb-0 Une la cabeza con la columna y alberga el cilindro de alimentación, permitiendo el desplazamiento continuo del material bajo la aguja sin comprometer la alineación ni la precisión.
        .tarjeta.color-acento-contenido.p-3(x="59%" y="55%" numero="+")
          h4.mb-2 Columna
          p.mb-0 Actúa como soporte vertical entre la cabeza y la cama, asegurando la rigidez estructural, la estabilidad del conjunto y la correcta sincronización de las piezas móviles durante la operación.
        .tarjeta.color-acento-contenido.p-3(x="48%" y="81%" numero="+")
          h4.mb-2 Cama
          p.mb-0 Superficie plana sobre la que se posiciona la tela. Allí se localizan los mecanismos de arrastre y el prensatelas, proporcionando una base estable y continua para las operaciones de corte y confección.

    .row.justify-content-center.mb-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-8.p-4
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-2.col-md-2.col-3
              img(src='@/assets/curso/temas/t1/10.svg', alt='')
            .col-lg-10.col-md-10.col-9
              p.mb-0 Comprender estas cuatro zonas estructurales permite identificar con precisión los puntos de ajuste, ejecutar rutinas de mantenimiento preventivo y aplicar procedimientos efectivos de diagnóstico y reparación, lo que garantiza el rendimiento óptimo y prolonga la vida útil de la maquinaria.
          p.mb-0 Ahora bien, dentro de los procesos de ajuste de prendas, la máquina plana industrial constituye un equipo esencial debido a su versatilidad, velocidad y capacidad de respuesta ante diferentes tipos de tejido. A continuación, se describen sus características generales y componentes clave para su correcta operación.
      .col-lg-6.col-md-9(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/11.png', alt='')
      
    .bg-2.p-4.mb-2(data-aos="fade")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 9.
        span Máquina plana industrial
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          figure  
            img(src='@/assets/curso/temas/t1/fig9.svg', alt='Presenta una máquina plana industrial con sus partes principales numeradas y relacionadas en una tabla. Incluye elementos como cabezal, mesada, reguladores de tensión y puntada, volante, porta hilos, cargador de bobina, ataque, motor, prensatelas, encendido y pedal, distribuidos en la estructura general del equipo.')
        .col-lg-4
          .tabla-a.color-acento-botones.tabla3
            table(alt="")
              thead
                tr
                  th.w-25 Número
                  th Parte
              tbody
                tr
                  td 1.
                  td Cabezal.
                tr
                  td 2.
                  td Mesada.
                tr
                  td 3.
                  td Regulador de tensión.
                tr
                  td 4.
                  td Regulador de puntada.
                tr
                  td 5.
                  td Volante.
                tr
                  td 6.
                  td Porta hilos.
                tr
                  td 7.
                  td Cargador de bobina.
                tr
                  td 8.
                  td Ataque.
                tr
                  td 9.
                  td Motor.
                tr
                  td 10.
                  td Prensatelas.
                tr
                  td 11.
                  td Encendido.
                tr
                  td 12.
                  td Pedal.
    figcaption Fuente: 
      a(href="https://milmoldes.blogspot.com/2008/08/como-usar-una-mquina-de-coser.html" target="_blank") https://milmoldes.blogspot.com/2008/08/como-usar-una-mquina-de-coser.html


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3.	 ¿Cómo se forma una puntada en la máquina de coser? 
    
    p Imagine que dentro de su máquina de coser hay un pequeño equipo de especialistas, y cada uno cumple una misión muy importante para lograr que la puntada quede firme, pareja y sin errores. Por ello se exponen los protagonistas:
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        .bg-2.p-4
          img(src='@/assets/curso/temas/t1/12.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        SlyderF.circl-arrow(columnas="col-lg-6 col-xl-6")
          .tarjeta.bg-1.p-4
            .row.justify-content-center.mb-3
              .col-5.col-md-3.col-lg-4
                img.h-99(src='@/assets/curso/temas/t1/tarj2-1.svg' alt='')
            .bg-4.w-fit.m-auto.mb-4.py-1.px-5
              h4.text-center.mb-0 Tensor
            p.text-center Es como el portero que controla cuánta fuerza tiene el hilo al salir del carrete. Si aprieta mucho, el hilo se puede romper; si lo deja muy flojo, la costura no queda firme. Su misión es mantener el equilibrio perfecto de tensión.
          .tarjeta.bg-1.p-4
            .row.justify-content-center.mb-3
              .col-5.col-md-3.col-lg-4
                img.h-99(src='@/assets/curso/temas/t1/tarj2-2.svg' alt='')
            .bg-4.w-fit.m-auto.mb-4.py-1.px-5
              h4.text-center.mb-0 Guía de hilos
            p.text-center Ella se encarga de que el hilo siga el camino correcto. Es como una señalizadora de tránsito que evita que el hilo se enrede o se desvíe, asegurando que llegue derecho y sin obstáculos a su destino: la aguja.
          .tarjeta.bg-1.p-4
            .row.justify-content-center.mb-3
              .col-5.col-md-3.col-lg-4
                img.h-99(src='@/assets/curso/temas/t1/tarj2-3.svg' alt='')
            .bg-4.w-fit.m-auto.mb-4.py-1.px-5
              h4.text-center.mb-0 Palanca tira hilos
            p.text-center Actúa como un dosificador inteligente. Sabe cuánta cantidad de hilo entregar en cada puntada y se encarga de recoger lo que sobra. Así evita que se formen bollos de hilo y mantiene la costura limpia.
          .tarjeta.bg-1.p-4
            .row.justify-content-center.mb-3
              .col-5.col-md-3.col-lg-4
                img.h-99(src='@/assets/curso/temas/t1/tarj2-4.svg' alt='')
            .bg-4.w-fit.m-auto.mb-4.py-1.px-5
              h4.text-center.mb-0 Regulador de puntada
            p.text-center Este es el diseñador del grupo. Decide si las puntadas serán largas o cortas, según el tipo de tela o el acabado deseado. ¡Es como ajustar el #[em zoom] de una cámara, pero en la costura!
          .tarjeta.bg-1.p-4
            .row.justify-content-center.mb-3
              .col-5.col-md-3.col-lg-4
                img.h-99(src='@/assets/curso/temas/t1/tarj2-5.svg' alt='')
            .bg-4.w-fit.m-auto.mb-4.py-1.px-5
              h4.text-center.mb-0 Barra de aguja
            p.text-center Es quien lleva la aguja arriba y abajo con total precisión, cumpliendo un movimiento vertical constante. Es como el martillo del grupo: ¡firme, directo y siempre en acción!
          .tarjeta.bg-1.p-4
            .row.justify-content-center.mb-3
              .col-5.col-md-3.col-lg-4
                img.h-99(src='@/assets/curso/temas/t1/tarj2-6.svg' alt='')
            .bg-4.w-fit.m-auto.mb-4.py-1.px-5
              h4.text-center.mb-0 Barra prensatelas y su tornillo de ajuste
            p.text-center Imagine que es una mano que sujeta la tela para que no se mueva mientras cose. Gracias al tornillo, puede apretar más o menos según el tipo de tela: desde una seda suave hasta un #[em jean] grueso.
          .tarjeta.bg-1.p-4
            .row.justify-content-center.mb-3
              .col-5.col-md-3.col-lg-4
                img.h-99(src='@/assets/curso/temas/t1/tarj2-7.svg' alt='')
            .bg-4.w-fit.m-auto.mb-4.py-1.px-5
              h4.text-center.mb-0 Dientes de arrastre y el prensatelas
            p.text-center Trabajan en equipo para mover la tela paso a paso, con el ritmo exacto. Los dientes empujan desde abajo y el prensatelas guía desde arriba. Además, se pueden cambiar según la tela que vayas a trabajar: liviana, media o pesada.

    .row.bgcolor-1.align-items-center.p-2.p-md-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-5
              p Todos estos elementos son el equipo estrella detrás de cada costura perfecta, trabajando en armonía para lograr precisión, calidad y eficiencia en cada puntada.
            .col-lg-6.mb-4.mb-lg-0
              img(src='@/assets/curso/temas/t1/14.png', alt='')
            .col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/15.svg', alt='')


    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4.	Complementos de las máquinas de coser

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-3.mb-4.mb-lg-0
        .bg-1.p-4.tarjeta.h-100
          p.mb-0 En el mundo de la confección industrial, cada prenda plantea un nuevo reto: telas elásticas, materiales gruesos, diseños delicados o ensamblajes técnicos. La diversidad exige que las máquinas de coser sean altamente adaptables y versátiles. 
      .col-lg-5.mb-4.mb-lg-0
        .bg-4.h-100
          img(src='@/assets/curso/temas/t1/16.svg', alt='')
      .col-lg-4
        img.w-105(src='@/assets/curso/temas/t1/17.svg', alt='')
        h2 ¿La clave? 
        p Usar correctamente los complementos especializados, como los prensatelas y los sistemas de alimentación, que permiten ajustar la costura a cada tipo de tejido, producto y puntada.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-5
        p.mb-0 Desde ropa interior y prendas exteriores, hasta artículos técnicos como maletas, carpas o estuches, cada categoría de producto requiere una combinación específica de presión, avance y aguja. 
        p Por eso, comprender y dominar los ajustes de prensatelas y alimentadores es esencial para evitar problemas comunes como:
      .col-lg-3
        ul.lista-ul--color.color-primario.fa-lista
          li
            i.far.fa-circle
            span.mb-0 Deslizamiento entre capas de tela.
          li
            i.far.fa-circle
            span.mb-0 Fruncidos no deseados.
          li
            i.far.fa-circle
            span.mb-0 Tensión dispareja en la puntada.
      .col-lg-4
        .bg-1.p-3.tarjeta.h-100
          p.mb-0 Para lograr resultados de calidad, es necesario conocer a fondo los componentes involucrados en el desplazamiento del material, como los dientes de arrastre, la planchuela, los tipos de aguja y sus soportes.
    
    p.mb-4 Existen dos grandes tipos de ajustes que inciden directamente en la calidad de la costura:

    .row.justify-content-center.cursor-pointer.mb-5
      .col-lg-6.col-md-10.col-12.mb-4.mb-lg-0(data-aos="fade-right")
        .crd_hover_txt.tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t1/tarj3-2.png", alt="")
          .crd_hover_txt--body.text-center
            h4.mb-3 Configuración de agujas
            p.mb-0 Distingue entre máquinas de una sola aguja y de dos o más agujas, lo cual afecta la estabilidad del tejido y el tipo de puntada. Las múltiples agujas ofrecen mayor firmeza en telas gruesas como mezclilla o lona, mientras que una sola aguja es más adecuada para telas ligeras o elásticas como la licra.
      .col-lg-6.col-md-10.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .crd_hover_txt.tarjeta(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t1/tarj3-1.png", alt="")
          .crd_hover_txt--body.text-center
            h4.mb-3 Espaciamiento y soporte de agujas
            p.mb-0 Hace referencia a la distancia entre agujas (en máquinas de doble aguja) y al soporte que las sostiene. Estos factores impactan directamente la uniformidad del pespunte y la tensión durante el trabajo, garantizando una puntada constante y profesional.


    p.mb-4 Cuando estos ajustes se aplican correctamente, se logra:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        img(src='@/assets/curso/temas/t1/infog.svg', alt='')


    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.5.	Complementos esenciales en la maquinaria de confección

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-5.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/t1/18.png', alt='')
      .col-lg-2.col-md-2.col-3
        img.px-lg-4(src='@/assets/curso/temas/t1/19.svg', alt='')
      .col-lg-5.col-md-10.col-9
        p.mb-0 Los complementos son piezas clave que potencian el rendimiento de la máquina de coser y permiten adaptarla a distintos materiales, técnicas y acabados. Cada uno de estos elementos cumple una función específica dentro del proceso de costura, facilitando el avance del tejido, la precisión de la puntada y la estabilidad del trabajo. A continuación, se describen los más relevantes:

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Diente de arrastre

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5(data-aos="fade-right")
        p Este es el encargado de mover el tejido a lo largo de la cama de la máquina, su parte superior tiene pequeños surcos que hacen fricción con la tela y la empujan hacia adelante con cada puntada. Para que funcione bien, los dientes deben estar a la altura y con la separación justa para “atrapar” el tejido sin dañarlo ni dejarlo resbalar.
        ul.lista-ul--color.color-primario.fa-lista
          li
            i.far.fa-circle
            span.mb-0 #[strong Dato técnico:] hay diferentes calibres de dientes, según la cantidad de unidades por pulgada o su distancia en milímetros.
          li
            i.far.fa-circle
            span.mb-0 #[strong Importancia:] elegir el calibre adecuado según el grosor y la textura del material permite un arrastre parejo y evita problemas de alimentación.
      .col-lg-7(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          h5 Figura 10. 
          span Diente de arrastre
        .bg-2.mb-2.px-lg-4.p-3
          figure
            img(src='@/assets/curso/temas/t1/fig10.svg', alt='Representa el funcionamiento del diente de arrastre en una máquina de coser. Se ilustra cómo las puntas en forma de sierra del componente hacen contacto con el tejido en su parte inferior, generando fricción para desplazarlo de manera controlada durante el proceso de costura.')
        figcaption SENA, (2021)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-13.p-4
          .row.justify-content-center.align-items-center
            .col-lg-8        
              p Los dientes de arrastre se clasifican según su densidad por pulgada lineal, lo que determina la cantidad de puntos de contacto con la tela. Para tejidos planos o medianos, los más comunes son los de 16, 18, 20 o 24 dientes por pulgada. En cambio, para materiales más compactos y resistentes, como el cuero o la lona, se prefieren dientes más separados, con una distancia de hasta 2,5 mm entre ellos.
              p.mb-0 En algunos casos, especialmente cuando se supera la densidad de 24 dientes por pulgada (como en ciertas máquinas domésticas), se emplean dientes de perfil piramidal, que mejoran el agarre sin dañar tejidos delicados. También es importante tener en cuenta el número de hileras de dientes, ya que este factor aumenta la superficie de fricción y mejora el transporte de materiales difíciles.
            .col-lg-4.col-md-6.col-10
              img(src='@/assets/curso/temas/t1/20.png', alt='')
      .col-lg-4(data-aos="fade-left")
        p Una selección incorrecta del diente de arrastre puede afectar gravemente la calidad de la costura. Por ejemplo, si se emplea un diente muy separado en telas finas, estas pueden introducirse demasiado entre los surcos, generando fruncidos, recogidos o deformaciones. Esto no solo afecta la estética, sino también la funcionalidad de la prenda.
        p Por ello, el técnico debe ajustar tanto la densidad como la geometría de los dientes de arrastre según el tipo de material. Esta elección garantiza un flujo constante del tejido, una puntada uniforme y un acabado final de alta calidad.

    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 11. 
          span Ejemplo de diente con separación ancha
        .bg-2.mb-2.px-lg-4
          figure
            img(src='@/assets/curso/temas/t1/fig11.svg', alt='Líneas en zigzag se alternan en la parte inferior, mientras líneas curvas desde la parte superior descienden y penetran en los vértices del zigzag, generando una secuencia continua sobre una base rectangular.')
        figcaption Fuente: SENA, (2021)
      .col-lg-5(data-aos="fade-left")
        .bg-1.tarjeta.p-4
          p.mb-0 Cuando la separación entre dientes es reducida y se utiliza un material de grosor elevado, los dientes no logran agarrar el tejido con firmeza. Como resultado, la tela patina durante el avance, provocando deslizamientos irregulares, acumulaciones de material (“pega”) y posible rasgado o deformación de la superficie. Para evitar estas fallas, es fundamental seleccionar un diente cuya densidad y perfil se correspondan con el espesor y la resistencia del tejido, garantizando así un transporte seguro y preservando la integridad de la prenda.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 12. 
          span Ejemplo de separación corta de diente
        .bg-2.mb-2.p-4
          .row.justify-content-center
            .col-lg-8
              figure
                img(src='@/assets/curso/temas/t1/fig12.svg', alt='Dos líneas paralelas recorren la parte superior de la imagen, mientras una secuencia diagonal en forma de zigzag se desarrolla entre una base rectangular inferior y una línea recta intermedia, generando un patrón uniforme y cerrado.')
        figcaption Fuente: SENA, (2021)

    TabsC.color-primario.mb-5(data-aos="fade")
      .bg-14.py-4.py-md-5(titulo="Prensatelas")
        .row.justify-content-center.align-items-center
          .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
            img(src='@/assets/curso/temas/t1/tab1.png', alt='')
          .col-10.col-lg-6
            p Es el componente responsable de ejercer presión sobre la capa superior del tejido, manteniéndolo firme contra los dientes de arrastre para garantizar un avance uniforme. La fuerza aplicada debe adaptarse al grosor y la naturaleza del material: una presión excesiva puede comprimir en demasía la pieza, provocando que el diente dañe la tela al ascender o genere un recogido visible en la cara inferior y una superficie lisa en el derecho; por el contrario, una presión insuficiente impide que el tejido se incruste correctamente entre los dientes, produciendo deslizamientos (“pega”) y variaciones en la densidad de puntadas.
            p Para optimizar la calidad de la costura, el ancho de la base del prensatelas debe cubrir al menos el 90 % del recorrido del diente, asegurando una sujeción homogénea. La regulación del tornillo de presión del prensatelas permite ajustar este contacto según el tipo de fibra y el espesor del textil, de modo que cada puntada se forme con precisión y sin comprometer la integridad de la prenda.
      .bg-14.py-4.py-md-5(titulo="Planchuela")
        .row.justify-content-center.align-items-center
          .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
            img(src='@/assets/curso/temas/t1/tab2.png', alt='')
          .col-10.col-lg-6
            p Actúa como soporte del tejido durante la fase de retroceso del diente de arrastre y posee un orificio calibrado para el paso de la aguja, cuyo diámetro debe ser aproximadamente un 40 % mayor que el grosor de la hoja de la aguja empleada. Además, cuenta con canales longitudinales (o carriles) cuya cantidad coincide con la de hileras de dientes, de modo que cada diente pueda deslizarse a lo largo de todo su recorrido sin desviarse. Este diseño garantiza un alineamiento preciso entre diente y planchuela, asegurando un transporte uniforme del material y evitando desgastes prematuros o atrapamientos durante el ciclo de costura.
      .bg-14.py-4.py-md-5(titulo="Gancho rotatorio (caja bobina)")
        .row.justify-content-center.align-items-center
          .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
            img(src='@/assets/curso/temas/t1/tab3.png', alt='')
          .col-10.col-lg-6
            p Es un componente mecánico que, en coordinación con la aguja, genera las puntadas de la serie 300 (doble pespunte) mediante movimientos de rotación continua. Su diseño permite enrollar el hilo de manera uniforme alrededor de la aguja en cada ciclo, asegurando la formación precisa y resistente de la costura doble.
      .bg-14.py-4.py-md-5(titulo="Agujas")
        .row.justify-content-center.align-items-center
          .col-10
            SlyderA(tipo="b")
              .row.justify-content-around.align-items-center
                .col-12.col-lg-7.mb-4.mb-lg-0
                  .bg-12.tarjeta.p-3
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 4.
                      span Tipos de calibres en agujas
                    .tabla-a.color-acento-contenido.mw-300
                      table(alt="Tabla de tres columnas con información de equivalencias numéricas para calibres de aguja. La primera columna presenta valores del sistema métrico, la segunda los valores del sistema inglés y la tercera la conversión en milímetros. Los valores avanzan progresivamente desde 70 a 120 en el sistema métrico, y desde 0,7 a 1,2 mm en equivalencia.")
                        caption Fuente: SENA, (2021)
                        thead
                          tr.bg-color-primario
                            th.w-25.text-center Métrico
                            th.w-25.text-center Inglés
                            th.text-center Equivalencia en mm
                        tbody
                          tr
                            td.text-center 70
                            td.text-center 10
                            td.text-center 0,7
                          tr
                            td.text-center 80
                            td.text-center 12
                            td.text-center 0,8
                          tr
                            td.text-center 90
                            td.text-center 14
                            td.text-center 0,9
                          tr
                            td.text-center 100
                            td.text-center 16
                            td.text-center 1
                          tr
                            td.text-center 110
                            td.text-center 18
                            td.text-center 1,1
                          tr
                            td.text-center 120
                            td.text-center 20
                            td.text-center 1,2
                .col-12.col-lg-5
                  p Constituye un componente esencial en el mecanismo de costura, pues atraviesa el material y transporta el hilo hasta el tomador de lazada, posibilitando la formación de la puntada. Históricamente, su invención marcó el origen de las máquinas de coser, siendo el punto de partida para el desarrollo de todas las soluciones mecánicas posteriores.
                  p Calibre: corresponde al diámetro de la caña y se selecciona según el grosor del tejido, por ejemplo, calibres 65 – 70 para lycras, 70 – 90 para tejidos de punto y 100 – 125 para dril o mezclilla.
              .row.justify-content-around.align-items-center
                .col-12.col-lg-7.mb-4.mb-lg-0
                  .bg-12.tarjeta.p-3
                    .titulo-sexto.color-acento-contenido
                      h5 Tabla 5.
                      span Tipos de aguja según máquina
                    .tabla-a.color-acento-contenido.mw-300
                      table(alt="Tabla con dos columnas. La primera columna contiene el nombre de diferentes tipos de máquinas de coser, como planas, recubridora, zigzag, dos agujas y fileteadora. La segunda columna indica el tipo de aguja correspondiente a cada máquina, con referencias como “16 x 231 cabo delgado”, “135 x 5 cabo grueso”, “B63” y “B27”.")
                        caption Fuente: SENA, (2021)
                        thead
                          tr.bg-color-primario
                            th.w-25 Máquina
                            th.text-center Tipo de aguja
                        tbody
                          tr
                            td Planas
                            td 16 x 231 cabo delgado
                          tr
                            td Planas
                            td 135 x 5 cabo grueso
                          tr
                            td Recubridora
                            td B63
                          tr
                            td Zigzag
                            td 135 x 5
                          tr
                            td Dos agujas
                            td 135 x 5
                          tr
                            td Fileteadora
                            td B27
                .col-12.col-lg-5
                  .bg-6.tarjeta.p-4
                    p.mb-0 #[strong Nota:] el sistema de referencia identifica el tipo de aguja compatible con la máquina de coser empleada, asegurando un encaje y funcionamiento adecuados.
              .row.justify-content-around.align-items-center
                .col-12.col-md-10.col-lg-6.mb-4.mb-lg-0
                  img(src='@/assets/curso/temas/t1/tab4.png', alt='')
                .col-12.col-lg-6
                  p.mb-5 #[strong Punta:] define la geometría de perforación y se elige de acuerdo con el tipo de fibra, desde tejidos finos hasta materiales pesados, para favorecer la penetración y preservar la integridad de la tela.
                  h5 Tipos de agujas
                  p.mb-4 Como referencia complementaria, se sugiere revisar el siguiente documento:
                  a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/Anexo1_Tipos_de_agujas.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p #[strong Anexo 1.] Tipos de agujas.pdf 



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
