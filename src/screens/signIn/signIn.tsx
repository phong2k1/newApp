import React, { ReactElement} from "react";
import {View} from "react-native";
import {styles} from "../../styles/sigIn/signInStyle"
import HeaderSignIn from "./header/headerSignIn"
import ContentSignIn from "./content/contentSigIn";

function SignIn(): ReactElement {
    return(
        <View style = {styles.container}>
            <HeaderSignIn />
            <ContentSignIn />
        </View>
    )
}

export default SignIn
