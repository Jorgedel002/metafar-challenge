import { useState } from "react";
import { View } from "react-native";
import { intervalData } from "@/src/utils/constants/intervalData";
import { SegmentedButtons } from "react-native-paper";

interface CharBarProps {
  interval: "1day" | "1week" | "1month" | "1year";
  setInterval: (interval: "1day" | "1week" | "1month" | "1year") => void;
}

export default function CharBar({ interval, setInterval }: CharBarProps) {
  const [value, setValue] = useState<string>("1day");

  const handlePress = (value: string) => {
    setValue(value);
    setInterval(value as "1day" | "1week" | "1month" | "1year");
  };

  return (
    <View style={{ marginTop: 20 }}>
      <SegmentedButtons
        value={value}
        onValueChange={handlePress}
        buttons={intervalData}
      />
    </View>
  );
}
