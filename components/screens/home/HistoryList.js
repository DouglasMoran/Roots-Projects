import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import VerticalList from '../../VerticalList';

const HistoryList = ({ data }) => {
    return (
        <VerticalList data={data} />
    )
}

const styles = StyleSheet.create({
    container: {}
})
export default HistoryList;