import { Task, TaskManager, TaskInfo } from '~/types/types';
import type { Ref } from 'vue';
export const addTaskManager = (addItem: Ref<TaskManager>) => {
  const { taskManagers } = taskCard();
  taskManagers.value.push(addItem.value);
};

export const addTask = (companyId: number, task: Ref<Task>) => {
  const { taskManagers } = taskCard();
  const index = taskManagers.value.findIndex(
    (taskManagerItem) => taskManagerItem.companyId === companyId
  );

  if (index !== -1) {
    taskManagers.value[index].tasks.push(task.value);
  } else {
    console.warn(`Company with id ${companyId} not found.`);
  }
};

export const updateTask = (updatedItems: Ref<TaskManager>) => {
  const { taskManagers } = taskCard();
  const index = taskManagers.value.findIndex(
    // ここでtaskManagerの選別をしている
    (task) => task.companyId === updatedItems.value.companyId
  );
  console.log(index);
  if (index !== -1) {
    taskManagers.value[index].tasks = updatedItems.value.tasks;
  } else {
    console.warn(`Company with id ${updatedItems.value.companyId} not found.`);
  }
};

export const getTaskById = (companyId: number): TaskManager => {
  // ここでcompanyIdを受け取っている
  const { taskManagers } = taskCard();
  const index = taskManagers.value.findIndex(
    (task) => task.companyId === companyId
  );
  if (index !== -1) {
    return taskManagers.value[index];
  } else {
    throw new Error(`Company with id ${companyId} not found.`);
  }
};

export const getTasksByState = (
  state: 'todo' | 'doing' | 'done'
): TaskInfo[] => {
  const { taskManagers } = taskCard();
  let tasksByState: TaskInfo[] = [];

  taskManagers.value.forEach((taskManager) => {
    taskManager.tasks.forEach((task) => {
      if (task.state === state) {
        tasksByState.push({
          companyId: taskManager.companyId,
          taskId: task.taskId,
          deadline: task.deadline,
          content: task.content,
          state: task.state,
        });
      }
    });
  });

  return tasksByState;
};

export const taskCard = () => {
  const taskManagers = useState<TaskManager[]>('tasks-card', () => [
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

  const todo = computed(() => getTasksByState('todo'));
  const doing = computed(() => getTasksByState('doing'));
  const done = computed(() => getTasksByState('done'));

  return {
    todo,
    doing,
    done,
    taskManagers,
  };
};
