import createClient from 'openapi-fetch';
import type { paths } from '@/types/api';

const API_BASE_URL: string =
  (import.meta.env.VITE_API_URL as string | undefined) ?? 'http://localhost:8080';

export const api = createClient<paths>({
  baseUrl: API_BASE_URL,
});
