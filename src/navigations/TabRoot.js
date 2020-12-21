import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack'
import { ProfileScreen } from '../screens';
import { AuthStackRoot } from '../navigations';

const Stack = createStackNavigator();
const Tab   = createBottomTabNavigator();

export default ()=>{
    const Auth=useSelector(state=>state.Auth);
    
    return (
        <Tab.Navigator 
            screenOptions = {({route}) => ({
                tabBarIcon:({focused,color,size})=>{
                    let iconName;
                    let type;
                    if(route.name === 'Cat'){
                        iconName= 'home'
                        type    = 'feather'
                    }else{
                        iconName= 'user'
                        type    = 'font-awesome-5'
                    }
                    return <Icon name={iconName} type={type} size={size} color={color} />
                },
                tabBarLabel:()=>{
                    return null;
                }
            })}
            tabBarOptions={{
                inactiveTintColor   : 'lightgray',
                activeTintColor     : '#3DDC84'
            }}>
            <Tab.Screen name='Cat'      component = {AuthStackRoot} />
            <Tab.Screen name='Profile'  component = {ProfileScreen}    />
        </Tab.Navigator>
    )
}
