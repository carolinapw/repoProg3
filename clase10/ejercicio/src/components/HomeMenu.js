import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function HomeMenu() {
  return (
    <Tab.Navigator screenOptions={ { tabBarShowLabel: false } }>
        <Tab.Screen name="Home" component={ Home } options={{ headerShown: false , tabBarIcon: () => <Entypo name="home" size={24} color="black" /> }}/>
        <Tab.Screen name="Profile" component={ Profile } options={{ headerShown: false, tabBarIcon: () => <FontAwesome name="user" size={24} color="black" /> }} />
    </Tab.Navigator>
  );
}

export default HomeMenu