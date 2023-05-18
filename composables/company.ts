import { computed } from 'vue';
import { Company } from '~/types/types';
import type { Ref } from 'vue';
export const addCompany = (company: Ref<Company>) => {
  const { companies } = companyCard();
  companies.value.push(company.value);
  console.log(companies.value);
};
export const companyCard = () => {
  const companies = useState<Company[]>('company-card', () => [
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

  return {
    companies,
    client,
    approach,
    candidate,
  };
};
