export interface ApiResponse<T> {
  data: T;
  message?: string;
}
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: { page: number; limit: number; total: number; totalPages: number };
}
export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}
