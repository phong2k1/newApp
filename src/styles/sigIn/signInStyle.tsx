import { StyleSheet,Dimensions } from "react-native";
const windowHeight = Dimensions.get('window').height



export const styles = StyleSheet.create(
    {
        container: {
            marginHorizontal: 20,
            flex: 1,
        },
        header: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
        },
        title: {alignItems: "flex-start",},
        textSignIn: {
            fontSize: 50,
            color: "black",
            fontWeight: "700"
        },
        textWelcome: {
            color: "black",
            fontSize: 30,
            marginTop: 10,
            fontWeight: "700"
        },
        buttonQuestion: {
            marginTop: 16,
        },
        content: {
            marginTop: 15,
            flex: 1,
        },
        titleContent: {
            flexDirection: "row",
            justifyContent: "center"
        },
        textEmail: {
            fontSize: 16,
            paddingBottom: 8,
        },
        textMobileNumber: {
            fontSize: 16,
            paddingBottom: 8,
        },
        fontTitleOn: {
            fontWeight: "800",
            color: "black",
        },
        line: {
            width: 23,
            height: 4,
            backgroundColor: "#FF6600",
            borderRadius: 30,
        },
        mobileNumber: {
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 12,
        },
        email: {
            justifyContent: "center",
            alignItems: "center",
            marginRight: 12,
        },
        formik: {
            marginTop: 30,
            justifyContent: "space-between",
            flex: 1,
        },
        inputEmail: {
            borderWidth: 1.5,
            borderColor: "#FF6600",
            paddingHorizontal: 16,
            borderRadius: 10,
        },
        createAccount: {
            flexDirection: "row",
            marginTop: 30,
        },
        textQuestion: {
            color: "black"
        },
        textCreateAccount: {
            color: "black",
            fontWeight: "800"
        },
        buttonNextEnable: {
            bottom: 50,
            backgroundColor: "#FF6600",
            justifyContent: "center",
            alignItems: "center",
            height: 60,
            borderRadius: 50,
        },
        textNextEnable: {
            color: "white",
            fontSize: 20,
            fontWeight: "600"
        },
        buttonNextDisable: {
            bottom: 50,
            backgroundColor: "#C0C0C0",
            justifyContent: "center",
            alignItems: "center",
            height: 60,
            borderRadius: 50,
        },
        textNextDisable: {
            fontSize: 20,
            fontWeight: "600"
        }
    }
)