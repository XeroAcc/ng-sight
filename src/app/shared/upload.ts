import { User } from './user';

export interface Upload {
  id: number;
  stamp: Date;
  user: User;
  bp: number;
  hr: number;
  qos: number;
  bw: number;
  bmi: number;
  faq: number;
  bomc: number;
}
