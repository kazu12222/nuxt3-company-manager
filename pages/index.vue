<template>
  <div class="flex flex-col min-h-screen mx-4">
    <h3 class="text-2xl font-bold mb-4 text-center">会社管理</h3>
    <div class="w-1/4">
      <AddCard />
    </div>

    <div class="flex flex-grow justify-between">
      <List :list="list1" class="flex-grow border-r border-gray-300" />
      <List :list="list2" class="flex-grow border-r border-gray-300" />
      <List :list="list3" class="flex-grow" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ListType } from '~/types/types';
const { client, approach, candidate } = companyCard();

const list1 = <ListType>{
  name: '顧客',
  cards: client,
  status: 'client',
};

const list2 = <ListType>{
  name: '営業中',
  cards: approach,
  status: 'approach',
};

const list3 = <ListType>{
  name: '候補',
  cards: candidate,
  status: 'candidate',
};

monitaringUserData();
</script>
