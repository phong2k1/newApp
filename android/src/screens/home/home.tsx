import React, {useState, useEffect} from "react";
import { Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import ICBack from "../../assets/icon/ICBack";
import ICLogout from "../../assets/icon/ICLogout";
import ICPen from "../../assets/icon/ICPen";
import {styles} from "../../styles/home/home"
import ICBiometric from "../../assets/icon/ICBiometric";
import ICNotification from "../../assets/icon/ICNotification";
import ICChangeLanguage from "../../assets/icon/ICLanguage";
import SelectItem from "./selectItem/selectItem";
import ICConnect from "../../assets/icon/ICConnect";
import ICSocial from "../../assets/icon/ICSocial";
import ICConnectSupport from "../../assets/icon/ICConnectSupport";
import ICHelp from "../../assets/icon/ICHelp";
import ICTrailing from "../../assets/icon/ICTrailing";
import ICSharing from "../../assets/icon/ICSharing";
import { data } from "../../api";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Home(): React.JSX.Element {
    const [isOnBiometric, setOnBiometric] = useState<boolean>(false)
    const [isOnNotification, setOnNotification] = useState<boolean>(false)
    
    useEffect(() => {
        getData("Biometric")
        getData("Notification")
    },[])

    const storeData = async (prop: string) => {        
        try {
          prop==="Biometric" && await AsyncStorage.setItem(`${prop}`, JSON.stringify(!isOnBiometric));
          prop==="Notification" &&  await AsyncStorage.setItem(`${prop}`, JSON.stringify(!isOnNotification));
        } catch (e) {
          //error
        }
      };

    const getData = async (prop:  string) => {
        try {
          const value = await AsyncStorage.getItem(`${prop}`);
          value==="true" && prop==="Biometric" && setOnBiometric(true)
          value==="false" && prop==="Biometric" && setOnBiometric(false)
          value==="true" && prop==="Notification" && setOnNotification(true)
          value==="false" && prop==="Notification" && setOnNotification(false)        
        } catch (e) {
          //error
        }
    };

    const handleSwitchBiometric = () => {
        setOnBiometric(pev => !pev)
        storeData("Biometric")
        getData("Biometric")
    }

    const handleSwitchNotification = () => {
        setOnNotification(pev => !pev)
        storeData("Notification")
        getData("Notification")
    }

    return (
        <ScrollView style={styles.container}>
            <View style = {styles.Header}>
                    <Image 
                        style = {styles.imgHeader} 
                        source={require("../../assets/img/headers_with_image.png")}
                    />
                    <View style={styles.containerButtonBack}>
                        <TouchableOpacity style={styles.buttonBack}>
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
                                <Image source={require("../../assets/img/profileicon.png")} />
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
                                {/* <View style = {styles.details}>
                                    <View style={styles.detailsContent}>
                                        <Text style={styles.titleinfo}>DOB</Text>
                                        <Text style={styles.detailsInfo}>{data.DOB}</Text>
                                    </View>
                                    <View style={styles.detailsContent}>
                                        <Text style={styles.titleinfo}>Following</Text>
                                        <Text style={styles.detailsInfo}>{data.following}</Text>
                                    </View>
                                </View> */}
                        </View>                      
                    </View>
                    <TouchableOpacity>
                        <ICPen />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <SelectItem
                    switch={true}
                    isOn={isOnBiometric}
                    icon={<ICBiometric />}
                    title="Biometric Login"
                    onColor="#669900"
                    offColor="#C0C0C0"
                    size="medium"
                    onToggle={() => handleSwitchBiometric()}
                />
                <SelectItem
                    switch={true}
                    isOn={isOnNotification}
                    icon={<ICNotification />}
                    title="Allow Notification"
                    onColor="#669900"
                    offColor="#C0C0C0"
                    size="medium"
                    onToggle={() => handleSwitchNotification()}
                />
                <SelectItem
                    arrow={true}
                    icon={<ICChangeLanguage />}
                    title="Change language"
                />
                <SelectItem
                    icon={<ICConnect />}
                    title="Connect to"
                />
                <SelectItem
                    arrow={true}
                    icon={<ICSocial />}
                    title="Change language"
                />
                <SelectItem
                    arrow={true}
                    icon={<ICConnectSupport />}
                    title="Connect Support"
                />
                <SelectItem
                    arrow={true}
                    icon={<ICHelp />}
                    title="Help"
                />
            </View>
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
            <View style={{height: 50}} />
        </ScrollView>
    )
}
export default Home

