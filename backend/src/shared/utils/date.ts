
type FormatDateType = "DD-MM-YYYY" | "DD/MM/YYYY" | "ISO"
type SeparatorType = "-" | "/"

const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
const dashDateRegex = /^\d{2}-\d{2}-\d{4}$/;
const slashDateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

const parseISO = (dateString: string) => {
  if (!isoDateRegex.test(dateString)) 
    throw new Error("Invalid ISO format.");
  
  return new Date(dateString);
};

const parseCustomDate = (dateString: string, separator: SeparatorType) => {
  const [ day, month, year ] = dateString.split(separator).map(Number);

  const format = separator === "-" ? "DD-MM-YYYY" : "DD/MM/YYYY";

  if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year)) 
    throw new Error(`Invalid date for format ${format}.`);

  return new Date(year, month - 1, day);
};

const getFormatDate = (dateString: string) => {
  if (isoDateRegex.test(dateString)) 
    return "ISO";
  
  if (dashDateRegex.test(dateString)) 
    return "DD-MM-YYYY";
  
  if (slashDateRegex.test(dateString)) 
    return "DD/MM/YYYY";
  
  throw new Error("Invalid date format. Expected format: DD-MM-YYYY | DD/MM/YYYY | ISO string.");
};

export const parseDate = (dateString?: string | Date, format?: FormatDateType) => {
  if (dateString instanceof Date) return dateString;
  if (!dateString) return new Date();

  if (!format) 
    format = getFormatDate(dateString);

  switch (format) {
  case "ISO":
    return parseISO(dateString);
      
  case "DD-MM-YYYY":
    return parseCustomDate(dateString, "-");
      
  case "DD/MM/YYYY":
    return parseCustomDate(dateString, "/");
      
  default:
    throw new Error("Unsupported date format.");
  }
};
