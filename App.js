/**
 * Sample React Native App
 * https://github.co69.m/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/screens/HomeScreen';
import MediaScreen from './components/screens/MediaScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import SearchScreen from './components/screens/SearchSreen';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Media"
          component={MediaScreen}
          options={{
            tabBarLabel: 'Media',
            tabBarIcon: ({ color, size }) => (
              <Icon name="videocam-outline" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Icon name="search-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-circle-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Tabs;