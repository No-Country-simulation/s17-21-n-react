import { SignOptions } from "jsonwebtoken";

const jwtSignOptions: SignOptions = {
  expiresIn: "1d",
};

export const jwtConfig = {
  options: jwtSignOptions,
  secret : process.env.JWT_SECRET || "your-secret-key",
};
