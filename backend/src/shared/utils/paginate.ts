export type SortOrderType = "asc" | "desc";

interface GetPaginateOptionsArgs {
  page?: number;
  limit?: number;
  orderBy?: string;
  sort?: SortOrderType;
}

export interface PaginateOptionsType {
  skip: number;
  take: number;
  orderBy?: Record<string, SortOrderType>;
}

export const getPaginateOptions = ({
  page = 1,
  limit = 15,
  orderBy,
  sort = "desc"
}: GetPaginateOptionsArgs): PaginateOptionsType => {
  const pageNumber = Number(page);
  const limitNumber = Number(limit);

  if (pageNumber <= 0) throw new Error("Page number must be greater than 0");

  const skip = (pageNumber - 1) * limitNumber;

  const options: PaginateOptionsType = {
    skip,
    take: limitNumber,
  };

  if (orderBy) 
    options.orderBy = { [orderBy]: sort };

  return options;
};