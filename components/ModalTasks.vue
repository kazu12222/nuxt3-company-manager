<template>
  <div class="container mx-auto px-4">
    <h4 class="text-lg font-bold mb-4">タスク</h4>
    <div
      v-for="(task, index) in tasks"
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
import { ref, withDefaults, defineProps, defineEmits } from 'vue';
import { Task } from '~/types/types';

const props = withDefaults(
  defineProps<{
    card: Task[];
  }>(),
  {
    card: () => [
      {
        deadline: new Date(),
        content: 'aaa',
        state: 'todo',
      },
    ],
  }
);

const emit = defineEmits(['update:tasks']);

const tasks = ref<Task[]>({ ...props.card });

const updateCard = () => {
  emit('update:tasks', tasks.value);
};
</script>
