import React from 'react';
import {
    StatusBar,
    View,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

import {
    Appbar,
} from 'material-bread';

import Icon from 'react-native-vector-icons/Ionicons'

const Screen = ({ children }) => {
    return (
        <SafeAreaView style={styles.containerMain}>
            <StatusBar
                barStyle="dark-content" backgroundColor="#fff" translucent={false} />
            <View style={styles.containerMain}>
            <Appbar
          barType={"normal"}
          title={'Instagram'}
          titleStyles={{ color: '#212121' }}
          color={'#fff'}
          backgroundColor='#fff'
          actionItems={[
            <Icon.Button color='#212121'  style={styles.iconButton} name='add-outline' size={24} />,
            <Icon.Button color='#212121' style={styles.iconButton} name='heart-outline' size={24} />,
            <Icon.Button color='#212121' style={styles.iconButton} name='heart-outline' size={24} />
          ]} />
                {children}
            </View>
        </SafeAreaView>

    )

    // <View style={styles.container} >{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        marginTop: StatusBar.currentHeight || 0,
    },
    containerMain: {
        flex: 1,
    },
    iconButton: {
        backgroundColor: '#fff',
        flex: 1,
    }
});

export default Screen;