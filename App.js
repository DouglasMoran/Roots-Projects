/**
 * Sample React Native App
 * https://github.co69.m/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import Screen from './components/Screen';

import PostList from './components/PostList';
import posts from './sourceData'

import HistoryList from './components/screens/home/HistoryList'
import avatars from './avatarsSourceData'

const { width } = Dimensions.get('window')

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

export default TestApp;