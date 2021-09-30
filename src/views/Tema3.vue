<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 3
      h1 Comunicación comercial
    

    .row.justify-content-center.align-items-center(data-aos="slide-left")
      .col-lg-5.p-0
        img.img-a(src='@/assets/ilustraciones/img38.svg', alt='') 
      .col-lg-7.col-color-4.p-5
        p.mb-0 Se puede definir como la interacción que existe entre los individuos que conforman una empresa; y esta puede ser de forma hablada –por medio de reuniones presenciales, en línea o a través de dispositivos telefónicos–, y de forma escrita –a través de correos electrónicos, redes sociales blogs y sitios web–. En el sitio de trabajo esta comunicación debe ser activa y fluida, por lo que se puede decir que el objetivo de la comunicación comercial es realizar ventas exitosas y para esto se deben conocer las necesidades de los clientes, y en caso de que estos tengan objeciones saber solucionarlas y asegurarse de que el mensaje fue escuchado y captado perfectamente.

    p(data-aos="fade-down").mt-5 La comunicación debe ser interna con todos los miembros de la organización, desde el gerente hacia abajo, y externa cuando se hace con proveedores, clientes y medios de comunicación. En la siguiente tabla se indican algunos tipos: 
    .BorTit.mt-5(data-aos="fade-left") #[b Tabla 1] <br> <i>Tipos de comunicación empresarial</i>    

    .tabla-b.color-secundario.mt-5(data-aos="zoom-in")
      .tabla-b__header
        h5.mb-0.text-white Tipos de comunicación empresarial
      table
        caption Nota. Tomada de Newstrom y Davis (2011) 
        tr
          <td rowspan="5" style="background: #E5DEC1">Según el ámbito</td>
        tr
          <td rowspan="3" style="background: #FFFFFF"> Interna (Apartado 1.2)</td>
          <td colspan="3" style="background: #F7F5EC"> ●	Se produce entre los miembros de una organización.<br>●	Enlaza los distintos estamentos jerárquicos y departamentos de la empresa. Por ejemplo, la comunicación que hay entre el departamento de producción y el de ventas.</td>
          tr
            <td  style="background: #F7F5EC"> Vertical</td>
            <td  style="background: #F7F5EC"> ●	Se establece entre la dirección y los empleados de la empresa (puede ser ascendente y descendente, según el sentido del mensaje).</td>
          tr
            <td  style="background: #F7F5EC"> Horizontal</td>
            <td  style="background: #F7F5EC"> ●	Se da entre empleados del mismo nivel jerárquico.</td>

        tr
          <td style="background: #FFFFFF"> Externa (Apartado 1.3) </td>
          <td colspan="3" style="background: #F7F5EC"> ●	Es la que mantiene la empresa con el exterior.<br>●	Enlaza la empresa con el entorno.<br>●	La conforman comunicaciones con clientes, proveedores, acreedores y organismos oficiales. <br>●	En ella se engloban la publicidad y las relaciones públicas.</td>

        tr
          <td rowspan="4" style="background: #E5DEC1">Según el código</td>
        tr
          <td style="background: #FFFFFF"> Oral (Ud. 5)</td>
          <td colspan="3" style="background: #F7F5EC"> ●	Se lleva a cabo a través del lenguaje hablado (conversación)<br>●	Suele darse entre personas cara a cara o cuando se comunican a través del teléfono.<br>●	En ella la retroalimentación o <i>feedback</i> es más rápida que en la escrita: el emisor obtiene una respuesta más inmediata y permite realizar aclaraciones y evitar posibles malentendidos.<br>●	Es la más recomendable para actuaciones urgentes.</td>
 
        tr
          td Escrita (Ud.7)
          <td colspan="3" style="background: #F7F5EC"> ●	Exige el uso de algún tipo de soporte (como el papel o el disco duro de un ordenador).<br>●	La retroalimentación es más lenta, pues no permite aclaraciones ni modificaciones inmediatas.<br>●	Es necesario elaborar.</td>

        tr
          <td style="background: #FFFFFF"> No verbal (Ud. 4)</td>

          <td colspan="3" style="background: #F7F5EC"> ●	Se desarrolla a través de gestos, miradas, expresiones faciales, movimientos del cuerpo.<br>●	Así como se puede decir si se quiere entablar comunicación o no verbalmente, la comunicación no verbal es difícil de ocultar, pues por medio del rostro y del cuerpo se envían mensajes continuamente. <br>●	Los mensajes no verbales sirven para complementar y apoyar lo que se dice, aunque otras veces no se puede contradecir si nuestros gestos no coinciden con lo que se quiere transmitir, lo cual es muy posible, ya que muchas veces se realizan inconscientemente.</td>

        tr
          <td rowspan="3" style="background: #E5DEC1">Según el grado de control</td>
        tr
          <td style="background: #FFFFFF"> Formal</td>
          <td colspan="3" style="background: #F7F5EC"> ● Se canaliza a través de los directivos y responsables de la empresa y se desarrolla dentro de su organigrama.<br>● Se puede decir que la comunicación formal viene perfectamente definida, incluso dibujada, ya que es la que sigue las líneas del organigrama.<br> ● Se emplea para transmitir información sobre temas relacionados con la organización.<br>● Ejemplo: el director comercial reúne a todos los delegados de ventas para informales sobre los resultados del mes anterior y transmitirles las instrucciones precisas para desempeñar el trabajo durante el mes siguiente.</td>

        tr
          td Informal
          <td colspan="3" style="background: #F7F5EC"> ● Puede producirse en cualquier lugar, dentro o fuera de la empresa y del horario de trabajo.<br>● Surge en relaciones espontáneas que, por afinidad, se establecen entre compañeros. Abarca todo tipo de temas, no solo los relacionados con el trabajo o la organización.<br>● Es importante y se desarrolla con mucha frecuencia, pues los mensajes, los códigos y canales no están controlados por la dirección.<br> ● Ejemplo: los grupos que se forman para charlar en los descansos o para desayunar, los trabajadores que comparten un medio de transporte o que pasan parte de su tiempo libre juntos.</td>

  
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
