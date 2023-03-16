export type APIResponse<T> = {
  data?: T;
  success: boolean;
  errorMessage?: string;
};
