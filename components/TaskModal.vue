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
      <div class="mt-2 max-h-[400px] overflow-auto px-4 pb-4 sm:p-6 sm:pb-4">
        <p class="mb-2">
          <label
            for="deadline"
            class="block text-gray-700 text-sm font-bold mb-2"
            >締切:</label
          >
          <input
            type="date"
            v-model="localCard.deadline"
            @input="updateCard"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </p>
        <p class="mb-2">
          <label
            for="content"
            class="block text-gray-700 text-sm font-bold mb-2"
            >内容:</label
          >
          <textarea
            v-model="localCard.content"
            @input="updateCard"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </p>
        <p class="mb-2">
          <label for="state" class="block text-gray-700 text-sm font-bold mb-2"
            >State:</label
          >
          <select
            v-model="localCard.state"
            @change="updateCard"
            class="block appearance-none w-full bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </p>
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
import {
  CompanyInfo,
  Company,
  Client,
  TaskManager,
  TaskInfo,
} from '~/types/types';

const props = defineProps({
  card: {
    type: Object as () => TaskInfo,
    required: true,
  },
  showModal: {
    type: Boolean,
    default: true,
  },
});

const localCard = ref<TaskInfo>({ ...props.card });
const updateCard = () => {
  console.log(localCard.value);
  updateTaskContent(localCard);
};
</script>
