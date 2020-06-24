import * as React from 'react';
import ListScreen from './screens/ListScreen';
import AboutScreen from './screens/AboutScreen';
import StorageScreen from './screens/StorageScreen';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem //별도로 ContentOptions 지정해야함
        label="Help" 
        onPress={() => alert('도움!')} 
        style={{padding: 2}}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator 
      drawerContent= {props => <CustomDrawerContent {...props} />}
      initialRouteName="Main"
      drawerPosition="right"
      drawerStyle={{
        backgroundColor: '#ececec',
        width: 140,
      }}
      drawerContentOptions={{ 
        activeBackgroundColor: '#5588a3', 
        activeTintColor: '#ffffff',
        itemStyle: {
          borderRadius: 8,
          padding: 2,
        }
      }} 
    >
      <Drawer.Screen
        name="Main"
        component={ListScreen}
        options={{ 
          drawerLabel: 'Main',
        }}
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