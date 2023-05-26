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
import { ListType, UserData } from '~/types/types';
import { watch } from 'vue';
//@ts-ignore
import Cookies from 'js-cookie';
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

const userData = ref({} as UserData);

onMounted(() => {
  const savedData = Cookies.get('user_data');
  if (savedData) {
    userData.value = JSON.parse(savedData);
    console.log(userData.value);
    const { cntId, companies, taskManagers, clients } = userData.value;
    loadClients(ref(clients));
    loadCnt(ref(cntId));
    loadCompanies(ref(companies));
    loadTasks(ref(taskManagers));
  }
});

const saveDataToCookie = () => {
  console.log('Saving data');
  const clients = clientCard();
  const cnt = cntId();
  const { companies } = companyCard();
  const { taskManagers } = taskCard();
  userData.value = {
    cntId: cnt.value,
    companies: companies.value,
    taskManagers: taskManagers.value,
    clients: clients.clients.value,
  };
  Cookies.set('user_data', JSON.stringify(userData.value));
};

watch([client, approach, candidate], saveDataToCookie, { deep: true });
</script>
