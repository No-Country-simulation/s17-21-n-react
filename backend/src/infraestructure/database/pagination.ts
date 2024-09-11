import { Prisma, PrismaClient } from "@prisma/client";
import prisma from "./prisma";

type PrismaModel = keyof PrismaClient;

export const Paginate = async <T extends keyof Prisma.TypeMap["model"]>(
  model: T,
  page: number,
  pageSize: number,
  filter?: Prisma.TypeMap["model"][T]["operations"]["findMany"]["args"]["where"],
  orderBy?: Prisma.TypeMap["model"][T]["operations"]["findMany"]["args"]["orderBy"]
) => {
  const currentPage = Number.isNaN(page) ? 1 : page;
  const take = Number.isNaN(pageSize) ? 10 : pageSize;
  const skip = (currentPage - 1) * take;
  const p = model.toLowerCase() as PrismaModel;
  if (
    model in prisma &&
    "count" in prisma[p] &&
    "findMany" in prisma[p]
  ) {
    const total = await (prisma[p].count as () => Promise<number>)();
    const content = await (
      prisma[p].findMany as (args: any) => Promise<Prisma.TypeMap["model"][T]["payload"]["scalars"][]>
    )({
      orderBy,
      skip,
      take,
      where: filter,
    });

    return buildPaginated<Prisma.TypeMap["model"][T]["payload"]["scalars"]>(content, total, currentPage, take);
  } else 
    throw new Error("Model not found");
  
};

export const buildPaginated = <T>(
  content: T[],
  total: number,
  currentPage: number,
  pageSize: number
) => {
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