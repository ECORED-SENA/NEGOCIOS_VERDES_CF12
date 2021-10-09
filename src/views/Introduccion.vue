<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.row-bg-color.row-m-top(data-aos="flip-down")       
      .col-lg-7(data-aos="slide-right")
        p.mb-0.p-5 Lo seres vivos como consumidores presentan alteraciones que obligan a cambiar de forma periódica, así, se cambian con rapidez los objetivos y las formas de satisfacer las necesidades, pues el consumidor no es el mismo de hace unos años, además, 
          span(style='background-color: #E5DEC1') #[b fenómenos como los avances tecnológicos]
          span(style='background-color: #F4F3F0')  hacen que los clientes se informen más, sean más exigentes y ofrecen menos fidelidad. Es por esto por lo que los productos a comercializar deben ser muy competitivos y contar con diversidad para cumplir las necesidades, teniendo en cuenta que la competencia no solo es local, sino a nivel mundial, por esta razón es necesario buscar alternativas para lograr crecer en el mercado. El medio donde cada persona o empresa se mueve, hace buscar estrategias de mercado para lograr el objetivo en tiempo real.
      .col-lg-5(data-aos="slide-left")
          img.img-t.img-a.img-m-top(src='@/assets/ilustraciones/img1.svg', alt='')



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
