






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









const Pay_Fine = (props) => {
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
                namepage="پرداخت خلافی"
                icon={"chevron-forward"}

            />
            <Portal>
                <Modal visible={visible}
                    onDismiss={hideModal} style={{ width: "80%", height: 300, backgroundColor: Colors.black0, marginLeft: 45, borderRadius: 10, position: "absolute", top: "30%" }}  >

                    <ScrollView>


                        <View style={{ width: "100%", height: 300, }}>

                            <View style={{ width: "100%", height: 50, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, alignItems: "center" }}>
                                <MaterialCommunityIcons onPress={hideModal} name="close" size={25} color={Colors.background} />
                                <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>استعلام جدید</Text>

                            </View>
                            <View style={{ width: "100%", height: 1, backgroundColor: Colors.secondText3 }}></View>
                            <View style={{ width: "100%", height: 200, padding: 5, flexDirection: "column", paddingHorizontal: 10 }}>

                                <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>جزییات استعلام خود را انتخاب کنید</Text>
                                <View style={{ width: "100%", height: 50, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, alignItems: "center", backgroundColor: Colors.black4, borderRadius: 5, marginTop: 10 }}>
                                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.success }}>62،200 ریال</Text>
                                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>هزینه استعلام</Text>

                                </View>


                                <TouchableOpacity onPress={() => {
                                    setChecked(!checked);
                                }} style={{ width: "100%", height: 50, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.primary, }}> (نیازمند احراز هویت) </Text>
                                    <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}>استعلام با جزییات می خواهم</Text>
                                    <Checkbox
                                        color={Colors.success}
                                        uncheckedColor={Colors.background}
                                        status={checked == "1" ? 'checked' : 'unchecked'}

                                    />
                                </TouchableOpacity>
                                <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.secondText3, textAlign: "right" }}>با انتخاب این گزینه، امکان مشاهده لیست جرایم به همراه جزییات (محل تخلف ، عکس تخلف و ... وجود دارد)</Text>



                                <Btn
                                    label="مشاهده نتایج"
                                    style={{ width: "100%",marginTop:10 }}
                                    onPress={() => hideModal()}
                                />
                            </View>


                        </View>





                    </ScrollView>
                </Modal>
            </Portal>


            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: "center", }}>

                <View style={{ flexDirection: "row-reverse", width: "100%", height: 70, justifyContent: "center", alignItems: "center", backgroundColor: Colors.black0 }}>

                    <View style={{ width: "33%", height: 70, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>وضعیت کل :</Text>
                        <View style={{ width: "80%", height: 30, alignItems: "center", justifyContent: "center", backgroundColor: Colors.yellowlight, borderRadius: 10, }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>پرداخت نشده</Text>
                        </View>
                    </View>
                    <View style={{ width: "33%", height: 70, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>مجموع خلافی :</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>3،600،000 ریال</Text>

                    </View>
                    <View style={{ width: "33%", height: 70, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>تاریخ استعلام :</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>1403/12/13</Text>

                    </View>
                </View>



                <View style={{ flexDirection: "column", width: "90%", height: 130, backgroundColor: Colors.black2, marginTop: 15, borderRadius: 10, alignItems: "center", justifyContent: "space-around" }}>


                    <View style={{ width: "95%", height: 40, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background }}>به دلیل گذشت بیش از  1 روز از استعلام برای مواجه نشدن با مشکلات احتمالی جدید،استعلام جدید بگیرید!</Text>
                        <AntDesign name="exclamationcircleo" size={20} color={Colors.yellowlight} style={{ marginLeft: 5 }} />
                    </View>

                    <TouchableOpacity
                        onPress={showModal}
                        style={{ width: "90%", height: 50, borderWidth: 2, borderColor: Colors.success, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.success }}>استعلام جدید</Text>
                    </TouchableOpacity>

                </View>


                <View style={{ borderRadius: 10, width: "90%", height: 60, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: 15, }}>
                    <View style={{ width: "8%", height: 50, backgroundColor: Colors.blue, flexDirection: "column", borderTopLeftRadius: 5, borderBottomLeftRadius: 5, justifyContent: "center", alignItems: "center", marginLeft: 20 }}>
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

                    <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, left: 110 }}>کوییک</Text>

                </View>


                <View style={{ flexDirection: "column", width: "90%", alignSelf: "auto", backgroundColor: Colors.black2, marginTop: 15, borderRadius: 10, alignItems: "center", justifyContent: "space-around" }}>
                    <View style={{ width: "95%", height: 30, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
                        <Text style={{ textAlign: "center", width: 80, fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, backgroundColor: Colors.yellowlight, borderRadius: 5, top: 5 }}>پرداخت نشده</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>دوبرگی محور تهران -مشهد</Text>
                    </View>

                    <View style={{ width: "95%", alignSelf: "auto", backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "flex-end", alignItems: "center", paddingHorizontal: 15, marginTop: 10, marginBottom: 10 }}>

                        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}>شرح تخلف : تجاوز از سرعت مجاز(تا سی کیلومتر درساعت)-استفاده از شیشه دودی  به نحوی که راننده و سرنشین قابل تشخیص نباشد</Text>
                    </View>

                    <View style={{ width: "95%", height: 30, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>10:11 -- 1403/12/25</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.secondText }}>زمان ثبت خلافی</Text>
                    </View>

                    <View style={{ width: "95%", height: 30, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>200،000،000 ریال</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.secondText }}>مبلغ خلافی</Text>
                    </View>

                    <TouchableOpacity style={{ width: "90%", height: 50, borderWidth: 2, borderColor: Colors.primary, borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.primary }}>پرداخت</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: "column", width: "90%", alignSelf: "auto", backgroundColor: Colors.black2, marginTop: 15, borderRadius: 10, alignItems: "center", justifyContent: "space-around" }}>
                    <View style={{ width: "95%", height: 30, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
                        <Text style={{ textAlign: "center", width: 80, fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, backgroundColor: Colors.success, borderRadius: 5, top: 5 }}>پرداخت شده</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>دوبرگی محور تهران -مشهد</Text>
                    </View>

                    <View style={{ width: "95%", alignSelf: "auto", backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "flex-end", alignItems: "center", paddingHorizontal: 15, marginTop: 10, marginBottom: 10 }}>

                        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}>شرح تخلف : تجاوز از سرعت مجاز(تا سی کیلومتر درساعت)-استفاده از شیشه دودی  به نحوی که راننده و سرنشین قابل تشخیص نباشد</Text>
                    </View>

                    <View style={{ width: "95%", height: 30, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>10:11 -- 1403/12/25</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.secondText }}>زمان ثبت خلافی</Text>
                    </View>

                    <View style={{ width: "95%", height: 30, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15, marginBottom: 10 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>200،000،000 ریال</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.secondText }}>مبلغ خلافی</Text>
                    </View>

                    {/* <TouchableOpacity style={{ width: "90%", height: 50, borderWidth: 2, borderColor: Colors.primary, borderRadius: 10, justifyContent: "center", alignItems: "center",marginBottom:10 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.primary }}>پرداخت</Text>
                    </TouchableOpacity> */}

                </View>
                <View style={{ flexDirection: "column", width: "90%", alignSelf: "auto", backgroundColor: Colors.black2, marginTop: 15, borderRadius: 10, alignItems: "center", justifyContent: "space-around" }}>
                    <View style={{ width: "95%", height: 25, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
                        <Text style={{ textAlign: "center", width: 80, fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, backgroundColor: Colors.yellowlight, borderRadius: 5, top: 5 }}>پرداخت نشده</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>دوبرگی محور تهران -مشهد</Text>
                    </View>

                    <View style={{ width: "95%", alignSelf: "auto", backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "flex-end", alignItems: "center", paddingHorizontal: 15, marginTop: 10, marginBottom: 10 }}>

                        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}>شرح تخلف : تجاوز از سرعت مجاز(تا سی کیلومتر درساعت)-استفاده از شیشه دودی  به نحوی که راننده و سرنشین قابل تشخیص نباشد</Text>
                    </View>

                    <View style={{ width: "95%", height: 25, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>10:11 -- 1403/12/25</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.secondText }}>زمان ثبت خلافی</Text>
                    </View>

                    <View style={{ width: "95%", height: 25, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>200،000،000 ریال</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.secondText }}>مبلغ خلافی</Text>
                    </View>

                    <TouchableOpacity style={{ width: "90%", height: 50, borderWidth: 2, borderColor: Colors.primary, borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.primary }}>پرداخت</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: "column", width: "90%", alignSelf: "auto", backgroundColor: Colors.black2, marginTop: 15, borderRadius: 10, alignItems: "center", justifyContent: "space-around" }}>
                    <View style={{ width: "95%", height: 25, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
                        <Text style={{ textAlign: "center", width: 80, fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, backgroundColor: Colors.yellowlight, borderRadius: 5, top: 5 }}>پرداخت نشده</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>دوبرگی محور تهران -مشهد</Text>
                    </View>

                    <View style={{ width: "95%", alignSelf: "auto", backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "flex-end", alignItems: "center", paddingHorizontal: 15, marginTop: 10, marginBottom: 10 }}>

                        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}>شرح تخلف : تجاوز از سرعت مجاز(تا سی کیلومتر درساعت)-استفاده از شیشه دودی  به نحوی که راننده و سرنشین قابل تشخیص نباشد</Text>
                    </View>

                    <View style={{ width: "95%", height: 25, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>10:11 -- 1403/12/25</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.secondText }}>زمان ثبت خلافی</Text>
                    </View>

                    <View style={{ width: "95%", height: 25, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>200،000،000 ریال</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.secondText }}>مبلغ خلافی</Text>
                    </View>

                    <TouchableOpacity style={{ width: "90%", height: 50, borderWidth: 2, borderColor: Colors.primary, borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.primary }}>پرداخت</Text>
                    </TouchableOpacity>

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




export default Pay_Fine

