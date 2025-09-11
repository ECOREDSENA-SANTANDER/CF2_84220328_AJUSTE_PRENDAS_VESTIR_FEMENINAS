<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Máquinas, herramientas e insumos en el ajuste de prendas femeninas',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar elementos empleados en la confección de prendas de vestir femeninas. ',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'El diente de arrastre moviliza el tejido aprovechando la fricción entre los surcos de su superficie. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un sólido conocimiento de los temas abordados en el componente formativo. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 2,
          texto:
            'Un diente de arrastre con densidad muy alta (más de 24 dientes por pulgada) es ideal para materiales robustos como lona o cuero. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un sólido conocimiento de los temas abordados en el componente formativo. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 3,
          texto:
            'La separación entre agujas en máquinas de varias agujas influye en la uniformidad del pespunte y la tensión de trabajo. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un sólido conocimiento de los temas abordados en el componente formativo. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 4,
          texto:
            'Si la presión del prensatelas es excesiva, puede provocar arrugas en la cara superior del tejido. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un sólido conocimiento de los temas abordados en el componente formativo. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 5,
          texto:
            'La planchuela debe tener canales longitudinales cuya cantidad coincide con el número de hileras de dientes. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un sólido conocimiento de los temas abordados en el componente formativo. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 6,
          texto:
            'El orificio de la planchuela para el paso de la aguja debe ser apenas un 10 % mayor que el grosor de la hoja de la aguja. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un sólido conocimiento de los temas abordados en el componente formativo. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 7,
          texto:
            'El gancho rotatorio (caja bobina) genera la puntada de doble pespunte mediante movimientos de rotación continua. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un sólido conocimiento de los temas abordados en el componente formativo. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 8,
          texto:
            'Una presión insuficiente del prensatelas favorece el avance uniforme del tejido sin riesgo de deslizamientos. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un sólido conocimiento de los temas abordados en el componente formativo. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 9,
          texto:
            'Los dientes de arrastre para telas tejidas suelen encontrarse en calibres de 16, 18, 20 o 24 dientes por pulgada. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un sólido conocimiento de los temas abordados en el componente formativo. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 10,
          texto:
            'La categoría que distingue máquinas de una sola aguja frente a máquinas de varias agujas sirve para adaptar el ajuste de prensatelas y alimentadores. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha demostrado un sólido conocimiento de los temas abordados en el componente formativo. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
      ],
      mensaje_final_aprobado:
        'Buen desempeño en la prueba, se evidencia una comprensión clara y rigurosa de los conceptos técnicos.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda revisar el componente formativo e intentar nuevamente la actividad didáctica. ',
    },
  }),
}
</script>
