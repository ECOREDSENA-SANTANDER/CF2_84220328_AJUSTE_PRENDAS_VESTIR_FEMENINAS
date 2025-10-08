<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Manejo de máquinas y espació de trabajo

    .bloque-texto-g.bloque-texto-g--inverso.bg-2.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(:style="{'background-image':`url(${require('@/assets/curso/temas/t4/1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 El manejo adecuado de las máquinas de coser y el orden del espacio de trabajo resultan fundamentales para garantizar eficiencia, calidad y seguridad en la confección. Un operador que conoce a fondo las funciones, ajustes y requisitos de mantenimiento de cada equipo previene desgastes prematuros, minimiza tiempos de inactividad y conserva la precisión de las puntadas. Al mismo tiempo, disponer de un área de trabajo organizada con iluminación uniforme, superficies libres de obstáculos y herramientas al alcance, facilita el flujo de materiales, reduce el riesgo de accidentes y promueve una postura ergonómica que protege la salud del modista. En conjunto, la combinación de una operación técnica impecable y un entorno bien diseñado optimiza la productividad, asegura la durabilidad de la maquinaria y favorece un entorno creativo y profesional en el taller.

    .tarjeta.bg-3.p-3.py-md-4.mb-4(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t4/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1.ct-color-primario Espacio de trabajo
              p.mb-0.text-white Para fortalecer el aprendizaje, se invita a explorar el siguiente documento de apoyo:
            .col-sm-auto
              a.boton.bg-4(:href="obtenerLink('/downloads/Anexo2_Espacio_de_trabajo.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-6.col-md-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/t4/3.png', alt='')
      .col-lg-6
        p A continuación, se presenta un conjunto de recursos adicionales que fortalecen los conocimientos adquiridos a lo largo de este espacio. Estos materiales permiten al aprendiz visualizar de manera clara y secuencial los procedimientos técnicos asociados al alistamiento, puesta a punto y operación de las máquinas fileteadora y plana industrial, esenciales en los procesos de confección. 
        .row.justify-content-center.align-items-center.mb-4.mb-lg-0
          .col-lg-3.col-md-3.d-none.d-md-block
            img(src='@/assets/curso/temas/t4/4.svg', alt='')
          .col-lg-9.col-md-9
            .tarjeta.bg-1.p-4.mb-4.mb-lg-0
                p.mb-0 Su incorporación favorece el aprendizaje autónomo, refuerza la comprensión teórico - práctica y promueve el desarrollo de habilidades específicas, fundamentales para el desempeño eficiente y seguro en ambientes reales de trabajo del sector textil y de la confección.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Puesta a punto de máquina fileteadora con puntada de seguridad

    .bg-5.mb-5
      .row.align-items-center 
        .col-lg-5.col-md-8
          img(src='@/assets/curso/temas/t4/5.png', alt='')
        .col-lg-7
          .p-4.p-lg-5
            p Este grupo de videos ofrece una guía detallada y paso a paso sobre el alistamiento, mantenimiento y ajuste preciso de la máquina fileteadora con puntada de seguridad. Desde la preparación del puesto de trabajo hasta la calibración de puntadas y verificación de niveles de aceite, cada video permite al aprendiz adquirir las competencias necesarias para garantizar el correcto funcionamiento del equipo. 
            p Este material resulta indispensable para fomentar buenas prácticas en el manejo técnico y preventivo de la maquinaria, elemento clave en la calidad del proceso de confección.

    .subt2.mb-4(data-aos="fade")    
      h3.pb-1.mb-0 Puntadas fileteadoras
    
    LineaTiempoD.color-acento-contenido.mb-5(data-aos="fade-down")
      .row(numero="1" titulo="Paso 1")
        .col-md-4.col-lg-4
          p Puesta a punto de máquina fileteadora con puntada de seguridad. #[br]Paso 1. Alistamiento de herramientas y elementos.
        .col-md-8.col-lg-8
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/flBQ_7Rpd6c?si=iKnX_kgGWKTbEgOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Puesta a punto de máquina fileteadora con puntada de seguridad. Paso 1. Alistamiento de herramientas y elementos.
      .row(numero="2" titulo="Paso 2")
        .col-md-4.col-lg-4
          p Puesta a punto de máquina fileteadora con puntada de seguridad. #[br]Paso 2. Limpieza y orden del puesto de trabajo.
        .col-md-8.col-lg-8
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/Irek1OJp0Fo?si=67eltwsWwe3q3MOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Puesta a punto de máquina fileteadora con puntada de seguridad. Paso 2. Limpieza y orden del puesto de trabajo.
      .row(numero="3" titulo="Paso 3")
        .col-md-4.col-lg-4
          p Puesta a punto de máquina fileteadora con puntada de seguridad. #[br]Paso 3. Enhebrado de hilo para Looper inferior.
        .col-md-8.col-lg-8
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/0kYGQjMeHLs?si=ngGFSpDV4ZoVXS96" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Puesta a punto de máquina fileteadora con puntada de seguridad. Paso 3. Enhebrado de hilo para Looper inferior.
      .row(numero="4" titulo="Paso 4")
        .col-md-4.col-lg-4
          p Puesta a punto de máquina fileteadora con puntada de seguridad. #[br]Paso 4. Enhebrado de hilo para Looper superior.
        .col-md-8.col-lg-8
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/DOG6D5bEt-Y?si=48icrefhJiWUy3vd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Puesta a punto de máquina fileteadora con puntada de seguridad. Paso 4. Enhebrado de hilo para Looper superior.
      .row(numero="5" titulo="Paso 5")
        .col-md-4.col-lg-4
          p Puesta a punto de máquina fileteadora con puntada de seguridad. #[br]Paso 5. Enhebrado de hilo para aguja de puntada de filete.
        .col-md-8.col-lg-8
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/j5Jh83__Pa0?si=I75k48UUzwiFAN8b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Puesta a punto de máquina fileteadora con puntada de seguridad. Paso 5. Enhebrado de hilo para aguja de puntada de filete.
      .row(numero="6" titulo="Paso 6")
        .col-md-4.col-lg-4
          p Puesta a punto de máquina fileteadora con puntada de seguridad. #[br]Paso 6. Enhebrado de hilo para aguja de puntada de seguridad.
        .col-md-8.col-lg-8
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/212I54SfmfA?si=WH6khnT7vqI3nE5R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Puesta a punto de máquina fileteadora con puntada de seguridad. Paso 6. Enhebrado de hilo para aguja de puntada de seguridad.
      .row(numero="7" titulo="Paso 7")
        .col-md-4.col-lg-4
          p Puesta a punto de máquina fileteadora con puntada de seguridad. #[br]Paso 7. Enhebrado de hilo para Looper de puntada de seguridad.
        .col-md-8.col-lg-8
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/EReJD8K1U9I?si=5RyHaOvkPop5l1v0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Puesta a punto de máquina fileteadora con puntada de seguridad. Paso 7. Enhebrado de hilo para Looper de puntada de seguridad.
      .row(numero="8" titulo="Paso 8")
        .col-md-4.col-lg-4
          p Puesta a punto de máquina fileteadora con puntada de seguridad. #[br]Paso 8. Prueba de costura.
        .col-md-8.col-lg-8
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/ZdBQABGg05s?si=YMZvA6ajLEya-bQZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Puesta a punto de máquina fileteadora con puntada de seguridad. Paso 8. Prueba de costura.
      .row(numero="9" titulo="Paso 9")
        .col-md-4.col-lg-4
          p Puesta a punto de máquina fileteadora con puntada de seguridad. #[br]Paso 9. Tensión de la máquina.
        .col-md-8.col-lg-8
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/SB4c0ln0SQw?si=AnPJa48GXgw4nhmi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Puesta a punto de máquina fileteadora con puntada de seguridad. Paso 9. Tensión de la máquina.
      .row(numero="10" titulo="Paso 10")
        .col-md-4.col-lg-4
          p Puesta a punto de máquina fileteadora con puntada de seguridad. #[br]Paso 10. Calibración de puntada.
        .col-md-8.col-lg-8
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/Vmqb8gsw8Ys?si=kF1rByZjk_KKc1cV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Puesta a punto de máquina fileteadora con puntada de seguridad. Paso 10. Calibración de puntada.
      .row(numero="11" titulo="Paso 11")
        .col-md-4.col-lg-4
          p Puesta a punto de máquina fileteadora con puntada de seguridad. #[br]Paso 11. Nivel de arrastre.
        .col-md-8.col-lg-8
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vcBrLLazbgA?si=TRAlFjPeC-60HAVe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Puesta a punto de máquina fileteadora con puntada de seguridad. Paso 11. Nivel de arrastre.
      .row(numero="12" titulo="Paso 12")
        .col-md-4.col-lg-4
          p Puesta a punto de máquina fileteadora con puntada de seguridad. #[br]Paso 12. Nivel de aceite.
        .col-md-8.col-lg-8
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/18A8TeBJ9Vs?si=F9qZVuW-Nfjnas6_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Puesta a punto de máquina fileteadora con puntada de seguridad. Paso 12. Nivel de aceite.
      .row(numero="13" titulo="Paso 13")
        .col-md-4.col-lg-4
          p Puesta a punto de máquina fileteadora con puntada de seguridad. #[br]Paso 13. Dispositivos de seguridad.
        .col-md-8.col-lg-8
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/Qvr_FtX7kfk?si=tJJYRXOJTvG82x2K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Puesta a punto de máquina fileteadora con puntada de seguridad. Paso 13. Dispositivos de seguridad.


    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Operaciones básicas con máquina fileteadora

    .bg-6.mb-4
      .row.align-items-center 
        .col-lg-5.col-md-8
          img(src='@/assets/curso/temas/t4/6.png', alt='')
        .col-lg-7
          .p-4.p-lg-5
            p Los videos dedicados a las operaciones básicas con máquina fileteadora brindan al aprendiz las herramientas necesarias para ejecutar con destreza maniobras fundamentales como unir piezas, realizar filetes rectos y rematar costuras. Este contenido complementario resulta esencial para reforzar la técnica operativa, mejorar la precisión en el acabado de prendas y consolidar la confianza en el manejo de esta maquinaria especializada en el proceso de confección industrial.

    .tarjeta.bg-7.p-3.py-md-4.mb-5(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t4/video.svg")
        .col
          .row.justify-content-between.align-items-center.mb-4.mb-md-2
            .col.mb-0
              ul.lista-ul--color.color-primario.fa-lista
                li
                  i.far.fa-circle
                  span.mb-0.texto-blanco Operaciones básicas para el manejo de máquina fileteadora. Paso 1. Operación para unir pieza, en filete con puntada de seguridad.
            .col-sm-auto
              a.boton.bg-4(:href="('https://youtu.be/Hdts2Gyh1sw?si=AMvPQNcyBinuNTYU')" target="_blank")
                span Ver video
                i.fas.fa-circle-play
          .row.justify-content-between.align-items-center.mb-4.mb-md-2
            .col.mb-0
              ul.lista-ul--color.color-primario.fa-lista
                li
                  i.far.fa-circle
                  span.mb-0.texto-blanco Operaciones básicas para el manejo de máquina fileteadora. Paso 2. Operación para hacer filete recto, angular y curvo.
            .col-sm-auto
              a.boton.bg-4(:href="('https://youtu.be/Upg0Ki-GlmE?si=2uvm6UvhjI_d8AGD')" target="_blank")
                span Ver video
                i.fas.fa-circle-play
          .row.justify-content-between.align-items-center
            .col.mb-0
              ul.lista-ul--color.color-primario.fa-lista
                li
                  i.far.fa-circle
                  span.mb-0.texto-blanco Operaciones básicas para el manejo de máquina fileteadora. Paso 3. Operación para rematar en filete.
            .col-sm-auto
              a.boton.bg-4(:href="('https://youtu.be/cTYaptACosQ?si=LHQz9WmVN1qUOurc')" target="_blank")
                span Ver video
                i.fas.fa-circle-play

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Puesta a punto de máquina plana industrial de una aguja

    .bg-1.deco.mb-4
      .row.justify-content-end.align-items-center         
        .col-lg-7
          .p-4.p-lg-5
            p Este segmento de material guía al aprendiz en cada una de las etapas necesarias para poner a punto una máquina plana industrial, desde el alistamiento de herramientas hasta la revisión de dispositivos de seguridad. La correcta interpretación de estos procedimientos favorece el dominio técnico del equipo, optimiza el rendimiento operativo y previene fallas mecánicas. 
            p Su incorporación al componente formativo permite afianzar la autonomía del aprendiz en la preparación y mantenimiento de la máquina.
        .col-lg-5.col-md-8
          img(src='@/assets/curso/temas/t4/7.png', alt='')

    .subt2.mb-4(data-aos="fade")    
      h3.pb-1.mb-0 Manejo máquina plana industrial

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-11
        PasosA.color-adicional-1(tipo="n")
          .row.align-items-center
            .col-md-4.col-lg-4
              p Puesta a punto máquina plana de una aguja.  
              p Paso 1. Alistamiento de herramientas y elementos.
            .col-md-8.col-lg-8
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/8KMdKLsGeXI?si=O94R-Mr9D2ZpmLhz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Puesta a punto máquina plana de una aguja. Paso 1. Alistamiento de herramientas y elementos.
          .row.align-items-center
            .col-md-8.col-lg-8
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/NIt-Y0V8Xuc?si=7zI3D24n-vjR53gx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Puesta a punto máquina plana de una aguja. Paso 2. Limpieza y orden del puesto de trabajo.
            .col-md-4.col-lg-4
              p Puesta a punto máquina plana de una aguja.
              p Paso 2. Limpieza y orden del puesto de trabajo.
          .row.align-items-center
            .col-md-4.col-lg-4
              p Puesta a punto máquina plana de una aguja.  
              p Paso 3. Enhebrado hilo de aguja.
            .col-md-8.col-lg-8
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/2vCy8OngaCs?si=ilRW1Ef8ihTacVlc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Puesta a punto máquina plana de una aguja. Paso 3. Enhebrado hilo de aguja.
          .row.align-items-center
            .col-md-8.col-lg-8
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/X4GulQIAfNk?si=ACZu5AsD-XGBhDCn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video.  Puesta a punto máquina plana de una aguja. Paso 4. enhebrado hilo de caja bobina.
            .col-md-4.col-lg-4
              p Puesta a punto máquina plana de una aguja.  
              p Paso 4. Enhebrado hilo de caja bobina.
          .row.align-items-center
            .col-md-4.col-lg-4
              p Puesta a punto máquina plana de una aguja. 
              p Paso 5. Prueba de costura.
            .col-md-8.col-lg-8
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/95qqFifhf5U?si=1vwVHdOvrBc9kjBz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Puesta a punto máquina plana de una aguja. Paso 5. prueba de costura.
          .row.align-items-center
            .col-md-8.col-lg-8
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/9sTc_Kdyq4I?si=-FZL-hNDTXahbvO_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Puesta a punto máquina plana de una aguja. Paso 6. tensión requerida de la máquina.
            .col-md-4.col-lg-4
              p Puesta a punto máquina plana de una aguja.  
              p Paso 6. Tensión requerida de la máquina.
          .row.align-items-center
            .col-md-4.col-lg-4
              p Puesta a punto máquina plana de una aguja.  
              p Paso 7. Calibración de acuerdo con las especificaciones.
            .col-md-8.col-lg-8
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/98kBVOcq-2w?si=_mb0WgCm6v1S_OPZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Puesta a punto máquina plana de una aguja. Paso 7. calibración de acuerdo con las especificaciones.
          .row.align-items-center
            .col-md-8.col-lg-8
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/FJnvY-4hMEk?si=VNGfSaCY5lF5DkVL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Puesta a punto máquina plana de una aguja. Paso 8. Nivel de arrastre.
            .col-md-4.col-lg-4
              p Puesta a punto máquina plana de una aguja. 
              p Paso 8. Nivel de arrastre.
          .row.align-items-center
            .col-md-4.col-lg-4
              p Puesta a punto máquina plana de una aguja. 
              p Paso 9. Nivel de aceite.
            .col-md-8.col-lg-8
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/UdXEZFcnBrs?si=Gjkx_AetpKcnyZYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Puesta a punto máquina plana de una aguja. Paso 9. Nivel de aceite.
          .row.align-items-center
            .col-md-8.col-lg-8
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/ryLeBlADyCA?si=jHaI5EfaTaZ_jEEN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Puesta a punto máquina plana de una aguja. Paso 10. Dispositivos de seguridad.
            .col-md-4.col-lg-4
              p Puesta a punto máquina plana de una aguja. 
              p Paso 10. Dispositivos de seguridad. 
    

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t4/subt.svg")
      h3.ps-3.pe-4.mb-0 Operaciones básicas con máquina plana industrial de una aguja

    .bg-1.deco.mb-5
      .row.justify-content-end.align-items-center         
        .col-lg-7
          .p-4.p-lg-5
            p Los videos sobre operaciones básicas en máquina plana proporcionan al aprendiz una valiosa orientación práctica sobre técnicas esenciales como costuras rectas, alforzas y confección de bolsillos o pecheras. 
            p Este contenido es crucial para el desarrollo de habilidades motoras finas, la comprensión del ensamblaje de piezas textiles y la ejecución de acabados limpios y profesionales. Al integrar estos recursos al componente formativo, se fortalece la destreza técnica y la capacidad de producir prendas de calidad conforme a los estándares del sector textil.
        .col-lg-5.col-md-8
          img(src='@/assets/curso/temas/t4/8.png', alt='')

    .subt2.mb-4(data-aos="fade")
      h3.pb-1.mb-0 Operaciones máquina plana industrial

    .row.bgs-5.align-items-center.p-3.p-md-4.p-lg-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca.p-4
            PasosB.color-secundario
              .row.justify-content-center.align-items-center(titulo="Paso 1")
                .col-lg-4
                  ol.lista-ol--cuadro.color-2.fa-lista
                    li
                      .lista-ol--cuadro__vineta
                        span.fw-bold a.
                      span Operaciones básicas para el manejo en máquina plana una aguja. #[br] Paso 1. Costuras rectas a ¼ pulgada.
                .col-lg-6
                  figure
                    .video
                      iframe(width="560" height="315" src="https://www.youtube.com/embed/ekwF948qscg?si=a6PH2L7QhevF-zto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption Video. Operaciones básicas para el manejo en máquina plana una aguja. Paso 1. Costuras rectas a ¼ pulgada.
              .row.justify-content-center.align-items-center(titulo="Paso 2")
                .col-lg-4
                  ol.lista-ol--cuadro.color-2.fa-lista
                    li
                      .lista-ol--cuadro__vineta
                        span.fw-bold b.
                      span.mb-0 Operaciones básicas para el manejo en máquina plana una aguja.#[br] Paso 2. Costuras a alforzas de ¼".
                .col-lg-6
                  figure
                    .video
                      iframe(width="560" height="315" src="https://www.youtube.com/embed/Z9ZCp_foHH4?si=zQ1IOmFTBl1POmt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption Video. Operaciones básicas para el manejo en máquina plana una aguja. Paso 2. Costuras a alforzas de ¼.
              .row.justify-content-center.align-items-center(titulo="Paso 3")
                .col-lg-4
                  ol.lista-ol--cuadro.color-2.fa-lista
                    li
                      .lista-ol--cuadro__vineta
                        span.fw-bold c.
                      span.mb-0 Operaciones básicas para el manejo en máquina plana una aguja.#[br] Paso 3. Costuras a alforzas de 1 16”.
                .col-lg-6
                  figure
                    .video
                      iframe(width="560" height="315" src="https://www.youtube.com/embed/FjBGuqsTE5c?si=uuvCx2fe5tGGrr-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption Video. Operaciones básicas para el manejo en máquina plana una aguja. Paso 3. Costuras a alforzas de 1 16”.
              .row.justify-content-center.align-items-center(titulo="Paso 4")
                .col-lg-4
                  ol.lista-ol--cuadro.color-2.fa-lista
                    li
                      .lista-ol--cuadro__vineta
                        span.fw-bold d.
                      span.mb-0 Operaciones básicas para el manejo en máquina plana una aguja.#[br] Paso 4. Pegar bolsillos.
                .col-lg-6
                  figure
                    .video
                      iframe(width="560" height="315" src="https://www.youtube.com/embed/l7TtKJT6UkI?si=p0NhjLEGZlsI1Vw2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption Video. Operaciones básicas para el manejo en máquina plana una aguja. Paso 4. Pegar bolsillos.
              .row.justify-content-center.align-items-center(titulo="Paso 5")
                .col-lg-4
                  ol.lista-ol--cuadro.color-2.fa-lista
                    li
                      .lista-ol--cuadro__vineta
                        span.fw-bold e. 
                      span.mb-0 Operaciones básicas para el manejo en máquina plana una aguja.#[br] Paso 5. Bolsillo de ribete sencillo.
                .col-lg-6
                  figure
                    .video
                      iframe(width="560" height="315" src="https://www.youtube.com/embed/u3M8N9yZezU?si=5dyPJt3UMpVD7vpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption Video. Operaciones básicas para el manejo en máquina plana una aguja. Paso 5. Bolsillo de ribete sencillo.
              .row.justify-content-center.align-items-center(titulo="Paso 6")
                .col-lg-4
                  ol.lista-ol--cuadro.color-2.fa-lista
                    li
                      .lista-ol--cuadro__vineta
                        span.fw-bold f.
                      span.mb-0 Operaciones básicas para el manejo en máquina plana una aguja.#[br] Paso 6. Bolsillo de ribete doble.
                .col-lg-6
                  figure
                    .video
                      iframe(width="560" height="315" src="https://www.youtube.com/embed/LTTsA3P-mSs?si=qEtcTvMZ7RNhS6xI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption Video. Operaciones básicas para el manejo en máquina plana una aguja. Paso 6. Bolsillo de ribete doble.
              .row.justify-content-center.align-items-center(titulo="Paso 7")
                .col-lg-4
                  ol.lista-ol--cuadro.color-2.fa-lista
                    li
                      .lista-ol--cuadro__vineta
                        span.fw-bold g.
                      span.mb-0 Operaciones básicas para el manejo en máquina plana una aguja.#[br] Paso 7. Coser pechera sencilla.
                .col-lg-6
                  figure
                    .video
                      iframe(width="560" height="315" src="https://www.youtube.com/embed/P7tGrZIEPQU?si=CfIFyf4_Gjr4ZwVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                  figcaption Video. Operaciones básicas para el manejo en máquina plana una aguja. Paso 7. Coser pechera sencilla.




</template>

<script>
export default {
  name: 'Tema4',
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
