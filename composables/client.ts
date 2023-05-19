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

export const clientCard = () => {
  const clients = useState<Client[]>('clients-card', () => []);
  return {
    clients,
  };
};
