import { PrismaClient } from "@prisma/client";
import { Paginated } from "../interfaces/Paginated";
import prisma from "../../infrastructure/database/prisma";

type PrismaModel = keyof PrismaClient;
export const Paginate = async <T>(
  model: PrismaModel,
  page: number,
  pageSize: number,
  orderBy?: any
): Promise<Paginated<T>> => {
  const skip = (page - 1) * pageSize;
  const take = pageSize;

  if (
    model in prisma &&
    "count" in prisma[model] &&
    "findMany" in prisma[model]
  ) {
    const total = await (prisma[model].count as () => Promise<number>)();
    const content = await (
      prisma[model].findMany as (args: any) => Promise<T[]>
    )({
      orderBy,
      skip,
      take,
    });

    return buildPaginated<T>(content, total, page, pageSize);
  } else {
    throw new Error("Model not found");
  }
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
