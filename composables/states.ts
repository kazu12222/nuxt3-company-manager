import { Company } from '~/types/types';
import type { Ref } from 'vue';
export const addCompany = (company: Ref<Company>) => {
  const { companies } = companyCard();
  companies.value.push(company.value);
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
  return { companies };
};
