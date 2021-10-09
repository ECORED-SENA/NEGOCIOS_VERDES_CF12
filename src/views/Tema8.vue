<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 8
      h1 Comercio electrónico
    p(data-aos="fade-down") En la actualidad, este tipo de modalidad de comercio que se viene desarrollando desde los años 90, ha tomado gran auge debido a la globalización y uso masivo del internet, llevándolo a ser uno de los medios más utilizado por los compradores a nivel mundial.

    .cajon.color-primario.p-4.mt-5(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg-2
          img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img85.svg', alt='')        
        .col-lg-10
          p.mb-0 “El comercio electrónico (conocido popularmente como #[i e-commerce]), es la compraventa y distribución de bienes y servicios a través de internet u otras redes informáticas” (Carazo, 2016).

    p(data-aos="fade-down").mt-5 En relación con la definición anterior, se puede decir que el #[i e-commerce] carece de presencialidad física, lo que lo limita a un contacto directo con el cliente, pero tiene otras ventajas como el fácil acceso para realizar las transacciones en cualquier momento y lugar del mundo.

    h4(data-aos="fade-right").mt-5 Tipos de comercio electrónico      
    p(data-aos="fade-down") En la siguiente tabla se evidencian los diferentes tipos de comercio electrónico. 

    .BorTit.mt-5(data-aos="fade-left") #[b Tabla 3] <br> Estadísticas y aspectos importantes de las redes sociales.
    .tabla-a.mt-3(data-aos="fade-left")    
      table
        caption Nota. Tomada de Carazo (2016)
        thead
          tr
            th 
            th #[i Business]
            th #[i Consumers]
            th #[i Government]
        tbody
          tr
            td.c1 #[b #[i Business]]
            td #[b B2B] (entre empresas). Ej.: un fabricante y su distribuidor.
            td.c2 #[b B2C] (venta de empresas a consumidores). Ej.: Amazon.
            td #[b B2G] (venta de empresas a instituciones públicas).
          tr
            td.c1 #[b #[i Consumers]]
            td #[b C2B] (venta de particulares a empresas).
            td.c2 #[b C2C] (#[i marketplace] entre consumidores). Ej.: Ebay.
            td 

    h4(data-aos="fade-right").mt-5  Los principales tipos de comercio electrónico son:   
    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-right")
      .col-lg-2.z-col-sup-8
        img.img-t.img-a.teme-8-marg-img.my-3.yoyo(src='@/assets/ilustraciones/img86.svg', alt='')        
      .col-lg-10.teme-8-col-1.p-5
        p.mb-0.px-3 #[b Empresa a Consumidor (B2C) #[i Business to Consumer]]: este tipo de comercio es uno de los más comunes y se lleva a cabo entre empresas que ofrecen sus productos o servicios por medio de plataformas web a consumidores particulares. Un ejemplo de ellos es: Amazon, Walmart, Carrefour (en Colombia Jumbo), Spotify (plataforma de servicio de reproducción de música), entre otras.  

    .row.justify-content-center.align-items-center.mt-4(data-aos="fade-left")
      .col-lg-2.z-col-sup-8
        img.img-t.img-a.teme-8-marg-img.my-3.yoyo(src='@/assets/ilustraciones/img87.svg', alt='')        
      .col-lg-10.teme-8-col-2.p-5
        p.mb-0.px-3 #[b Empresa a Empresa (B2B) #[i Business to Business]]: es cuando se realizan operaciones comerciales entre empresas, puede ser de fabricantes o distribuidores a empresas minoristas. Se presenta en tres formas: 
        .list.mt-4.mx-3
          .list__item
            .list__item__icon
              img(src='@/assets/ilustraciones/v1.svg', alt='')
          .list__txt
            span #[b Transacciones exclusivas con empresas]: como su nombre lo indica las empresas realizan operaciones comerciales exclusivas a otra, por lo general se efectúa con productos industriales y se generan ventas en grandes cantidades y al por mayor. 

        .list.mt-4.mx-3
          .list__item
            .list__item__icon
              img(src='@/assets/ilustraciones/v1.svg', alt='')
          .list__txt
            span #[b Transacciones indiferenciadas a empresas y clientes]: es cuando las micro o pequeñas empresas realizan las ventas de sus productos con las mismas condiciones de precio sin importar si son minoristas o consumidores finales, quiere decir que no hacen una diferencia de precios y que el tratamiento para todos es el mismo. 

        .list.mt-4.mx-3
          .list__item
            .list__item__icon
              img(src='@/assets/ilustraciones/v1.svg', alt='')
          .list__txt
            span #[b Transacciones diferenciadas a empresas y clientes]: este tipo de empresas vende sus productos en condiciones diferentes dependiendo del tipo de comprador, un ejemplo es cuando realizan una venta al por mayor a un minorista, los precios varían según la cantidad y no sería el mismo precio ni las condiciones de una venta al detal para un cliente final.
                            
    .row.justify-content-center.align-items-center.mt-4(data-aos="fade-right")
      .col-lg-2.z-col-sup-8
        img.img-t.img-a.teme-8-marg-img.my-3.yoyo(src='@/assets/ilustraciones/img88.svg', alt='')        
      .col-lg-10.teme-8-col-1.p-5
        p.mb-0.px-3 #[b Consumidor a Empresa (C2B) #[i Consumer to Business]]: son las transacciones que efectúan los consumidores o personas particulares con una empresa, aunque no es tan común, este tipo de comercio hoy en día está tomando importancia; un ejemplo de ello son los Youtubers que realizan videos recomendando y dando a conocer sus experiencias personales con el consumo de ciertos productos y en contraprestación reciben un pago.

    .row.justify-content-center.align-items-center.mt-4(data-aos="fade-left")
      .col-lg-2.z-col-sup-8
        img.img-t.img-a.teme-8-marg-img.my-3.yoyo(src='@/assets/ilustraciones/img89.svg', alt='')        
      .col-lg-10.teme-8-col-2.p-5
        p.mb-0.px-3 #[b Consumidor a Consumidor (C2C) #[i Consumer to Consumer]]: este tipo de comercio se da entre particulares a consumidores finales, sin necesidad de que haya empresas de por medio, un ejemplo es cuando los particulares ponen sus productos a la venta en plataformas como Mercado Libre en donde realizan libremente sus transacciones entre particulares. 

    .row.justify-content-center.align-items-center.mt-4(data-aos="fade-right")
      .col-lg-2.z-col-sup-8
        img.img-t.img-a.teme-8-marg-img.my-3.yoyo(src='@/assets/ilustraciones/img90.svg', alt='')        
      .col-lg-10.teme-8-col-1.p-5
        p.mb-0.px-3 #[b Empresas a Instituciones Públicas (B2G) #[i Business to Government]]: es cuando las empresas privadas realizan transacciones comerciales por medio de plataformas que garantizan que las compras se hagan de forma eficiente y transparente con instituciones públicas, en Colombia se cuenta con el Sistema Electrónico para la Contratación Pública – SECOP.                                      
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

<style lang="sass" scoped></style>
