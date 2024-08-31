/* eslint-disable indent */
import dotenv from "dotenv";

dotenv.config();

export const jwtConfig = {
    expiresIn: "1d",
    secret   : process.env.JWT_SECRET || "your-secret-key",
};