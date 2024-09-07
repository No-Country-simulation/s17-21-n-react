/* eslint-disable array-bracket-spacing */
/* eslint-disable key-spacing */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import swaggerJsdoc from "swagger-jsdoc";
import { PORT } from "../../configs";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Sistema de Gestión Académica",
      version: "1.0.0",
      description: "API para el Sistema de Gestión Académica",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "Servidor de desarrollo",
      },
    ],
  },
  apis: ["./src/features/**/*.ts"],
};

export const swaggerUiSpecs = {
  customJs: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.14/swagger-ui-standalone-preset.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.14/swagger-ui-bundle.min.js",
  ],
  customCssUrl: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.14/swagger-ui-standalone-preset.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.14/swagger-ui.min.css",
  ],
};

export const swaggerSpec = swaggerJsdoc(options);