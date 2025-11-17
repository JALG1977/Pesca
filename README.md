Resumen del Desarrollo del Proyecto, Problemas Enfrentados, Instalación y Ejecución
************************************************************************************


El presente proyecto corresponde al desarrollo de una aplicación móvil construida con Ionic y Angular en formato de componentes standalone. 
A lo largo del proceso se implementaron diversas páginas y funcionalidades orientadas a crear una experiencia visual consistente en tonos azul marino y blanco, integrando formularios, navegación, álbum de fotos, foro de temas de pesca y un chat tipo WhatsApp.

El desarrollo comenzó con la creación de una página de Login, que incluyó un formulario básico de usuario y contraseña, la incorporación de un ícono representativo y la configuración correcta de los imports necesarios para que Ionic reconociera los componentes utilizados. Para esto me basé en la contrucción de html y css pero me encontré con errores frecuentes como “ion-icon is not a known element”, los cuales se resolvieron incorporando explícitamente los componentes en el arreglo imports del decorador @Component.

Posteriormente se desarrolló la página Home, que incluyó un álbum de fotos con cinco imágenes, un modal para visualizar la foto ampliada y un botón “Agregar” para abrir una página destinada a subir nuevas imágenes. Durante esta etapa se presentó un problema asociado a la carga de imágenes locales; se solucionó moviendo la carpeta de imágenes al directorio src/assets/images.

En general puedo decir que el problema más recurrente tuvo relación con la importación de componentes. Por otra parte al no ser un usuario de GitHub me costó en un principio realizar la sincronización del proyecto, hay mucha información y tutoriales en línea que me ayudaron a realizar esta tarea. 



Instalación y ejecución del proyecto
************************************

La instalación y ejecución del proyecto requiere clonar el repositorio, 
instalar dependencias con npm install y ejecutar ionic serve para visualizar la aplicación en el navegador.
Requisitos:
Node.js instalado.
Ionic CLI (global):
npm install -g @ionic/cli
Git instalado y configurado.
Pasos para ejecutar el proyecto localmente:
Clonar el repo:
git clone https://github.com/JALG1977/Pesca.git
cd Pesca
Instalar dependencias:
npm install
Levantar el proyecto:
ionic serve
Abrir en el navegador http://localhost:8100
