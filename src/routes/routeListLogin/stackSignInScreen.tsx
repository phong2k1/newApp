import React, { ReactElement } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routesListLogin from "./routeListLogin";


const stackNavigator = createNativeStackNavigator()


function StackSignInScreen(): ReactElement {
    return(
    <stackNavigator.Navigator initialRouteName="SignInRoute">
        {
            routesListLogin.map(({name, component}) => {
                return (
                    <stackNavigator.Screen options={{headerShown: false}} name={name} component={component} key={name} />
                )
            })
        }
    </stackNavigator.Navigator>)
}



export default StackSignInScreen

