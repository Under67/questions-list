import QuestionCardSkeleton from './ui/QuestionCardSkeleton/QuestionCardSkeleton';
import QuestionCard from './ui/QuestionCard/QuestionCard';
import {
  useGetQuestionByIdQuery,
  useGetQuestionsQuery,
} from './api/questionApi';
import { type TQuestion } from './model/type';
export {
  QuestionCard,
  QuestionCardSkeleton,
  useGetQuestionByIdQuery,
  useGetQuestionsQuery,
  type TQuestion,
};
