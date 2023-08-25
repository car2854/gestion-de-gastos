import { StatusListEnum } from "../enum/status-list.enum";

export class ListModel{
  constructor(
    public id: string,
    public amount: number,
    public date: Date,
    public description: string,
    public status: StatusListEnum
  ){}
}