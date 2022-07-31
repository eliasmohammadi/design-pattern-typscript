import {CurrencyAPI} from "./adaptee";
import {CurrencyRequesterAdapter} from "./adpater";
import {Terminal} from "./client";


const currencyApi : CurrencyAPI = new CurrencyAPI()
const adapter:CurrencyRequesterAdapter = new CurrencyRequesterAdapter(currencyApi)

let price = new Terminal(adapter).getPrice('eur')
console.log(price)