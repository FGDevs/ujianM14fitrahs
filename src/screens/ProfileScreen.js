import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native'
import { useSelector } from 'react-redux';

export default () => {
    const auth = useSelector(state=>state.Auth)
    console.log(auth)
    const logout=()=>{
        AsyncStorage.removeItem('user')
        .then(()=>{
            console.log(auth)
        })
    }
    return (
        <View>
            <Text>
                Ini adalah {auth.username}
            </Text>
            <View style={{
                borderRadius:'50%'
            }}>
                <Image source=
                {
                    auth.picture?
                    {uri: auth.picture}
                    :
                    require('../../assets/defaultpicture.jpg')
                }
                style={{
                    width:100,
                    height:100,
                }}
                />
            </View>
            <TouchableOpacity onPress={logout}>
                <Text>
                    Logout?
                </Text>
            </TouchableOpacity>
        </View>
    );
};