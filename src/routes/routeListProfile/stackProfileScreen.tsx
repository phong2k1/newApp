import React, { ReactElement } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routesListProfile from "./routeListProfile";



const stackNavigator = createNativeStackNavigator()


function StackProfileScreen(): ReactElement {
    return(
    <stackNavigator.Navigator>
        {
            routesListProfile.map(({name, component}) => {
                return(
                    <stackNavigator.Screen options={{headerShown: false}} name={name} component={component} key={name} />
                )
            })
        }
    </stackNavigator.Navigator>)
}




export default StackProfileScreen

