<strong> Complejidades en el desarrollo del foro </strong>

Durante el desarrollo del foro para la aplicación Pesca se presentaron diversas complejidades que permitieron comprender mejor cómo interactúan los distintos componentes de una aplicación móvil desarrollada con Ionic, Angular, Capacitor y SQLite.

Una de las principales dificultades estuvo relacionada con el manejo de la sesión del usuario. Fue necesario asegurar que la información del usuario autenticado estuviera disponible en todas las vistas del foro, de modo que al crear un tema o un comentario quedara correctamente registrado el autor. Esto implicó ajustar la forma en que se guardaban y recuperaban los datos de la sesión sin afectar el funcionamiento del login ni los mecanismos de protección de rutas.

Otra complejidad importante fue el trabajo con la base de datos SQLite. Al tratarse de una base de datos local, fue necesario manejar correctamente su inicialización y asegurar que estuviera disponible antes de realizar consultas o inserciones. En algunos casos, los datos no se mostraban porque la base de datos aún no estaba lista, lo que obligó a implementar controles adicionales y reintentos para garantizar el correcto acceso a la información.

También se presentaron dificultades en la configuración de las rutas y la navegación entre pantallas. La creación de rutas dinámicas para acceder al detalle de cada tema del foro requirió especial atención, ya que errores en la definición o el orden de las rutas provocaban redirecciones inesperadas al login, lo que dificultaba la navegación normal de la aplicación.

El uso de componentes standalone en Angular fue otro aspecto desafiante. Cada página debía declarar explícitamente los módulos necesarios, y la omisión de estos generaba errores en tiempo de compilación, especialmente al utilizar componentes de Ionic y enlaces con ngModel.

Además, se observaron comportamientos inesperados de algunos componentes de Ionic al ejecutarse en Android, como problemas con campos de texto multilínea y bloqueos al mostrar mensajes emergentes. Para resolver esto fue necesario adaptar la implementación y utilizar soluciones más simples y estables.

Finalmente, uno de los mayores desafíos fue integrar el foro sin afectar las funcionalidades ya existentes de la aplicación, como el login, el registro y otras secciones. Esto obligó a realizar cambios controlados y específicos, cuidando que el nuevo módulo se integrara de forma correcta con la estructura general del proyecto.

En conclusión, el desarrollo del foro permitió enfrentar problemas reales de persistencia de datos, manejo de sesiones, navegación y compatibilidad entre tecnologías, contribuyendo al aprendizaje práctico y al fortalecimiento de la aplicación.


<strong>Trabajo Unidad 4 Item A <br/>
Aspectos relevantes en el desarrollo con Angular e Ionic</strong>

Durante el desarrollo de la aplicación fue posible identificar varios elementos clave que resultan fundamentales al trabajar con Angular e Ionic, especialmente cuando la aplicación se ejecuta como APK en dispositivos Android reales y no solo en el navegador.

Uno de los aspectos más importantes es la gestión correcta del estado de sesión del usuario. En este proyecto se evidenció que confiar solo en variables en memoria no es suficiente, ya que al navegar entre páginas o al aplicar guards, la sesión puede perderse. Por ello, es fundamental persistir la sesión de forma segura, por ejemplo utilizando localStorage, y asegurarse de que los AuthGuard validen correctamente al usuario antes de permitir el acceso a las rutas protegidas.

Otro punto relevante es la navegación y el uso de guards. Angular permite proteger rutas fácilmente, pero es importante que todas las rutas relacionadas (como listado y detalle) utilicen el mismo criterio de autenticación. De lo contrario, se pueden generar redirecciones inesperadas, como volver al login aun cuando el usuario ya inició sesión.

También se aprendió que el manejo de la interfaz de usuario en Ionic requiere especial cuidado. Problemas como inputs que no activan el teclado en pantalla o botones que cambian de color inesperadamente pueden estar relacionados con el uso incorrecto de componentes, estilos globales o superposición de capas. Usar componentes Ionic estándar (ion-item, ion-input, ion-list) y mantener un CSS ordenado y coherente ayuda a evitar estos errores.

El manejo del estado de carga (loading) es otro aspecto clave. Separar los estados de carga (por ejemplo, cargar datos vs. guardar información) mejora la experiencia del usuario y evita que la aplicación quede “bloqueada” visualmente. Además, mostrar mensajes claros mediante textos visibles y toast ayuda a entender qué está ocurriendo en cada acción.

Finalmente, es importante considerar la persistencia de datos y sus límites. Durante el desarrollo surgieron problemas al intentar guardar imágenes grandes en storage, lo que evidenció la necesidad de elegir correctamente dónde y cómo almacenar la información (por ejemplo, usar filesystem para imágenes y storage solo para metadatos).

En conclusión, desarrollar con Angular e Ionic implica no solo conocer el framework, sino también entender cómo se comporta la aplicación en dispositivos reales. La correcta gestión de la sesión, la navegación, el diseño de la interfaz, el manejo de estados y la persistencia de datos son aspectos fundamentales para lograr una aplicación funcional, estable y con una buena experiencia de usuario.





<strong>Resumen del Desarrollo del Proyecto, Problemas Enfrentados, Instalación y Ejecución</strong>



El presente proyecto corresponde al desarrollo de una aplicación móvil construida con Ionic y Angular en formato de componentes standalone. 
A lo largo del proceso se implementaron diversas páginas y funcionalidades orientadas a crear una experiencia visual consistente en tonos azul marino y blanco, integrando formularios, navegación, álbum de fotos, foro de temas de pesca y un chat tipo WhatsApp.

El desarrollo comenzó con la creación de una página de Login, que incluyó un formulario básico de usuario y contraseña, la incorporación de un ícono representativo y la configuración correcta de los imports necesarios para que Ionic reconociera los componentes utilizados. Para esto me basé en la contrucción de html y css pero me encontré con errores frecuentes como “ion-icon is not a known element”, los cuales se resolvieron incorporando explícitamente los componentes en el arreglo imports del decorador @Component.

Posteriormente se desarrolló la página Home, que incluyó un álbum de fotos con cinco imágenes, un modal para visualizar la foto ampliada y un botón “Agregar” para abrir una página destinada a subir nuevas imágenes. Durante esta etapa se presentó un problema asociado a la carga de imágenes locales; se solucionó moviendo la carpeta de imágenes al directorio src/assets/images.

En general puedo decir que el problema más recurrente tuvo relación con la importación de componentes. Por otra parte al no ser un usuario de GitHub me costó en un principio realizar la sincronización del proyecto, hay mucha información y tutoriales en línea que me ayudaron a realizar esta tarea. 



<strong>Instalación y ejecución del proyecto</strong>


La instalación y ejecución del proyecto requiere clonar el repositorio, <br/>
instalar dependencias con npm install y ejecutar ionic serve para visualizar la aplicación en el navegador.<br/>

Requisitos:<br/>
Node.js instalado.<br/>
Ionic CLI (global):<br/>
npm install -g @ionic/cli<br/>
Git instalado y configurado.<br/><br/>

Pasos para ejecutar el proyecto localmente:<br/>
Clonar el repo:<br/>
git clone https://github.com/JALG1977/Pesca.git<br/>
cd Pesca<br/><br/>

Instalar dependencias:<br/>
npm install<br/>
<br/>
Levantar el proyecto:<br/>
ionic serve<br/>
Abrir en el navegador http://localhost:8100<br/>
