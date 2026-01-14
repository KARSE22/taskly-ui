import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getSubTasks,
  getSubTask,
  createSubTask,
  updateSubTask,
  deleteSubTask,
  type CreateSubTask,
  type UpdateSubTask,
} from '@/services/subtasks';
import { queryKeys } from './queries/keys';

export function useSubTasks(taskId?: string) {
  return useQuery({
    queryKey: queryKeys.subTasks.list(taskId),
    queryFn: () => getSubTasks(taskId),
  });
}

export function useSubTask(id: string) {
  return useQuery({
    queryKey: queryKeys.subTasks.detail(id),
    queryFn: () => getSubTask(id),
    enabled: !!id,
  });
}

export function useCreateSubTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (subTask: CreateSubTask) => createSubTask(subTask),
    onSuccess: (_, subTask) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.subTasks.all });
      void queryClient.invalidateQueries({ queryKey: queryKeys.tasks.detail(subTask.taskId) });
    },
  });
}

export function useUpdateSubTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, subTask }: { id: string; subTask: UpdateSubTask }) =>
      updateSubTask(id, subTask),
    onSuccess: (_, { id }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.subTasks.all });
      void queryClient.invalidateQueries({ queryKey: queryKeys.subTasks.detail(id) });
      // Invalidate tasks since subtasks are nested in task responses
      void queryClient.invalidateQueries({ queryKey: queryKeys.tasks.all });
    },
  });
}

export function useDeleteSubTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteSubTask(id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.subTasks.all });
      void queryClient.invalidateQueries({ queryKey: queryKeys.tasks.all });
    },
  });
}
