import 'react-native-gesture-handler'
import React          from 'react';
import MainApp        from './MainApp'
import Reducers       from './src/redux/reducers'
import Reduxthunk     from 'redux-thunk'
import { Provider }   from 'react-redux'
import {
  createStore,
  applyMiddleware }   from 'redux'

const store=createStore(Reducers,{},applyMiddleware(Reduxthunk))

export default App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};




