import React from "react";
import { View } from "react-native";
import TextComponent from "@/src/components/Text/TextComponent";

interface StockInfoProps {
  name: string;
  symbol: string;
}

const StockInfo: React.FC<StockInfoProps> = ({ name, symbol }) => {
  return (
    <View style={{ gap: 10 }}>
      <View>
        <TextComponent size={18} text={`Acciones de: ${name}`} />
      </View>
      <View>
        <TextComponent size={18} text={`Simbolo: ${symbol}`} />
      </View>
    </View>
  );
};

export default StockInfo;