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









const Chargetype = (props) => {
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
            backgroundColor: Colors.black2,


        }}>


            <HeaderBar
                onPressright={() => props.navigation.navigate("home")}
                text={{ fontSize: 15 }}
                namepage="خرید شارژ"
                icon={"chevron-forward"}
                iconleft

            // iconL={"help-circle-outline"}
            // onPressLeft={ showModal}
            />



            <View style={{ flexDirection: "row-reverse", width: "100%", height: 50, justifyContent: "center", alignItems: "center", backgroundColor: Colors.black2 }}>
                <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={{ width: "45%", height: "100%", justifyContent: "center", alignItems: "center", borderBottomWidth: modalVisible == false ? 2 : 0, borderColor: modalVisible == false ? Colors.primary : Colors.secondText3 }}>

                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: modalVisible == false ? Colors.primary : Colors.secondText3, }}>شارژ مستقیم</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{ width: "45%", height: "100%", justifyContent: "center", alignItems: "center", borderBottomWidth: modalVisible == true ? 2 : 0, borderColor: modalVisible == true ? Colors.primary : Colors.secondText3 }}>

                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: modalVisible == true ? Colors.primary : Colors.secondText3, }}> رمز شارژ</Text>

                </TouchableOpacity>



            </View>

            {modalVisible == false ?
                <>
                    <View style={{ width: "100%", height: 50, justifyContent: "center", alignItems: "center", padding: 10, marginTop: 10 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>لطفا شماره موبایل مورد نظر را وارد کنید</Text>

                    </View>

                    <IPT
                        styleview={{ width: "90%", backgroundColor: Colors.background, borderColor: Colors.black0 }}
                        icon
                        styleinput={{ color: Colors.black0, fontFamily: "Montserrat", fontSize: 13 }}
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

                    <View style={{ width: "90%", height: 80, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <TouchableOpacity style={{ width: "20%", height: 60, borderRadius: 10, flexDirection: "column", alignItems: "center" }}>
                            <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: 50, borderRadius: 10 }} />
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>همراه اول</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: "20%", height: 60, borderRadius: 10, flexDirection: "column", alignItems: "center" }}>
                            <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: 50, borderRadius: 10 }} />
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>ایرانسل</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: "20%", height: 60, borderRadius: 10, flexDirection: "column", alignItems: "center" }}>
                            <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: 50, borderRadius: 10 }} />
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>رایتل</Text>
                        </TouchableOpacity>


                    </View>

                    <TouchableOpacity
              

              style={{ padding: 5, borderRadius: 10, marginHorizontal: 20, marginTop: 50, flexDirection: "row", width: "90%", height: 60, justifyContent: "center", alignItems: "center", backgroundColor: Colors.background }}>

              <TouchableOpacity onPress={(t) => setValue("50,000")} style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center",backgroundColor: value=="50,000" ?Colors.success:Colors.background ,borderRadius:5 }}>
                  <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black }}>50,000</Text>

              </TouchableOpacity>
              <TouchableOpacity onPress={(t) => setValue("200,000")} style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center",borderRadius:5,backgroundColor: value=="200,000" ?Colors.success:Colors.background  }}>
                  <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black }}>200,000</Text>

              </TouchableOpacity>
              <TouchableOpacity onPress={(t) => setValue("100,000")} style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center" ,borderRadius:5,backgroundColor: value=="100,000" ?Colors.success:Colors.background}}>
                  <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black }}>100,000</Text>

              </TouchableOpacity>


          </TouchableOpacity>


                </>
                :
                <>
                    <View style={{ width: "100%", height: 50, justifyContent: "center", alignItems: "center", padding: 10, marginTop: 10 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>لطفا اپراتور و مبلغ مورد نظر را انتخاب کنید</Text>

                    </View>


                    <View style={{ width: "90%", height: 80, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <TouchableOpacity style={{ width: "20%", height: 60, borderRadius: 10, flexDirection: "column", alignItems: "center" }}>
                            <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: 50, borderRadius: 10 }} />
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>همراه اول</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: "20%", height: 60, borderRadius: 10, flexDirection: "column", alignItems: "center" }}>
                            <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: 50, borderRadius: 10 }} />
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>ایرانسل</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: "20%", height: 60, borderRadius: 10, flexDirection: "column", alignItems: "center" }}>
                            <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: 50, borderRadius: 10 }} />
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>رایتل</Text>
                        </TouchableOpacity>


                    </View>
                    <TouchableOpacity


                        style={{ padding: 5, borderRadius: 10, marginHorizontal: 20, marginTop: 40, flexDirection: "row", width: "90%", height: 60, justifyContent: "center", alignItems: "center", backgroundColor: Colors.background }}>

                        <TouchableOpacity onPress={(t) => setValue("50,000")} style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center", backgroundColor: value == "50,000" ? Colors.success : Colors.background, borderRadius: 5 }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black }}>50,000</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={(t) => setValue("200,000")} style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: value == "200,000" ? Colors.success : Colors.background }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black }}>200,000</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={(t) => setValue("100,000")} style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: value == "100,000" ? Colors.success : Colors.background }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black }}>100,000</Text>

                        </TouchableOpacity>


                    </TouchableOpacity>
                </>
            }

           





            <Btn
                label="افزایش اعتبار"
                style={{ width: "100%", position: "absolute", bottom: 20 }}


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




export default Chargetype

