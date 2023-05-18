<template>
  <h4>タスク</h4>
  <div v-for="(task, index) in tasks" :key="index">
    <p>
      締切:
      <input type="date" v-model="task.deadline" @input="updateCard" />
    </p>
    <p>
      内容:
      <textarea v-model="task.content" @input="updateCard"></textarea>
    </p>
    <p>
      State:
      <select v-model="task.state" @change="updateCard">
        <option value="todo">Todo</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
    </p>
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

const emit = defineEmits(['update:card']);

const tasks = ref<Task[]>({ ...props.card });

const updateCard = () => {
  emit('update:card', tasks.value);
};
</script>
