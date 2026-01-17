import React from 'react';
import {Pressable, Text, StyleSheet} from "react-native";

type CustomButtonProps = {
    title: string,
    onPress: () => void,
}

const CustomButton = ({ title, onPress }: CustomButtonProps) => {
    return (
        <Pressable onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 48,
        backgroundColor: '#2563eb',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '600',
    }
})

export default CustomButton;