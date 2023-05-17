<template>
  <button
    class="border border-gray-300 rounded-lg shadow-lg p-4"
    @click="addEmptyCard"
  >
    Add Card
  </button>
</template>

<script setup lang="ts">
const addEmptyCard = () => {
  addCompany(
    ref({
      companyId: 4,
      name: '会社4',
      industry: 'IT',
      feature: 'A',
      president: '山田太郎',
      memo: '',
      state: 'client',
    })
  );
};
</script>
