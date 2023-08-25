import { StatusAccountingEnum } from "../enum/status-accountin.enum";
import { ListModel } from "./list.model";

export class AccountingModel {
  constructor(
    public id: string,
    public title: string,
    public amount: number,
    public created_at: Date,
    public status: StatusAccountingEnum,
    public list: ListModel[] | null,
  ){}

}
