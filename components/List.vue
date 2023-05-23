<template>
  <div
    class="bg-pink-50 rounded-lg p-4"
    @drop="dropCard($event, list.status)"
    @dragover.prevent
    @dragenter.prevent
  >
    <h2 class="text-xl font-bold mb-4 text-center">{{ list.name }}</h2>

    <div
      class="bg-white m-2 p-2"
      :key="card.companyId"
      v-for="card in list.cards"
      draggable="true"
      @click="showDetailsModal(card)"
      @dragstart="dragCard($event, card.companyId)"
    >
      <Card :card="card" />
    </div>
    <Modal
      v-if="showModal"
      :card="selectedCard"
      :showModal="showModal"
      @close-modal="showModal = false"
    />
  </div>
</template>

<style scoped>
.list-container {
  @apply bg-pink-50 rounded-lg p-4;
}

.list-title {
  @apply text-xl font-bold mb-4 text-center;
}

.card-wrapper {
  @apply cursor-pointer hover:bg-blue-200;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import { Company, ListType, CompanyInfo } from '~/types/types';
import { companyCard } from '~/composables/company';

const props = defineProps({
  list: {
    type: Object as () => ListType,
    required: true,
    default: () => ({} as ListType),
  },
});
const list = ref<ListType>(props.list);
const selectedCard = ref<CompanyInfo>({} as CompanyInfo);
const showModal = ref<boolean>(false);

const showDetailsModal = (card: Company) => {
  console.log(card);
  selectedCard.value.company = card;
  selectedCard.value.taskManager = getTaskById(card.companyId);
  selectedCard.value.client = getClientById(card.companyId);
  showModal.value = true;
};

const dragCard = (event: any, dragCardId: number) => {
  console.log(event);
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.dropEffect = 'move';
  event.dataTransfer.setData('list-id', dragCardId);
};

const dropCard = (event: any, status: 'client' | 'approach' | 'candidate') => {
  const { companies } = companyCard();
  const dragCardId = event.dataTransfer.getData('list-id');
  const index = companies.value.findIndex(
    (company) => company.companyId === Number(dragCardId)
  );
  if (index !== -1) {
    companies.value[index].state = status;
  }
};
</script>
