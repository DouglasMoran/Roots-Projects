import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView
} from 'react-native';

import {
    Avatar
} from 'material-bread';

const Avatar = ({ item }) => {
    return (
        <View>
            <Avatar
                type="image"
                image={< Image source={{ uri: item.avatar_url }}
                    size={64} />}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#212121",
    },
});


export default Avatar;