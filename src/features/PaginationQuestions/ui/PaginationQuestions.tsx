import { Pagination } from '@/shared/ui';
import { useSearchParams } from 'react-router-dom';

interface PaginationQuestionsProps {
  total: number;
  limit: number;
}

function PaginationQuestions({ total, limit }: PaginationQuestionsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || '1');

  const onPrevPageClick = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('page', String(page - 1));
    setSearchParams(newParams);
  };

  const onNextPageClick = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('page', String(page + 1));
    setSearchParams(newParams);
  };

  const onChangePage = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('page', String(newPage));
    setSearchParams(newParams);
  };

  return (
    <Pagination
      onPrevPageClick={onPrevPageClick}
      onNextPageClick={onNextPageClick}
      onChangePage={onChangePage}
      page={page}
      totalPages={Math.ceil(total / limit)}
    />
  );
}

export default PaginationQuestions;
