import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import { Constants } from 'expo';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default createMaterialTopTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'HOME'
    }),
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'SETTINGS',
    }),
  }
}, {
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: '#008773',
      },
      indicatorStyle: {
        backgroundColor: '#f2c975',
      }
    }
  });



// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
// });

// HomeStack.navigationOptions = {
//   tabBarLabel: 'HOME'
//     // tabBarIcon: ({ focused }) => (
//   //   <TabBarIcon
//   //     focused={focused}
//   //     name={
//   //       Platform.OS === 'ios'
//   //         ? `ios-information-circle${focused ? '' : '-outline'}`
//   //         : 'md-information-circle'
//   //     }
//   //   />
//   // ),
// };

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'SETTINGS'
//   // tabBarIcon: ({ focused }) => (
//   //   <TabBarIcon
//   //     focused={focused}
//   //     name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//   //   />
//   // ),
// };