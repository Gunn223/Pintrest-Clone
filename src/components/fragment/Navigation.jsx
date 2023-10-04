import { StyleSheet, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../../pages/Homepage';
import Searchpage from '../../pages/Searchpage';
import Notificationpage from '../../pages/Notificationpage';
import Profilepages from '../../pages/Profilepages';

const Tab = createBottomTabNavigator();
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

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
