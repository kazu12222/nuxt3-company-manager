<template>
  <div class="border border-gray-300 rounded-lg shadow-lg p-4 relative">
    {{ card.content }}
    <button
      @click="deleteTask"
      class="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
    >
      削除
    </button>
  </div>
</template>

<script setup lang="ts">
import { TaskInfo } from '~/types/types';
const props = defineProps({
  card: {
    type: Object as () => TaskInfo,
    required: true,
  },
});

const card = computed(() => props.card);

const deleteTask = (event: Event) => {
  event.stopPropagation();
  deleteTaskByTaskId(card.value.companyId, card.value.taskId);
};
</script>
