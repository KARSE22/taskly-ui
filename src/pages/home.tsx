import { useBoards } from '@/hooks';

export function HomePage() {
  const { data: boards, isLoading, error } = useBoards();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading boards</div>;

  return (
    <div>
      <h1>Boards</h1>
      <pre>{JSON.stringify(boards, null, 2)}</pre>
    </div>
  );
}
