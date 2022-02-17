# Auto encuestas UTN Mendoza

Esta pagina web es un proyecto de código abierto de alumnos para alumnos y ningún profesor o directivo tiene relación con el mismo.
Esta pagina esta aun en desarrollo por lo cual se recomienda revisar que las encuestas se hayan completado y avisar sobre fallos estéticos o de funcionamiento es altamente apreciado.

## Description 
Auto encuestas UTN Mendoza simplifica la respuesta de las encuestas a profesores de la UTN Mendoza.
Esto es posible haciendo una solicitud GET y dos POST al servidor de la universidad.
### Tecnologías
 - node.js
 - express
 - axios
 - cherio
 - bootstrap

##   cómo utilizar

 1. Ingresar un numero de legajo valido, en caso de no serlo una alerta avisa el error, si todas las encuestas ya están completadas una alerta lo informara.  
 2. Indicar que encuestas se desea realizar, por defecto están todas marcadas. 
 3. Indicar como rellenar las encuestas, una vez marcado se rellenaran todas por igual, **MAL :** equivale a insuficiente, **BIEN :** equivale a siempre / excelente, los cuestionarios abiertos quedan en blanco en cualquier caso.
 4. Al hacer click en "contestar" se enviaran todas las respuestas, este proceso puede tardar unos segundos, el tiempo de espera varia según la cantidad de encuestas que se deben enviar.
 5. Una vez terminado el proceso, se muestran tres botones: **Inicio :** redirecciona a la pagina inicial, **Comprobar encuestas :** redirecciona a la selección de encuestas de autogestión, **Autogestión :** redirecciona al inicio de autogestión  
