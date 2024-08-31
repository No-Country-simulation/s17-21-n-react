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

export const swaggerSpec = swaggerJsdoc(options);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Inicio de sesión de usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     email:
 *                       type: string
 *                     name:
 *                       type: string
 *                 token:
 *                   type: string
 *       400:
 *         description: Invalid credentials
 */