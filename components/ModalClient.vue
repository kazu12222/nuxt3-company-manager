<template>
  <div class="container mx-auto px-4">
    <h4 class="text-lg font-bold mb-4">クライアント情報</h4>
    <p class="mb-2">
      <label for="githubLink" class="block text-gray-700 text-sm font-bold mb-2"
        >GitHubリンク:</label
      >
      <input
        type="text"
        v-model="client.githubLink"
        @input="updateCard"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </p>
    <p class="mb-2">
      <label for="earn" class="block text-gray-700 text-sm font-bold mb-2"
        >売上:</label
      >
      <input
        type="number"
        v-model="client.earn"
        @input="updateCard"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </p>
    <p class="mb-2">
      <label for="cost" class="block text-gray-700 text-sm font-bold mb-2"
        >作成費:</label
      >
      <input
        type="number"
        v-model="client.cost"
        @input="updateCard"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { Client } from '~/types/types';

const props = defineProps({
  client: {
    type: Object as () => Client,
    required: true,
  },
});

const client = ref<Client>({ ...props.client });

const updateCard = () => {
  updateClient(client);
};
</script>
