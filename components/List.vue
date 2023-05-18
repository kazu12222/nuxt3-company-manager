<template>
  <div>
    <h2>{{ list.name }}</h2>
    <draggable v-model="list.cards" group="cards" @end="onEnd">
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

const props = withDefaults(defineProps<{ list: ListType }>(), {
  list: () => ({} as ListType),
});
const list = ref<ListType>(props.list);
const selectedCard = ref<CompanyInfo>({} as CompanyInfo);
const showModal = ref<boolean>(false);

const showDetailsModal = (card: Company) => {
  selectedCard.value.company = card;
  showModal.value = true;
};
const onEnd = (event: any) => {
  // `event`オブジェクトから移動したカードの情報を取得
  const movedCard = event.item;

  // `movedCard`の状態を新しいリストの状態に更新
  movedCard.state = list.value.status;
  console.log(movedCard);
  // `companies`のデータを更新
  const { companies } = companyCard();
  const index = companies.value.findIndex(
    (company) => company.companyId === movedCard.companyId
  );
  companies.value[index] = movedCard;
};
</script>
