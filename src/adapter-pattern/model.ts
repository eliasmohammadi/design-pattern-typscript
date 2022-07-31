export type AssetsRequest = {
    method: "GET" | "POST" | "PUT" | "DELETE",
    body:{
        asset: string,
        market: 'FOREX' | 'NASDAQ' | 'S&P500',
        date: Date
    }
}

export type Currency = {
    name: string,
    indicator: string,
    price: number
}