# EducaPro

Descubre una nueva forma de enseñar y aprender, con herramientas diseñadas para facilitar cada paso en el proceso educativo.

<p align="center">
  <img src="public/cover_readme.webp" alt="Portada de EducaPro" width="600" />
</p>

## Demo

Explora cómo funciona EducaPro en nuestra demo en vivo:

[![Vercel](https://img.shields.io/badge/website-deployed-brightgreen)](https://educapro-latam.vercel.app/)

## Principales funcionalidades

- **Organización de Clases**

  - Crea materias en segundos.
  - Modifica materias fácilmente.
  - Elimina materias cuando sea necesario.

- **Gestión de Calificaciones**

  - Registra calificaciones de manera sencilla.
  - Actualiza calificaciones fácilmente.
  - Consulta historial de calificaciones.

- **Visualización Instantánea**

  - Accede a listas detalladas de estudiantes.
  - Visualiza inscripción en tiempo real.
  - Consulta datos actualizados al instante.

- **Registro Ágil de Asistencia**

  - Toma nota diaria de la asistencia.
  - Marca asistencia de manera rápida.
  - Revisa historial de asistencia fácilmente.

- **Comunicación Directa**

  - Envía mensajes directos a estudiantes.
  - Participa en foros de discusión.
  - Programa y realiza reuniones virtuales.

- **Acceso a Clases**

  - Consulta horarios de clases disponibles.
  - Accede a materiales educativos.
  - Facilita la conexión entre estudiantes.

- **Gestión de Tareas**

  - Organiza tareas de manera eficiente.
  - Realiza entregas sin complicaciones.
  - Consulta calificaciones de tareas fácilmente.

- **Seguimiento Académico**
  - Revisa calificaciones en tiempo real.
  - Consulta historial completo de asistencia.
  - Genera informes académicos detallados.

## Requisitos Previos

![Node.js](https://img.shields.io/static/v1?label=Node.js&message=%3E%3Dv18&color=green&logo=node.js) ![NPM](https://img.shields.io/static/v1?label=NPM&message=%3E%3Dv8&color=CB3837&logo=npm) ![Git](https://img.shields.io/static/v1?label=Git&message=%3E%3Dv2&color=F05032&logo=git)

## Instalación

Pasos para instalar y ejecutar el proyecto en local.

1. Clona el repositorio:

   ```bash
   git clone https://github.com/No-Country-simulation/s17-21-n-react.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd frontend
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura las variables de entorno:

   - Crea un archivo `.env` en el directorio raíz con las variables necesarias.

   ```
   VITE_BASE_URL=
   ```

5. Ejecuta el proyecto:

   ```bash
    npm run dev
   ```

6. Ingresar al navegador:
   ```
   http://localhost:5173
   ```

## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

```
src/
│
│   ├── Admin/               # Componentes y páginas para la administración
│   ├── Common/              # Componentes reutilizables compartidos en todo el proyecto
│   ├── Students/            # Componentes y páginas para la gestión de estudiantes
│   └── Teachers/            # Componentes y páginas para la gestión de profesores
│


Admin/: Contiene los componentes y páginas específicos para la administración del sistema.
Common/: Incluye componentes reutilizables que se comparten entre diferentes partes del proyecto.
Students/: Agrupa los componentes y páginas dedicados a la gestión de estudiantes.
Teachers/: Almacena los componentes y páginas relacionadas con la gestión de profesores.

```

## Tecnologías y Herramientas

- ![React](https://img.shields.io/static/v1?label=React&message=v18.3.1&color=61DAFB&logo=react)
- ![Tailwind CSS](https://img.shields.io/static/v1?label=Tailwind%20CSS&message=v3.4.10&color=06B6D4&logo=tailwindcss)
- ![Vite](https://img.shields.io/static/v1?label=Vite&message=v5.4.1&color=646CFF&logo=vite)
- ![Axios](https://img.shields.io/static/v1?label=Axios&message=v1.7.5&color=5A29E3&logo=axios)
- ![React Router DOM](https://img.shields.io/static/v1?label=React%20Router%20DOM&message=v6.26.1&color=CA4245&logo=react-router)

- ![Swiper](https://img.shields.io/static/v1?label=Swiper&message=v11.1.11&color=FFCF00&logo=swiper)
- ![Day.js](https://img.shields.io/static/v1?label=Day.js&message=v1.11.13&color=1D2D50&logo=dayjs)
- ![Zustand](https://img.shields.io/static/v1?label=Zustand&message=v4.5.5&color=F4A300&logo=zustand)

### Herramientas de Desarrollo

- ![ESLint](https://img.shields.io/static/v1?label=ESLint&message=v9.9.0&color=4B32C3&logo=eslint)
- ![Prettier](https://img.shields.io/static/v1?label=Prettier&message=v3.3.3&color=F7B93E&logo=prettier)
- ![Autoprefixer](https://img.shields.io/static/v1?label=Autoprefixer&message=v10.4.20&color=DD6C8F&logo=autoprefixer)
- ![PostCSS](https://img.shields.io/static/v1?label=PostCSS&message=v8.4.41&color=DD3A0A&logo=postcss)

## Contribuir

Si deseas que otros contribuir al proyecto, sigue estas instrucciones:

1. Haz un fork del proyecto.
2. Crea una rama con el nombre de la funcionalidad que estás implementando (`git checkout -b nombre-de-la-funcionalidad`).
3. Haz commit de tus cambios (`git commit -m 'Añadir funcionalidad'`).
4. Haz push a tu rama (`git push origin nombre-de-la-funcionalidad`).
5. Abre un Pull Request.

## Equipo de Desarrollo Frontend

<div style="display: flex; flex-wrap: wrap; justify-content: center;">

<div style="display: flex; align-items: center; border: 1px solid #e1e4e8; border-radius: 8px; padding: 10px; margin: 10px; width: 350px;">
  <img src="https://ca.slack-edge.com/T02KS88FB0E-U06FUMJMWBE-ga7e55b4d232-512" alt="Bárbara Espinola" style="border-radius: 50%; width: 80px; height: 80px; object-fit: cover; margin-right: 15px;">
  <div>
    <h3 style="margin: 0; font-size: 1.2em;">Bárbara Espinola</h3>
    <p style="margin: 5px 0;">
      <a href="https://www.linkedin.com/in/baesp" style="text-decoration: none;">
        <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" alt="LinkedIn">
      </a>
      <a href="https://github.com/BaEsp1" style="text-decoration: none; margin-left: 10px;">
        <img src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white" alt="GitHub">
      </a>
    </p>
    <img src="https://flagcdn.com/64x48/ar.png" alt="ar flag" style="width: 32px; height: 24px; margin-top: 5px;">
  </div>
</div>
    
<div style="display: flex; align-items: center; border: 1px solid #e1e4e8; border-radius: 8px; padding: 10px; margin: 10px; width: 350px;">
  <img src="https://ca.slack-edge.com/T02KS88FB0E-U068XFC46AF-6d81166603d3-512" alt="Gabriela Patiño" style="border-radius: 50%; width: 80px; height: 80px; object-fit: cover; margin-right: 15px;">
  <div>
    <h3 style="margin: 0; font-size: 1.2em;">Gabriela Patiño</h3>
    <p style="margin: 5px 0;">
      <a href="https://www.linkedin.com/in/gabyp05" style="text-decoration: none;">
        <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" alt="LinkedIn">
      </a>
      <a href="https://github.com/Gabyp05" style="text-decoration: none; margin-left: 10px;">
        <img src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white" alt="GitHub">
      </a>
    </p>
    <img src="https://flagcdn.com/64x48/ve.png" alt="ve flag" style="width: 32px; height: 24px; margin-top: 5px;">
  </div>
</div>
    
<div style="display: flex; align-items: center; border: 1px solid #e1e4e8; border-radius: 8px; padding: 10px; margin: 10px; width: 350px;">
  <img src="https://ca.slack-edge.com/T02KS88FB0E-U04SP592UCC-e29f054eff2c-512" alt="Jorge Henríquez" style="border-radius: 50%; width: 80px; height: 80px; object-fit: cover; margin-right: 15px;">
  <div>
    <h3 style="margin: 0; font-size: 1.2em;">Jorge Henríquez</h3>
    <p style="margin: 5px 0;">
      <a href="https://www.linkedin.com/in/jorge-henriquez-novoa" style="text-decoration: none;">
        <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" alt="LinkedIn">
      </a>
      <a href="https://github.com/jorgea-hn" style="text-decoration: none; margin-left: 10px;">
        <img src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white" alt="GitHub">
      </a>
    </p>
    <img src="https://flagcdn.com/64x48/co.png" alt="co flag" style="width: 32px; height: 24px; margin-top: 5px;">
  </div>
</div>
    
<div style="display: flex; align-items: center; border: 1px solid #e1e4e8; border-radius: 8px; padding: 10px; margin: 10px; width: 350px;">
  <img src="https://ca.slack-edge.com/T02KS88FB0E-U06FPA017D3-a1380fcf656b-512" alt="María Maisterra" style="border-radius: 50%; width: 80px; height: 80px; object-fit: cover; margin-right: 15px;">
  <div>
    <h3 style="margin: 0; font-size: 1.2em;">María Maisterra</h3>
    <p style="margin: 5px 0;">
      <a href="https://www.linkedin.com/in/mariateresamaisterra" style="text-decoration: none;">
        <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" alt="LinkedIn">
      </a>
      <a href="https://github.com/mtmaisterra" style="text-decoration: none; margin-left: 10px;">
        <img src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white" alt="GitHub">
      </a>
    </p>
    <img src="https://flagcdn.com/64x48/ar.png" alt="ar flag" style="width: 32px; height: 24px; margin-top: 5px;">
  </div>
</div>
    
<div style="display: flex; align-items: center; border: 1px solid #e1e4e8; border-radius: 8px; padding: 10px; margin: 10px; width: 350px;">
  <img src="https://ca.slack-edge.com/T02KS88FB0E-U04U4UP4ZGQ-1a2bfa6f9d2e-512" alt="Max Cereceda" style="border-radius: 50%; width: 80px; height: 80px; object-fit: cover; margin-right: 15px;">
  <div>
    <h3 style="margin: 0; font-size: 1.2em;">Max Cereceda</h3>
    <p style="margin: 5px 0;">
      <a href="https://www.linkedin.com/in/maxcereceda" style="text-decoration: none;">
        <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" alt="LinkedIn">
      </a>
      <a href="https://github.com/maxcerecedadev" style="text-decoration: none; margin-left: 10px;">
        <img src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white" alt="GitHub">
      </a>
    </p>
    <img src="https://flagcdn.com/64x48/pe.png" alt="pe flag" style="width: 32px; height: 24px; margin-top: 5px;">
  </div>
</div>
    
<div style="display: flex; align-items: center; border: 1px solid #e1e4e8; border-radius: 8px; padding: 10px; margin: 10px; width: 350px;">
  <img src="https://ca.slack-edge.com/T02KS88FB0E-U06QCQFPK5J-9b6c03d59878-512" alt="Santiago Gonzalez" style="border-radius: 50%; width: 80px; height: 80px; object-fit: cover; margin-right: 15px;">
  <div>
    <h3 style="margin: 0; font-size: 1.2em;">Santiago Gonzalez</h3>
    <p style="margin: 5px 0;">
      <a href="https://www.linkedin.com/in/santiago-gonzalez-torres-a42933261" style="text-decoration: none;">
        <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" alt="LinkedIn">
      </a>
      <a href="https://github.com/SantiagoGonzalez0892" style="text-decoration: none; margin-left: 10px;">
        <img src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white" alt="GitHub">
      </a>
    </p>
    <img src="https://flagcdn.com/64x48/ar.png" alt="ar flag" style="width: 32px; height: 24px; margin-top: 5px;">
  </div>
</div>
    </div>
