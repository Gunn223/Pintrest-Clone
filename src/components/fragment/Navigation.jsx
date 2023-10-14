import { StyleSheet, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../../pages/Homepage';
import Searchpage from '../../pages/Searchpage';
import Notificationpage from '../../pages/Notificationpage';
import Profilepages from '../../pages/Profilepages';
import DetailSearch from '../layouts/DetailSearch';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../layouts/MySplashScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.container}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          if (route.name === 'home') {
            iconSource = require(`../../../public/asset/icons/home.png`);
          } else if (route.name === 'search') {
            iconSource = require(`../../../public/asset/icons/search.png`);
          } else if (route.name === 'notification') {
            iconSource = require(`../../../public/asset/icons/messenger2.png`);
          } else if (route.name === 'profile') {
            iconSource = require(`../../../public/asset/icons/add-user.png`);
          }

          return (
            <Image
              source={iconSource}
              style={{ width: size, height: size, tintColor: color }}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="home"
        component={Homepage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="search"
        component={Searchpage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="notification"
        component={Notificationpage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="profile"
        component={Profilepages}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
export const Stacknavigation = () => {
  return (
    
    <Stack.Navigator initialRouteName="Spalash">
      <Stack.Screen
        name="splash"
        component={SplashScreen}
      />
      <Stack.Screen
        name="details"
        component={DetailSearch}
      />
    </Stack.Navigator>
  );
};
// buat agar bisa di gugnkan walaupun komponent tidak ada si tab naviagtor atau buat komponent yang ada di tab avigaot hidden
const Nav = {
  Stacknavigation,
  Navigation,
};
export default Nav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
