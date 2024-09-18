export const formatDate = (dateString?: string) => {
  if (!dateString) return new Date();
  
  const [ day, month, year ] = dateString.split("-");
  return new Date(`${year}-${month}-${day}`);
};