import React, { ReactElement, useState, memo, useEffect, useRef } from "react";
import { 
    Text, 
    TouchableOpacity, 
    View, 
    TextInput, 
    KeyboardAvoidingView, 
    Platform,
} from "react-native";
import { styles } from "../../../styles/sigIn/signInStyle";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import useSignInStorage from "../../../hook/useSignInStorage/useSignInStorage"

function ContentSignIn(): ReactElement {
    const [showInput, setShowInput] = useState<number>(0)
    const [checkEmail, setCheckEmail] = useState<string>("")
    const [checkMobileNumber, setCheckMobileNumber] = useState<string>("")
    const {emailSignIn, getDataEmail, setDataEmail, checkLoad} = useSignInStorage()

    const navigation = useNavigation()

    useEffect(() => {
        getDataEmail()
    },[])

    // useEffect(() => {
    //     emailSignIn.length > 0 &&  navigation.navigate("ProfileRoute")
        
    // },[checkLoad])
    
    const handlerPressEmail = () => {
        setShowInput(0)
    }
    const handlerPressMobileNumber = () => {
        setShowInput(1)
    }

    const validateEmail = (email: string) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        };

    const handleNext = (props: {email: string, mobileNumber: string}) => {
        setDataEmail(props.email)
        navigation.navigate("ProfileRoute")
    }

    return(
        <View  style={styles.content}>
            <View style={styles.titleContent}>
                <TouchableOpacity onPress={handlerPressEmail} style={styles.email}>
                    <Text style={[styles.textEmail, showInput===0 && styles.fontTitleOn]}>Email</Text>
                    {showInput===0 && <View style={styles.line} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={handlerPressMobileNumber} style={styles.mobileNumber}>
                    <Text style={[styles.textMobileNumber, showInput===1 && styles.fontTitleOn]}>Mobile number</Text>
                    {showInput===1 && <View style={styles.line} />}
                </TouchableOpacity>
            </View>
            <Formik
            initialValues={{email: "", mobileNumber: "",}}
            onSubmit={handleNext} 
            // validate={}
            >
                {({handleChange, handleBlur, handleSubmit, values}) => {
                    values.email!=checkEmail && setCheckEmail(values.email)
                    values.mobileNumber!=checkMobileNumber && setCheckMobileNumber(values.mobileNumber)
                    return (
                    <View style = {styles.formik}>
                        <View>
                            {showInput===0 && 
                            <TextInput 
                                style={styles.inputEmail} 
                                placeholder="Email"
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                value={values.email}
                            />}

                                {showInput===1 && 
                                <TextInput 
                                    style={styles.inputEmail} 
                                    placeholder="Mobile number"
                                    keyboardType = 'number-pad'
                                    onChangeText={handleChange("mobileNumber")}
                                    onBlur={handleBlur("mobileNumber")}
                                    value={values.mobileNumber}
                                    maxLength={10}
                                />}

                            <View style={styles.createAccount}>
                                <Text style={styles.textQuestion}>Don't have an account yet?</Text>
                                <Text style={styles.textCreateAccount}>Create an account</Text>
                            </View>
                        </View>

                        <KeyboardAvoidingView
                            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                            keyboardVerticalOffset={Platform.OS === 'ios' ? 280 : 260}
                            >
                            {validateEmail(checkEmail) && checkMobileNumber.length == 10 ?
                                <TouchableOpacity
                                style={[styles.buttonNextEnable]}
                                onPress={() => {handleSubmit()}}
                                >
                                    <Text style={styles.textNextEnable}>Next</Text>
                                </TouchableOpacity> : 
                                <TouchableOpacity
                                style={[styles.buttonNextDisable]}
                                disabled
                                >
                                    <Text style={styles.textNextDisable}>Next</Text>
                                </TouchableOpacity>
                            }
                        </KeyboardAvoidingView>

                    </View>
                )}}

            </Formik>
            <View></View>
        </View>
    )
}

export default memo(ContentSignIn)
