import React from "react";
import { TextInput, View, Text } from "react-native";


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputS, labelS, containerS } = styles;
    return (
        <View style={containerS} >
            <Text style={labelS}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputS}
                value={value}
                onChangeText={onChangeText}
            />

        </View>
    )

};
const styles = {
    inputS: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 3
    },
    labelS: {
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    },
    containerS: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}


export { Input };