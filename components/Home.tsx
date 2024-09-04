import React from 'react';
import { View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TableAction from './TableAction';
import Header from './Header';

const Home = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <Header/>
            <TableAction/>
        </View>
    );
}

export default Home;
