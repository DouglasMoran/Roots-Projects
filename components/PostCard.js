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

const PostCard = ({ style, mainCardStyle, item }) => {
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
          action={<Icon.Button color='#212121' style={styles.iconButton} name="menu-outline" size={24} />}
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
            <Icon.Button color='#212121' style={styles.iconButton} name="menu" size={24} />,
            <Icon.Button color='#212121' style={styles.iconButton} name="add-outline" size={24} />,
            <Icon.Button color='#212121' style={styles.iconButton} name="heart-outline" size={24} />
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
    height: 275,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginTop: 16,
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
  iconButton: {
    backgroundColor: '#fff',
    flex: 1,
  },
})

export default PostCard;