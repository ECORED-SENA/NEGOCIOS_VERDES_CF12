<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 7
      h1 #[i Social media marketing] (mercadeo en redes sociales)

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/ilustraciones/img77.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 El #[i social media marketing] es la acción de crear contenido para promocionar un negocio y productos en varias redes sociales como Facebook, Instagram y Twitter. El material creado debe ser único y adaptarse a la plataforma en la que se comparte para ayudar a impulsar las conversiones y aumentar el conocimiento de marca (Santos, 2020).

    h4(data-aos="fade-right").mt-5 Redes Sociales
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ePCu8Jro_K8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade-down").mt-5 En la actualidad es una de las estrategias de #[i marketing] digital más usadas a nivel mundial obteniendo resultados positivos en corto tiempo con una inversión mínima, pues logra llegar a un gran número de posibles clientes potenciales de forma masiva, pero siempre teniendo en cuenta los gustos y preferencias de estos. 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5(data-aos="fade-right")
          img.img-t.img-a.my-3.yoyo(src='@/assets/ilustraciones/img78.svg', alt='')
      .col-lg-7.col-color-4.p-5(data-aos="fade-left")
        p.mb-0 Para lograr el buen resultado del que se habló anteriormente, es necesario tener muy claro a qué público se quiere llegar, cuáles son las características y necesidades del prototipo de cliente ideal para establecer la red más apropiada en la que se logre la interacción entre el cliente y la marca.
    h4(data-aos="fade-down").mt-5 A continuación, se relacionan las estadísticas y aspectos más importantes de algunas de las redes sociales: 
    .BorTit.mt-5(data-aos="fade-left") #[b Tabla 2] <br> Estadísticas y aspectos importantes de las redes sociales
    .tabla-a.mt-3(data-aos="fade-left")    
      table
        caption Nota. Tomada de Santos (2020) 
        thead
          tr
            th 
            th Facebook
            th Twitter
            th Instagram
            th YouTube
            th Snapchat
        tbody
          tr
            td.c1 #[b Usuarios]
            td 2.449 millones
            td.c2 340 millones
            td 1.000 millones
            td.c2 2.000 millones
            td 381 millones
          tr
            td.c1 #[b Audiencia]
            td Generación X y #[i millennials]
            td.c2 Principalmente #[i millennials]            
            td Principalmente #[i millennials]           
            td.c2 #[i Millennials], seguidos de cerca por la generación Z           
            td Principalmente la generación Z 
          tr
            td.c1 #[b Impacto]
            td B2C
            td.c2 B2B y B2C          
            td B2C           
            td.c2 B2C           
            td B2C 
          tr
            td.c1 #[b Ideal]
            td Conocimiento de la marca; publicidad.
            td.c2 Relaciones públicas; servicio al cliente.        
            td Medios de aspecto natural, detrás de escena y contenido generado por el usuario; publicidad.
            td.c2 Conocimiento de la marca; entretenimiento y videos instructivos.           
            td Conocimiento de la marca; publicidad.
    p(data-aos="fade-down").mt-5 Es importante tener en cuenta la información de la tabla 2 a la hora de crear o implementar una estrategia de #[i marketing], una vez se tenga definido a qué tipo de clientes se quiere llegar, se podrá elegir de manera acertada el mejor canal o red social para entrar en contacto directo con los clientes y lograr el objetivo trazado inicialmente.
    separador
    #t_7_1.titulo-segundo(data-aos="fade-right")
      h2 7.1  Beneficios del #[i social media marketing] 
    p(data-aos="fade-down") En la siguiente infografía se profundizarán los beneficios del uso de redes sociales: 
    img.img-t.img-a.mt-5(data-aos="fade-right")(src='@/assets/ilustraciones/img79.svg', alt='')

    separador
    #t_7_2.titulo-segundo(data-aos="fade-right")
      h2 7.2  Pasos para implementar una estrategia de #[i social media marketing]
    p(data-aos="fade-down") A continuación, se hará un resumen del paso a paso que se debe tener en cuenta para que la estrategia de #[i social media marketing] tenga éxito:
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10    
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.justify-content-center.align-items-center(data-aos="fade-right")
            .col-md-9.mb-4.mb-md-0
              h4 Identificar el prototipo de cliente ideal
              p Primero se debe tener muy claro cuáles son las características y cualidades del cliente ideal, para abordar de manera adecuada sus necesidades e intereses.

              p Por ejemplo, si la empresa vende tenis deportivos de moda, debemos saber que el público objetivo está clasificado en jóvenes de una edad entre los 15 a los 30 años, que tengan preferencia por la moda y la ropa deportiva. Al tener identificadas las características similares de los clientes ideales, se deben crear contenidos atractivos acorde a sus intereses.
            .col-md-3
              img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img80.svg', alt='')

          .row.justify-content-center.align-items-center(data-aos="fade-left")
            .col-md-3
              img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img81.svg', alt='')           
            .col-md-9.mb-4.mb-md-0
              h4 Elegir las redes sociales
              p Para realizar esta selección se debe tener bien identificado el prototipo de cliente ideal, pues de ahí se podrá tomar información necesaria para determinar en qué tipo de red pasan mayor tiempo.

              p Sigamos con el ejemplo anterior, los jóvenes entre los 15 y 30 años con preferencia por la moda y la ropa deportiva, por lo general usan con frecuencia redes como Instagram, Facebook y Twitter.

          .row.justify-content-center.align-items-center(data-aos="fade-right")
            .col-md-9.mb-4.mb-md-0
              h4 Crear contenido atractivo
              p El contenido que se publica en las redes sociales debe causar el interés de la audiencia, las publicaciones deben contener imágenes impactantes, videos en vivo que muestren experiencias buenas con los productos, consejos útiles, que llamen la atención del público y sea compartido miles de veces.
            .col-md-3
              img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img82.svg', alt='')

          .row.justify-content-center.align-items-center(data-aos="fade-left")
            .col-md-3
              img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img83.svg', alt='')           
            .col-md-9.mb-4.mb-md-0
              h4 Escoger un horario ideal para las publicaciones
              p Es importante determinar las horas de mayor audiencia o interacción en las redes sociales, para ello es necesario publicar contenido de calidad y estar pendientes de los picos de mayor receptividad que serán aquellas horas en las que hubo mayor cantidad de comentarios y me gusta.
              p De esta manera, podremos tener un aproximado de las horas ideales para realizar la publicación, se debe tener un equilibrio entre el número de publicaciones, no es recomendable publicar muy poco, podría pasar que lo olviden los seguidores y, de igual manera pasaría si se publica demasiado, se tornaría molesto para tus seguidores.
          .row.justify-content-center.align-items-center(data-aos="fade-right")
            .col-md-9.mb-4.mb-md-0
              h4 Analizar y evaluar los resultados
              p Una vez puesta en marcha la estrategia publicitaria se debe analizar si la estrategia fue la adecuada para alcanzar los objetivos trazados inicialmente, por lo que es necesario hacer un seguimiento a través de una serie de herramientas de monitoreo que ofrecen las redes sociales, las cuales nos muestran los resultados bien sean positivos o negativos. 

              p Algunas de las herramientas de monitoreo o medición son:
              .list.mt-4.mx-3
                .list__item
                  .list__item__icon
                    img(src='@/assets/ilustraciones/v1.svg', alt='')
                .list__txt
                  span Nivel de participación. 
              .list.mt-3.mx-3
                .list__item
                  .list__item__icon
                    img(src='@/assets/ilustraciones/v1.svg', alt='')
                .list__txt
                  span Me gusta. 
              .list.mt-3.mx-3
                .list__item
                  .list__item__icon
                    img(src='@/assets/ilustraciones/v1.svg', alt='')
                .list__txt
                  span Seguidores. 
              .list.mt-3.mx-3
                .list__item
                  .list__item__icon
                    img(src='@/assets/ilustraciones/v1.svg', alt='')
                .list__txt
                  span Recursos compartidos.
              .list.mt-3.mx-3
                .list__item
                  .list__item__icon
                    img(src='@/assets/ilustraciones/v1.svg', alt='')
                .list__txt
                  span Vistas de video. 
              .list.mt-3.mx-3
                .list__item
                  .list__item__icon
                    img(src='@/assets/ilustraciones/v1.svg', alt='')
                .list__txt
                  span Visitas al perfil.
            .col-md-3
              img.img-t.img-a.yoyo1(src='@/assets/ilustraciones/img84.svg', alt='')


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
