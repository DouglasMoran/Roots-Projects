import React from 'react';
import {
    StyleSheet
} from 'react-native';
import HorizotalList from './HorizontalList'

const PostList = ({ data }) => {
    return (
        <HorizotalList data={data} />
    )
}

const styles = StyleSheet.create({
    container: {}
})
export default PostList;