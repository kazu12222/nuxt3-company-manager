export interface Company {
  companyId: number; // Primary Key
  name: string;
  industry: string;
  feature: string;
  president: string;
  memo: string | null;
  state: 'client' | 'approach' | 'candidate';
}

export interface Task {
  taskId: number; // Primary Key
  companyId: number; // Foreign Key linked to Company
  deadline: Date;
  content: string;
  state: 'todo' | 'doing' | 'done';
}

export interface Client {
  clientId: number; // Primary Key
  companyId: number; // Foreign Key linked to Company
}

export interface ClientAutomation {
  clientId: number; // Foreign Key linked to Client
  githubLink: string;
}

export interface ClientFinancial {
  clientId: number; // Foreign Key linked to Client
  earn: number;
  cost: number;
}
export interface ListType {
  name: string;
  cards: Company[];
  status: 'client' | 'approach' | 'candidate';
}
