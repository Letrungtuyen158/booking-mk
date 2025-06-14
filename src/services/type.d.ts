// -------------------------------------------------------------------------------
// API Response/Request types
// -------------------------------------------------------------------------------

export interface GeneralRequest {
  page?: number;
  limit?: number;
  pageSite?: number;
  search?: string;
}

export interface GeneralResponse<T> {
  list: T[];
  total: number;
  totalPages: number;
  page: number;
  limit: number;
}
