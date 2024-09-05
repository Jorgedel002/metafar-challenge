import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stock, TimeSeriesStock } from "@/src/interface/Stocks";
import { fetchStocks, fetchStockBySymbol, fetchStocksSearch } from "@/src/services/stockService";

interface StoreState {
  stocks: Stock[];
  filteredStocks: Stock[];
  getStocks: () => void;
  searchStocks: (query: string, type: "simbolo" | "nombre") => void;
  getStocksBySymbol: (symbol: string, interval: string) => Promise<TimeSeriesStock>;
}

const useStocks = create<StoreState>()(
  persist(
    devtools((set, get) => ({
      stocks: [],
      filteredStocks: [],

      getStocks: async () => {
        const stocks = await fetchStocks();
        set(() => ({
          stocks,
          filteredStocks: stocks,
        }));
      },

      searchStocks: async (query, type) => {
        const { stocks } = get();
        const filtered = await fetchStocksSearch(query, stocks, type);
        set({ filteredStocks: filtered });
      },

      getStocksBySymbol: async (symbol: string, interval: string) => {
        return await fetchStockBySymbol(symbol, interval);
      },
    })),
    {
      name: "stock-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useStocks;