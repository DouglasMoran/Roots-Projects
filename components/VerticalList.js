import React from 'react';
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import History from './screens/home/History'

const VerticalList = ({ data }) => {
    return (
        <>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <History item={item} />}
            />
        </>
    )


}

const styles = StyleSheet.create({
    container: {},
    listStyle: {
        marginVertical: 15
    }
});

export default VerticalList;