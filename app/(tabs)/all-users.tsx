import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from "react-native";
import {getAllUsers, User} from "./../db/user.repository";
import CustomButton from "@/components/custom-button";

const AllUsersScreen = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        loadUsers();
    }, []);

    function loadUsers() {
        setUsers(getAllUsers());
    }

    return (
        <View style={styles.container}>
            {users && users.map(user => (
                <Text key={user.id} style={styles.mainText}>{user.name} - {user.email}</Text>
            ))}

            <CustomButton
                title={'Загрузить'}
                onPress={loadUsers}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    mainText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
});

export default AllUsersScreen;
