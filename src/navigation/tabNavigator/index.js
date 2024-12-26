import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../../patterns/tabBar/index.jsx';
import HomeStack from "../stackScreen/homeStack/index.js";
import ClassStack from "../stackScreen/classStack/index.js";
import ProfileStack from "../stackScreen/profileStack/index.js";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
	return (
	  <Tab.Navigator 
	  	initialRouteName="Home"
		screenOptions={{headerShown: false}}
		
		tabBar={(props) => <TabBar {...props} />}>
		<Tab.Screen name="Class" component={ClassStack} />
		<Tab.Screen name="Home" component={HomeStack} />
		<Tab.Screen name="Profile" component={ProfileStack} />
	  </Tab.Navigator>
	);
  }