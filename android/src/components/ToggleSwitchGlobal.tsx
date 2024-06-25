import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native'

interface ToggleSwitchProps {
    isOn: boolean;
    onColor?: string;
    offColor?: string;
    label?: string;
    size?:"small" | "medium" | "large";
    onToggle: () => void;
}

function ToggleSwitchGlobal(props: ToggleSwitchProps) {
    return(
        <ToggleSwitch   
        isOn={props.isOn}
        onColor={props.onColor}
        offColor={props.offColor}
        size={props.size}
        onToggle={props.onToggle}
        />
    )
}

export default ToggleSwitchGlobal