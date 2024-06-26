import React, { ReactElement } from "react";
import {ScrollView, View} from "react-native";
import {styles} from "../../styles/home/home"
import Header from "./header/header";
import ContentHome from "./content/content";
import FooterHome from "./footer/footer";

function Home(): ReactElement {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <ContentHome />
            <FooterHome />
            <View style={{height: 50}} />
        </ScrollView>
    )
}
export default Home

