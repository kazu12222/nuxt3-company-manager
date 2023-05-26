import { Company } from '~/types/types';
import { ref, Ref } from 'vue';

export const companyCard = () => {
  const companies = useState<Company[]>('companies-card', () => [
    // company data
  ]);

  const byState = (state: 'client' | 'approach' | 'candidate') =>
    companies.value.filter((company) => company.state === state);
  return {
    companies,
    client: computed(() => byState('client')),
    approach: computed(() => byState('approach')),
    candidate: computed(() => byState('candidate')),
  };
};

const findCompanyIndex = (companyId: number) =>
  companyCard().companies.value.findIndex(
    (company) => company.companyId === companyId
  );

export const loadCompanies = (saveData: Ref<Company[]>) =>
  (companyCard().companies.value = saveData.value);

export const addCompany = (company: Ref<Company>) =>
  companyCard().companies.value.push(company.value);

export const updateCompany = (updatedItem: Ref<Company>) => {
  const { companies } = companyCard();
  const index = findCompanyIndex(updatedItem.value.companyId);

  if (index !== -1) {
    companies.value[index] = updatedItem.value;
  } else {
    console.warn(`Company with id ${updatedItem.value.companyId} not found.`);
  }
};

export const getCompanyById = (companyId: number): Company => {
  const { companies } = companyCard();
  const index = findCompanyIndex(companyId);

  if (index !== -1) {
    return companies.value[index];
  } else {
    throw new Error(`Company with id ${companyId} not found.`);
  }
};
