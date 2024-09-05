import React from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';

const Layout = () => {
    return (
        <View style={{flex: 1}}>
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name='index' 
                    options = {{
                        headerShown: false
                    }}
                />

            </Stack>
        </View>
    );
}

export default Layout;