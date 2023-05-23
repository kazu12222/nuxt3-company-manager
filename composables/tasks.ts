import { Task, TaskManager } from '~/types/types';
import type { Ref } from 'vue';
export const addTaskManager = (addItem: Ref<TaskManager>) => {
  const { taskManager } = taskCard();
  taskManager.value.push(addItem.value);
};

export const addTask = (companyId: number, task: Ref<Task>) => {
  const { taskManager } = taskCard();
  const index = taskManager.value.findIndex(
    (taskManagerItem) => taskManagerItem.companyId === companyId
  );

  if (index !== -1) {
    taskManager.value[index].tasks.push(task.value);
  } else {
    console.warn(`Company with id ${companyId} not found.`);
  }
};

export const updateTask = (updatedItems: Ref<TaskManager>) => {
  const { taskManager } = taskCard();
  const index = taskManager.value.findIndex(
    // ここでtaskManagerの選別をしている
    (task) => task.companyId === updatedItems.value.companyId
  );
  console.log(index);
  if (index !== -1) {
    taskManager.value[index].tasks = updatedItems.value.tasks;
  } else {
    console.warn(`Company with id ${updatedItems.value.companyId} not found.`);
  }
};

export const getTaskById = (companyId: number): TaskManager => {
  // ここでcompanyIdを受け取っている
  const { taskManager } = taskCard();
  const index = taskManager.value.findIndex(
    (task) => task.companyId === companyId
  );
  if (index !== -1) {
    return taskManager.value[index];
  } else {
    throw new Error(`Company with id ${companyId} not found.`);
  }
};

export const taskCard = () => {
  const taskManager = useState<TaskManager[]>('tasks-card', () => [
    {
      companyId: 1,
      tasks: [
        {
          taskId: 1,
          deadline: new Date().toISOString().split('T')[0],
          content: 'タスク1',
          state: 'todo',
        },
      ],
    },
    {
      companyId: 2,
      tasks: [
        {
          taskId: 1,
          deadline: new Date().toISOString().split('T')[0],
          content: 'タスク2',
          state: 'todo',
        },
      ],
    },
    {
      companyId: 3,
      tasks: [
        {
          taskId: 1,
          deadline: new Date().toISOString().split('T')[0],
          content: 'タスク3',
          state: 'todo',
        },
      ],
    },
  ]);
  return {
    taskManager,
  };
};
