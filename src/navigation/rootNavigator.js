import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ProfileService } from "../infra/services/index.js";
import AsyncStorage from "@react-native-async-storage/async-storage";


import TabBar from "../patterns/tabBar/index.jsx";
import SocialClubStack from "./appStacks/socialClubStack/index.js";
import LibraryStack from "./appStacks/libraryStack/index.js";
import HomeStack from "./appStacks/homeStack/index.js";
import ProfileStack from "./appStacks/profileStack/index.js";
import LoginScreen from "../screens/LoginScreen/index.jsx";
import RegisterScreen from "../screens/RegisterScreen/index.jsx";

export default function RootNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const AuthStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  useEffect(() => {
      //TODO: Check if user is authenticated
      checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = await AsyncStorage.getItem('token');
    const status = await testToken(token);
    if(status){
      setIsAuthenticated(true);
    }else{
      setIsAuthenticated(false);
    }
  };

  async function testToken(token) {
    if(token === undefined) return false;
    const response = await new ProfileService().testToken(token);
    
    return (response.status === 200);
  };


  function loginToApp (){
    setIsAuthenticated(true);
  };

  function logout(){
    setIsAuthenticated(false);
  }

  const RenderAuthStack = ()=> {
    return (
      <AuthStack.Navigator initialRouteName="Login" 
      screenOptions={{headerShown: true}}>
        <AuthStack.Screen name="Login" options={{headerShown: false}}>
          {(props) => <LoginScreen {...props} onStoreToken={loginToApp}/>}
        </AuthStack.Screen>
      </AuthStack.Navigator>
    );
  }

  const RenderAppTabs = ()=> {
    return (
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{headerShown: false, tabBarStyle: { display: 'none' }}}
        safeAreaInsets={{top: 0}}
        tabBar={(props) => <TabBar {...props}/>}>
          <Tab.Screen 
            name="SocialArea" 
            component={SocialClubStack} 
            options={{
            tabBarLabel: 'Discover',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="rocket" size={size} color={color} />;
            }}}/>
          <Tab.Screen 
            name="Books" 
            component={LibraryStack} 
            options={{
              tabBarLabel: 'Books',
              tabBarIcon: ({ color, size }) => {
                return <Icon name="book" size={size} color={color} />;
              }}}/>
          <Tab.Screen 
            name="Home" 
            component={HomeStack} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => {
                return <Icon name="home" size={size} color={color} />;
              }}}/>

          <Tab.Screen 
            name="Profile" 
            options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="account" size={size} color={color} />;
            }
            }}>
            {(props) => <ProfileStack {...props} logout={logout}/>}
          </Tab.Screen>
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
        {isAuthenticated ? <RenderAppTabs/> : <RenderAuthStack/>}
    </NavigationContainer>
  );
}