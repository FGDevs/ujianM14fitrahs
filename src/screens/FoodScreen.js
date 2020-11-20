import React from 'react';
import {
    View,
    Text
} from 'react-native'

export default ({route}) => {

    return (
        <View>
            <Text>
                Ini adalah {route.name}
            </Text>
        </View>
    );
};