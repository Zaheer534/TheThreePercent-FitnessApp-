import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/HomeScreen/Home';
import Login from './screens/LoginScreen/Login';
import Signup from './screens/SIgnUpScreen/Signup';
import OnboardingScreen from './screens/Onbording/Onboarding';
import ChooseFocus from './screens/ChooseFocus/ChooseFocus';
import HomeScreen from './screens/Main/Home';
import Activity from './screens/Main/Activity';
import MainScreen from './screens/Main/MainScreen';
import TrainingGoals from './screens/Main/Profile/TrainingGoals';
import Workouts from './screens/Main/Profile/Workouts';
import ArmsWorkout from './screens/Main/Profile/ArmsWorkout';
import Toast from 'react-native-toast-message';
import WorkoutDetails from './screens/Main/Profile/WorkoutDetails';
import Report from './screens/Main/Profile/Report';
import PdfData from './screens/Main/Profile/PdfData';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Onboard" component={OnboardingScreen} />
          <Stack.Screen name="ChooseFocus" component={ChooseFocus} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Activity" component={Activity} />
          <Stack.Screen name="Training" component={TrainingGoals} />
          <Stack.Screen name="Workout" component={Workouts} />
          <Stack.Screen name="Arms" component={ArmsWorkout} />
          <Stack.Screen name="Details" component={WorkoutDetails} />
          <Stack.Screen name="Report" component={Report} />
          <Stack.Screen name="Data" component={PdfData} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
