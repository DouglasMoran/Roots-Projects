import React from 'react';
import {
    StyleSheet,
    FlatList
} from 'react-native';
import Post from './Post';


const HorizotalList = ({ data }) => {
    return (
        <>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Post item={item} />}

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

export default HorizotalList;