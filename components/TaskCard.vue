<template>
  <div class="border border-gray-300 rounded-lg shadow-lg p-4">
    {{ card.content }}
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
</script>
