export const queryKeys = {
  boards: {
    all: ['boards'] as const,
    detail: (id: string) => ['boards', id] as const,
    statuses: (boardId: string) => ['boards', boardId, 'statuses'] as const,
    status: (boardId: string, statusId: string) =>
      ['boards', boardId, 'statuses', statusId] as const,
  },
  tasks: {
    all: ['tasks'] as const,
    list: (boardStatusId?: string) => ['tasks', { boardStatusId }] as const,
    detail: (id: string) => ['tasks', id] as const,
  },
  subTasks: {
    all: ['subTasks'] as const,
    list: (taskId?: string) => ['subTasks', { taskId }] as const,
    detail: (id: string) => ['subTasks', id] as const,
  },
} as const;
