import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function useSignInStorage() {
    const [emailSignIn, setEmailSignIn] = useState<any>("")
    const [checkLoad, setCheckLoad] = useState<any>("")


    const setDataEmail = async (data: string) => {
        try {
            await AsyncStorage.setItem("KEY_EMAILSIGNIN", data)
        } catch {
            //err
        }
    }

    const getDataEmail = async () => {
        try {
            let data = await AsyncStorage.getItem("KEY_EMAILSIGNIN")
            setEmailSignIn(data)
            setCheckLoad(data)
        } catch {
            //err
        }
    }

    return {
        setDataEmail,
        getDataEmail,
        emailSignIn,
        checkLoad
    }

}