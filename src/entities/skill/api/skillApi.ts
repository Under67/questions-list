import { baseApi } from '@/shared/api';
import type { ISkillApiResponse, TSkillsRequest } from '../model/type';

const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkill: builder.query<ISkillApiResponse, TSkillsRequest>({
      query: ({ page, limit, specializations }) => ({
        url: '/skills',
        params: {
          ...(page !== undefined && { page }),
          ...(limit !== undefined && { limit }),
          ...(specializations?.length && {
            specializations: specializations.join(','),
          }),
        },
      }),
    }),
  }),
});

export const { useGetSkillQuery } = skillApi;
export default skillApi;
