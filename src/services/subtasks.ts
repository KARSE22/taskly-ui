import { api } from '@/lib/api';
import type { components } from '@/types/api';

export type SubTask = components['schemas']['SubTask'];
export type CreateSubTask = components['schemas']['CreateSubTask'];
export type UpdateSubTask = components['schemas']['UpdateSubTask'];

export async function getSubTasks(taskId?: string) {
  const { data } = await api.GET('/api/v1/subtasks', {
    params: { query: { taskId } },
  });
  return data ?? [];
}

export async function getSubTask(id: string) {
  const { data, error } = await api.GET('/api/v1/subtasks/{id}', {
    params: { path: { id } },
  });
  if (error) throw new Error(error.error);
  return data;
}

export async function createSubTask(subTask: CreateSubTask) {
  const { data, error } = await api.POST('/api/v1/subtasks', {
    body: subTask,
  });
  if (error) throw new Error(error.error);
  return data;
}

export async function updateSubTask(id: string, subTask: UpdateSubTask) {
  const { data, error } = await api.PUT('/api/v1/subtasks/{id}', {
    params: { path: { id } },
    body: subTask,
  });
  if (error) throw new Error(error.error);
  return data;
}

export async function deleteSubTask(id: string) {
  const { error } = await api.DELETE('/api/v1/subtasks/{id}', {
    params: { path: { id } },
  });
  if (error) throw new Error(error.error);
}
