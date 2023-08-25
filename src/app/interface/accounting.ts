import { StatusAccountingEnum } from "../enum/status-accountin.enum";

export interface Accounting {

  id: string,
  title: string,
  amount: number,
  created_at: Date,
  status: StatusAccountingEnum,

}
