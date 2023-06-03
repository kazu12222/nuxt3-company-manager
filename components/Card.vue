<template>
  <div class="border border-gray-300 rounded-lg shadow-lg p-4 relative">
    {{ card.name }}
    <button
      @click="deleteCard"
      class="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
    >
      削除
    </button>
  </div>
</template>

<script setup lang="ts">
import { Company } from '~/types/types';
const props = defineProps({
  card: {
    type: Object as () => Company,
    required: true,
  },
});

const card = computed(() => props.card);

const deleteCard = (event: Event) => {
  event.stopPropagation();
  deleteCompanyById(card.value.companyId);
  deleteTaskById(card.value.companyId);
  deleteClientById(card.value.companyId);
};
</script>
