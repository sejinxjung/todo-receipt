import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListScreen from './screens/ListScreen';
import AboutScreen from './screens/AboutScreen';
import DoneScreen from './screens/DoneScreen';


const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="Main"
      drawerPosition="right"
    >
      <Drawer.Screen
        name="Main"
        component={ListScreen}
        options={{ drawerLabel: 'Main' }}
      />
      <Drawer.Screen
        name="Done"
        component={DoneScreen}
        options={{ drawerLabel: 'Done' }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{ drawerLabel: 'About' }}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer