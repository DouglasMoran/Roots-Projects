import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import PostCard from './PostCard'

const { width } = Dimensions.get('window')

const Post = ({ item }) => {
    return <PostCard
        style={styles.container}
        style={styles.mainCardStyle}
        item={item} />;
}

const styles = StyleSheet.create({
    container: {
        width: width / 2,
        marginRight: 15,
        height: 200
    },
    mainCardStyle: {
        maxWidth: 400,
        width: '100%',
        borderRadius: 0,
    },
    imageStyle: {
        flex: 1,
        width: '100%'
    }
})

export default Post;