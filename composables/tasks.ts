import { Task } from '~/types/types';
import type { Ref } from 'vue';
export const addTask = (task: Ref<Task>) => {
  const { tasks } = taskCard();
  tasks.value.push(task.value);
};

export const updateTask = (updatedItems: Ref<Task[]>) => {
  const { tasks } = taskCard();
  updatedItems.value.forEach((updatedItem) => {
    const index = tasks.value.findIndex(
      (task) => task.companyId === updatedItem.companyId
    );
    if (index !== -1) {
      tasks.value[index] = updatedItem;
    } else {
      console.warn(`Company with id ${updatedItem.companyId} not found.`);
    }
  });
};

export const getTaskById = (companyId: number) => {
  const { tasks } = taskCard();
  const index = tasks.value.findIndex((task) => task.companyId === companyId);
  if (index !== -1) {
    return Array(tasks.value[index]);
  } else {
    throw new Error(`Company with id ${companyId} not found.`);
  }
};

export const taskCard = () => {
  const tasks = useState<Task[]>('tasks-card', () => [
    {
      companyId: 1,
      taskId: 1,
      deadline: new Date().toISOString().split('T')[0],
      content: 'タスク1',
      state: 'todo',
    },
    {
      companyId: 2,
      taskId: 1,
      deadline: new Date().toISOString().split('T')[0],
      content: 'タスク1',
      state: 'todo',
    },
    {
      companyId: 3,
      taskId: 1,
      deadline: new Date().toISOString().split('T')[0],
      content: 'タスク1',
      state: 'todo',
    },
  ]);
  return {
    tasks,
  };
};
