import { UserData } from '~/types/types';
import Cookies from 'js-cookie';
export const monitaringUserData = () => {
  const userData = ref({} as UserData);

  onMounted(() => {
    const savedData = Cookies.get('user_data');
    if (savedData) {
      userData.value = JSON.parse(savedData);
      const { cntId, companies, taskManagers, clients } = userData.value;
      loadClients(ref(clients));
      loadCnt(ref(cntId));
      loadCompanies(ref(companies));
      loadTasks(ref(taskManagers));
    } else saveDataToCookie();
  });

  const saveDataToCookie = () => {
    console.log('Saving data');
    const clients = clientCard();
    const cnt = cntId();
    const { companies } = companyCard();
    const { taskManagers } = taskCard();
    const newValue = {
      cntId: cnt.value,
      companies: companies.value,
      taskManagers: taskManagers.value,
      clients: clients.clients.value,
    };
    Cookies.set('user_data', JSON.stringify(newValue));
  };

  watch(
    () => [clientCard(), cntId(), companyCard(), taskCard()],
    () => {
      saveDataToCookie();
    },
    { deep: true }
  );
};
