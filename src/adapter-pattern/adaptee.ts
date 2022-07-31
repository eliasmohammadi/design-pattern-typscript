import {AssetsRequest, Currency} from "./model";


export class CurrencyAPI {

    fetchCurrentPrice(req: AssetsRequest): Currency[] {

        const currencies = [
            {
                name: "U.S Dollar",
                indicator: "usd",
                price: 1.03
            },
            {
                name: "EURO",
                indicator: "eur",
                price: 1.02
            }
        ]

        return currencies.filter(o => o.indicator === req.body.asset)
    }
}