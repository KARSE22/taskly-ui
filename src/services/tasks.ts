import { api } from '@/lib/api';
import type { components } from '@/types/api';

export type Task = components['schemas']['Task'];
export type TaskWithSubTasks = components['schemas']['TaskWithSubTasks'];
export type CreateTask = components['schemas']['CreateTask'];
export type UpdateTask = components['schemas']['UpdateTask'];

export async function getTasks(boardStatusId?: string) {
  const { data } = await api.GET('/api/v1/tasks', {
    params: { query: { boardStatusId } },
  });
  return data ?? [];
}

export async function getTask(id: string) {
  const { data, error } = await api.GET('/api/v1/tasks/{id}', {
    params: { path: { id } },
  });
  if (error) throw new Error(error.error);
  return data;
}

export async function createTask(task: CreateTask) {
  const { data, error } = await api.POST('/api/v1/tasks', {
    body: task,
  });
  if (error) throw new Error(error.error);
  return data;
}

export async function updateTask(id: string, task: UpdateTask) {
  const { data, error } = await api.PUT('/api/v1/tasks/{id}', {
    params: { path: { id } },
    body: task,
  });
  if (error) throw new Error(error.error);
  return data;
}

export async function deleteTask(id: string) {
  const { error } = await api.DELETE('/api/v1/tasks/{id}', {
    params: { path: { id } },
  });
  if (error) throw new Error(error.error);
}
