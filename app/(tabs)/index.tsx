import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>HomeScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold'
    },
});

export default HomeScreen;
