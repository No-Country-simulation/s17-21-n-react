export interface Paginated<T> {
    content: T[]; 
    meta: {
      total: number;        
      currentPage: number; 
      pageSize: number;     
      totalPages: number;  
    };
  }
  