export const validateRequiredKeys = <T>(data: T, requiredKeys: (keyof T)[]) => {
  requiredKeys.forEach((key) => {
    if (data[key] === undefined || data[key] === null) 
      throw new Error(`${String(key)} is required`);
  });
};