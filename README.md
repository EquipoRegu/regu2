###### <sub> </sub>
## Contenido
1. [Resumen](#Resumen) 
2. [Cliente emisor](#Cliente-emisor)
3. [Servidor](#Servidor)
4. [Cliente receptor](#Cliente-receptor)

# Resumen 
<div align="justify">
</A><i>Por medio de la conceccion de dos computadoras a una página web utilizando un servidor con WebSockets.</i>

![Sistema 1](https://github.com/EquipoDinamit/Examen3/blob/main/imagenes/indicaciones.png "Diagrama del sistema")

El sistema se compone de tres módulos o bloques independientes que interactúan entre sí. Dos de los tres módulos son clientes, un <b>cliente emisor</b> (controlado por hardware), un <b>cliente receptor</b> (página web con html) y el <b>servidor</b> que permite la comunicación entre los dos clientes para que sea posible mover objetos para que sea posible llevar a cabo una partida del juego llamado "Gato".
</div>

<div align="right">
 
<sub>[Contenido](#-)</sub>
</div> 

# Cliente emisor
### Código
<div align="justify">
<b>Emisor.ino:</b> 
<ul>
 <li>Abrir el archivo en el IDE de Arduino.</li>
 <li>En la pestaña de Herramientas/Tools seleccionamos la Placa en la que se desea subir el codigo y tambien seleccionamos el Puerto al que este conectado el microocontrolador.</li>
 <li>Darle al boton de "Subir/Upload".</li>
</ul>
<p>Lo que se espera del código "Emisor.ino" es que cada botón nos regrese un valor del 1 al 6 y el 13 que será leído por el código "ClienteEmisor.py" y enviado al servidor.</p>

<b>ClienteEmisor.py:</b>
<ul>
 <li>Desde la ubicacion del archivo "Cliente emisor.py" abrir la consola (cmd) y ejecutar el programa.</li>
 <ul>
  <li><b>Ejemplo:</b><br>
    <i>C:\Users\minim\Desktop\Sistema de Computo y Redes\Examen></i><b>python ClienteEmisor.py</b><br></li>
 </ul>
</ul>
Lo anterior debería desplegar una pequeña ventana donde se puede seleccionar el puerto del arduino y se debe introducir el usuario y el servidor al que se quiere conectar. Y así sabemos que todo salio bien.<br>
 
<img src="https://github.com/EquipoDinamit/Examen3/blob/main/imagenes/interfaz.png" alt="Circuito Emisor" style="height: 30%; width:50%;"/><br>
El nombre de usuario ingresado será el que se use para validar el acceso en el <b>"index.html"</b>.<br>
 
 Lo que se espera del código <b>"ClienteEmisor.py"</b> es que pueda conectarse con el servidor cuando el <b>"main.js"</b> se esté ejecutando y que le mande la información leída del arduino para que el servidor la envíe al cliente receptor.
</div>

<img src="https://github.com/EquipoDinamit/Examen3/blob/main/imagenes/emisor.png" alt="Circuito Emisor" style="height: 100%; width:100%;"/>

<div align="right">
 
<sub>[Contenido](#-)</sub>
</div> 

# Servidor 
<div align="justify">
Para tener el servidor desde tu computadora hacer lo siguiente:<br>
En caso de tener un modem de INFINITUM ingresar a http://192.168.1.254/login.html y buscar el apartado "DMZ" (Demilitarized Zone ó Zona desmilitarizada) y activamos la función DMZ.<br>
Buscar el apartado "Mapeo de Puertos/Port Mapping" y una vez ahí en la sección "Reenvió de Puertos" definimos un puerto nuevo y especificamos que se trata de un Protocolo TCP.<br>
 
<b>Nota:</b> Es importante guardar los datos de la Dirección IP Pública.
</div>
 
### Código
<div align="justify">
<b>main.js:</b><br>
Si es la primera vez que se ejecuta el servidor es necesario hacer lo siguiente:
<ul>
 <li>Tener descargados por lo menos el <b>"package.json"</b> y el servidor <b>"main.js"</b en la carpeta que se está trabajando.</li>
 <li>Desde la ubicación dentro de la carpeta abrir la consola (cmd) y escribir lo siguiente:
  <ul>
   <li><b>Ejemplo:</b><br>
    <i>C:\Users\minim\Desktop\Sistema de Computo y Redes\Examen></i><b>npm install</b><br></li>
  </ul></ul>
  
  <img src="https://github.com/EquipoDinamit/Examen3/blob/main/imagenes/npminstall.png" alt="Circuito Emisor" style="height: 100%; width:100%;"/><br>
  esto crea dos nuevos elementos en la carpeta de trabajo, una carpeta llamada <b>"node_modules"</b> que es donde se almacenan todas las dependencias y librerías que utilizas en tu proyecto nodejs y el <b>"package-lock.json"</b> que es como un historial de las operaciones <i>npm</i> que modifiquen el <b>"node_modules"</b>.</li>
  Tambien es necesario instalar nodemon y socket.io, estos se instalan con los siguientes comandos: <b>npm install --save nodemon</b> y <b>npm install socket.io</b>.
 <ul>
 <li>Ahora desde la consola en la carpeta de trabajo hay que escribir lo siguiente:
 <ul>
   <li><b>Ejemplo:</b><br>
    <i>C:\Users\minim\Desktop\Sistema de Computo y Redes\Examen></i><b>npm start</b><br></li>
  </ul>
 como resultado en la consola se despliega el mensaje <b>"Servidor corriendo en http://localhost:80"</b>, ademas deberiamos poder recivir conecciones desde el <b>"ClienteEmisor.py"</b>. Y con eso sabemos que todo salió bien.</li>
</ul>
 
<img src="https://github.com/EquipoDinamit/Examen3/blob/main/imagenes/servidor.png" alt="Circuito Emisor" style="height: 100%; width:100%;"/>

 Lo que se espera del código <b>"main.js"</b> es que reciba la coneccion del <b>cliente emisor</b> y se conecte con el <b>cliente receptor</b> para enviar los datos leídos del arduino y poder realizar diferentes acciones en el <b>cliente receptor</b>.
<div/>
 
<div align="right">
 
<sub>[Contenido](#-)</sub>
</div> 
 
# Cliente receptor 
<div align="justify">
 El cliente receptor consta de una página web en documento html.
 <ul>
  <li>La primera página a la que accedemos es <b>"index.html"</b> donde tenemos que hacer <i>login</i> con el nombre de usuario ingresado en el <b>"ClienteEmisor.py"</b>.<br>
 </ul>
 
  <img src="https://github.com/EquipoDinamit/Examen3/blob/main/imagenes/login.png" alt="Circuito Emisor" style="height: 100%; width:100%;"/></li>
 
 <ul>
  <li>Una vez hecho <i>login</i> ingresamos a la página de inicio donde podemos navegar con los botones "5" y "6" del circuito emisor.</li>
 </ul>
 
 <img src="https://github.com/EquipoDinamit/Examen3/blob/main/imagenes/inicio.png" alt="Circuito Emisor" style="height: 100%; width:100%;"/>
 
 <ul>
 <li>Por último a disfrutar de los jueguitos.</li>
 </ul>
 <ul>
 <ul>
  <li><i>Tetris<i></li>
 </ul>
 </ul>
 
 <img src="https://github.com/EquipoDinamit/Examen3/blob/main/imagenes/tetris.png" alt="Circuito Emisor" style="height: 100%; width:100%;"/>
 <ul> 
 <ul>
 <li><i>Snake<i></li>
 </ul>
 </ul>
 <img src="https://github.com/EquipoDinamit/Examen3/blob/main/imagenes/snake.png" alt="Circuito Emisor" style="height: 100%; width:100%;"/>
 <ul>
 <ul>
 <li><i>Dino<i></li>
 </ul>
 </ul>
<img src="https://github.com/EquipoDinamit/Examen3/blob/main/imagenes/dino.png" alt="Circuito Emisor" style="height: 100%; width:100%;"/>
</div>

<br><br>
<b>Gracias por leer hasta el final <3</b>

<div align="right">
 
<sub>[Contenido](#-)</sub>
</div>  

