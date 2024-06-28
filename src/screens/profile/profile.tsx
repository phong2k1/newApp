import React, { ReactElement } from "react";
import {Button, ScrollView, View} from "react-native";
import {styles} from "../../styles/profile/myProfileStyle"
import Header from "./header/header";
import ContentHome from "./content/content";
import FooterHome from "./footer/footer";

function Profile(): ReactElement {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <ContentHome />
            <FooterHome />
            <View style={{height: 50}} />
        </ScrollView>
    )
}
export default Profile



