/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  SafeAreaView,
  FlatList
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context'

/* import {
  ListItem,
} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons' */

// import {
//   Appbar,
//   Card,
//   CardHeader,
//   Avatar,
//   CardMedia,
//   CardContent,
//   CardActions
// } from 'material-bread';

import Screen from './components/Screen'
import BlockCard from './components/BlockCard'
import BreakingNews from './components/BreakingNews'
import SmallCard from './components/SmallCard'

import data from './sourceData'

/* const App = (props) => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content" backgroundColor="#fff" translucent={false} />
      <View style={{
        flex: 1
      }}>
        <Appbar
          barType={"normal"}
          title={'Instagram'}
          titleStyles={{ color: '#212121' }}
          color={'#fff'}
          backgroundColor='#fff'
          actionItems={[
            <Icon.Button color='#212121' style={styles.iconButton} name='heart-outline' size={24} />,
            <Icon.Button color='#212121' style={styles.iconButton} name='heart-outline' size={24} />,
            <Icon.Button color='#212121' style={styles.iconButton} name='heart-outline' size={24} />
          ]} />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Card style={{ maxWidth: 400, width: '100%' }}>
            <CardHeader
              thumbnail={<Avatar
                type="image"
                image={<Image source={{ uri: 'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/john-snow-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg' }} />}
                size={40} />}
              subtitle={'Jon Snow'}
              subtitleStyles={{ marginTop: 12, textAlign: 'center', fontSize: 16 }}
              action={<Icon name="heart" type='material' size={24} />} />
            <CardMedia
              image={<Image
                style={{ flex: 1, width: '100%' }}
                source={{ uri: 'https://formandocodigo.com/imagenes/cursos/portadas/portada-curso-aplicacion-fastfood-con-react-native-con-redux.png' }}
                resizeMode="cover" />} />
            <CardContent>
              <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
                Ran out of bleach for beard, but Daenerys says it looks cool.
              </Text>
            </CardContent>
            <CardActions
              leftActionItems={[
                <Icon.Button color='#212121' style={styles.iconButton} name="heart-outline" size={24} />,
                <Icon.Button color='#212121' style={styles.iconButton} name='heart-outline' size={24} />,
                <Icon.Button color='#212121' style={styles.iconButton} name='heart-outline' size={24} />,
              ]}
              rightActionItems={[
                <Icon.Button color='#212121' style={styles.iconButton} type='material' name='funnel-outline' size={24} />,
              ]} />
          </Card>
        </View>

        {/* <View>
          {
            data.map((l, i)) => (
              <ListItem key={i} bottomDivider>
            <Avatar source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>l.name</ListItem.Title>
              <ListItem.Subtitle>l.description</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
            )
        //   }
        // </View> *///}

//       </View>
//     </SafeAreaProvider>
//   );
// }; */

/* const Item = ({ item }) => {
  <View style={stylesList.containerList}>
    <ListItem key={i} bottomDivider>
      <Avatar source={{ uri: item.avatar_url }} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  </View>
} */

/* const ItemApp = () => {
  const renderItem = ({ item }) => {
    <Item title={item.title} />
  };



  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
} */

const TestApp = () => {

  const listItems = data

  return (
    <Screen>
      <BreakingNews data={listItems} />
    </Screen>
  )
}

/* const styles = StyleSheet.create({
  iconButton: {
    padding: 6,
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  containerList: {
    flex: 1,
    backgroundColor: 'green',
  },
  mainCard: {}
}); */

/* const stylesList = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  }
}); */


export default TestApp;


