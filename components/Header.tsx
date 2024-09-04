import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Metafar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer:{
        paddingVertical: 30,
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
    }
})

export default Header;
