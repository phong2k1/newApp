import React, {ReactElement, useEffect, useState, memo, useCallback} from "react";
import { View } from "react-native";
import SelectItem from "../selectItem/selectItem";
import { styles } from "../../../styles/profile/myProfileStyle";
import ICBiometric from "../../../assets/icon/ICBiometric";
import ICNotification from "../../../assets/icon/ICNotification";
import ICChangeLanguage from "../../../assets/icon/ICLanguage";
import ICConnect from "../../../assets/icon/ICConnect";
import ICSocial from "../../../assets/icon/ICSocial";
import ICConnectSupport from "../../../assets/icon/ICConnectSupport";
import ICHelp from "../../../assets/icon/ICHelp";
import useProfileStorage from "../../../hook/useProfileStorage/useProfileStorage";

interface IDataSelect {
    data: {
    title?: string,
    icon?: ReactElement,
    switch?: boolean,
    arrow?: boolean,
    isOn?: boolean,
    onToggle?: () => void,
    onColor?: string,
    offColor?: string,
    size?:"small" | "medium" | "large";
}[]
};

function ContentHome(): ReactElement {
    const [isOnBiometric, setOnBiometric] = useState<boolean>(false)
    const [isOnNotification, setOnNotification] = useState<boolean>(false)
    const {setDataBiometric, getDataBiometric, setDataAllowNotification, getDataAllowNotification,valueBiometric,
        valueNotification,checkLoadBiometric,checkLoadNotification} 
    = useProfileStorage()

    const dataSelect:IDataSelect = {
        data: [
            {
                switch: true,
                isOn: isOnBiometric,
                icon: <ICBiometric />,
                title: "Biometric Login",
                onColor: "#669900",
                offColor: "#C0C0C0",
                size: "medium",
                onToggle: () => handleSwitchBiometric(),
            },
            {
                switch: true,
                isOn: isOnNotification,
                icon: <ICNotification />,
                title: "Allow Notification",
                onColor: "#669900",
                offColor: "#C0C0C0",
                size: "medium",
                onToggle: () => handleSwitchNotification(),
            },
            {
                arrow: true,
                icon: <ICChangeLanguage />,
                title: "Change language",
            },
            {
                icon: <ICConnect />,
                title: "Connect to",
            },
            {
                arrow: true,
                icon: <ICSocial />,
                title: "Change language",
            },
            {
                arrow: true,
                icon: <ICConnectSupport />,
                title: "Connect Support",
            },
            {
                arrow: true,
                icon: <ICHelp />,
                title: "Help",
            }
        ]
    }

    useEffect(() => {
        getDataBiometric()
        setOnBiometric(valueBiometric)
    },[checkLoadBiometric])

    useEffect (() => {
        getDataAllowNotification()
        setOnNotification(valueNotification)
    },[checkLoadNotification])

    const handleSwitchBiometric = useCallback(() => {
        setOnBiometric(pev => !pev)
        setDataBiometric(!isOnBiometric)  
    },[isOnBiometric])

    const handleSwitchNotification = useCallback(() => {
        setOnNotification(pev => !pev)
        setDataAllowNotification(!isOnNotification)
    },[isOnNotification])
    
    return (
        <View style={styles.content}>
            {
                dataSelect.data.map((e, i) => {
                    return (
                        <View key={i}>
                            <SelectItem
                            switch={e.switch}
                            isOn={e.isOn}
                            icon={e.icon}
                            title={e.title}
                            onColor={e.onColor}
                            offColor={e.offColor}
                            size={e.size}
                            onToggle={e.onToggle}
                            />
                        </View>
                    )
                })
            }

    </View>
    )
}

export default memo(ContentHome)