import React,{memo} from "react";
import { styles } from "../../../styles/profile/myProfileStyle";
import { Text, View, TouchableOpacity, Image } from "react-native";
import ICBack from "../../../assets/icon/ICBack";
import ICLogout from "../../../assets/icon/ICLogout";
import ICPen from "../../../assets/icon/ICPen";
import { data } from "../../../api";
import {useNavigation} from "@react-navigation/native";


function Header() {
    const navigation = useNavigation()
    const handleBack = (): void => {
        navigation.goBack()
    }
    return(
        <View style = {styles.Header}>
        <Image 
            style = {styles.imgHeader} 
            source={require("../../../assets/img/headers_with_image.png")}
        />
        <View style={styles.containerButtonBack}>
            <TouchableOpacity onPress={handleBack} style={styles.buttonBack}>
                <View style = {styles.ICBack}>
                    <ICBack/>
                </View>
                <Text style={styles.textBack}>My Account</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <ICLogout />
            </TouchableOpacity>
        </View>
    <View style={styles.profile}>
            <View style={{flexDirection: "row"}}>
                <View style={styles.userAvt}>
                    <Image source={require("../../../assets/img/profileicon.png")} />
                </View>
                <View style={styles.information}>
                    <Text style={styles.userName}>{data.name}</Text>
                    <Text style={styles.email}>{data.email}</Text>
                    <View style = {styles.details}>
                        <View>
                            <View style={styles.detailsContent}>
                                <Text style={styles.titleinfo}>Gender</Text>
                                <Text style={styles.detailsInfo}>{data.gender}</Text>
                            </View>
                            <View style={styles.detailsContent}>
                                <Text style={styles.titleinfo}>Followers</Text>
                                <Text style={styles.detailsInfo}>{data.follower}</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.detailsContent}>
                                <Text style={styles.titleinfo}>DOB</Text>
                                <Text style={styles.detailsInfo}>{data.DOB}</Text>
                            </View>
                            <View style={styles.detailsContent}>
                                <Text style={styles.titleinfo}>Following</Text>
                                <Text style={styles.detailsInfo}>{data.following}</Text>
                            </View>
                        </View>

                    </View>
            </View>                      
        </View>
        <TouchableOpacity>
            <ICPen />
        </TouchableOpacity>
    </View>
</View>
    )
}

export default memo(Header)