<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 6
      h1 Herramientas de comercialización

    p(data-aos="fade-down") Para lograr garantizar una buena estrategia de comercialización digital se debe seleccionar muy bien las herramientas de trabajo a usar, por lo que a continuación se nombran algunas de las herramientas más conocidas en el marketing digital:

    TabsA.color-primario.mt-5(data-aos="zoom-in")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Página web o blog")
        .row.justify-content-center.align-items-center
          .col-lg-8
            h4 Página web o blog
            p Así como para el #[i marketing] tradicional es importante contar con lugar físico, para el #[i marketing] digital es de vital importancia tener un sitio web en el que los clientes obtengan toda la información de la empresa y, al mismo tiempo, les permita interactuar con la misma.                 
          .col-lg-4
            img.img-t.img-a.mt-2.yoyo1(src='@/assets/ilustraciones/img72.svg', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Redes sociales")
        .row.justify-content-center.align-items-center
          .col-lg-8
            h4 Redes sociales
            p Hoy en día estos medios de comunicación han cobrado gran importancia, pues les permite a los clientes estar en contacto directo con las empresas, obteniendo información al instante de los productos o servicios que necesitan. Algunas de las principales redes sociales son: Facebook, Twitter e Instagram y, sin duda alguna, son el mejor canal para promocionar los productos de forma inmediata.                
          .col-lg-4
            img.img-t.img-a.mt-2.yoyo1(src='@/assets/ilustraciones/img73.svg', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="E-mail marketing")
        .row.justify-content-center.align-items-center
          .col-lg-8
            h4 E-mail marketing
            p Este es uno de los canales de comunicación de menor costo y con más efectividad, pues genera un contacto mediante el envío de correos electrónicos a una base de datos o contactos, convirtiéndolos en posibles clientes potenciales.                
          .col-lg-4
            img.img-t.img-a.mt-2.yoyo1(src='@/assets/ilustraciones/img74.svg', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Imágenes de calidad")
        .row.justify-content-center.align-items-center
          .col-lg-8
            h4 Imágenes de calidad de tus productos
            p “Una imagen vale más que mil palabras”, razón por la cual se debe cuidar la calidad de las imágenes de los productos, a la hora de vender se dice que todo entra por los ojos, existe gran variedad de aplicaciones y herramientas que permiten presentar de manera más atractiva los productos, por ejemplo: Photoshop, Canva, Snadseep, Vsco, Camera, entre otras.               
          .col-lg-4
            img.img-t.img-a.mt-2.yoyo1(src='@/assets/ilustraciones/img75.svg', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Publicidad display")
        .row.justify-content-center.align-items-center
          .col-lg-8
            h4 Publicidad display
            p Es un tipo de anuncio digital que se ve en los diferentes sitios web que visitamos y llega específicamente a los clientes según las tendencias y gustos que se manifiestan en las búsquedas en internet.                
          .col-lg-4
            img.img-t.img-a.mt-2.yoyo1(src='@/assets/ilustraciones/img76.svg', alt='')                                                




</template>

<script>
export default {
  name: 'Tema6',
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
