<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">Un framework progresivo de <a href="http://nodejs.org" target="_blank">Node.js</a> para construir aplicaciones del lado del servidor eficientes y escalables.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# 📌 Acerca del Proyecto

Este proyecto fue diseñado para mi práctica y aprendizaje en el desarrollo con NestJS. Incluye dos tablas principales: **roles** y **usuarios**, y abarca diversas prácticas esenciales en el desarrollo backend.

### 🔹 Características principales
- ✅ **Estructuración del Proyecto:** Organización de carpetas y archivos.
- ✅ **Manejo de Respuestas HTTP:** Estructura adecuada de respuestas y manejo de errores.
- ✅ **Migraciones:**
  - Creación de migraciones.
  - Definición de relaciones entre tablas.
  - Ejecución de migraciones.
  - Modificación o adición de campos en migraciones ya existentes (como si estuviera en producción).
- ✅ **CRUD Completo:**
  - Servicio de Creación (Create).
  - Servicio de Lectura (Read) con relaciones.
  - Servicio de Actualización (Update).
  - Servicio de Eliminación (Delete) con validación de dependencias.
- ✅ **Autenticación y Autorización:**
  - Servicio de Inicio de Sesión (Login).
  - Servicio para obtener la información del usuario autenticado.
  - Servicio de Cierre de Sesión (Logout).
  - Validación de autenticación para proteger endpoints.
  - Asignación y gestión de Roles de usuario.
  - Autorización de peticiones según roles (restricción de acciones según permisos asignados).
- ✅ **Notificaciones y Comunicación:**
  - Envío de Emails.
  - Envío de Notificaciones.

#

### 🚀 Instalación y Ejecución

### 1️⃣ Clonar el Repositorio

```bash
  git clone https://github.com/EdgarIbarra23/learning_nest.git
```

### 2️⃣ Configuración Inicial

#### 🔹 Para usuarios SIN Docker

1. Instalar dependencias

```bash
    npm install
```

2. Copiar el archivo de entorno

```bash
    cp .env.example .env
```

3. Ejecutar las migraciones

```bash
    npm run migration:run 
```

4. Iniciar el servidor en modo desarrollo

```bash
    npm run start:dev
```

#

#### 🔹 Para usuarios CON Docker

1. Copiar el archivo de entorno

```bash
    cp .env.example .env
```

2. Configurar las variables de entorno en `.env` (Opcionalmente, puedes modificar `DB_PASSWORD` y `DB_NAME`)

```bash
    DB_HOST=db
    DB_PORT=3306
    DB_PASSWORD=password123
    DB_NAME=nombre_de_base_de_dato
```

3. Modificar el archivo `db/init.sql`, reemplazando `nombre_de_base_de_dato` con el nombre real de la base de datos

```bash
    CREATE DATABASE IF NOT EXISTS nombre_de_base_de_dato;
    USE nombre_de_base_de_dato;
```

4. Construir y levantar los contenedores con Docker Compose

```bash
    docker-compose up --build
```

5. Acceder a la Base de Datos con PhpMyAdmin en la siguiente URL

```bash
    http://localhost:8081/
```

#

### 🌐 Acceso a la API

Después de completar los pasos de instalación, la API estará disponible en:

```bash
  http://localhost:8000/api
```