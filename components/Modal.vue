<template>
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
          {{ localCard.company.name }}
        </h3>
      </div>
      <div class="mt-2 max-h-[400px] overflow-auto px-4 pb-4 sm:p-6 sm:pb-4">
        <ModalCompany :company="localCard.company" />
        <div v-if="localCard.taskManager.tasks">
          <ModalTasks :taskManager="localCard.taskManager" />
        </div>
        <ModalClient :client="localCard.client" />
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          class="mt-3 w-100 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          @click="$emit('close-modal')"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { CompanyInfo, Company, Client, TaskManager } from '~/types/types';

const props = defineProps({
  card: {
    type: Object as () => {
      company: Company;
      taskManager: TaskManager;
      client: Client;
    },
    required: true,
  },
  showModal: {
    type: Boolean,
    default: true,
  },
});

const localCard = computed<CompanyInfo>(() => {
  const card: CompanyInfo = {
    company: props.card.company,
    taskManager: props.card.taskManager,
    client: props.card.client,
  };
  return card;
});
</script>
