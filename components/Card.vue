<template>
  <div class="border border-gray-300 rounded-lg shadow-lg p-4 relative">
    {{ card.name }}
    <button
      @click="openModal"
      class="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{ card: { name: string } }>(), {
  card: () => ({ name: '' }),
});

const card = computed(() => props.card);
const isModalOpen = ref(false);

const openModal = (event: Event) => {
  event.stopPropagation();
  isModalOpen.value = true;
};
</script>
