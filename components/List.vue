<template>
  <div>
    <h2>{{ list.name }}</h2>
    <draggable v-model="list.cards" group="cards" @start="onStart" @end="onEnd">
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
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import draggable from 'vuedraggable';
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
let tmp = reactive<Company>({} as Company);
const showDetailsModal = (card: Company) => {
  selectedCard.value.company = card;
  selectedCard.value.tasks = getTaskById(card.companyId);
  selectedCard.value.client = getClientById(card.companyId);
  showModal.value = true;
};
const onStart = (event: any) => {
  const draggedCardIndex = event.oldIndex;

  // `draggedCardIndex`からドラッグされたカードを取得
  const draggedCard: Company = list.value.cards[draggedCardIndex];
  const { companies } = companyCard();
  const index = companies.value.findIndex(
    (company) => company.companyId === draggedCard.companyId
  );
  console.log(index);
  if (index !== -1) {
    tmp = companies.value[index];
    companies.value = companies.value.filter(
      (company) => company.companyId !== draggedCard.companyId
    );
  }
};

const onEnd = (event: any) => {
  const movedCard = event.item;

  // `movedCard`の状態をリストの状態に更新
  movedCard.state = list.value.status;

  // `companies`のデータを更新しカードを移動先リストに追加
  const { companies } = companyCard();
  companies.value.push(tmp);
};
</script>
