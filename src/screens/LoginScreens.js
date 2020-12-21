import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import {
    StyleSheet,
    StatusBar,
    View,
    TouchableOpacity
} from 'react-native';
import {
    Text
} from 'react-native-elements';
import { Icon, Input } from 'native-base';

const Styles=StyleSheet.create({
    justCenter:{
        // justifyContent      : 'space-evenly',
        // alignItems          : 'center'
    },
    mainPageCtr:{
        paddingHorizontal   : 20
    },
    mainTitleCtr:{
        fontSize            : 30,
        fontWeight          : 'bold',
        color               : '#3DDC84',
        borderWidth             :2
    },
    logoCtr:{
        color               : '#3DDC84',
        fontSize            : 200
    },
    inputCtr:{
        padding             : 15,
        fontSize            : 15,
        textAlign           :'center',
        color               : '#3DDC84',
        margin              : 0,
        borderWidth         : 2,
        width               : '100%',
        height              : 30
    }
});

export default () => {
    const dispatch = useDispatch();

    const {
        justCenter,
        mainPageCtr,
        logoCtr,
        inputCtr,
    } = Styles;

    const [username,setUsername] = useState('');

    const onEnterPress = async () => {
        if(username){
            try {
                dispatch({type:'LOADING'})
                AsyncStorage.setItem('user',username)
                .then(()=>{
                    dispatch({type:'LOGIN',payload:{
                        username
                    }});
                }).catch((error)=>{
                    console.log("async",error);
                });
            }catch(error){
                console.log("onTryLogin",error)
            }
        }
    };

    return (
        <View style={{...justCenter,...mainPageCtr,height:'100%',borderWidth:2}}>
            <StatusBar backgroundColor={'#3DDC84'}/>
            <View style={{...justCenter,borderWidth:2}}>
                <Icon type  = 'Ionicons'
                      name  = 'logo-android'
                      style = {logoCtr}
                />
            </View>
            <Input 
                placeholder         = 'Masukkan Nama'
                placeholderTextColor= '#3DDC84'
                value               = {username}
                onChangeText        = {(text) => setUsername(text)}
                style               = {inputCtr}
                leftIcon            = 
                    {{
                        name:'user',
                        type:'feather',
                        color:'#3DDC84'
                    }}
            /> 
            <TouchableOpacity activeOpacity = {.2}
                              style         = 
                              {{
                                backgroundColor:'#3DDC84',
                                marginTop:10,
                                paddingVertical:5,
                                paddingHorizontal:15,
                                borderRadius:3,
                                height:50,
                                borderWidth:2
                              }}
                              onPress={onEnterPress}         
            >
                  <Text style={{textAlign:'center'}}>
                    Login
                  </Text>
            </TouchableOpacity>
        </View>
    );
};

