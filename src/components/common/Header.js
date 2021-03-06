import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
    const { textStyle, viewStyle } = styles


    return (
        <View style={viewStyle} >
            <Text style={textStyle} >{props.headerText}</Text>
        </View>
        
    );
};


const styles = ({
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 0.9,
        elevation:2,
        position:'relative'

    },
    textStyle: {
        fontSize: 20,

    }
});



export  {Header};