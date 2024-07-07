import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../../redux/userInfo/userInfoSlide";

interface IStateAccessToken {
    user: {
        access_token: string
    }
}

export default function CheckLogin() {

    const token = useSelector((state: IStateAccessToken) => state.user.access_token)
    const dispatch = useDispatch()

    const init = async () => {
        const data = await AsyncStorage.getItem("KEY_EMAILSIGNIN")
        dispatch(login(data))
    }

    useEffect(() => {
        init()
    },[])

    return {token}
}

