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
  console.log(tasks.value);
};

export const taskCard = () => {
  const tasks = useState<Task[]>('tasks-card', () => []);
  return {
    tasks,
  };
};
