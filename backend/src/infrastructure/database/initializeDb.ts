import initializeDefaultUser from "./initializeDefaultUser";
import initializeRoles from "./initializeRoles";

export const initializeDb = async() =>{
  await initializeRoles();
  await initializeDefaultUser();
};