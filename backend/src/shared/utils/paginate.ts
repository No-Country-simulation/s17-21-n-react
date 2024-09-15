import { PrismaClient } from "@prisma/client";
import { Paginated } from "../interfaces/Paginated";
import prisma from "../../infrastructure/database/prisma";

type PrismaModel = keyof PrismaClient;

export const Paginate = async <T>(
  model: PrismaModel,
  page: number,
  pageSize: number,
  filter?: Record<string, any>,
  orderBy?: Record<string, "asc" | "desc">,
  include?: Record<string, any>
): Promise<Paginated<T>> => {
  const currentPage = Number.isNaN(page) ? 1 : page;
  const take = Number.isNaN(pageSize) ? 10 : pageSize;
  const skip = (currentPage - 1) * take;

  if (
    model in prisma &&
    "count" in prisma[model] &&
    "findMany" in prisma[model]
  ) {
    const total = await (prisma[model].count as (args: any) => Promise<number>)({
      where: { isDeleted: false }
    });
    const content = await (
      prisma[model].findMany as (args: any) => Promise<T[]>
    )({
      include: include,
      orderBy,
      skip,
      take,
      where  : filter,
    });
    console.log(content[0]);
    return buildPaginated<T>(content, total, currentPage, take);
  } else 
    throw new Error(
      `Modelo "${model.toString()}" no encontrado o no tiene los métodos requeridos`
    );
  
};

export const buildPaginated = <T>(
  content: T[],
  total: number,
  currentPage: number,
  pageSize: number
): Paginated<T> => {
  return {
    content,
    meta: {
      currentPage,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    },
  };
};
