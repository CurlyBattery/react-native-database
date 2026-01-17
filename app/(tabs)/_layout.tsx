import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Главная',
        }}
      />
      <Tabs.Screen
        name="create-user"
        options={{
          title: 'Создание пользователя',
        }}
      />
        <Tabs.Screen
            name="all-users"
            options={{
                title: 'Пользователи',
            }}
        />
    </Tabs>
  );
}
