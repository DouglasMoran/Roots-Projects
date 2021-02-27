import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';

import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  CardActions
} from 'material-bread';

import Icon from 'react-native-vector-icons/Ionicons'

const BlockCard = ({ style, mainCardStyle, item }) => {
  return (
    /**{ flexDirection: 'row', alignItems: 'center' } */
    <View style={[style.container, style]}/*style={[style.container, style]} */>
      {/* { maxWidth: 400, width: '100%' } */}
      <Card style={mainCardStyle}>
        <CardHeader
          thumbnail={
            <Avatar
              type="image"
              image={<Image source={{ uri: item.avatar_url }} />}
              size={40}
            />
          }
          // subtitle={'Jon Snow'}
          subtitle={item.name}
          subtitleStyles={{ marginTop: 12, textAlign: 'center', fontSize: 16 }}
          action={<Icon.Button name="more-vert" size={24} />}
        />
        <CardMedia
          image={
            <Image
              style={{ flex: 1, width: '100%' }}
              source={{ uri: item.img_cover }}
              resizeMode="cover"
            />
          }
        />
        <CardContent >
          <Text style={{ color: 'rgba(0,0,0,.6)', fontSize: 14 }}>
            {item.description}
          </Text>
        </CardContent>
        <CardActions
          leftActionItems={[
            <Icon.Button style={styles.item} name="bookmark-border" size={30} />,
            <Icon.Button style={styles.item} name="bookmark-border" size={30} />,
            <Icon.Button style={styles.item} name="bookmark-border" size={30} />
          ]}
          rightActionItems={[
            { name: 'share' } 
          ]}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200
  },
  contentContainer: {
    padding: 5
  },
  item: {
    backgroundColor: '#fff',
    padding: 4,
    color: '#212121'
  },
})

export default BlockCard;