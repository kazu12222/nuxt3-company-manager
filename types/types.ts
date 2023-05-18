export interface Company {
  companyId: number; // Primary Key
  name: string;
  industry: string;
  feature: string;
  president: string;
  memo: string;
  state: 'client' | 'approach' | 'candidate';
}

export interface Task {
  companyId: number; // Foreign Key linked to Company
  taskId: number; // Primary Key
  deadline: Date;
  content: string;
  state: 'todo' | 'doing' | 'done';
}

export interface Client {
  companyId: number; // Foreign Key linked to Company
  githubLink: string | '';
  earn: number | '';
  cost: number | '';
}

export interface ListType {
  name: string;
  cards: ComputedRef<Company[]>;
  status: 'client' | 'approach' | 'candidate';
}
export interface CompanyInfo {
  company: Company;
  tasks: Task[];
  client: Client;
}
