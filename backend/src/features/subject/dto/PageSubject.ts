import { Subject } from "@prisma/client";

export interface PageSubject {
  content: Subject[];
  meta: {
    total: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
  };
}
