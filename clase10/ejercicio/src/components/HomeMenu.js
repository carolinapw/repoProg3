import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Users from "../screens/Users";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

function HomeMenu() {
  return (
    <Tab.Navigator screenOptions={ { tabBarShowLabel: false } }>
        <Tab.Screen name="Home" component={ Home } options={{ headerShown: false , tabBarIcon: () => <Entypo name="home" size={24} color="black" /> }}/>
        <Tab.Screen name="Profile" component={ Profile } options={{ headerShown: false, tabBarIcon: () => <FontAwesome name="user" size={24} color="black" /> }} />
        <Tab.Screen name="Usuarios" component={Users} options={{ headerShown: false, tabBarIcon: () => <Feather name="users" size={24} color="black" /> }}/>
    </Tab.Navigator>
  );
}

export default HomeMenu