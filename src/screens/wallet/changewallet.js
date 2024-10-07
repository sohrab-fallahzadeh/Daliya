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









const ChangeWallet = (props) => {
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

    useEffect(() => {
        async function requestAllPermissions() {

            //Request for permission from the user
            const { status: contactStatus } = await Contacts.requestPermissionsAsync();
            // const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();

            //Checks if permissions are granted
            if (contactStatus === 'granted' ) {
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
            backgroundColor: Colors.black2,


        }}>


            <HeaderBar
                onPressright={() => props.navigation.goBack()}
                text={{ fontSize: 15 }}
                namepage="افزایش اعتبار"
                icon={"chevron-forward"}
                iconleft

                iconL={"help-circle-outline"}
                onPressLeft={ showModal}
            />

            <View style={{ width: "100%", height: 50, justifyContent: "center", alignItems: "center", padding: 10 }}>
                <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>لطفا شماره موبایل مقصد و مبلغ مورد نظر را وارد کنید</Text>

            </View>

            <IPT
                styleview={{ width: "90%", backgroundColor: Colors.background, borderColor: Colors.black0 }}
                icon
                styleinput={{ color: Colors.black0 ,fontFamily:"Montserrat",fontSize:13}}
                iconname={checked ? "close" : ""}
                coloricon={Colors.black0}
                sizeicon={20}
                onChangeText={(t) => setChecked(t)}
                onPressicon={() => setChecked("")}
                value={checked}

                placeholderTextColor={Colors.secondText3}

                placeholder={" شماره موبایل را وارد کنید"}

                keyboardType="number-pad"
                title="شماره موبایل"
            />




            <IPT
                styleview={{ width: "90%", backgroundColor: Colors.background, borderColor: Colors.black0 }}
                icon
                styleinput={{ color: Colors.black0 ,fontFamily:"Montserrat",fontSize:15 }}
                iconname={value ? "close" : ""}
                coloricon={Colors.black0}
                sizeicon={20}
                onChangeText={(t) => setValue(t)}
                onPressicon={() => setValue("")}
                value={value}

                placeholderTextColor={Colors.secondText3}

                placeholder={"لطفا مبلغ را وارد کنید"}

                keyboardType="number-pad"
                title="مبلغ (ریال)"
            />

            <TouchableOpacity
                onPress={showModal}

                style={{ padding: 5, borderRadius: 10, marginHorizontal: 20, marginTop: 20, flexDirection: "row", width: "90%", height: 60, justifyContent: "center", alignItems: "center", backgroundColor: Colors.background }}>

                <TouchableOpacity onPress={(t) => setValue("5,000,000")} style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black }}>5,000,000</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={(t) => setValue("2,000,000")} style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center", borderRightWidth: 1, borderLeftWidth: 1 }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black }}>2,000,000</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={(t) => setValue("1,000,000")} style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black }}>1,000,000</Text>

                </TouchableOpacity>


            </TouchableOpacity>


            <Portal>
                <Modal visible={visible} 
                onDismiss={hideModal} style={{ width: "80%", height: 240, backgroundColor: Colors.black0, marginLeft: 45, borderRadius: 10, position: "absolute", top: "30%" }}  >

                    <ScrollView>


                        <View style={{ width: "100%", height: 300,padding:5 }}>

                           <View style={{width:"100%",height:50,flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10,alignItems:"center"}}>
                            <MaterialCommunityIcons  onPress={hideModal} name="close" size={25} color={Colors.background} />
                           <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>راهنما</Text>
                          
                           </View>
                            <View style={{width:"100%",height:1,backgroundColor:Colors.secondText3}}></View>
                           <View style={{width:"100%",height:200,padding:5,flexDirection:"column",paddingHorizontal:10}}>
                   
                           <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>انتقال</Text>
                           <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}>در اینجا شما میتوانید اعتبار کیف پول خود را به فرد دیگری انتقال دهید.</Text>
                           <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}>1 - وارد کردن شماره موبایل مقصد</Text>
                           <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}>2 - وارد کردن مبلغ به ریال</Text>
                           <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}>3 - انتخاب گزینه انتقال</Text>
                           <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}>مبلغ پرداخت شده به حساب کیف پول دیگری واریز خواهد شد.</Text>
                          


</View>

                        </View>





                    </ScrollView>
                </Modal>
            </Portal>





            <Btn
                label="افزایش اعتبار"
                style={{ width: "100%", marginTop: "40%" }}


                onPress={() => props.navigation.navigate("sendtocard")}
            />



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




export default ChangeWallet

