const API_KEY = '25b19a7fbef44578a5db2c03c3063556'
const API_URL = `https://api.twelvedata.com`;

export interface Stock {
  symbol: string;
  name: string;
  currency: string;
  type: string;
}

export const fetchStocks = async (): Promise<{ data: Stock[] }> => {
  const response = await fetch(`${API_URL}/stocks?source=docs`);

  if (!response.ok) {
    throw new Error('Failed to fetch stocks');
  }
  return response.json();
};
    
    
