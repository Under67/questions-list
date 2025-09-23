export interface ISpecializationApiResponse {
  page: number;
  limit: number;
  total: number;
  data: TSpecializations[];
}

export type TSpecializations = {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
};

export type TSpecializationsRequest = {
  limit?: number;
  page?: number;
  authorId?: string;
};
