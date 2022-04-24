import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

const LoginStack = createNativeStackNavigator();

const NavigationLogin = () => {
    return(
        <LoginStack.Navigator >
            <LoginStack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen}/>
            <LoginStack.Screen options={{headerShown: false}} name="SignupScreen" component={SignupScreen}/>
        </LoginStack.Navigator>
    )
}
export default Navigation = () => {
    return(
        <NavigationContainer>
            <NavigationLogin />
        </NavigationContainer>
    )
}