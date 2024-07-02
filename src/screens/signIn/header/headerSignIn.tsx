import React, { ReactElement} from "react";
import { View,Text,TouchableOpacity } from "react-native";
import ICSocial from "../../../assets/icon/ICSocial";
import {styles} from "../../../styles/sigIn/signInStyle"

function HeaderSignIn(): ReactElement {
    return(
        <View>
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={styles.textSignIn}>Sign In</Text>
                    <Text style={styles.textWelcome}>Welcome back!</Text>
                </View>
                <TouchableOpacity style={styles.buttonQuestion}>
                    <ICSocial />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                
            </View>
        </View>
    )
}

export default HeaderSignIn