import { Client } from '~/types/types';
import type { Ref } from 'vue';

// Define a common function to get clients
const getClients = () => clientCard().clients;

export const loadClients = (saveData: Ref<Client[]>) =>
  (getClients().value = saveData.value);
export const addClient = (client: Ref<Client>) =>
  getClients().value.push(client.value);

export const updateClient = (updatedItem: Ref<Client>) => {
  const clients = getClients().value;
  const index = clients.findIndex(
    (client) => client.companyId === updatedItem.value.companyId
  );

  if (index !== -1) clients[index] = updatedItem.value;
  else
    console.warn(`Company with id ${updatedItem.value.companyId} not found.`);
};

export const deleteClientById = (companyId: number) => {
  const clients = getClients();
  clients.value = clients.value.filter(
    (client) => client.companyId !== companyId
  );
};

export const getClientById = (companyId: number) => {
  const client = getClients().value.find(
    (client) => client.companyId === companyId
  );
  if (!client) throw new Error(`Company with id ${companyId} not found.`);
  return client;
};

export const clientCard = () => ({
  clients: useState<Client[]>('clients-card', () => []),
});
