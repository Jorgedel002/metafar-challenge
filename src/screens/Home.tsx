import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TableAction from "@/src/screens/TableAction/screen/TableAction";
import Header from "@/src/components/Header/Header";

const Home = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Header />
      <TableAction />
    </View>
  );
};

export default Home;
