import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import React from 'react'
import All from "./All"
import Buying from "./Buying"
import Selling from "./Selling"

const Tab = createMaterialTopTabNavigator();
 function NavChats() {
    return (
    
        <Tab.Navigator>
            <Tab.Screen name="All" component={All} />
            <Tab.Screen name="Buying" component={Buying} />
            <Tab.Screen name="Selling" component={Selling} />


        </Tab.Navigator>
    
    )
}
export default NavChats;

