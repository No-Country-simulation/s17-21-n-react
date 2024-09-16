import { initializeCategory } from "./initializeCategory";
import initializeDefaultUser from "./initializeDefaultUser";
import { initializeDivisions } from "./initializeDivisions";
import { initializeGrades } from "./initializeGrades";
import initializeRoles from "./initializeRoles";

export const initializeDb = async() =>{
  await initializeRoles();
  await initializeDefaultUser();
  await initializeGrades();
  await initializeDivisions();
  await initializeCategory();
};