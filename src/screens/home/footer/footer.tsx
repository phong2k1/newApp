import React, { ReactElement, memo } from "react";
import { styles } from "../../../styles/home/home";
import { View, Text, TouchableOpacity } from "react-native";
import ICSharing from "../../../assets/icon/ICSharing";
import ICTrailing from "../../../assets/icon/ICTrailing";

function FooterHome(): ReactElement {
    return (
        <View style={styles.Footer}>
        <Text style={styles.titleShare}>Share Omne with your friend</Text>
        <View style={styles.contenShare}>
            <View style={styles.codeBox}>
                <Text>Referral code</Text>
                <View style={styles.code}>
                    <Text style={styles.textCode}>1A34B78</Text>
                    <TouchableOpacity>
                        <ICTrailing />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity>
                <ICSharing />
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default memo(FooterHome)