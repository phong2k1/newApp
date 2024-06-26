import React, { ReactElement, memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../../styles/home/home";
import ICBack from "../../../assets/icon/ICBack";
import ToggleSwitchGlobal from "../../../components/ToggleSwitchGlobal";


interface SelectItemProps {
    title?: string,
    icon?: ReactElement,
    switch?: boolean,
    arrow?: boolean,
    isOn?: boolean,
    onToggle?: () => void,
    onColor?: string,
    offColor?: string,
    size?:"small" | "medium" | "large";
}

function SelectItem(props: SelectItemProps) {
    const ICon = () => props.icon
    return (
        <View style = {styles.selectItem}>
        <View style={styles.ICseleccitem}>
            {props.icon}
            <Text style={styles.titleSelect}>{props.title}</Text>
        </View>
        {props.arrow && <TouchableOpacity style={styles.buttonSwitch}>
            <ICBack/>
        </TouchableOpacity>}
        {props.switch && props.isOn !== undefined && props.onToggle &&
            <View style={styles.buttonSwitch}>
                <ToggleSwitchGlobal   
                    isOn={props.isOn}
                    onColor={props.onColor}
                    offColor={props.offColor}
                    size={props.size}
                    onToggle={props.onToggle}
                />
            </View>
        }
    </View>
    )
}

export default memo(SelectItem)