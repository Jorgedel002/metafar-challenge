import * as React from "react";
import { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import useStocks from "@/src/hooks/useStocks/useStocks";

interface SearchProps {
  onSearch: (searchText: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const getStocks = useStocks((state) => state.getStocks);

  useEffect(() => {
    if (searchQuery === "") {
      getStocks();
    } else {
      onSearch(searchQuery);
    }
  }, [searchQuery, getStocks]);

  return (
    <Searchbar
      placeholder="Buscar"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default Search;
