<template>
  <div class="container mx-auto px-4">
    <div class="container mx-auto px-4 flex items-center">
      <h4 class="text-lg font-bold mb-4">タスク</h4>
      <button
        class="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center"
        @click="addClickTask"
      >
        +Add
      </button>
    </div>
    <div
      v-for="(task, index) in taskManager.tasks"
      :key="index"
      class="mb-4 bg-white p-4 rounded shadow"
    >
      <p class="mb-2">
        <label for="deadline" class="block text-gray-700 text-sm font-bold mb-2"
          >締切:</label
        >
        <input
          type="date"
          v-model="task.deadline"
          @input="updateCard"
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </p>
      <p class="mb-2">
        <label for="content" class="block text-gray-700 text-sm font-bold mb-2"
          >内容:</label
        >
        <textarea
          v-model="task.content"
          @input="updateCard"
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </p>
      <p class="mb-2">
        <label for="state" class="block text-gray-700 text-sm font-bold mb-2"
          >State:</label
        >
        <select
          v-model="task.state"
          @change="updateCard"
          class="block appearance-none w-full bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { Task, TaskManager } from '~/types/types';

const props = defineProps({
  taskManager: {
    type: Object as () => TaskManager,
    required: true,
  },
});

const taskManager = ref<TaskManager>({ ...props.taskManager });

let taskId = ref<number>(taskManager.value.tasks.length); // Set taskId to current length of tasks array
let companyId = taskManager.value.companyId; // Use companyId of first task, or default to 0 if no tasks

const updateCard = () => {
  console.log(taskManager.value);
  updateTask(taskManager);
};

const addClickTask = () => {
  const task = ref<Task>({
    taskId: taskId.value, // Assigning current taskId
    deadline: new Date().toISOString().split('T')[0],
    content: 'タスク',
    state: 'todo',
  });
  addTask(companyId, task);
  taskId.value++; // Increment taskId for next usage
};
watchEffect(() => {
  console.log('TaskManager has changed:', taskManager.value);
});
</script>
