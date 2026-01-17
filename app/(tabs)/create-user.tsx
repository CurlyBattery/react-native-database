import React, {useState} from 'react';
import {Button, TextInput, View, Text, TouchableWithoutFeedback, Keyboard, Alert, StyleSheet} from "react-native";
import {createUser} from "./../db/user.repository";
import CustomButton from "@/components/custom-button";

const CreateUserScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleCreateUser = () => {
        const isValidateName = name.trim().length > 0;
        const isValidateEmail = email.trim().length > 0 && email.includes('@');
        if(isValidateName && isValidateEmail) {
            createUser(name, email);
            setName('');
            setEmail('');
            Alert.alert('Успех', 'Пользователь создан')
        } else {
            Alert.alert('Ошибка', 'Введите валидное имя и майл')
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ padding: 30 }}>
           <View style={styles.container}>
               <Text style={styles.title}>Создание</Text>

               <TextInput
                   placeholder={'Имя'}
                   value={name}
                   onChangeText={setName}
                   style={styles.input}
               />
               <TextInput
                   placeholder={'Майл'}
                   value={email}
                   onChangeText={setEmail}
                   style={styles.input}
               />
               <CustomButton
                   title={'Создать'}
                   onPress={handleCreateUser}
               />
           </View>
        </TouchableWithoutFeedback>
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
    input: {
        padding: 10,
        fontSize: 30
    }
});

export default CreateUserScreen;

