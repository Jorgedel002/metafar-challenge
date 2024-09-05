import { Text, StyleProp, TextStyle } from 'react-native'

interface TextComponentProps {
  text: string
  size?: number
  color?: string
  weight?: 'normal' | 'bold'
  style?: StyleProp<TextStyle>;
}

const TextComponent: React.FC<TextComponentProps> = ({text,size,color,weight,style}) => {
    const combinedStyle: StyleProp<TextStyle> = [
        { 
            fontSize: size, 
            color, 
            fontWeight: weight 
        },
        style,
    ];
     return <Text style={combinedStyle}>{text}</Text>
}

export default TextComponent;