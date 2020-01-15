export interface IJob {
  id: number;
  title: string;
  description: string;
  workTime: string;
  company?: string;
  address?: string;
  salary?: number;
}
