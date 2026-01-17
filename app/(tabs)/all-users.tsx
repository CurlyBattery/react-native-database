import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from "react-native";
import {getAllUsers, User} from "./../db/user.repository";

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

            <Button
                title={'Загрузить'}
                onPress={loadUsers}
                color={'red'}
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
