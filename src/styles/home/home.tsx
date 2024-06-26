import { StyleSheet, Dimensions } from "react-native"

const windowWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {},
    Header:{
        height: 300
    },
    imgHeader: {
       height: 300,
       width: windowWidth,
       borderBottomRightRadius: 28,
    },
    containerButtonBack: {
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        width: windowWidth - 50,
        justifyContent: "space-between",
        marginLeft: 25,
        marginTop: 50,
    },
    buttonBack: {
        flexDirection: "row",
        alignItems: "center",
    },
    ICBack: {
        borderRadius: 50,
        height: 30,
        width: 30,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    textBack: {
        fontSize: 18,
        color: "white",
        marginLeft: 15,
        fontWeight: "900",
    },
    profile: {
        position:"absolute",
        marginTop: 110,
        width: windowWidth - 50,
        marginLeft: 25,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerInfomation: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    information: {
        marginLeft: 22,
    },
    userAvt: {},
    userName: {
        fontSize: 25,
        fontWeight: "900",
        color: "black"
    },
    email: {
        color: "black",
        marginTop: 1,
        fontSize: 14
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    titleinfo: {
        fontSize: 14,
        marginTop: 15,
    },
    detailsInfo: {
        color: "black",
        fontSize: 16,
    },
    content: {
        width: windowWidth - 50,
        marginLeft: 25,
        marginTop: 10,
    },
    selectItem: {
        borderWidth: 1,
        borderRadius: 7,
        height: 55,
        justifyContent: "space-between",
        borderColor: "#C0C0C0",
        flexDirection: "row",
        marginTop: 15,
        paddingHorizontal: 15,
    },
    ICseleccitem: {
        flexDirection: "row",
        alignItems: "center",
    },
    titleSelect: {
        color: "#555555",
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 8,
    },
    buttonSwitch: {
        alignContent: "center",
        justifyContent: "center",
    },
    Footer: {
        width: windowWidth - 50,
        marginLeft: 25,
        marginTop: 10,
        backgroundColor: "white",
        borderRadius: 14,
        height: 130,
    },
    titleShare: {
        fontSize: 17,
        fontWeight: "900",
        color: "black",
        marginTop: 25,
        marginLeft: 15,
    },
    contenShare: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: windowWidth - 80,
        marginLeft: 15,
        alignItems: "center",
        marginTop: 13,
    },
    codeBox: {
        flexDirection: "row",
        width: windowWidth - 110,
        justifyContent: "space-between",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "#C0C0C0",
        height: 40,
        borderRadius: 8,
        alignItems: "center",
        paddingHorizontal: 7,
    },
    code: {
        flexDirection: "row",
    },
    textCode: {
        fontSize: 16,
        color: "black",
        marginRight: 5,
    },
    detailsContent: {
        alignItems: "flex-start",
    }
})