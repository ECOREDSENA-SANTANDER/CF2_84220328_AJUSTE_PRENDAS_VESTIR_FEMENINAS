<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas de modistería

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(:style="{'background-image':`url(${require('@/assets/curso/temas/t2/1-1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 En la modistería y confección de prendas femeninas, las herramientas desempeñan un papel determinante para garantizar ajustes precisos, acabados de calidad y respeto por la forma anatómica de quien viste. La cinta métrica, las reglas curvas y la ruleta de marcar permiten obtener registros antropométricos fiables y transferir con exactitud las variaciones morfológicas al patrón, reduciendo errores en el trazo y facilitando la elaboración de moldes base adaptados a siluetas diversas. Sin estos instrumentos, cada operación de ajuste se vería comprometida por imprecisiones que podrían traducirse en deformaciones, tensiones irregulares o falta de confort en la prenda terminada. 

    .row.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/t2/2.png', alt='')
      .col-lg-5
        p.mb-0 Las tijeras de confección y los cortahílos, junto con los tapetes de corte, aseguran cortes limpios y consistentes, condición imprescindible para que las piezas encajen sin fricción ni arrugas durante el ensamblaje. De igual manera, el uso de agujas apropiadas y prensatelas específicos (desde pies universales hasta soluciones diseñadas para tejidos elásticos o materiales pesados) permite controlar la presión sobre la tela y el desplazamiento del hilo, evitando deslizamientos indeseados y garantizando costuras uniformes. En el ajuste de prendas femeninas, donde los contornos resultan más delicados, esta precisión es clave para lograr un resultado cómodo, estético y técnicamente correcto. 
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/3.svg', alt='')


    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Herramientas de medición y marcado

    p.mb-4 Las herramientas de medición y marcado son fundamentales en los procesos de confección, ya que permiten tomar medidas precisas y trasladarlas con exactitud a los moldes y tejidos. Su uso adecuado garantiza ajustes correctos, simetría y calidad en el acabado de las prendas.

    .row.bgs-1.align-items-center.p-3.p-md-4.p-lg-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca.p-4
            SlyderA(tipo="b")
              .row.justify-content-around.align-items-center
                .col-lg-5.col-md-11
                  h4 Cinta métrica
                  p La cinta métrica es una cinta flexible graduada en centímetros y pulgadas que permite registrar con precisión las dimensiones del cuerpo. Su capacidad de adaptarse a curvas y contornos facilita la toma de medidas en cintura, busto, caderas y hombros. Gracias a su ligereza y durabilidad, se puede envolver alrededor del torso sin comprimir el tejido de la prenda, garantizando datos fiables para el trazado del patrón base.
                .col-lg-5.col-md-9
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 13. 
                    span Cinta métrica
                  figure
                    img(src='@/assets/curso/temas/t2/fig13.png', alt='Cintas métricas extendidas parcialmente sobre una superficie plana. Cada una tiene marcas numéricas visibles en secuencia y un remate metálico en uno de los extremos. Una de las cintas está enrollada.')
              .row.justify-content-around.align-items-center
                .col-lg-5.col-md-11
                  h4 Reglas (recta, curva, escuadra)
                  p Las reglas son instrumentos rígidos que sirven para trasladar y verificar líneas de trazo. La regla recta establece ángulos y líneas uniformes en trazos largos, la curva francesa dibuja contornos suaves en sisas y escotes, y la escuadra asegura ángulos rectos en hombros y costados. Su uso combinado asegura que los patrones mantengan proporciones correctas y encajen entre sí sin distorsiones.
                .col-lg-5.col-md-9
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 14. 
                    span Set de reglas
                  figure
                    img(src='@/assets/curso/temas/t2/fig14.png', alt='Conjunto de reglas de trazo especializadas para patronaje, con formas curvas, rectas y combinadas. Cada una tiene perforaciones de diferentes tamaños y escalas numéricas distribuidas a lo largo de sus bordes.')
              .row.justify-content-around.align-items-center
                .col-lg-5.col-md-11
                  h4 Ruleta de marcar
                  p La ruleta de marcar es una rueda dentada montada sobre un mango que sirve para transferir marcas del patrón al tejido. Al rodar sobre la tela y la entretela, la ruleta imprime perforaciones o punteados discretos que guían el corte y la costura. Este método resulta rápido y preciso, ya que no depende del trazo manual directo, y permite reproducir detalles del patrón sin dañar la superficie del material.
                .col-lg-5.col-md-9
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 15. 
                    span Ruleta de marcar
                  figure
                    img(src='@/assets/curso/temas/t2/fig15.png', alt='Herramienta manual compuesta por un mango y una pieza metálica con una rueda dentada giratoria utilizada en confección para transferir marcas o líneas de patrones sobre el tejido o papel, facilitando el trazado de guías de costura o corte.')
              .row.justify-content-around.align-items-center
                .col-lg-5.col-md-11
                  h4 Tiza y lápices de sastre
                  p La tiza de sastre y los lápices especializados ofrecen medios temporales para señalar puntos de referencia, líneas de ajuste o marcas de pinzas. La tiza, de base cerosa, deja trazos fáciles de borrar con un cepillo suave o al contacto con el vapor de la plancha. Los lápices de sastre, disponibles en blanco, gris o colores pastel, permiten delinear con mayor finura y se eliminan al lavar la prenda. Ambos aseguran que las marcas no permanezcan en el producto final, manteniendo la limpieza y la calidad estética.
                .col-lg-5.col-md-9
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 16. 
                    span Tiza para marcar
                  figure.mb-2
                    img(src='@/assets/curso/temas/t2/fig16.png', alt='Manos realizando una línea sobre tela con ayuda de una regla y una pieza de tiza de sastre, herramienta usada para marcar patrones y líneas de corte en confección.')
                  

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Herramientas de trazo y corte

    p.mb-4 Las herramientas de trazo y corte son fundamentales en los procesos de confección, ya que permiten marcar con precisión los moldes sobre la tela y realizar cortes limpios que respeten las líneas del patrón. Su uso adecuado garantiza calidad en el ensamblaje de las piezas y optimiza el aprovechamiento del material.

    .row.bgs-2.align-items-center.p-3.p-md-4.p-lg-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca.p-4
            LineaTiempoC.color-primario
              .row.justify-content-center.align-items-center(titulo="Tijeras de confección")
                .col-md-6.col-lg-5
                  h4 Tijeras de confección
                  p La tijera de confección es una herramienta de hoja larga y pesada diseñada para cortar varias capas de tela con un solo movimiento suave. Su filo biselado y mango ergonómico permiten guiar el corte sin desviaciones, evitando que el material se desplace o se formen pliegues. Gracias a su peso equilibrado, corta tejidos gruesos y delicados por igual, garantizando bordes limpios que facilitan el montaje y la alineación de las piezas en el ajuste de la prenda femenina.
                .col-md-6.col-lg-5
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 17.                    
                    span Tijeras de confección
                  figure.mb-2
                    img(src='@/assets/curso/temas/t2/fig17.png', alt='Tres tijeras de sastre con mangos grandes y hojas alargadas están dispuestas sobre una superficie plana, acompañadas por hilos enrollados en carretes de madera, utilizados en trabajos de confección.')
              .row.justify-content-center.align-items-center(titulo="Tijeras de precisión y bordes")
                .col-md-6.col-lg-5
                  h4 Tijeras de precisión y bordes
                  p Las tijeras de precisión, también conocidas como “de picos” o “de bordes”, tienen hojas cortas y puntiagudas que permiten acceder a zonas estrechas como sisas, cuellos y pinzas. Su control milimétrico facilita recortar detalles y escindir hilos sobrantes sin dañar la superficie de la tela. Son indispensables al ajustar prendas femeninas en áreas curvas o de difícil acceso, donde la limpieza del corte impacta directamente en la calidad del acabado.
                .col-md-6.col-lg-5
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 18.
                    span Tijeras de precisión
                  figure.mb-2
                    img(src='@/assets/curso/temas/t2/fig18.png', alt='Tijera pequeña con hojas delgadas y punta fina, diseñada para cortes precisos en labores detalladas de confección o bordado.')
              .row.justify-content-center.align-items-center(titulo="Cortahilos y cúter de tela")
                .col-md-6.col-lg-5
                  h4 Cortahilos y cúter de tela
                  p El cortahilos, o descosedor, y el cúter de tela son herramientas complementarias a las tijeras. El cortahilos, con su hoja pequeña y curva, permite deshacer puntadas sin afectar las fibras adyacentes, esencial para corregir costuras o desmontar piezas al realizar ajustes. El cúter de tela, de hoja circular montada en un mango rodante, corta líneas rectas y curvas largas con gran rapidez, ideal para secciones extensas de tela al modificar patrones o rehacer dobladillos.
                .col-md-6.col-lg-5
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 19. 
                    span Cúter de tela
                  figure.mb-2
                    img(src='@/assets/curso/temas/t2/fig19.png', alt='Herramienta de corte manual con forma compacta y hojas afiladas, acompañada por varias bobinas de hilo dispuestas sobre una superficie de tejido.') 
              .row.justify-content-center.align-items-center(titulo="Tapete de corte")
                .col-md-6.col-lg-5
                  h4 Tapete de corte
                  p El tapete de corte es una superficie autocicatrizante que protege la hoja del cúter y preserva la firmeza del filo. Su patrón de cuadrícula impreso en relieve actúa como guía para medir y trazar ángulos antes del corte, ofreciendo una base estable que evita deslizamientos. Al trabajar con tejidos femeninos que requieren precisión, el tapete garantiza cortes exactos y prolonga la vida útil de las herramientas de filo.
                .col-md-6.col-lg-5
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 20.
                    span Tapete verde de corte
                  figure.mb-2
                    img(src='@/assets/curso/temas/t2/fig20.png', alt='Superficie de corte con cuadrícula sobre la que se encuentran distribuidos diversos materiales de papelería, incluyendo papeles de colores, tijeras, lápices, regla metálica, borrador, cutter y otros utensilios, mientras dos manos trazan una línea con lápiz sobre una hoja sostenida.')
              

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Herramientas de ensamblaje

    p.mb-4 Las herramientas de ensamblaje en confección permiten unir piezas de tela con precisión y seguridad. Facilitan procesos como hilvanado, sujeción temporal y costura, optimizando el armado de la prenda antes de su confección definitiva.

    .row.bgs-3.align-items-center.p-3.p-md-4.p-lg-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca.p-4
            PasosB.color-primario
              .row.justify-content-center.align-items-center(titulo="")
                .col-md-11.col-lg-5
                  h4 Alfileres y agujas de mano
                  p Los alfileres y las agujas de mano son fundamentales para mantener las piezas de tela en posición antes de la costura definitiva. Los alfileres, con cabeza de colores o metálica, permiten sujetar capas de tejido sin deformarlas, señalizar marcas de pinzas y ajustar márgenes. Las agujas de mano, más largas y resistentes, facilitan hilvanar bordes y unir temporalmente costuras en áreas curvas o de difícil acceso. Su empleo cuidadoso garantiza que el patrón conserve su forma original y facilita la precisión en cada intervención sobre la prenda femenina, sin dejar perforaciones permanentes en el material.
                .col-md-9.col-lg-5
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 21.
                    span Alfileres y agujas de mano
                  figure.mb-2
                    img(src='@/assets/curso/temas/t2/fig21.png', alt='Conjunto de elementos punzantes utilizados en costura que incluyen alfileres con cabeza esférica, agrupados sueltos y en una rueda organizadora; imperdibles metálicos en diferentes posiciones; y agujas enhebradas con hilo distribuidas de manera vertical.')
              .row.justify-content-center.align-items-center(titulo="")
                .col-md-11.col-lg-6
                  h4 Prensatelas y pies de máquina
                  p Los prensatelas, conocidos también como pies de máquina, son accesorios intercambiables que presionan el tejido sobre la cama de la máquina durante el cosido. Existen versiones universales para costura recta y zigzag, así como modelos especializados para tejidos elásticos, cremalleras o dobladillos invisibles. La elección del pie adecuado influye directamente en el control del material: un prensatelas de doble arrastre evitará el deslizamiento de lonas o #[em jacquards], mientras que un pie para telas ligeras protegerá géneros delicados como gasa o encaje. En el contexto del ajuste de prendas femeninas, estos accesorios aseguran puntadas uniformes y evitan estiramientos o pliegues indeseados. 
                .col-md-9.col-lg-3
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 22.
                    span Pie de máquina
                  figure.mb-2
                    img(src='@/assets/curso/temas/t2/fig22.png', alt='Pieza metálica ubicada debajo de la aguja de una máquina de coser, compuesta por un prensatelas con abertura central por donde pasa el hilo, una ranura guía y tornillo ajustable en la parte superior para controlar la presión.')
              .row.justify-content-center.align-items-center(titulo="")
                .col-md-11.col-lg-5
                  h4 Dedal y retorcedor de hilo
                  p El dedal y el retorcedor de hilo son herramientas de apoyo en labores manuales de costura y acabado. El dedal, fabricado en metal o silicona, protege los dedos al empujar la aguja a través de tejidos gruesos y facilita puntada firme en cuellos, cinturillas o #[em inserts] de refuerzo. El retorcedor de hilo, con su mango ergonómico y gancho en la punta, permite torsionar el hilo de manera rápida y uniforme para buscar la tensión óptima antes de enhebrar la aguja o preparar cordones decorativos. Ambos instrumentos contribuyen a un manejo más seguro y eficiente de la costura manual en detalles de ajuste y remate.
                .col-md-9.col-lg-5
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 23.
                    span Descosedor
                  figure.mb-3
                    img(src='@/assets/curso/temas/t2/fig23.png', alt='Herramienta manual con mango alargado y punta metálica curva en forma de horquilla, utilizada para abrir costuras o retirar hilos sin dañar la tela.')


    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Herramientas de acabados

    p.mb-4 Las herramientas de acabados en confección permiten perfeccionar las prendas, asegurando terminaciones limpias, duraderas y estéticamente agradables. Se utilizan al final del proceso para reforzar costuras, eliminar imperfecciones y dar presentación profesional a la prenda.

    .row.bgs-4.align-items-center.p-3.p-md-4.p-lg-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca.p-4
            PasosB.color-primario
              .row.justify-content-center.align-items-center(titulo="")
                .col-md-6.col-lg-5
                  h4 Plancha y tabla de planchar
                  p La plancha, en combinación con su tabla dedicada, constituye la herramienta principal para fijar pliegues, sellar costuras y dar acabado profesional a las prendas femeninas ajustadas. La superficie acolchada y resistente de la tabla ofrece un soporte estable, mientras que la plancha genera el calor y la presión adecuados para asentar dobladillos, eliminar arrugas y moldear detalles como pinzas y solapas. Al emplear vapor y diferentes niveles de temperatura, el técnico asegura que cada costura quede perfectamente integrada, preparando la prenda para su posterior uso o exhibición sin deformaciones.
                .col-md-6.col-lg-5
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 24.
                    span Tabla de planchar y plancha
                  figure.mb-2
                    img(src='@/assets/curso/temas/t2/fig24.png', alt='Se expone una tabla con soporte en forma de cruz y superficie acolchada, sobre la cual se apoya una prenda extendida; encima hay un dispositivo de planchado con cable y salida de vapor.')
              .row.justify-content-center.align-items-center(titulo="")
                .col-md-6.col-lg-5
                  h4 Manivelas de ojales y punzones
                  p Las manivelas de ojales son dispositivos manuales o mecánicos que crean aberturas precisas y uniformes en el tejido, rematadas internamente con puntadas que refuerzan el ojal. El punzón, por su parte, perfora primero la tela para guiar la formación del ojete. Estos instrumentos permiten ajustar la posición y el tamaño del ojal de manera exacta en ubicaciones como la botonadura frontal o cinturillas, garantizando un cierre pulido y duradero en blusas, vestidos y chaquetas. Su operación controlada evita desgarros y asegura un acabado limpio que resiste el uso continuado.
                .col-md-6.col-lg-5
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 25.
                    span Punzón
                  figure.mb-2
                    img(src='@/assets/curso/temas/t2/fig25.png', alt='Herramienta compuesta por un mango ergonómico de madera y una punta metálica afilada; se emplea para perforar o marcar con precisión materiales como tela o cuero.')
              .row.justify-content-center.align-items-center(titulo="")
                .col-md-6.col-lg-5
                  h4 Cepillos y rodillos quitapelusas
                  p Los cepillos de cerdas firmes y los rodillos adhesivos son esenciales para retirar fibras sueltas, polvo y pelusas después del confeccionado y antes de la entrega de la prenda. El cepillo, con cerdas naturales o sintéticas, se utiliza para barrer la superficie y prevenir el apelmazamiento de fibras; el rodillo quitapelusas, recubierto de cinta adhesiva, atrapa partículas finas que no se eliminan al cepillado. En el ajuste de prendas femeninas, estos utensilios aseguran un aspecto inmaculado, realzan la definición de costuras y mantienen la suavidad del tejido, contribuyendo a la presentación impecable de cada diseño.
                .col-md-6.col-lg-5
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 26.
                    span Rodillo quitapelusas
                  figure.mb-2
                    img(src='@/assets/curso/temas/t2/fig26.png', alt='Una persona utiliza un rodillo adhesivo de mango corto sobre una prenda extendida, realizando movimientos lineales para retirar partículas o pelusas de la superficie del tejido.')



</template>

<script>
export default {
  name: 'Tema2',
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
