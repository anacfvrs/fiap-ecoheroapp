import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { RobotoMono_400Regular } from '@expo-google-fonts/roboto-mono';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RankingScreen from './screens/RankingScreen';
import TipsScreen from './screens/TipsScreen';
import RewardsScreen from './screens/RewardsScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import InfoScreen from './screens/InfoScreen';
import ChallengeDetailScreen from './screens/ChallengeDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    RobotoMono_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ranking" component={RankingScreen} />
        <Stack.Screen name="Tips" component={TipsScreen} />
        <Stack.Screen name="Rewards" component={RewardsScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="ChallengeDetail" component={ChallengeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}










