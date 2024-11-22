import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import ProfileSelection from './ProfileSelection';
import SuccessScreen from './SuccessScreen';
import FormRegistration1 from './formscreens/adoptant/AdoptFormRegistration1';
import FormRegistration2 from './formscreens/adoptant/AdoptFormRegistration2';
import FormRegistration3 from './formscreens/adoptant/AdoptFormRegistration3';
import PetGallery from './PetGallery';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="ProfileSelection" component={ProfileSelection} options={{ headerShown: false }}/>
        <Stack.Screen name="FormRegistration1" component={FormRegistration1} options={{ headerShown:false }} />
        <Stack.Screen name="FormRegistration2" component={FormRegistration2} options={{ headerShown:false }} />
        <Stack.Screen name="FormRegistration3" component={FormRegistration3} options={{ headerShown:false }} />
        <Stack.Screen name="PetGallery" component={PetGallery} options={{ headerShown: false }}/>
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}