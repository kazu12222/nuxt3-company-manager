<template>
  <div>
    <h2>{{ list.name }}</h2>
    <draggable v-model="list.cards" group="cards">
      <template #item="{ element }">
        <div @click="showDetailsModal(element)">
          <Card :card="element" />
        </div>
      </template>
    </draggable>
    <Modal
      v-if="showModal"
      :card="selectedCard"
      :showModal="showModal"
      @close-modal="showModal = false"
      @update:card="handleCardUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import draggable from 'vuedraggable';
import { Company, ListType, CompanyInfo } from '~/types/types';

const props = withDefaults(defineProps<{ list: ListType }>(), {
  list: () => ({} as ListType),
});
const list = ref<ListType>(props.list);
const selectedCard = ref<CompanyInfo>({} as CompanyInfo);
const showModal = ref<boolean>(false);
const cardList = ref<CompanyInfo[]>([]);

const showDetailsModal = (card: Company) => {
  selectedCard.value.company = card;
  showModal.value = true;
};
// カードの更新処理
const handleCardUpdate = (updatedCard: CompanyInfo) => {
  const index = cardList.value.findIndex(
    (card) => card.company.companyId === updatedCard.company.companyId
  );
  if (index !== -1) {
    // 更新されたカードでリストを更新
    cardList.value.splice(index, 1, updatedCard);
    // 選択されたカードも更新
    selectedCard.value = updatedCard;
  }
};
</script>
