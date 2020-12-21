// import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    View,
    Text,
    Image
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default ({navigation,route}) => {
    const dispatch = useDispatch();
    const Auth     = useSelector(state=>state.Auth.picture)
    console.log("pic",Auth);

    const setPicture =()=>{
        dispatch({type:'LOADING'});
        dispatch({type:'LOGIN',payload:{
            picture:route.params.image
        }});
    };

    return (
        <View>
            <Image  source={{uri: route.params.image}}
                    style ={{
                        width:100,
                        height:100
                    }}
            />
            <TouchableOpacity onPress={setPicture}>
                <Text>
                    Set as Display Picture?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Text>
                    Cancel?
                </Text>
            </TouchableOpacity>
        </View>
    );
};