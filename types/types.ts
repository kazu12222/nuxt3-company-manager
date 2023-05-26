export interface Company {
  companyId: number; // Primary Key
  name: string;
  industry: string;
  feature: string;
  president: string;
  memo: string;
  state: 'client' | 'approach' | 'candidate';
}

export interface TaskManager {
  companyId: number; // Foreign Key linked to Company
  tasks: Task[];
}
export interface Task {
  taskId: number; // Primary Key
  deadline: string;
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
  taskManager: TaskManager;
  client: Client;
}

export interface TodoListType {
  name: string;
  cards: ComputedRef<TaskInfo[]>;
  status: 'todo' | 'doing' | 'done';
}

export interface TaskInfo {
  companyId: number; // Foreign Key linked to Company
  taskId: number; // Primary Key
  deadline: string;
  content: string;
  state: 'todo' | 'doing' | 'done';
}
export interface UserData {
  cntId: number;
  companies: Company[];
  taskManagers: TaskManager[];
  clients: Client[];
}
