import {CurrencyAPI} from "./adaptee";
import {Currency, AssetsRequest} from "./model";



export interface ICurrencyRequester {
    fetchCurrencies(currency: string): Currency[]
}


export class CurrencyRequesterAdapter implements ICurrencyRequester {

    constructor(private readonly _currencyApi: CurrencyAPI) {

    }

    fetchCurrencies(currency: string): Currency[] {

        const method = 'GET'
        const requestObject: AssetsRequest = {
            method: method,
            body: {
                asset: currency,
                market: 'FOREX',
                date: new Date()
            }
        }
        return this._currencyApi.fetchCurrentPrice(requestObject);
    }

}