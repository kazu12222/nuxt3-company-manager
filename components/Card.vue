<template>
  <div class="border border-gray-300 rounded-lg shadow-lg p-4">
    {{ card.name }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{ card: { name: string } }>(), {
  card: () => ({ name: '' }),
});

const card = ref(props.card);
</script>
