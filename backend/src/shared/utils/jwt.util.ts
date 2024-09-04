import jwt from "jsonwebtoken";
import { jwtConfig } from "../../configs";

export interface MyJwtPayload {
  userId: string;
}

export const generateJWT = (payload: MyJwtPayload) => {
  return jwt.sign(payload, jwtConfig.secret, jwtConfig.options);
};

export const decodeJwt = (token: string) => {
  return jwt.verify(token, jwtConfig.secret);
};
