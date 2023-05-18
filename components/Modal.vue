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
        <ModalCompany
          :company="localCard.company"
          @update:company="updateCard"
        />
        <ModalTasks :tasks="localCard.tasks" @update:tasks="updateCard" />
        <ModalClient :client="localCard.client" @update:client="updateCard" />
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
import { ref, withDefaults, defineProps, defineEmits } from 'vue';
import { CompanyInfo } from '~/types/types';

const props = withDefaults(
  defineProps<{
    card: CompanyInfo;
    showModal: boolean;
  }>(),
  {
    card: () => ({
      company: {
        companyId: 0,
        name: '',
        industry: '',
        feature: '',
        president: '',
        memo: '',
        state: 'candidate',
      },
      tasks: [
        {
          companyId: 0,
          taskId: 0,
          deadline: new Date(),
          content: 'aaa',
          state: 'todo',
        },
      ],
      client: {
        companyId: 0,
        githubLink: '',
        earn: 0,
        cost: 0,
      },
    }),
    showModal: true,
  }
);

const emit = defineEmits(['update:card']);

const localCard = ref<CompanyInfo>({ ...props.card });

const updateCard = () => {
  emit('update:card', localCard.value);
};
</script>
