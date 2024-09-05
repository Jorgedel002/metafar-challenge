import React from 'react';
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { StyleProp, TextStyle } from 'react-native';

interface IconProps {
  style?: StyleProp<TextStyle>;
  size?: number;
}

export const ChevronLeftIcon: React.FC<IconProps> = ({ style, size }) => {
  return (
    <FontAwesome name='chevron-left' size={size} style={style} />
  );
};