import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import {
    HomeScreen,
    FoodScreen
} from '../screens';
import { mainColor, thirdColor } from '../theme';


const Tab=createBottomTabNavigator();

export default ()=>{
    const Auth=useSelector(state=>state.Auth);
    
    return (
        <Tab.Navigator 
            screenOptions = {({route}) => ({
                tabBarIcon:({focused,color})=>{
                    let iconName;
                    let type;
                    if(route.name === 'Home'){
                        iconName = 'home'
                        type = 'feather'

                }},
                tabBarLabel:()=>{
                    return null;
                }
            })}
            tabBarOptions={{
                inactiveTintColor:thirdColor,
                activeTintColor:mainColor
            }}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Food' component={FoodScreen} />
        </Tab.Navigator>
    )
}
