import { useState, useEffect } from "react";
import { fetchStocks } from "../services/api";
import { Stock } from '../services/api';


const useFetchStocks = () => {
    const [stocks, setStocks] = useState<Stock[]>([]);
    const [error, setError] = useState<string>()
    const [loading, setLoading] = useState<boolean>(true)

    const loadStocks = async () => {
        try {
          const data = await fetchStocks(); 
          setStocks(data.data);
        } catch (error) {
          setError('Fallo al cargar stocks');
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadStocks();
    }, [])

    return {stocks, error, loading, reload: loadStocks}
}

export default useFetchStocks;