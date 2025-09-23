import type { TSpecializations } from '@/entities/specialization/@x/skill';

export interface ISkillApiResponse {
  page: number;
  limit: number;
  total: number;
  data: TSkills[];
}

export type TSkills = {
  id: number;
  title: string;
  description: string;
  imageSrc: string | undefined;
  createdAt: string;
  updatedAt: string;
  specializations: TSpecializations[];
};

export type TSkillsRequest = {
  limit?: number;
  page?: number;
  authorId?: string;
  specializations?: number[];
};
