import { useEffect } from "react";

const useFetchStocks = (getStocks: () => void) => {
  useEffect(() => {
    getStocks();
  }, [getStocks]);
};

export default useFetchStocks;