import type { TSkills } from '@/entities/skill/@x/question';
import type { TSpecializations } from '@/entities/specialization/@x/skill';

export interface IQuestionApiResponse {
  page: number;
  limit: number;
  total: number;
  data: TQuestion[];
}

type TQuestionBy = {
  id: string;
  username: string;
};

export type TQuestion = {
  id: number;
  title: string;
  description: string;
  code: string | null;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
  createdById: string;
  updatedById: string;
  createdBy: TQuestionBy;
  updatedBy: TQuestionBy;
  questionSpecializations: TSpecializations[];
  questionSkills: Omit<TSkills, 'specializations'>[];
};

export type TQuestionRequest = {
  limit?: number;
  page?: number;
  specialization?: number;
  titleOrDescription?: string;
  skills?: string[];
  complexity?: number[];
  rate?: number[];
  title?: string | number;
};
