import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
  getBoardStatuses,
  getBoardStatus,
  createBoardStatus,
  updateBoardStatus,
  deleteBoardStatus,
  type CreateBoard,
  type UpdateBoard,
  type CreateBoardStatus,
  type UpdateBoardStatus,
} from '@/services/boards';
import { queryKeys } from './queries/keys';

// Board hooks
export function useBoards() {
  return useQuery({
    queryKey: queryKeys.boards.all,
    queryFn: getBoards,
  });
}

export function useBoard(id: string) {
  return useQuery({
    queryKey: queryKeys.boards.detail(id),
    queryFn: () => getBoard(id),
    enabled: !!id,
  });
}

export function useCreateBoard() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (board: CreateBoard) => createBoard(board),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.boards.all });
    },
  });
}

export function useUpdateBoard() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, board }: { id: string; board: UpdateBoard }) => updateBoard(id, board),
    onSuccess: (_, { id }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.boards.all });
      void queryClient.invalidateQueries({ queryKey: queryKeys.boards.detail(id) });
    },
  });
}

export function useDeleteBoard() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteBoard(id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.boards.all });
    },
  });
}

// Board Status hooks
export function useBoardStatuses(boardId: string) {
  return useQuery({
    queryKey: queryKeys.boards.statuses(boardId),
    queryFn: () => getBoardStatuses(boardId),
    enabled: !!boardId,
  });
}

export function useBoardStatus(boardId: string, statusId: string) {
  return useQuery({
    queryKey: queryKeys.boards.status(boardId, statusId),
    queryFn: () => getBoardStatus(boardId, statusId),
    enabled: !!boardId && !!statusId,
  });
}

export function useCreateBoardStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ boardId, status }: { boardId: string; status: CreateBoardStatus }) =>
      createBoardStatus(boardId, status),
    onSuccess: (_, { boardId }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.boards.statuses(boardId) });
      void queryClient.invalidateQueries({ queryKey: queryKeys.boards.detail(boardId) });
    },
  });
}

export function useUpdateBoardStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      boardId,
      statusId,
      status,
    }: {
      boardId: string;
      statusId: string;
      status: UpdateBoardStatus;
    }) => updateBoardStatus(boardId, statusId, status),
    onSuccess: (_, { boardId, statusId }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.boards.statuses(boardId) });
      void queryClient.invalidateQueries({ queryKey: queryKeys.boards.status(boardId, statusId) });
      void queryClient.invalidateQueries({ queryKey: queryKeys.boards.detail(boardId) });
    },
  });
}

export function useDeleteBoardStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ boardId, statusId }: { boardId: string; statusId: string }) =>
      deleteBoardStatus(boardId, statusId),
    onSuccess: (_, { boardId }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.boards.statuses(boardId) });
      void queryClient.invalidateQueries({ queryKey: queryKeys.boards.detail(boardId) });
    },
  });
}
