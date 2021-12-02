import React from 'react';
import { View } from 'react-native';
import ScanScreen from './screens/ScanScreen';
import { createAppContainer } from 'react-navigation';


export default class App extends React.Component {
  render(){
    return (
      <View> <AppNav/> </View>
        
      
    );
    
  }
}
const bottomtab=createBottomTabNavigator({
  ScanScreen:ScanScreen,
  
})
const AppNav=createAppContainer(bottomtab)



