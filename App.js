import 'react-native-gesture-handler';
import React from 'react';
import MealNavigator from './navigation/MealNavigator';
import {Provider} from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <MealNavigator/>
    </Provider>
  ) 
}
