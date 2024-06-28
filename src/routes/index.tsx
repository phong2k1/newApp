import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteList from "./routeList";

const stackNavigator = createNativeStackNavigator()


function StackScreen(): ReactElement {
    return(
    <stackNavigator.Navigator>
        {
            RouteList.map(({name, component}) => {
                return(
                    <stackNavigator.Screen options={{headerShown: false}} name={name} component={component} key={name} />
                )
            })
        }
    </stackNavigator.Navigator>)
}

function AppNavigator() {
    return(
        <NavigationContainer>
            <StackScreen />
        </NavigationContainer>
    )
}

export default AppNavigator

