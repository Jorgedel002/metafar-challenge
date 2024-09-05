import React from "react";
import { View, Pressable } from "react-native";
import { Link } from "expo-router";
import { ChevronLeftIcon } from "@/src/components/Icons";
import TextComponent from "@/src/components/Text/TextComponent";
import { commonsStyles } from "@/src/components/Styles/Styles";

const Header = () => {
  return (
    <View style={commonsStyles.flexRowContainer}>
      <Link href="/" asChild>
        <Pressable>
          <ChevronLeftIcon size={16} />
        </Pressable>
      </Link>
      <TextComponent
        size={24}
        text="Detalles de la acción"
        style={{ lineHeight: 30 }}
      />
    </View>
  );
};

export default Header;