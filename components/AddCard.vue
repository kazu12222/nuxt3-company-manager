<template>
  <button
    class="border border-gray-300 rounded-lg shadow-lg p-4"
    @click="addEmptyCard"
  >
    Add Card
  </button>
</template>

<script setup lang="ts">
import { addTaskManager } from '~/composables/tasks';
const cnt = ref(3);
const addEmptyCard = () => {
  cnt.value++;
  addCompany(
    ref({
      companyId: cnt.value,
      name: `会社${cnt.value}`,
      industry: '',
      feature: '',
      president: '',
      memo: '',
      state: 'candidate',
    })
  );
  addTaskManager(
    ref({
      companyId: cnt.value,
      tasks: [],
    })
  );
  addClient(
    ref({
      companyId: cnt.value,
      githubLink: '',
      earn: 0,
      cost: 0,
    })
  );
};
</script>
