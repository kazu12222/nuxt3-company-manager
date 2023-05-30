<template>
  <div class="flex flex-col min-h-screen mx-4">
    <h3 class="text-2xl font-bold mb-4 text-center">タスク管理</h3>
    <div class="w-1/4"></div>

    <div class="flex flex-grow">
      <TodoList :list="list1" class="flex-grow border-r border-gray-300" />
      <TodoList :list="list2" class="flex-grow border-r border-gray-300" />
      <TodoList :list="list3" class="flex-grow" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TodoListType } from '~/types/types';
const { todo, doing, done } = taskCard();
const list1 = <TodoListType>{
  name: 'TODO',
  cards: todo,
  status: 'todo',
};

const list2 = <TodoListType>{
  name: 'DOING',
  cards: doing,
  status: 'doing',
};

const list3 = <TodoListType>{
  name: 'DONE',
  cards: done,
  status: 'done',
};

monitaringUserData();
</script>
