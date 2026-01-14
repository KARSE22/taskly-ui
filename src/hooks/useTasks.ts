import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  type CreateTask,
  type UpdateTask,
} from '@/services/tasks';
import { queryKeys } from './queries/keys';

export function useTasks(boardStatusId?: string) {
  return useQuery({
    queryKey: queryKeys.tasks.list(boardStatusId),
    queryFn: () => getTasks(boardStatusId),
  });
}

export function useTask(id: string) {
  return useQuery({
    queryKey: queryKeys.tasks.detail(id),
    queryFn: () => getTask(id),
    enabled: !!id,
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (task: CreateTask) => createTask(task),
    onSuccess: (_, task) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.tasks.all });
      void queryClient.invalidateQueries({
        queryKey: queryKeys.boards.detail(task.boardStatusId),
      });
    },
  });
}

export function useUpdateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, task }: { id: string; task: UpdateTask }) => updateTask(id, task),
    onSuccess: (_, { id }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.tasks.all });
      void queryClient.invalidateQueries({ queryKey: queryKeys.tasks.detail(id) });
      // Also invalidate boards since tasks are nested in board responses
      void queryClient.invalidateQueries({ queryKey: queryKeys.boards.all });
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.tasks.all });
      void queryClient.invalidateQueries({ queryKey: queryKeys.boards.all });
    },
  });
}
