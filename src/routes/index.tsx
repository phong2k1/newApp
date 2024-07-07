import React, {useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackSignInScreen from "./routeListLogin/stackSignInScreen";
import StackProfileScreen from "./routeListProfile/stackProfileScreen";
import { useSelector, useDispatch } from "react-redux";
import {login } from "../redux/userInfo/userInfoSlide";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CheckLogin from "./checkLogin/checkLogin";


interface IStateAccessToken {
    user: {
        access_token: string
    }
}


function AppNavigator() {
    const {token} = CheckLogin()
    return(
        <NavigationContainer>
            {token === null &&  <StackSignInScreen />}
            {token && token !== "" && (<StackProfileScreen />)}
        </NavigationContainer>
    )
}

export default AppNavigator

