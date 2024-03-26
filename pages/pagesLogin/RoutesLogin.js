import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pagesApp/Home';
import Login from './Login';
import Register from './RegisterLogin';
import React, {useState} from 'react';

const Stack = createStackNavigator();

export default function RoutesLogin(){
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="RegisterLogin" component={Register}/>
        </Stack.Navigator>
    );
}








