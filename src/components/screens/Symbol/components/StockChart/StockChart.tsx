import React from "react";
import { ScrollView, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { TimeSeriesStock } from "@/src/interface/Stocks";
import { getLabels } from "@/src/helpers/getLabels";
import { colors } from "@/src/constants/colors";

interface StockChartProps {
  stock: TimeSeriesStock | null;
  interval: "1day" | "1week" | "1month" | "1year";
}

const StockChart: React.FC<StockChartProps> = ({ stock, interval }) => {
  if (!stock || stock.values.length === 0) return null;

  const data = {
    labels: getLabels(interval),
    datasets: [
      {
        data: stock.values.map((value) => parseFloat(value.close)),
        color: (opacity = 1) => `rgba(${colors.lightGreen} ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: stock.values.map((value) => parseFloat(value.open)),
        color: (opacity = 1) => `rgba(${colors.lightRed} ${opacity})`,
      },
      {
        data: stock.values.map((value) => parseFloat(value.high)),
        color: (opacity = 1) => `rgba(${colors.strongYellow} ${opacity})`,
      },
      {
        data: stock.values.map((value) => parseFloat(value.low)),
        color: (opacity = 1) => `rgba(${colors.strongBlue} ${opacity})`,
      },
    ],
    legend: ["Close", "Open", "High", "Low"],
  };

  return (
    <ScrollView>
      <LineChart
        data={data}
        width={Dimensions.get("window").width - 16}
        height={500}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 16,
          borderRadius: 16,
        }}
      />
    </ScrollView>
  );
};

export default StockChart;