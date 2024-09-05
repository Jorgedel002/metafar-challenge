import { Stock, TimeSeriesStock } from "@/src/interface/Stocks";
import { API_URL, API_KEY } from "@env";

export const fetchStocks = async (): Promise<Stock[]> => {
  const response = await fetch(`${API_URL}/stocks?exchange=NYSE&apikey=${API_KEY}`);
  const data = await response.json();

  if (data.code >= 400) {
    console.error("Error fetching stocks");
    return [];
  }

  const filterRepeated = data.data.filter(
    (stock: Stock, index: number, self: Stock[]) =>
      index === self.findIndex((t) => t.symbol === stock.symbol)
  );

  return filterRepeated;
};

export const fetchStocksSearch = async (
  searchText: string,
  stocks: Stock[],
  searchType: "simbolo" | "nombre"
): Promise<Stock[]> => {
  if (!searchText) {
    return stocks;
  }

  if (searchType === "nombre") {
    const filteredStocks = stocks.filter(stock =>
      stock.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredStocks;
  } else {
    try {
      const response = await fetch(`${API_URL}/stocks?symbol=${searchText}&apikey=${API_KEY}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error fetching stocks");
      }

      return data.data;
    } catch (error) {
      console.error("Fetch error:", error);
      return [];
    }
  }
};

export const fetchStockBySymbol = async (
  symbol: string,
  interval: string
): Promise<TimeSeriesStock> => {
  const intervalYear =
    interval === "1year" ? "1day&outputsize=365" : interval;
  try {
    const response = await fetch(
      `${API_URL}/time_series?symbol=${symbol}&interval=${intervalYear}&apikey=${API_KEY}`
    );
    const data = await response.json();

    if (data.code >= 400) {
      console.error("Error fetching stocks:", data.message);
      throw new Error(data.message || "Error fetching stocks");
    }

    return { stock: data.meta || {}, values: data.values || [] };
  } catch (error) {
    console.error("Error fetching stocks:", error);
    throw error;
  }
};