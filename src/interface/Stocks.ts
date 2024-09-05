export interface Stock {
    symbol: string
    name: string
    currency: string
    exchange?: string
    mic_code?: string
    country?: string
    type: string
    figi_code?: string
}

export interface TimeSeriesStock {
    stock: Meta
    values: Value[]
}

export interface Meta {
    symbol: string
    interval: string
    currency: string
    exchange_timezone: string
    exchange: string
    mic_code: string
    type: string
}
  
export interface Value {
    datetime: Date
    open: string
    high: string
    low: string
    close: string
    volume: string
}