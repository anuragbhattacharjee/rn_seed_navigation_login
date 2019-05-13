import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';


export default AppStackNavigator = createMaterialTopTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => {
                return <Ionicons name='ios-home' size={25} color={tintColor} />
                // <Icon name="ios-home" color={tintColor} size={25} />
            }
        }
    },
    Search: {
        screen: SearchScreen,
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: ({tintColor}) => {
                // return <Ionicons name='ios-search' size={25} color={tintColor} />
                return <Icon name="ios-search" color={tintColor} size={25} />
            }
        }} 
},{
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    swipeEnabled: true, // Deafult true
    animationEnabled: true, // Deafult true
    tabBarOptions: {
        activeTintColor: 'orange',
        inactiveTintColor: 'white',
        style:{
            backgroundColor: '#00838f',
            borderTopWidth: 0.5,
            borderTopColor: 'grey'
        },
        indicatorStyle:{
            // height: 0
        },
        showIcon: true
    }
    // order: ['Home', 'Search'],
    // activeColor: '#f0edf6',
    // inactiveColor: '#3e2465',
    // barStyle: { backgroundColor: '#694fad' },
});


// export default AppStackNavigator = createBottomTabNavigator({
//     Home: HomeScreen,
//     Search: SearchScreen,
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let IconComponent = Ionicons;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `ios-home`;
//         } else if (routeName === 'Search') {
//           iconName = `ios-search`;
//         }

//         // You can return any component that you like here!
//         return <IconComponent name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'green',
//       inactiveTintColor: 'gray',
//     },
//   }
// );
  
// export default createAppContainer(TabNavigator);