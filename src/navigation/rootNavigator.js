import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AsyncStorage from "@react-native-async-storage/async-storage";

import TabBar from "../patterns/tabBar/index.jsx";
import HomeStack from "./appStacks/homeStack/index.js";
import ClassStack from "./appStacks/classStack/index.js";
import ProfileStack from "./appStacks/profileStack/index.js";
import LoginScreen from "../screens/LoginScreen/index.jsx";
import RegisterScreen from "../screens/RegisterScreen/index.jsx";

export default function RootNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const AuthStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  useEffect(() => {
      //TODO: Check if user is authenticated
      const checkAuth = async () => {
        const token = await AsyncStorage.getItem('token');
          if(testToken(token)){
            setIsAuthenticated(true);
          }
        };
      checkAuth();
  }, []);

  const testToken = async (token) => {
    const response = await fetch(`${this.url}/home`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        mode: 'cors'
    });

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
        <Tab.Screen name="Class" component={ClassStack} />
        <Tab.Screen name="Home" component={HomeStack} />
        
        <Tab.Screen name="Profile">
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