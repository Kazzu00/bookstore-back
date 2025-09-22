# Documentación Parcial 1 

## Explicación breve 
La aplicación funciona como un CRUD de autores donde el backend en Spring Boot expone una API REST en http://localhost:8080/api/authors y el frontend en Next.js consume esa API para listar, crear, editar y eliminar autores, gestionando el estado de manera global con un Context de React. Con respecto al preparcial, se agrego la funcionalidad de favoritos (botón "favorito" en cada autor) extendiendo el estado global con un Context que ahora, además de manejar el CRUD de autores, guarda una lista de favoritos y una función toggleFavorite para marcarlos o desmarcarlos. Por ultimo en cada tarjeta de autor se añadió un botón para alternar el estado y una etiqueta de favorito junto al nombre, tambien se creó la ruta /favoritos que filtra y muestra únicamente los autores seleccionados, reutilizando el mismo componente de lista que teniamos en el preparcial.

## Parte B – Opción desarrollada
Se implementó la opción de Pruebas Unitarias para el formulario de autores de la siguiente manera:  
- Creamos una suite de pruebas unitarias (`__tests__/AuthorForm.test.js`) utilizando Jest y Testing Library.  
- Prueba 1: Verifica que los campos `name`, `birthDate`, `description` e `image` se renderizan correctamente y están listos para interactuar con el usuario.  
- Prueba 2: Simula un envío con campos vacíos y valida que el formulario no permita crear un autor.  


## Instrucciones para ejecutar el proyecto

### Backend (bookstore-back)
1. Ir a la carpeta `bookstore-back`.  (Que por defecto al abrir el proyecto estaremos en este directorio)
2. Compilar y correr con Docker:
   
   docker build -t bookstore .
   docker run -d -p 8080:8080 bookstore

3. Validar el back entrando en la siguiente URL:

   http://127.0.0.1:8080/api/authors

Al ver nuestra API funcionando correctamente, seguiremos con el frontend.
### Frontend (bookstore-front)
1. cambiamos al directorio de nuestro front y ejecutamos los siguientes comandos npm:

   npm install
   npm run build
   npm start

2. validamos que nuestra aplicación se desplego correctamente ingresando a la siguiente URL:

   http://localhost:3000/authors

### Pruebas Frontend

1. Para esto, instalamos las dependencias de Jest usando el siguiente comando:
   
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom
   
3. Dentro del directorio del front (.../bookstore-front) usamos el siguiente comando:
   
   npm test
Con esto, deberiamos ver dos pruebas sobre el forms de autores.

---

## 📘 Bookstore Back - Repositorio de Referencia

Este repositorio contiene la **versión final esperada** de los proyectos del curso de Desarrollo de Software en Equipos desarrollado en **Spring Boot**, así como las distintas etapas intermedias para guiar paso a paso el desarrollo por parte de los equipos.

---

## 🎯 Objetivo

Servir como **referencia** para que los equipos:

- Entiendan cómo debe lucir el estado final del proyecto.
- Consulten ejemplos de implementación.
- Sigan el paso a paso del desarrollo guiado a través de ramas progresivas.
- Descarguen versiones específicas desde la sección de _Releases_.
- **NO** debe usarse como herramienta para copiar y pegar en el código desarrollado en sus proyectos grupales.

---

## 📁 Estructura del Repositorio

- Cada rama representa un avance progresivo en el desarrollo del proyecto.

- Puedes navegar entre ramas para consultar o clonar una versión específica según el punto en el que te encuentres.

```plaintext
├── main                # Rama principal con el estado final completo
├── persistencia        # Primera etapa de desarrollo del proyecto
├── logica              # Continuación a persistencia añadiendo lógica y pruebas
└── ...
```

| Paso | Nombre Rama          | Descripción                                                                             | Rama                                                                                                  | Release                                                                             |
| ---- | -------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|      | main                 | Rama principal con el estado final completo                                             | [main](https://github.com/Uniandes-isis2603/bookstore-back)                                           | [Release](https://github.com/Uniandes-isis2603/bookstore-back)                      |
| 1°   | persistencia         | Implementación de la persistencia de las entidades del proyecto                         | [persistencia](https://github.com/Uniandes-isis2603/bookstore-back/tree/persistencia)                 | [Release](https://github.com/Uniandes-isis2603/bookstore-back/releases/tag/v.1.0.0) |
| 2°   | logica-entidades     | Implementacion de los servicios y las reglas de negocio de las entidades                | [logica-entidades](https://github.com/Uniandes-isis2603/bookstore-back/tree/Logica-entidades)         | [Release](https://github.com/Uniandes-isis2603/bookstore-back/releases/tag/v.2.0.0) |
| 3°   | pruebas-entidades    | Implementación de las pruebas unitarias de la lógica creada en el paso 2°               | [pruebas-entidades](https://github.com/Uniandes-isis2603/bookstore-back/tree/pruebas-entidades)       | [Release](https://github.com/Uniandes-isis2603/bookstore-back/releases/tag/v.2.0.5) |
| 4°   | logica-asociaciones  | Implementación de los servicios y reglas de negocio de las asociaciones entre entidades | [logica-asociaciones](https://github.com/Uniandes-isis2603/bookstore-back/tree/logica-asociaciones)   | [Release](https://github.com/Uniandes-isis2603/bookstore-back/releases/tag/v.3.0.0) |
| 5°   | pruebas-asociaciones | Implementación de las pruebas unitarias de la lógica creada en el paso 4°               | [pruebas-asociaciones](https://github.com/Uniandes-isis2603/bookstore-back/tree/pruebas-asociaciones) | [Release](https://github.com/Uniandes-isis2603/bookstore-back/releases/tag/v.3.0.5) |

## 🚀 ¿Cómo usar este repositorio?

1. **Clona el repositorio**

```bash
   git clone https://github.com/Uniandes-isis2603/bookstore-back.git
   cd bookstore-back
```

2. **Cambia a una rama específica**

```bash
   git checkout persistencia
```

> 💡 Usa git branch -a para ver todas las ramas disponibles.

3. **Descarga un release específico**

También puedes descargar una versión lista para usar desde la sección [Releases](https://github.com/Uniandes-isis2603/bookstore-back/releases):

- Cada release está asociado a una rama del paso a paso.

- Contiene el código en un archivo _.zip_ o _.tar.gz_ para que lo abras directamente en tu IDE.

## 📌 Recomendaciones para los Equipos

Usa las ramas como referencia para entender el flujo de construcción del proyecto.

Asegúrate de avanzar paso a paso, entendiendo cada modificación entre ramas.

Consulta la rama main **únicamente** como ejemplo de implementación final.

## 🧑‍🏫 Recursos Adicionales

- Documentación oficial de [Spring Boot](https://spring.io/projects/spring-boot)

- Wiki del curso [Recursos-isis2603](https://github.com/Uniandes-isis2603/recursos-isis2603/wiki)

- Como desplegar [Back-End con docker](https://misovirtual.virtual.uniandes.edu.co/codelabs/MISW4104_202212_DeployBackDocker/index.html#0)
