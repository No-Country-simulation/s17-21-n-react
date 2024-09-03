import { SignOptions } from "jsonwebtoken";
import { JWT_SECRET } from "./envs";

const jwtSignOptions: SignOptions = {
  expiresIn: "1d",
};

export const jwtConfig = {
  options: jwtSignOptions,
  secret : JWT_SECRET,
};
