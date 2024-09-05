import React, { useState, useEffect } from "react";
import useStocks from "@/src/hooks/useStocks/useStocks";
import { useLocalSearchParams } from "expo-router";
import { TimeSeriesStock } from "@/src/interface/Stocks";
import LoadingSpinner from "@/src/components/Loader/LoadingSpinner";
import CharBar from "@/src/screens/Symbol/components/StockChart/CharBar";
import Header from "@/src/screens/Symbol/components/Header/Header";
import StockInfo from "@/src/screens/Symbol/components/StockInfo/StockInfo";
import StockChart from "@/src/screens/Symbol/components/StockChart/StockChart";
import MainSymbolDetails from "@/src/screens/Symbol/screen/SymbolScreen";
import ErrorComponent from "../components/Errors/ErrorComponent";

const SymbolDetail = () => {
  const [stock, setStock] = useState<TimeSeriesStock | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [intervalChart, setIntervalChart] = useState<
    "1day" | "1week" | "1month" | "1year"
  >("1day");
  const getStocksBySymbol = useStocks((state) => state.getStocksBySymbol);
  const { symbol, name } = useLocalSearchParams<string>();
  const safeSymbol = Array.isArray(symbol) ? symbol[0] : symbol || "";
  const safeName = Array.isArray(name) ? name[0] : name || "";

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const data = await getStocksBySymbol(safeSymbol, intervalChart);
        if (data && data.values) {
          setStock(data);
          setError(null);
        } else {
          throw new Error("Invalid data format or no data available");
        }
      } catch (err) {
        setError(
          `Error fetching stock data: ${
            (err as Error).message || "Unknown error occurred"
          }`
        );
        console.error("Error fetching stock data:", err);
      }
    };

    fetchStockData();

    const intervalId = setInterval(() => {
      fetchStockData();
    }, 60000);

    return () => clearInterval(intervalId);
  }, [safeSymbol, intervalChart, getStocksBySymbol]);

  return (
    <MainSymbolDetails>
      <Header />
      {error ? (
        <ErrorComponent error={error} />
      ) : stock ? (
        <>
          <StockInfo name={safeName} symbol={safeSymbol} />
          <CharBar interval={intervalChart} setInterval={setIntervalChart} />
          <StockChart stock={stock} interval={intervalChart} />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </MainSymbolDetails>
  );
};

export default SymbolDetail;
