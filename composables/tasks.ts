import { Task, TaskManager, TaskInfo } from '~/types/types';
import { Ref } from 'vue';

export const taskCard = () => {
  const taskManagers = useState<TaskManager[]>('tasks-card', () => []);

  const byState = (state: 'todo' | 'doing' | 'done') => {
    let tasksByState: TaskInfo[] = [];

    taskManagers.value.forEach((taskManager) => {
      taskManager.tasks.forEach((task) => {
        if (task.state === state) {
          tasksByState.push({ ...task, companyId: taskManager.companyId });
        }
      });
    });
    return tasksByState;
  };
  return {
    taskManagers,
    todo: computed(() => byState('todo')),
    doing: computed(() => byState('doing')),
    done: computed(() => byState('done')),
  };
};

const findTaskManagerIndex = (companyId: number) =>
  taskCard().taskManagers.value.findIndex(
    (taskManager) => taskManager.companyId === companyId
  );

export const loadTasks = (saveData: Ref<TaskManager[]>) =>
  (taskCard().taskManagers.value = saveData.value);

export const addTaskManager = (addItem: Ref<TaskManager>) =>
  taskCard().taskManagers.value.push(addItem.value);

export const addTask = (companyId: number, task: Ref<Task>) => {
  const { taskManagers } = taskCard();
  const index = findTaskManagerIndex(companyId);

  if (index !== -1) {
    taskManagers.value[index].tasks.push(task.value);
  } else {
    console.warn(`Company with id ${companyId} not found.`);
  }
};

export const updateTask = (updatedItems: Ref<TaskManager>) => {
  const { taskManagers } = taskCard();
  const index = findTaskManagerIndex(updatedItems.value.companyId);

  if (index !== -1) {
    taskManagers.value[index].tasks = updatedItems.value.tasks;
  } else {
    console.warn(`Company with id ${updatedItems.value.companyId} not found.`);
  }
};

export const updateTaskContent = (updatedItem: Ref<TaskInfo>) => {
  const { taskManagers } = taskCard();
  const index = findTaskManagerIndex(updatedItem.value.companyId);

  if (index !== -1) {
    const taskIndex = taskManagers.value[index].tasks.findIndex(
      (task) => task.taskId === updatedItem.value.taskId
    );
    if (taskIndex !== -1) {
      taskManagers.value[index].tasks[taskIndex] = updatedItem.value;
    } else {
      console.warn(
        `Task with id ${updatedItem.value.taskId} not found in company with id ${updatedItem.value.companyId}.`
      );
    }
  } else {
    console.warn(`Company with id ${updatedItem.value.companyId} not found.`);
  }
};

export const getTaskById = (companyId: number): TaskManager => {
  const { taskManagers } = taskCard();
  const index = findTaskManagerIndex(companyId);

  if (index !== -1) {
    return taskManagers.value[index];
  } else {
    throw new Error(`Company with id ${companyId} not found.`);
  }
};
