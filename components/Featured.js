import React from 'react';
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import BlockCard from './MainCard';

const FeaturedNews = ({item}) => {
    return <BlockCard item={item} />;
};

const styles = StyleSheet.create({
    container: {}
});

export default FeaturedNews;