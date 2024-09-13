import { Request, Response, NextFunction } from "express";
import { z, ZodParsedType, AnyZodObject } from "zod";
import { errorResponse, HttpCodes } from "../utils";

function transformStringToNumber(schema: AnyZodObject, data: Record<string, ZodParsedType>) {
  Object.keys(data).forEach((key) => {
    if (
      (schema.shape[key]?._def.typeName === "ZodNumber" ||
        schema.shape[key]?._def?.innerType?._def.typeName === "ZodNumber") &&
      typeof data[key] === "string"
    ) {
      const transformedValue = parseInt(data[key] as string, 10);
      data[key]= transformedValue as any;
    }
  });
}

/**
 Validate Zod schema for body, query, and params.
 @param bodySchema - Zod schema for body (optional)
 @param querySchema - Zod schema for query parameters (optional)
 @param paramsSchema - Zod schema for route parameters (optional)
 @returns - Express middleware
 */
export function validateMidlleware({
  bodySchema,
  querySchema,
  paramsSchema,
}: {
  bodySchema?: z.AnyZodObject;
  querySchema?: z.AnyZodObject;
  paramsSchema?: z.AnyZodObject;
}) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (bodySchema && req.body) {
        transformStringToNumber(bodySchema, req.body as Record<string, ZodParsedType>);
        const bodyResult = bodySchema.safeParse(req.body);
        if (!bodyResult.success)
          return errorResponse({ message: bodyResult.error, res, status: 400 });
        
        req.body = bodyResult.data;
      }

      if (querySchema && req.query) {
        transformStringToNumber(querySchema, req.query as Record<string, ZodParsedType>);
        const queryResult = querySchema.safeParse(req.query);
        if (!queryResult.success) 
          return errorResponse({ message: queryResult.error, res, status: 400 });
        
        req.query = queryResult.data;
      }

      if (paramsSchema && req.params) {
        transformStringToNumber(paramsSchema, req.params as Record<string, ZodParsedType>);
        const paramsResult = paramsSchema.safeParse(req.params);
        if (!paramsResult.success) 
          return errorResponse({ message: paramsResult.error, res, status: 400 });
        
        req.params = paramsResult.data;
      }

      next();
    } catch (error) {
      console.log(error);
      return errorResponse({ message: "Internal server error",res, status: HttpCodes.INTERNAL_SERVER_ERROR });
    }
  };
}
