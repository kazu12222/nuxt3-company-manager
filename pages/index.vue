<template>
  <div>
    <h1>Trello風アプリ</h1>
    <AddCard />
    <div class="flex">
      <div class="flex-auto"></div>
      <List :list="list1" class="flex-auto" />
      <div class="flex-auto"></div>
      <List :list="list2" class="flex-auto" />
      <div class="flex-auto"></div>
      <List :list="list3" class="flex-auto" />
      <div class="flex-auto"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Company, ListType } from '~/types/types';

const list1 = ref<ListType>({
  name: '顧客',
  cards: [
    {
      companyId: 1,
      name: '会社1',
      industry: 'IT',
      feature: 'A',
      president: '山田太郎',
      memo: '',
      state: 'client',
    },
  ],
  status: 'client',
});

const list2 = ref<ListType>({
  name: '営業中',
  cards: [
    {
      companyId: 2,
      name: '会社2',
      industry: 'IT',
      feature: 'A',
      president: '山田太郎',
      memo: '',
      state: 'approach',
    },
  ],
  status: 'approach',
});

const list3 = ref<ListType>({
  name: '候補',
  cards: [
    {
      companyId: 3,
      name: '会社3',
      industry: 'IT',
      feature: 'A',
      president: '山田太郎',
      memo: '',
      state: 'candidate',
    },
  ],
  status: 'candidate',
});
</script>
