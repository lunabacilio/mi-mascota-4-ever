import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import ProfileSelection from './profilescreens/ProfileSelection';
import SuccessScreen from './SuccessScreen';
import AdoptFormRegistration1 from './formscreens/adoptant/AdoptFormRegistration1';
import AdoptFormRegistration2 from './formscreens/adoptant/AdoptFormRegistration2';
import AdoptFormRegistration3 from './formscreens/adoptant/AdoptFormRegistration3';
import PetGallery from './PetGallery';
import PetFormRegistration1 from './formscreens/pet/PetFormRegistration1';
import PetFormRegistration2 from './formscreens/pet/PetFormRegistration2';
import PetFormRegistration3 from './formscreens/pet/PetFormRegistration3';
import PetDetails from './PetDetails';
import AdoptantProfile from './profilescreens/AdoptantProfile';
import DonorProfile from './profilescreens/DonorProfile';
import AdoptantChat from './AdoptantChat';
import ChatDetails from './ChatDetails';
import RequestScreen from './RequestScreen';
import EditPetGallery from './EditPetGallery';
import EditPetDetails from './EditPetDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="ProfileSelection" component={ProfileSelection} options={{ headerShown: false }}/>
        <Stack.Screen name="AdoptFormRegistration1" component={AdoptFormRegistration1} options={{ headerShown:false }} />
        <Stack.Screen name="AdoptFormRegistration2" component={AdoptFormRegistration2} options={{ headerShown:false }} />
        <Stack.Screen name="AdoptFormRegistration3" component={AdoptFormRegistration3} options={{ headerShown:false }} />
        <Stack.Screen name="PetFormRegistration1" component={PetFormRegistration1} options={{ headerShown: false }}/>
        <Stack.Screen name="PetFormRegistration2" component={PetFormRegistration2} options={{ headerShown: false }}/>
        <Stack.Screen name="PetFormRegistration3" component={PetFormRegistration3} options={{ headerShown: false }}/>
        <Stack.Screen name="PetGallery" component={PetGallery} options={{ headerShown: false }}/>
        <Stack.Screen name="PetDetails" component={PetDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AdoptantProfile" component={AdoptantProfile} options={{ headerShown: false }}/>
        <Stack.Screen name="DonorProfile" component={DonorProfile} options={{ headerShown: false }}/>
        <Stack.Screen name="AdoptantChat" component={AdoptantChat} options={{ headerShown: false }}/>
        <Stack.Screen name="ChatDetails" component={ChatDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="RequestScreen" component={RequestScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="EditPetGallery" component={EditPetGallery} options={{ headerShown: false }}/>
        <Stack.Screen name="EditPetDetails" component={EditPetDetails} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}