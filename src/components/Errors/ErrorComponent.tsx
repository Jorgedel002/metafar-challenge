import React from 'react';
import { View } from 'react-native';
import TextComponent from '../Text/TextComponent';
import { commonsStyles } from '../Styles/Styles';

interface ErrorComponent {
    error?: string | null;
}

const ErrorComponent: React.FC<ErrorComponent> = ({error}) => {
    return (
        <View style={commonsStyles.errorContainer}>
            <TextComponent size={24} text='Ooops, algo salio mal :(' color='red'></TextComponent>
            <TextComponent size={16} text={error} color='red' style={{textAlign: 'center', marginTop: 40}}/>
        </View>
    );
}

export default ErrorComponent;
