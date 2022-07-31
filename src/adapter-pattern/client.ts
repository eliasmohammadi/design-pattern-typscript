import {ICurrencyRequester} from "./adpater";

export class Terminal {

    constructor(private readonly _currencyAdapter: ICurrencyRequester) {


    }
    getPrice(currency:string): number {
        const result =  this._currencyAdapter.fetchCurrencies(currency)
        return result[0]?.price
    }



}