<template>
  <div class="container mx-auto px-4">
    <h4 class="text-lg font-bold mb-4">会社情報</h4>
    <p class="mb-2">
      <label for="name" class="block text-gray-700 text-sm font-bold mb-2"
        >会社名:</label
      >
      <input
        type="text"
        v-model="company.name"
        @input="updateCard"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </p>
    <p class="mb-2">
      <label for="industry" class="block text-gray-700 text-sm font-bold mb-2"
        >業種:</label
      >
      <input
        type="text"
        v-model="company.industry"
        @input="updateCard"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </p>
    <p class="mb-2">
      <label for="feature" class="block text-gray-700 text-sm font-bold mb-2"
        >特徴:</label
      >
      <input
        type="text"
        v-model="company.feature"
        @input="updateCard"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </p>
    <p class="mb-2">
      <label for="president" class="block text-gray-700 text-sm font-bold mb-2"
        >社長:</label
      >
      <input
        type="text"
        v-model="company.president"
        @input="updateCard"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </p>
    <p class="mb-2">
      <label for="memo" class="block text-gray-700 text-sm font-bold mb-2"
        >メモ:</label
      >
      <textarea
        v-model="company.memo"
        @input="updateCard"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></textarea>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import { Company } from '~/types/types';

const props = defineProps({
  company: {
    type: Object as () => Company,
    required: true,
  },
});

const emit = defineEmits(['update:company']);
const company = ref<Company>({ ...props.company });

const updateCard = () => {
  emit('update:company', company.value);
};
</script>
