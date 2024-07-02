import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routesListProfile from "./routeListProfile/routeListProfile";
import StackSignInScreen from "./routeListLogin/stackSignInScreen";
import StackProfileScreen from "./routeListProfile/stackProfileScreen";



const stackNavigator = createNativeStackNavigator()

function AppNavigator({check}: any) {
    return(
        <NavigationContainer>
            <stackNavigator.Navigator>
                {!check && <stackNavigator.Screen name="SignInScreen" component={StackSignInScreen} options={{headerShown: false}} />}
                <stackNavigator.Screen name="StackScreen" component={StackProfileScreen} options={{headerShown: false}} />
            </stackNavigator.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator

