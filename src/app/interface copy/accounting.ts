import { STATUS_ACCOUNTING_ENUM } from "../enum/status-accountin.enum";

export interface Accounting {

  id: string,
  title: string,
  amount: number,
  created_at: Date,
  status: STATUS_ACCOUNTING_ENUM,

}
