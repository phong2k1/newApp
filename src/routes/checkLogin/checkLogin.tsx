import { useState, useEffect } from "react";
import useSignInStorage from "../../hook/useSignInStorage/useSignInStorage";

export default function CheckLogin() {
    const {emailSignIn, checkLoad, getDataEmail} = useSignInStorage()
    const [check, setCheck] = useState<boolean>(false)

    useEffect(() => {
        getDataEmail()
    },[])

    useEffect(() => {
        emailSignIn.length > 0 ?  setCheck(true) : setCheck(false)
    },[checkLoad])

    return {check}
}

