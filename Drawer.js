import * as React from 'react';
import ListScreen from './screens/ListScreen';
import AboutScreen from './screens/AboutScreen';
import StorageScreen from './screens/StorageScreen';
import { createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="Main"
      drawerPosition="right"
      drawerStyle={{
        backgroundColor: '#ececec',
      }}
    >
      <Drawer.Screen
        name="Main"
        component={ListScreen}
        options={{ drawerLabel: 'Main' }}
      />
      <Drawer.Screen
        name="Storage"
        component={StorageScreen}
        options={{ drawerLabel: 'Storage' }}
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