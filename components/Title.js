import React from 'react';
import {
    Text
} from 'react-native';

const Title = ({
    children, numOfLines = 2, size = 18
}) => {
    return (
        <Text numberOfLines={numOfLines}
            style={{
                fontWeight: 'bold',
                fontSize: size
            }}>
            {children}
        </Text>
    );
};

export default Title;