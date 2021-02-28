import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.co69.m/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Screen from './components/Screen';

import PostList from './components/PostList';
import posts from './sourceData'

import HistoryList from './components/screens/home/HistoryList'
import avatars from './avatarsSourceData'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/screens/HomeScreen'
import MediaScreen from './components/screens/MediaScreen'
import ProfileScreen from './components/screens/ProfileScreen'
import SearchSreen from './components/screens/SearchSreen'

const Tab = createBottomTabNavigator();

const { width } = Dimensions.get('window')

function MyTabs() {
  return (
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
            <Icon name="hommenu-outlinee" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Media"
        component={MediaScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <Icon name="menu-outline" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchSreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="menu-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="menu-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const TestApp = () => {

  const postList = posts;
  const listAvatars = avatars;

  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <View style={styles.historyContainerMain}>
          <HistoryList data={listAvatars} />
        </View>
        <View style={styles.postContainerMain}>
          <PostList data={postList} />
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  historyContainerMain: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: 'row',
    justifyContent: "flex-start",
    backgroundColor: '#00000000',
    width: width / 1,
    marginStart: 8,
    marginEnd: 8,
    marginTop: 8,
  },
  postContainerMain: {
    backgroundColor: 'gray',
    flex: 5,
    marginTop: 1,
    borderTopColor: '#212121',
    borderBottomColor: '#212121',
    backgroundColor: '#fff'
  }
});

export default function MainTabsScreen() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}