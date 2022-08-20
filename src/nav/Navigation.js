import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../screen/home/Home"
import Chats from "../screen/chats/Chats"
import Setting from '../screen/Setting';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconLike from 'react-native-vector-icons/dist/AntDesign';
import IconAccount from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import IconCa from 'react-native-vector-icons/dist/Ionicons';
import Adds from '../screen/adds/Adds';
import Account from '../screen/account/Account';
import Add from '../screen/add/Add';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Setting" component={Setting} />



      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} /> */}
      {/* <Stack.Screen name="chats" component={Chats} /> */}

    </Stack.Navigator>
  );
}



export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return <Icon name={"home"} size={size} color={"black"} />

            }
            else if (route.name === 'Chats') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
              return <IconCa name={"chatbox-ellipses-outline"} size={size} color={"black"} />
            }
            else if (route.name === 'Ads') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
              return <IconLike name={"heart"} size={size} color={"black"} />
            }
            else if (route.name === 'Account') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
              return <IconAccount name={"account"} size={size} color={"black"} />
            }
            else if (route.name === 'Add') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
              return <IconCa name={"add-circle"} size={35} color={"black"} />
            }


            // You can return any component that you like here!
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Add" component={Add} />

        <Tab.Screen name="Ads" component={Adds} />

        <Tab.Screen name="Account" component={Account} />

      </Tab.Navigator>
      <Drawer.Screen name="Stack" component={StackNavigation} />

    </NavigationContainer>
  );
}