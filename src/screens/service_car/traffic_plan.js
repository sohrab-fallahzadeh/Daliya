






import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, Switch, SafeAreaView, } from 'react-native';
import HeaderBar from '../../components/headerbar';
import Btn from "../../components/btn"
import Colors from '../../constants/Colors';
import Searchitem from '../../components/searchitem';
import { Checkbox, Modal, Portal } from 'react-native-paper';
import IPT from '../../components/ipt';
import * as Contacts from 'expo-contacts';
import FooterPage from '../../components/footerpage';









const TrafficPlan = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [paymentWay, setpaymentWay] = useState(false);
    const toggleSwitch = () => {


        setpaymentWay(previousState => !previousState)

    };
    const [checked, setChecked] = React.useState("");
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [value, setValue] = useState('');
    const [contactData, setContactData] = useState([]);
    const [permissionsGranted, setPermissionsGranted] = useState(false);

    const scrollRef = useRef();
    const scrollToEnd = () => scrollRef.current.scrollToEnd({ animated: false });

    useEffect(() => {
        async function requestAllPermissions() {

            //Request for permission from the user
            const { status: contactStatus } = await Contacts.requestPermissionsAsync();
            // const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();

            //Checks if permissions are granted
            if (contactStatus === 'granted') {
                setPermissionsGranted(true);

                //If permissions are granted, it gets the contact names and phone number
                const contactResponse = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
                });

                //display contact details in th  console
                if (contactResponse.data.length > 0) {
                    console.log(contactResponse.data[0]);
                }


            }
        }

        requestAllPermissions();
    }, []);










    return (


        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: "flex-start",
            // marginLeft: isSmallScreen ? 0 : "35%",
            backgroundColor: Colors.black0,


        }}>


            <HeaderBar
                onPressright={() => props.navigation.goBack()}
                text={{ fontSize: 15 }}
                namepage="طرح ترافیک"
                icon={"chevron-forward"}

            />



            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: "center", }}>
                <View style={{ width: 80, height: 80, borderRadius: 80, backgroundColor: Colors.black2, marginTop: 15 }}>
                    <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: 80, height: 80, borderRadius: 80, }}></Image>
                </View>
                <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, marginTop: 10 }}>پرداخت بدهی طرح ترافیک</Text>
                
                <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, marginTop: 5 }}>مجموع بدهی :  <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.success, }}>بدون بدهی</Text></Text>


                <View style={{ flexDirection: "column", width: "90%", height: 150, backgroundColor: Colors.black2, marginTop: 15, borderRadius: 10, alignItems: "center", justifyContent: "space-around" }}>


                    <View style={{ borderRadius: 10, width: "95%", height: 60, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "flex-start", alignItems: "center", }}>
                        <View style={{ width: "8%", height: 50, backgroundColor: Colors.blue, flexDirection: "column", borderTopLeftRadius: 5, borderBottomLeftRadius: 5, justifyContent: "center", alignItems: "center", }}>
                            <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "50%", height: "50%", }}></Image>
                        </View>

                        <View style={{ width: "30%", height: 50, flexDirection: "row", backgroundColor: Colors.black0, marginRight: 2, justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20 }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>12</Text>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>ل</Text>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>365</Text>
                        </View>

                        <View style={{ width: "8%", height: 50, backgroundColor: Colors.black0, flexDirection: "column", borderTopRightRadius: 5, borderBottomRightRadius: 5, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>12</Text>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 10, color: Colors.background }}>ایران</Text>
                        </View>

                        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, left: 100 }}>کوییک</Text>

                    </View>

                    <TouchableOpacity style={{ width: "95%", height: 60, flexDirection: "row-reverse", alignItems: "center", backgroundColor: Colors.black4, borderRadius: 10 }}>

                        <Text style={{ fontFamily: 'MontserratBold', color: Colors.background, fontSize: 13, marginRight: 25, marginLeft: "23%" }}>پرداخت خودکار بدهی طرح ترافیک</Text>


                        <Switch

                            trackColor={{ false: Colors.secondText, true: Colors.primary }}
                            thumbColor={paymentWay ? Colors.primary : Colors.secondText3}

                            ios_backgroundColor="white"
                            onValueChange={toggleSwitch}
                            value={paymentWay}
                        />


                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "column", width: "90%",alignSelf:"auto" , backgroundColor: Colors.black2, marginTop: 15, borderRadius: 10, alignItems: "center", justifyContent: "space-around" }}>


                    <View style={{ width: "95%", height: 50, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "flex-end", alignItems: "center", paddingHorizontal: 15 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background,marginRight:10 }}>بدهی پرداخت نشده ای ندارید</Text>
                        <Feather name="check-square" size={25} color={Colors.success} />
                    </View>

                   

                </View>



















            </ScrollView>







        </View>



    );
}

const styles = StyleSheet.create({

    viewContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.background
    },
    viewlogo: {
        width: "100%",
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20%"
    },
    contentContainerStyle: {
        flexDirection: 'row-reverse'
    }

})




export default TrafficPlan

