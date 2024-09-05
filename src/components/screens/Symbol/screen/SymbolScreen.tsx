import React from "react";
import { View } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { commonsStyles } from "@/src/components/Styles/Styles";

interface MainSymbolDetailsProps {
  children: React.ReactNode;
}

const MainSymbolDetails: React.FC<MainSymbolDetailsProps> = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <View
        style={[
          commonsStyles.mainContainer,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        {children}
      </View>
    </SafeAreaProvider>
  );
};

export default MainSymbolDetails;
