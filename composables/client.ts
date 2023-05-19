import { Client } from '~/types/types';
import type { Ref } from 'vue';

export const addClient = (client: Ref<Client>) => {
  const { clients } = clientCard();
  clients.value.push(client.value);
};

export const updateClient = (updatedItem: Ref<Client>) => {
  const { clients } = clientCard();

  const index = clients.value.findIndex(
    (client) => client.companyId === updatedItem.value.companyId
  );
  if (index !== -1) {
    clients.value[index] = updatedItem.value;
  } else {
    console.warn(`Company with id ${updatedItem.value.companyId} not found.`);
  }
  console.log(clients.value);
};

export const getClientById = (companyId: number) => {
  const { clients } = clientCard();
  const index = clients.value.findIndex(
    (client) => client.companyId === companyId
  );
  if (index !== -1) {
    return clients.value[index];
  } else {
    throw new Error(`Company with id ${companyId} not found.`);
  }
};

export const clientCard = () => {
  const clients = useState<Client[]>('clients-card', () => [
    {
      companyId: 1,
      githubLink: '',
      earn: 0,
      cost: 0,
    },
    {
      companyId: 2,
      githubLink: '',
      earn: 0,
      cost: 0,
    },
    {
      companyId: 3,
      githubLink: '',
      earn: 0,
      cost: 0,
    },
  ]);
  return {
    clients,
  };
};
