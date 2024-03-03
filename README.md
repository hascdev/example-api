# Simple API

API creada con Node.js + Express + Postgres usando autenticación con JWT (Json Web Tokens) basado en roles de usuario.

## Antes de Ejecutar

Primero, cree un archivo `.env` en la raíz del proyecto. Puedes duplicar el archivo `.env.example` y nombrarlo `.env`. Adapta las variables a tus necesidades.

Tenga en cuenta que debe completar la variable de entorno POSTGRES_URL con la URL de su base de datos.

## Ejecutando el proyecto

Instalar dependencias:

```sh
npm install
```

Crear tablas y cargar datos de prueba:

```sh
npm seed
```

Iniciar modo desarrollo:

```sh
npm run dev
```