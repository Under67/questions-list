import { baseApi } from '@/shared/api';
import type {
  ISpecializationApiResponse,
  TSpecializationsRequest,
} from '../model/types';

const specializationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecialization: builder.query<
      ISpecializationApiResponse,
      TSpecializationsRequest
    >({
      query: ({ page, limit }) => ({
        url: '/specializations',
        params: {
          ...(page !== undefined && { page }),
          ...(limit !== undefined && { limit }),
        },
      }),
    }),
  }),
});

export const { useGetSpecializationQuery } = specializationApi;
export default specializationApi;
