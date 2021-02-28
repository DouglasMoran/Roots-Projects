import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import HistoryLayout from './HistoryLayout'

const { width } = Dimensions.get('window')

const History = ({ item }) => {
    return <HistoryLayout
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
        width: '100%'
    },
    imageStyle: {
        flex: 1,
        width: '100%'
    }
})


export default History;