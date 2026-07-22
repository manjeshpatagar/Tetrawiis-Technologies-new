import { API_ENDPOINTS, apiClient } from '@/services/api';
import type { ApiResponse } from '@/types/api';
import type { ContactRequest } from '@/services/requests/contact.request';
import type { ContactResponse } from '@/services/responses/contact.response';

// Ready for use once the contact API is approved and implemented.
export const submitContact = (request: ContactRequest) =>
  apiClient.post<ApiResponse<ContactResponse>>(API_ENDPOINTS.contact, request);
