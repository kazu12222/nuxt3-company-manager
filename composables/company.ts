import { Company } from '~/types/types';
import type { Ref } from 'vue';

export const addCompany = (company: Ref<Company>) => {
  const { companies } = companyCard();
  companies.value.push(company.value);
  console.log(companies.value);
};

export const updateCompany = (updatedItem: Ref<Company>) => {
  const { companies } = companyCard();
  const index = companies.value.findIndex(
    (company) => company.companyId === updatedItem.value.companyId
  );
  if (index !== -1) {
    companies.value[index] = updatedItem.value;
  } else {
    console.warn(`Company with id ${updatedItem.value.companyId} not found.`);
  }
  console.log('company.ts');
  console.log(companies.value);
};

export const companyCard = () => {
  const companies = useState<Company[]>('companies-card', () => [
    {
      companyId: 1,
      name: '会社1',
      industry: 'IT',
      feature: 'A',
      president: '山田太郎',
      memo: '',
      state: 'client',
    },
    {
      companyId: 2,
      name: '会社2',
      industry: 'IT',
      feature: 'A',
      president: '山田太郎',
      memo: '',
      state: 'approach',
    },
    {
      companyId: 3,
      name: '会社3',
      industry: 'IT',
      feature: 'A',
      president: '山田太郎',
      memo: '',
      state: 'candidate',
    },
  ]);

  const client = computed(() =>
    companies.value.filter((company) => company.state === 'client')
  );
  const approach = computed(() =>
    companies.value.filter((company) => company.state === 'approach')
  );
  const candidate = computed(() =>
    companies.value.filter((company) => company.state === 'candidate')
  );
  console.log('computed作動');
  return {
    companies,
    client,
    approach,
    candidate,
  };
};
