import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux'
// import Axios from 'axios';
import { useSelector } from 'react-redux';
import {
    TouchableOpacity,
    Image,
    View
} from 'react-native'


export default ({navigation}) => {
    const data = useSelector(state => state.Auth.data)
    const [cat,setCats] = useState([])
    

    useEffect(() => {   
        setCats(data);
    });

    console.log("cat",cat)
    const renderData = () => {
        return cat.map((val,index)=>{
            return(
                <TouchableOpacity key           = {index}
                                  activeOpacity = {.8}
                                  onPress       = {()=>navigation.navigate('Detail', { image: val.url })}
                                  style         = {{
                                      flex:0.5,
                                      width:"100%"
                                  }}
                >
                    <Image source={{uri: val.url}}
                           style={{
                               position     : 'relative',
                               width        : 100,
                               height       : 100,
                               borderWidth  : 2
                           }}
                    />
                </TouchableOpacity>
            );
        });
    };

    return (
        <View style={{
                flexDirection   : 'row',
                flexWrap        : 'wrap',
                width           : '100%',
                flex            : 1,
                borderWidth     : 2
              }}
        >
            {renderData()}
        </View>
    )
};