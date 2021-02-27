import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import HorizotalList from './HorizontalList'

const BreakingNews = ({ data }) => {
    return (
        <HorizotalList data={data} />
    )
}

const styles = StyleSheet.create({
    container: {}
})
export default BreakingNews;