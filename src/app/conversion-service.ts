import { CurrencyModel } from "./currency-model";


export class ConversionService {

    private baseCurrency: string = 'Euro';
    private baseCurrencyRate: number = 1.16;
    private currencyModel: CurrencyModel = new CurrencyModel;
  
    constructor(amount: number,currency: string) { 
      this.currencyModel.amount = amount;
      this.currencyModel.currency = currency;
      this.currencyModel.inspect = currency + ' ' + amount;
    }
  
    getAmountAndCurrecy(): CurrencyModel{
      return this.currencyModel;
    }

    convertTo(currency: string): number{
        let amount = this.currencyModel.amount;
        if(amount == undefined){
            amount = 0;
        }

        let rateConversion: any = (amount * this.baseCurrencyRate).toFixed(2);
        return rateConversion;
    }

    
  }
  