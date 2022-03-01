# Auto encuestas UTN Mendoza

Este sitio web es un proyecto de código abierto de estudiantes para estudiantes y ningún maestro o administrador tiene ninguna relación con él.
Esta página aún está en desarrollo, por lo que se recomienda verificar que las encuestas hayan sido completadas y se agradece mucho avisar sobre fallas estéticas o funcionales.

### Ahora con protocolo https !!!

 ##  ¯\\\_( ͡❛  ͟ʖ ͡❛)_/¯

	 <span class="title">
	    Por favor Conteste las Siguientes Encuestas Docentes
	    <p style="color: white"> Problemas </p>
	 </span>


## Descripción 
Auto encuestas UTN Mendoza simplifica la respuesta de las encuestas a profesores de la UTN Mendoza.
Esto es posible haciendo una solicitud GET y dos POST al servidor de la universidad.
### Tecnologías
 - node.js
 - express
 - axios
 - cherio
 - bootstrap

## Como usar
 1. Ingrese un número de expediente válido, si no lo es, una alerta alerta el error, si ya se completaron todas las encuestas, una alerta le informará.
 2. Indica que encuestas quieres realizar, por defecto vienen todas marcadas.
 3. Indique como llenar las encuestas, una vez marcadas se llenarán todas por igual, **MAL**: igual a insuficiente, **BIEN**: igual siempre/excelente, los cuestionarios abiertos quedan en blanco en cualquier caso.
 4. Al hacer clic en "responder" se enviarán todas las respuestas, este proceso puede demorar algunos segundos, el tiempo de espera varía dependiendo de la cantidad de encuestas que se deban enviar.
 5. Una vez finalizado el proceso se despliegan tres botones: Inicio: redirige a la página de inicio, Consultar encuestas: redirige a la selección de encuestas de autogestión, Autogestión: redirige al inicio de la autogestión.
