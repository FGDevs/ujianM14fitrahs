import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux'
// import Axios from 'axios';
import { useSelector } from 'react-redux';
import {
    View,
    Text,
    Image
} from 'react-native'


export default ({navigation,route}) => {
    const Auth = useSelector(state => state.Auth.data)
    const [restaurants,setRestaurants] = useState([])
    console.log(Auth[0]);

    useEffect(() => {
        setRestaurants(Auth);
    },[]);

    console.log(restaurants[0]);


    const renderData = () => {
        return restaurants.map((val,index)=>{
            return(
                <View key={index}>
                    <Text>Nama Toko: {val.restaurant.name}</Text>
                    <Text>Rating: {val.restaurant.user_rating.aggregate_rating}</Text>
                    <Text>Foto : {val.restaurant.featured_image}</Text>
                </View>
            );
        });
    };

    return (
        <View>
            <Text>
                Ini adalah {route.name}
            </Text>
            {renderData()}
        </View>
    )
};