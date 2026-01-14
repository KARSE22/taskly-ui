import { api } from '@/lib/api';
import type { components } from '@/types/api';

export type Board = components['schemas']['Board'];
export type BoardWithStatuses = components['schemas']['BoardWithStatuses'];
export type CreateBoard = components['schemas']['CreateBoard'];
export type UpdateBoard = components['schemas']['UpdateBoard'];
export type BoardStatus = components['schemas']['BoardStatus'];
export type BoardStatusBase = components['schemas']['BoardStatusBase'];
export type CreateBoardStatus = components['schemas']['CreateBoardStatus'];
export type UpdateBoardStatus = components['schemas']['UpdateBoardStatus'];

// Board functions
export async function getBoards() {
  const { data } = await api.GET('/api/v1/boards');
  return data ?? [];
}

export async function getBoard(id: string) {
  const { data, error } = await api.GET('/api/v1/boards/{id}', {
    params: { path: { id } },
  });
  if (error) throw new Error(error.error);
  return data;
}

export async function createBoard(board: CreateBoard) {
  const { data, error } = await api.POST('/api/v1/boards', {
    body: board,
  });
  if (error) throw new Error(error.error);
  return data;
}

export async function updateBoard(id: string, board: UpdateBoard) {
  const { data, error } = await api.PUT('/api/v1/boards/{id}', {
    params: { path: { id } },
    body: board,
  });
  if (error) throw new Error(error.error);
  return data;
}

export async function deleteBoard(id: string) {
  const { error } = await api.DELETE('/api/v1/boards/{id}', {
    params: { path: { id } },
  });
  if (error) throw new Error(error.error);
}

// Board Status functions
export async function getBoardStatuses(boardId: string) {
  const { data, error } = await api.GET('/api/v1/boards/{boardId}/statuses', {
    params: { path: { boardId } },
  });
  if (error) throw new Error(error.error);
  return data;
}

export async function getBoardStatus(boardId: string, statusId: string) {
  const { data, error } = await api.GET('/api/v1/boards/{boardId}/statuses/{statusId}', {
    params: { path: { boardId, statusId } },
  });
  if (error) throw new Error(error.error);
  return data;
}

export async function createBoardStatus(boardId: string, status: CreateBoardStatus) {
  const { data, error } = await api.POST('/api/v1/boards/{boardId}/statuses', {
    params: { path: { boardId } },
    body: status,
  });
  if (error) throw new Error(error.error);
  return data;
}

export async function updateBoardStatus(
  boardId: string,
  statusId: string,
  status: UpdateBoardStatus
) {
  const { data, error } = await api.PUT('/api/v1/boards/{boardId}/statuses/{statusId}', {
    params: { path: { boardId, statusId } },
    body: status,
  });
  if (error) throw new Error(error.error);
  return data;
}

export async function deleteBoardStatus(boardId: string, statusId: string) {
  const { error } = await api.DELETE('/api/v1/boards/{boardId}/statuses/{statusId}', {
    params: { path: { boardId, statusId } },
  });
  if (error) throw new Error(error.error);
}
