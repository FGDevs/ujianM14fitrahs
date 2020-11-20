import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    LoginScreens
} from '../screens';

const Stack=createStackNavigator();

export default () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Login' component={LoginScreens} />
        </Stack.Navigator>
    );
};