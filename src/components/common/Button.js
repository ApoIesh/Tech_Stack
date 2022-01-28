import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress}) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={buttonStyle}
        >
            <Text style={textStyle}  >Cilck her </Text>
        </TouchableOpacity>
    );
};



const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600'
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRidius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    } 
}






export {Button};