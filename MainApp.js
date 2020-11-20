import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { KeepLogin, AddData } from './src/redux/actions';
import { 
  AuthStackRoot,
  StackRoot 
} from './src/navigations'

const mapStatetoProps=({Auth})=>{
  return {
    isLogin   :Auth.isLogin,
    isLoading :Auth.isLoading
  }
};

export default (connect(mapStatetoProps,{ KeepLogin, AddData })(class MainApp extends React.Component {
  state={
    isLoading:this.props.isLoading
  }

  
  componentDidMount(){
    Axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating',{
        headers : {"user-key":"74b25737566cc5cfe2644bcdf3265f8e"}
    }).then((result)=>{
      // console.log(result.data.restaurants[0])
      this.props.AddData(result.data.restaurants);
    }).catch((error)=>{
        console.log(error+" di Home1");
    });

    AsyncStorage.getItem('iduser')
    .then((username)=>{
      if(username !== null){
        this.props.KeepLoginFunc(username)
      }else{
        this.setState({isLoading:false})
      };
    });
  };

  render() { 
    return ( 
        <NavigationContainer>
          {
            this.props.isLogin?
            <AuthStackRoot />
            :
            <StackRoot />
          }
        </NavigationContainer>
    );
  };
}));

