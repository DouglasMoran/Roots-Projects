import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window')

const HistoryLayout = ({ item }) => {
  return (
    <View style={stylesHistoryAvatar.historyClausule}>
      <Image style={stylesHistoryAvatar.imageStyle} source={{ uri: item.avatar_url }} />
      <Text style={stylesHistoryAvatar.textStyle}>{item.user}</Text>
    </View>
  )
};

const stylesHistoryAvatar = StyleSheet.create({
  historyContainerMain: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: 'row',
    justifyContent: "flex-start",
    backgroundColor: 'red',
    width: width / 1
  },
  historyClausule: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 1,
  },
  cardStyle: {
    borderStyle: 'solid',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: "red"
  },
  imageStyle: {
    width: 60,
    height: 60,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 100 / 2,
    borderColor: 'purple',
    borderWidth: 3,
    backgroundColor: '#00000000',
    marginTop: 16,
    marginStart: 8,
    marginEnd: 8,
  },
  textStyle: {
    alignItems: "center",
    flexDirection: "column",
    alignItems: 'center',
    fontSize: 12,
    color: 'black',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  imageContainer: {
    width: 200,
    alignItems: 'center',
  },
});


export default HistoryLayout;