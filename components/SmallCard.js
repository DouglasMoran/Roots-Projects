import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import BlockCard from './BlockCard'

const { width } = Dimensions.get('window')

const SmallCard = ({ item }) => {
    return <BlockCard
        style={styles.container}
        style={styles.mainCardStyle}
        item={item} />;
}

const styles = StyleSheet.create({
    container: {
        width: width / 5,
        marginRight: 15,
        height: 200
    },
    mainCardStyle: {
        maxWidth: 400,
        width: '100%'
    },
    imageStyle: {
        flex: 1,
        width: '100%'
    }
})


export default SmallCard;