<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 1
      h1 Portafolio de productos y servicios

    p(data-aos="fade-down") Es un documento donde las empresas incluyen información detallada, abarcando aspectos relacionados con la historia y sus objetivos y, sobre todo, describen con claridad los productos o servicios ofrecidos; este documento, además, debe contener información de proveedores, clientes y datos de contacto.
    img.img-t.img-a.mt-5(data-aos="fade-left")(src='@/assets/ilustraciones/img2.svg', alt='')

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-3(data-aos="fade-left")
        img.img-t.yoyo(src='@/assets/ilustraciones/img3.svg', alt='')
        h5.mt-3 Importancia del portafolio de servicio
        .hr
      .col-lg-9.col-color-1.white-border(data-aos="fade-right")
        p.p-5.mb-0 Toda empresa debe contar con un portafolio de productos para que los clientes conozcan el trabajo que se realiza, un portafolio hecho con completa claridad permite crear estrategias de #[i marketing] adecuadas para que las ventas aumenten. Este documento no solo da a conocer lo que se vende, sino también la calidad del trabajo, con el objetivo de buscar reconocimiento. La información puede estar plasmada en hojas o en un #[i software] de presentación digital como PowerPoint o en una página web.

    .row.justify-content-center.align-items-center.mt-4
      .col-lg-3(data-aos="fade-left")
        img.img-t.yoyo(src='@/assets/ilustraciones/img3.svg', alt='')
        h5.mt-3 ¿Cómo debe ser un portafolio?
        .hr
      .col-lg-9.col-color-2.white-border(data-aos="fade-right")
        p.p-5.mb-0 Un buen portafolio debe tener 
          span(style='background-color: #E5DEC1') #[b información directa] 
          span(style='background-color: #F7F5EC')  y, sobre todo, causar impacto para sobresalir ante la competencia, además, se debe llegar al cliente de manera directa, incluyendo #[b precios]
          span(style='background-color: #E5DEC1') #[b  atractivos y brindando claridad] a toda hora. 
          span(style='background-color: #F7F5EC') Por ser esta la carta de presentación de toda empresa, es primordial dejar un recordatorio a los clientes.

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-right")
      .col-12.bg-img.p-5.mt-5 
        .row(data-aos="flip-down")       
          .col-lg-6.my-5
            p(data-aos="fade-down").my-5 El diseño es el reto más grande al que se enfrentan las empresas sin importar al público al cual se enfocan, por lo que se aconseja que lo confeccione una persona con conocimiento de imagen y tipografía para causar una impresión adecuada; ya que el objetivo es reflejar la imagen para despertar interés, se recomienda incluirlo a la web para añadir videos y animaciones que hacen mejorar la herramienta y causar mejores sentimientos.

    separador
    #t_1_1.titulo-segundo(data-aos="fade-right")
      h2 1.1 Clasificación de los portafolios 
    p(data-aos="fade-down") Siguiendo a Duarte (s.f.), la clasificación de los portafolios de servicio se puede conocer en el siguiente video:  

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: CF012_1.1_Clasificación de los portafolios.

  
    separador
    #t_1_2.titulo-segundo(data-aos="fade-right")
      h2 1.2 Partes de un portafolio de productos y servicios
    p(data-aos="fade-down") El portafolio de servicios debe llevar una serie de segmentos que aporta información diferente sobre los aspectos de la empresa y que son de gran utilidad para los potenciales clientes; dentro de las cuales se encuentran:

    .tarjeta.tarjeta--azul.p-5.mt-5.d-none.d-lg-block(data-aos="fade-down")
      SlyderA
        .row.justify-content-center.align-items-center
          .col-lg-8.d-none.d-lg-block
            img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img5.svg', alt='')
            .row.justify-content-center.align-items-center.my-4
              .col-lg-12.p-color-1.p-3
                h4.mt-4 Presentación
                p Es donde se plasma la información general, aquí va el nombre, el año que empezó sus operaciones y el progreso que ha tenido desde la fecha de su fundación.

        .row.justify-content-center.align-items-center
          .col-lg-8.d-none.d-lg-block
            img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img6.svg', alt='')
            .row.justify-content-center.align-items-center.my-4
              .col-lg-12.p-color-1.p-3
                h4.mt-4 Objetivos
                p En esta parte del portafolio se encuentran las metas que la empresa se trazó a corto, mediano y largo plazo, y permite que los clientes se familiaricen con las proyecciones de la compañía. 

        .row.justify-content-center.align-items-center
          .col-lg-8.d-none.d-lg-block
            img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img7.svg', alt='')
            .row.justify-content-center.align-items-center.my-4
              .col-lg-12.p-color-1.p-3
                h4.mt-4 Misión y visión
                p La misión es la razón y justificación del accionar de la empresa y está estrechamente relacionada con los objetivos, mientras que la visión es la proyección que se traza la empresa a largo plazo, como se ve en 15 o 20 años.  

        .row.justify-content-center.align-items-center
          .col-lg-8.d-none.d-lg-block
            img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img8.svg', alt='')
            .row.justify-content-center.align-items-center.my-4
              .col-lg-12.p-color-1.p-3
                h4.mt-4 Certificación
                p Incluye todo tipo de  reconocimientos que ha obtenido a lo largo de su trayectoria, es de vital importancia porque revela la calidad de la organización. 

        .row.justify-content-center.align-items-center
          .col-lg-8.d-none.d-lg-block
            img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img9.svg', alt='')
            .row.justify-content-center.align-items-center.my-4
              .col-lg-12.p-color-1.p-3
                h4.mt-4 Sociedades
                p Indica las relaciones que la empresa tiene con otras organizaciones. 

        .row.justify-content-center.align-items-center
          .col-lg-8.d-none.d-lg-block
            img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img10.svg', alt='')
            .row.justify-content-center.align-items-center.my-4
              .col-lg-12.p-color-1.p-3
                h4.mt-4 Clientes
                p Aquí se dan a conocer los individuos y organizaciones que han contratado bienes y servicios con la empresa, se pueden incluir testimonios dando fe del proceder y la seriedad de la organización. 

        .row.justify-content-center.align-items-center
          .col-lg-8.d-none.d-lg-block
            img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img11.svg', alt='')
            .row.justify-content-center.align-items-center.my-4
              .col-lg-12.p-color-1.p-3
                h4.mt-4 Proveedores
                p Se incluyen las organizaciones encargadas de abastecer los materiales para desarrollar los bienes que ofrece la empresa.

        .row.justify-content-center.align-items-center
          .col-lg-8.d-none.d-lg-block
            img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img12.svg', alt='')
            .row.justify-content-center.align-items-center.my-4
              .col-lg-12.p-color-1.p-3
                h4.mt-4 Servicios
                p Parte principal del portafolio y es donde van incluidos los servicios que actualmente ofrece la empresa, y los que serán ofertados  en el futuro. 

        .row.justify-content-center.align-items-center
          .col-lg-8.d-none.d-lg-block
            img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img13.svg', alt='')
            .row.justify-content-center.align-items-center.my-4
              .col-lg-12.p-color-1.p-3
                h4.mt-4 Proyectos
                p Proyectos y programas donde está involucrada la empresa. 

        .row.justify-content-center.align-items-center
          .col-lg-8.d-none.d-lg-block
            img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img14.svg', alt='')
            .row.justify-content-center.align-items-center.my-4
              .col-lg-12.p-color-1.p-3
                h4.mt-4 Información de contacto
                p Es donde se cierra el portafolio, es el sitio destinado para plasmar la información del contacto donde se incluyen números de teléfonos, dirección de la empresa, sitio web, correos electrónicos y las redes sociales si las tiene. Esto por si alguien se interesa en los servicios ofrecidos se contacte por alguno de los medios ya mencionados.

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-auto.d-block.d-lg-none.mt-5
        img.img-t.img-a(src='@/assets/ilustraciones/img5.svg', alt='')
      .col.d-block.d-lg-none.mt-5
        h4 Presentación
        p.mb-0 Es donde se plasma la información general, aquí va el nombre, el año que empezó sus operaciones y el progreso que ha tenido desde la fecha de su fundación.          

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-auto.d-block.d-lg-none.mt-5
        img.img-t.img-a(src='@/assets/ilustraciones/img6.svg', alt='')
      .col.d-block.d-lg-none.mt-5
        h4 Objetivos
        p.mb-0 En esta parte del portafolio se encuentran las metas que la empresa se trazó a corto, mediano y largo plazo, y permite que los clientes se familiaricen con las proyecciones de la compañía. 

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-auto.d-block.d-lg-none.mt-5
        img.img-t.img-a(src='@/assets/ilustraciones/img7.svg', alt='')
      .col.d-block.d-lg-none.mt-5
        h4 Misión y visión
        p.mb-0 La misión es la razón y justificación del accionar de la empresa y está estrechamente relacionada con los objetivos, mientras que la visión es la proyección que se traza la empresa a largo plazo, como se ve en 15 o 20 años.   

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-auto.d-block.d-lg-none.mt-5
        img.img-t.img-a(src='@/assets/ilustraciones/img8.svg', alt='')
      .col.d-block.d-lg-none.mt-5
        h4 Certificación
        p.mb-0 Incluye todo tipo de  reconocimientos que ha obtenido a lo largo de su trayectoria, es de vital importancia porque revela la calidad de la organización.  

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-auto.d-block.d-lg-none.mt-5
        img.img-t.img-a(src='@/assets/ilustraciones/img9.svg', alt='')
      .col.d-block.d-lg-none.mt-5
        h4 Sociedades
        p.mb-0 Indica las relaciones que la empresa tiene con otras organizaciones.  

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-auto.d-block.d-lg-none.mt-5
        img.img-t.img-a(src='@/assets/ilustraciones/img10.svg', alt='')
      .col.d-block.d-lg-none.mt-5
        h4 Clientes
        p.mb-0 Aquí se dan a conocer los individuos y organizaciones que han contratado bienes y servicios con la empresa, se pueden incluir testimonios dando fe del proceder y la seriedad de la organización.  

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-auto.d-block.d-lg-none.mt-5
        img.img-t.img-a(src='@/assets/ilustraciones/img11.svg', alt='')
      .col.d-block.d-lg-none.mt-5
        h4 Proveedores
        p.mb-0 Se incluyen las organizaciones encargadas de abastecer los materiales para desarrollar los bienes que ofrece la empresa. 

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-auto.d-block.d-lg-none.mt-5
        img.img-t.img-a(src='@/assets/ilustraciones/img12.svg', alt='')
      .col.d-block.d-lg-none.mt-5
        h4 Servicios
        p.mb-0 Parte principal del portafolio y es donde van incluidos los servicios que actualmente ofrece la empresa, y los que serán ofertados  en el futuro.  

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-auto.d-block.d-lg-none.mt-5
        img.img-t.img-a(src='@/assets/ilustraciones/img13.svg', alt='')
      .col.d-block.d-lg-none.mt-5
        h4 Proyectos
        p.mb-0 Proyectos y programas donde está involucrada la empresa.  

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-auto.d-block.d-lg-none.mt-5
        img.img-t.img-a(src='@/assets/ilustraciones/img14.svg', alt='')
      .col.d-block.d-lg-none.mt-5
        h4 Información de contacto
        p.mb-0 Es donde se cierra el portafolio, es el sitio destinado para plasmar la información del contacto donde se incluyen números de teléfonos, dirección de la empresa, sitio web, correos electrónicos y las redes sociales si las tiene. Esto por si alguien se interesa en los servicios ofrecidos se contacte por alguno de los medios ya mencionados. 
    p(data-aos="fade-down").mt-5 A continuación, se indica un ejemplo de portafolio de productos y servicios. 
    .BorTit.mt-5(data-aos="fade-left") #[b Figura 1] <br> Ejemplo de portafolio de servicios
    .row.justify-content-center.align-items-center
      .col-12.d-block.d-lg-none
        img.img-t.img-a.mt-5(data-aos="fade-right")(src='@/assets/ilustraciones/img15.svg', alt='')
      .col-12.d-block.d-lg-none   
        img.img-t.img-a.mt-5(data-aos="fade-right")(src='@/assets/ilustraciones/img16.svg', alt='')
      .col-12.d-block.d-lg-none
        img.img-t.img-a.mt-5(data-aos="fade-right")(src='@/assets/ilustraciones/img17.svg', alt='')
      .col-12.d-block.d-lg-none   
        img.img-t.img-a.mt-5(data-aos="fade-right")(src='@/assets/ilustraciones/img18.svg', alt='')        


    .container-1.mt-5 
      ul.slides.d-none.d-lg-block
        li#slide4
          img(src='@/assets/ilustraciones/img18.png' alt='')
        li#slide2
          img(src='@/assets/ilustraciones/img16.png' alt='')
        li#slide3
          img(src='@/assets/ilustraciones/img17.png' alt='')
        li#slide1
          img(src='@/assets/ilustraciones/img15.png' alt='')

      ul.thumbnails.d-none.d-lg-block
        li.mb-3.mt-5
          a(href='#slide1')
            img.beat.beat-1(src='@/assets/ilustraciones/img15.png')
        li.my-4
          a(href='#slide2')
            img.beat.beat-1(src='@/assets/ilustraciones/img16.png')
        li.my-4
          a(href='#slide3')
            img.beat.beat-1(src='@/assets/ilustraciones/img17.png')
        li.my-4
          a(href='#slide4')
            img.beat.beat-1(src='@/assets/ilustraciones/img18.png')

    figcaption.mt-3 Nota. Tomada de Duarte (s.f.)

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite

export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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

<style lang="sass" scoped></style>
