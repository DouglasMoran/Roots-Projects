import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import Screen from '../Screen';
import PostList from '../PostList';
import posts from '../dataList/sourceData';

import HistoryList from '../screens/home/HistoryList';
import avatars from '../dataList/avatarsSourceData';

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
    marginEnd: 8,
  },
  postContainerMain: {
    backgroundColor: 'gray',
    flex: 4,
    marginTop: 1,
    borderTopColor: '#212121',
    borderBottomColor: '#212121',
    backgroundColor: '#fff'
  }
});

export default TestApp;