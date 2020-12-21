import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { KeepLogin, AddData } from './src/redux/actions';
import { StackRoot } from './src/navigations';
import { LoginScreens } from './src/screens';

const mapStatetoProps=({Auth})=>{
  return {
    isLogin   : Auth.isLogin,
    isLoading : Auth.isLoading
  };
};

export default (connect(mapStatetoProps,{ KeepLogin, AddData })(class MainApp extends React.Component {
  state={
    isLoading:this.props.isLoading
  };

  
  componentDidMount(){
    Axios.get('https://api.thecatapi.com/v1/images/search?limit=10').
    then((result)=>{
      this.props.AddData(result.data);
    }).catch((error)=>{
      console.log(error+" di Home1");
    });

    AsyncStorage.getItem('user')
    .then((username)=>{
      console.log(username);
    });
  };

  render() { 
    return ( 
        <NavigationContainer>
          {
            this.props.isLogin?
            <StackRoot />
            :
            <LoginScreens />
          }
        </NavigationContainer>
    );
  };
}));

