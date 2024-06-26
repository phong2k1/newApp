
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";


function useStorage() {
  const [valueBiometric, setValueBiometric] = useState<boolean>(false)
  const [valueNotification, setValueNotification] = useState<boolean>(false)
  const [checkLoadBiometric, setLoadBiometric] = useState<any>("")
  const [checkLoadNotification, setLoadNotification] = useState<any>("")

    const setDataBiometric = async (data: boolean) => {
      try {
        await AsyncStorage.setItem("KEY_BIOMETRIC", JSON.stringify(data))
      } catch {
        console.log("err");
      }
    }
  
    const getDataBiometric = async() => {
      try {
        const data = await AsyncStorage.getItem("KEY_BIOMETRIC")
        data && setValueBiometric(JSON.parse(data))
        setLoadBiometric(data)
    } catch {
      console.log("err");
      }
    }
  
    const setDataAllowNotification = async(data: boolean) => {
      try{
        await AsyncStorage.setItem("KEY_NOTIFICATION", JSON.stringify(data))
        console.log(data);
        
      } catch{
        console.log("err");
      }
    }
  
    const getDataAllowNotification = async() => {
      try {
        const data = await AsyncStorage.getItem("KEY_NOTIFICATION")
        data && setValueNotification(JSON.parse(data))
        setLoadNotification(data)
      }catch {
        console.log("err");
      }
    }

    return {
      setDataBiometric,
      getDataBiometric,
      setDataAllowNotification,
      getDataAllowNotification,
      valueBiometric,
      valueNotification,
      checkLoadBiometric,
      checkLoadNotification
    }
}

export default useStorage





