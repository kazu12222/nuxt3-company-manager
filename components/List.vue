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
    <div
      v-if="showModal"
      class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <!-- Modal content -->
      <div
        class="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all align-middle max-w-lg w-full"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h3
            class="text-lg leading-6 font-medium text-gray-900"
            id="modal-title"
          >
            {{ selectedCard.name }}
          </h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">
              {{ selectedCard.name }}
            </p>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            @click="showModal = false"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import draggable from 'vuedraggable';
import { Company, ListType } from '~/types/types';

const props = withDefaults(defineProps<{ list: ListType }>(), {
  list: () => ({} as ListType),
});
const list = ref<ListType>(props.list);
console.log(typeof list);
const selectedCard = ref<Company>({} as Company);
const showModal = ref<boolean>(false);

const showDetailsModal = (card: Company) => {
  console.log(card);
  selectedCard.value = card;
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
