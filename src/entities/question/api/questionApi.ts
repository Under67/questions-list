import { baseApi } from '@/shared/api';
import type {
  IQuestionApiResponse,
  TQuestion,
  TQuestionRequest,
} from '../model/type';

const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<IQuestionApiResponse, TQuestionRequest>({
      query: ({
        page = 1,
        limit = 10,
        specialization,
        skills,
        complexity,
        rate,
        title,
      }) => ({
        url: '/questions/public-questions',
        params: {
          ...(page !== undefined && { page }),
          ...(limit !== undefined && { limit }),
          ...(specialization !== undefined && { specialization }),
          ...(skills?.length && { skills: skills.join(',') }),
          ...(complexity?.length && { complexity: complexity.join(',') }),
          ...(rate?.length && { rate: rate.join(',') }),
          ...(title !== undefined && { title }),
        },
      }),
    }),
    getQuestionById: builder.query<TQuestion, number>({
      query: (id: number) => `/questions/public-questions/${id}`,
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi;
export default questionApi;
