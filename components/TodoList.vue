<template>
  <div
    class="bg-pink-50 rounded-lg p-4"
    @drop="dropCard($event, list.status)"
    @dragover.prevent
    @dragenter.prevent
  >
    <h2 class="text-xl font-bold mb-4 text-center">{{ list.name }}</h2>

    <div
      class="bg-white m-2 p-2"
      :key="card.companyId"
      v-for="card in sortedCards"
      draggable="true"
      @click="showDetailsModal(card)"
      @dragstart="dragCard($event, card.companyId, card.taskId)"
    >
      <TaskCard :card="card" />
    </div>
    <TaskModal
      v-if="showModal"
      :card="selectedCard"
      :showModal="showModal"
      @close-modal="showModal = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { TodoListType, TaskInfo } from '~/types/types';

const props = defineProps({
  list: {
    type: Object as () => TodoListType,
    required: true,
  },
});
const list = ref<TodoListType>(props.list);
const selectedCard = ref<TaskInfo>({} as TaskInfo);
const showModal = ref<boolean>(false);

// Here we create a computed property that returns a sorted copy of list.cards
const sortedCards = computed(() => {
  return [...list.value.cards].sort(
    (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
  );
});

const showDetailsModal = (card: TaskInfo) => {
  console.log(card);
  selectedCard.value = card;
  showModal.value = true;
  console.log(list.value.cards);
};

const dragCard = (event: any, dragCompanyId: number, dragTaskId: number) => {
  console.log(event);
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.dropEffect = 'move';
  event.dataTransfer.setData('company-id', dragCompanyId);
  event.dataTransfer.setData('task-id', dragTaskId);
};

const dropCard = (event: any, status: 'todo' | 'doing' | 'done') => {
  const { taskManagers } = taskCard();
  const dragCompanyId = event.dataTransfer.getData('company-id');
  const dragTaskId = event.dataTransfer.getData('task-id');
  const index = taskManagers.value.findIndex(
    (taskManager) => taskManager.companyId === Number(dragCompanyId)
  );
  console.log(index);
  if (index !== -1) {
    taskManagers.value[index].tasks.findIndex((task) => {
      if (task.taskId === Number(dragTaskId)) {
        task.state = status;
        console.log('task.state', task.state);
      }
    });
  }
  console.log(taskManagers.value);
};
</script>
