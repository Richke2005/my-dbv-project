import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home/home';
import Login from './src/screens/login/login';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
      name="Home"
      component={Home}
      options={{title: "Home-Page"}}
      />
      <Stack.Screen 
      name="Login"
      component={Login} 
      options={{title: "login"}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}


