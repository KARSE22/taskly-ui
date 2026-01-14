import { useParams } from 'react-router-dom';
import { useBoard } from '@/hooks';

export function BoardPage() {
  const { id } = useParams<{ id: string }>();
  const { data: board, isLoading, error } = useBoard(id ?? '');

  if (isLoading) return <div>Loading...</div>;
  if (error || !board) return <div>Board not found</div>;

  return (
    <div>
      <h1>{board.name}</h1>
      <pre>{JSON.stringify(board, null, 2)}</pre>
    </div>
  );
}
