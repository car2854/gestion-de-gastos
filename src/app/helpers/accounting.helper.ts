import { AccountingModel } from "../models/accounting.model"

const searchHelpers = (accounting: AccountingModel[], value: string = '') => {

  value = value.toLowerCase();
  accounting = accounting.filter((accountingModel: AccountingModel) => {

    const title = accountingModel.title.toLowerCase();
    
    return title.includes(value);
  }).map(_ => _);

  

  return accounting;
}

export {
  searchHelpers
}