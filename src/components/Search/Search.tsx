import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Searchbar, RadioButton } from "react-native-paper";

interface SearchProps {
  onSearch: (query: string, type: "simbolo" | "nombre") => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<"simbolo" | "nombre">("simbolo");
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery.trim() || searchQuery === "") {
      onSearch(debouncedQuery, searchType);
    }
  }, [debouncedQuery, searchType]);

  return (
    <View>
      <Searchbar
        placeholder={`Buscar por ${searchType}`}
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
        <RadioButton.Group
          onValueChange={value => setSearchType(value as "simbolo" | "nombre")}
          value={searchType}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton value="simbolo" />
            <Text>Simbolo</Text>
            <RadioButton value="nombre" />
            <Text>Nombre</Text>
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );
};

export default Search;