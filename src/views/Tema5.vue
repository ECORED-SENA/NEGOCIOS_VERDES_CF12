<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 5
      h1 #[i Marketing] digital

    p(data-aos="fade-down") Según Pascual (2015), es un conjunto de técnicas de #[i marketing] basadas en los medios digitales que puede utilizar campañas masivas o individuales de publicidad.

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Vukk_lp4dO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    .BorTit.mt-5(data-aos="fade-left") #[b Figura 2] <br>  Diferencias entre el <i> marketing</i> tradicional y el <i> marketing</i> digital
    .row.justify-content-center.align-items-stretch.mt-3(data-aos="zoom-in")
      .col-lg-5.img-col-bg-1.p-3.my-3
        h4.text-center.my-3 #[i Marketing] Tradicional
        .row.justify-content-center.align-items-center(data-aos="slide-right")
          .col-lg-10.img-col-bg-3.p-3
            p.text-center La comunicación es de una sola vía
            img.img-t.img-a.mt-2.yoyo1(src='@/assets/ilustraciones/img59.svg', alt='')

        .row.justify-content-center.align-items-center.mt-3(data-aos="slide-right")
          .col-lg-10.img-col-bg-3.p-3
            p.text-center Los consumidores son buscados: prensa, tv., radio, etc.
            img.img-t.img-a.mt-2.yoyo1(src='@/assets/ilustraciones/img61.svg', alt='')

        .row.justify-content-center.align-items-center.mt-3.mb-4(data-aos="slide-right")
          .col-lg-10.img-col-bg-3.p-3
            p.text-center No se puede medir el impacto
            img.img-t.img-a.mt-2.yoyo1(src='@/assets/ilustraciones/img63.svg', alt='')                        

      .col-lg-5.img-col-bg-2.p-3.my-3
        h4.text-center.my-3 #[i Marketing] Digital
        .row.justify-content-center.align-items-center(data-aos="slide-left")
          .col-lg-10.img-col-bg-3.p-3
            p.text-center La comunicación es interactiva y bidireccional
            img.img-t.img-a.mt-2.yoyo1(src='@/assets/ilustraciones/img60.svg', alt='')

        .row.justify-content-center.align-items-center.mt-3(data-aos="slide-left")
          .col-lg-10.img-col-bg-3.p-3
            p.text-center Los consumidores se dirigen al comercio #[i on-line] por medios digitales
            img.img-t.img-a.mt-2.yoyo1(src='@/assets/ilustraciones/img62.svg', alt='')

        .row.justify-content-center.align-items-center.mt-3.mb-4(data-aos="slide-left")
          .col-lg-10.img-col-bg-3.p-3
            p.text-center Se puede medir el impacto
            img.img-t.img-a.mt-2.yoyo1(src='@/assets/ilustraciones/img64.svg', alt='')
    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-lg-10
        figcaption Nota. Tomada de Pascual (2015)

    p(data-aos="fade-down").mt-5 Como se puede observar, el #[i marketing] tradicional es realizado de forma masiva y no individual, razón por la cual es difícil medir su impacto, a diferencia del #[i marketing] digital que analiza las necesidades de los consumidores y los segmenta según sus características, para que la estrategia o medio de comunicación sea efectiva y cause mayor impacto.

    p(data-aos="fade-down") #[b Características del #[i marketing] digital]

    p(data-aos="fade-down") Algunas de las cualidades del #[i marketing] digital son las siguientes:    

    .row.justify-content-center.align-items-center.img-col-bg-4.mt-3.px-5.pt-5(data-aos="zoom-in")
      .col-lg-4.border-col-card
        .row.justify-content-center.align-items-center.img-col-bg-3.p-3(data-aos="fade-right")
          .col-lg-10      
            img.img-t.my-2(src='@/assets/ilustraciones/img66.svg', alt='')
            p #[b La elaboración de estudios personalizados], lo que facilita la segmentación del mercado y una experiencia con el consumidor única. 
        .row.justify-content-center.align-items-center.mt-5.img-col-bg-3.p-3(data-aos="fade-right")
          .col-lg-10      
            img.img-t.my-2(src='@/assets/ilustraciones/img68.svg', alt='')
            p #[b Mantener una retroalimentación constante entre el cliente y la empresa], almacenando los datos obtenidos para futuras estrategias comerciales, con el fin de aumentar la satisfacción del cliente.            

      .col-lg-4
        img.img-t.img-a.beat(src='@/assets/ilustraciones/img65.svg', alt='')

      .col-lg-4.border-col-card
        .row.justify-content-center.align-items-center.img-col-bg-3.p-3(data-aos="fade-left")
          .col-lg-10      
            img.img-t.my-2(src='@/assets/ilustraciones/img67.svg', alt='')
            p #[b Mayor rentabilidad], ya que con una pequeña inversión se obtienen mejores resultados que con el #[i marketing] tradicional.

        .row.justify-content-center.align-items-center.mt-5.img-col-bg-3.p-3(data-aos="fade-left")
          .col-lg-10      
            img.img-t.my-2(src='@/assets/ilustraciones/img69.svg', alt='')
            p #[b Prevención de riesgos], es posible revisar los resultados de la campaña en tiempo real y realizar las correcciones si es necesario.  

    .row.justify-content-center.align-items-center.img-col-bg-4.pb-5.px-5
      .col-lg-4.col-sup-2.border-col-card.d-none.d-lg-block        
        .row.justify-content-center.align-items-center.img-col-bg-3.p-3(data-aos="fade-up")
          .col-lg-10      
            img.img-t.img-a.my-2(src='@/assets/ilustraciones/img70.svg', alt='')
            p #[b Expansión de mercados], logrando captar nuevos clientes en distintos lugares del mundo.

      .col-lg-4.border-col-card.d-block.d-lg-none.mt-3
        .row.justify-content-center.align-items-center.img-col-bg-3.p-3(data-aos="fade-left")
          .col-lg-10
            img.img-t.my-2(src='@/assets/ilustraciones/img70.svg', alt='')
            p #[b Expansión de mercados], logrando captar nuevos clientes en distintos lugares del mundo. 

    h4(data-aos="fade-right").mt-5 Pasos de un plan de #[i marketing] digital
    p(data-aos="fade-down") Para llevar a cabo un plan de #[i marketing] se debe realizar una serie de actividades sistemáticas (figura 3).

    .BorTit.mt-5(data-aos="fade-left") #[b Figura 3] <br> <i>Pasos en la elaboración de un plan de marketing</i>
    img.img-t.img-a.my-2(data-aos="zoom-in")(src='@/assets/ilustraciones/img71.svg', alt='')
    figcaption(data-aos="zoom-in").mt-3 Nota. Tomada de Pascual (2015)

</template>

<script>
export default {
  name: 'Tema5',
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
