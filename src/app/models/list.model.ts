import { TypeListEnum } from "../enum/type-list.enum";

export class ListModel{
  constructor(
    public id: string,
    public amount: number,
    public amountTotal: number,
    public date: Date,
    public description: string,
    public type: TypeListEnum
  ){}
}