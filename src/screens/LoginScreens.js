import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { useDispatch, useSelector } from 'react-redux';
import {
    mainColor,
    secColor,
    thirdColor
} from '../theme';
import {
    StyleSheet,
    StatusBar,
    View
} from 'react-native';
import {
    Button,
    Text
} from 'react-native-elements';
import { Icon, Input } from 'native-base';

const Styles=StyleSheet.create({
    justCenter:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    mainPageCtr:{
        paddingHorizontal:20
    },
    mainTitleCtr:{
        fontSize:30,
        fontWeight:'bold',
        color:mainColor
    },
    logoCtr:{
        color:mainColor,
        fontSize:40
    },
    inputCtr:{
        paddingHorizontal:10,
        fontSize:15
    }
});

export default () => {
    const dispatch = useDispatch();
    const Auth = useSelector(state => state.Auth)
    const {
        justCenter,
        mainPageCtr,
        mainTitleCtr,
        logoCtr,
        inputCtr,
    } = Styles;

    const [username,setUsername] = useState('')

    const onEnterPress = () => {
        // console.log(username)
    }

    return (
        <View style={[justCenter,mainPageCtr]}>
            <StatusBar backgroundColor={mainColor}/>
            <View style={justCenter}>
                <Text style={mainTitleCtr}>
                    TomatoApp
                </Text>
                <Icon type  = 'Ionicons'
                      name  = 'fast-food'
                      style = {logoCtr}
                />
            </View>
            <Input 
                placeholder  = 'Masukkan Nama'
                leftIcon     = {{name:'user', type:'feather', color:mainColor}}
                value        = {username}
                onChangeText = {(text)=>setUsername(text)}
                style        = {inputCtr}
            /> 
            <Button 
                title       ="Enter"
                onPress     ={()=>onEnterPress()}
                loading     ={Auth.isLoading}
            />
        </View>
    );
};

