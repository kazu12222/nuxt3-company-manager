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
console.log('list1' + list1);
</script>
