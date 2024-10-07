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
import Word from '../../components/word';









const Add_Car = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [paymentWay, setpaymentWay] = useState(false);
    const toggleSwitch = () => {


        setpaymentWay(previousState => !previousState)

    };
    const [checked, setChecked] = React.useState("");
    const [visible, setVisible] = React.useState(false);
    const [value, setword] = useState('الف');

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

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
            backgroundColor: Colors.black2,


        }}>


            <HeaderBar
                onPressright={() => props.navigation.goBack()}
                text={{ fontSize: 15 }}
                namepage="افزودن وسیله نقلیه"
                icon={"chevron-forward"}


            />


            <Portal>
                <Modal visible={visible}
                    onDismiss={hideModal} style={{ width: "100%", height: 500, backgroundColor: Colors.black0, padding: 10, borderRadius: 10, position: "absolute", top: "15%" }}  >

                    <ScrollView>

                        <View style={{ width: "100%", height: 50, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, alignItems: "center" }}>
                            <MaterialCommunityIcons onPress={hideModal} name="close" size={25} color={Colors.background} />
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>حرف پلاک</Text>

                        </View>
                        <View style={{ width: "100%", height: 1, backgroundColor: Colors.secondText3 }}></View>
                        <View style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", justifyContent: "space-between", width: "100%", marginTop: 10 }}>


                            <Word onPress={() => { setword("الف"), hideModal() }} name={"الف"} />
                            <Word onPress={() => { setword("ب"), hideModal() }} name={"ب"} />
                            <Word onPress={() => { setword("پ"), hideModal() }} name={"پ"} />
                            <Word onPress={() => { setword("ت"), hideModal() }} name={"ت"} />
                            <Word onPress={() => { setword("ج"), hideModal() }} name={"ج"} />
                            <Word onPress={() => { setword("د"), hideModal() }} name={"د"} />
                            <Word onPress={() => { setword("ز"), hideModal() }} name={"ز"} />
                            <Word onPress={() => { setword("س"), hideModal() }} name={"س"} />
                            <Word onPress={() => { setword("ش"), hideModal() }} name={"ش"} />
                            <Word onPress={() => { setword("ص"), hideModal() }} name={"ص"} />
                            <Word onPress={() => { setword("ط"), hideModal() }} name={"ط"} />
                            <Word onPress={() => { setword("ع"), hideModal() }} name={"ع"} />
                            <Word onPress={() => { setword("ف"), hideModal() }} name={"ف"} />
                            <Word onPress={() => { setword("ق"), hideModal() }} name={"ق"} />
                            <Word onPress={() => { setword("ک"), hideModal() }} name={"ک"} />
                            <Word onPress={() => { setword("گ"), hideModal() }} name={"گ"} />
                            <Word onPress={() => { setword("ل"), hideModal() }} name={"ل"} />
                            <Word onPress={() => { setword("م"), hideModal() }} name={"م"} />
                            <Word onPress={() => { setword("ن"), hideModal() }} name={"ن"} />
                            <Word onPress={() => { setword("و"), hideModal() }} name={"و"} />
                            <Word onPress={() => { setword("ه"), hideModal() }} name={"ه"} />
                            <Word onPress={() => { setword("ی"), hideModal() }} name={"ی"} />
                            <Word onPress={() => { setword("D"), hideModal() }} name={"D"} />
                            <Word onPress={() => { setword("S"), hideModal() }} name={"S"} />
                            <Word onPress={() => { setword("ویلچر"), hideModal() }} name={"ویلچر"} />












                        </View>







                    </ScrollView>
                </Modal>
            </Portal>


            <View style={{ flexDirection: "row-reverse", width: "100%", height: 50, justifyContent: "center", alignItems: "center", backgroundColor: Colors.black2 }}>
                <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={{ width: "45%", height: "100%", justifyContent: "center", alignItems: "center", borderBottomWidth: modalVisible == false ? 2 : 0, borderColor: modalVisible == false ? Colors.primary : Colors.secondText3 }}>

                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: modalVisible == false ? Colors.primary : Colors.secondText3, }}>خودرو</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{ width: "45%", height: "100%", justifyContent: "center", alignItems: "center", borderBottomWidth: modalVisible == true ? 2 : 0, borderColor: modalVisible == true ? Colors.primary : Colors.secondText3 }}>

                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: modalVisible == true ? Colors.primary : Colors.secondText3, }}>موتور سیکلت</Text>

                </TouchableOpacity>



            </View>

            {modalVisible == false ?
                <>
                    <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: "center", }}>
                        <View style={{ width: "90%", height: 70, justifyContent: "center", alignItems: "flex-end", padding: 10, marginTop: 10 }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 18, color: Colors.background, }}>لطفا اطلاعات زیر را تکمیل کنید</Text>
                        </View>



                        <View style={{ width: "90%", height: 40, justifyContent: "center", alignItems: "flex-end" }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>شماره پلاک</Text>
                        </View>



                        <View style={{ width: "90%", height: 70, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                            <View style={{ width: "10%", height: 70, flexDirection: "column", backgroundColor: Colors.blue, borderRadius: 5, justifyContent: "center", alignItems: "center", }}>

                                <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%" }}></Image>
                            </View>

                            <View style={{ width: "17%", height: 70, flexDirection: "column", backgroundColor: Colors.black, borderRadius: 5, justifyContent: "center", alignItems: "center", }}>
                                <TextInput
                                    maxLength={2}
                                    textAlign="center"
                                    style={{
                                        height: 30,
                                        width: "100%",
                                        fontFamily: "MontserratBold", fontSize: 18,
                                        color: "white",
                                    }}
                                    placeholder={"20"}
                                    placeholderTextColor={Colors.secondText3}
                                    // onChangeText={(t) => setTask(t)}
                                    // value={task}

                                    keyboardType="number-pad"
                                />

                            </View>

                            <TouchableOpacity
                                onPress={showModal}
                                style={{ width: "22%", height: 70, flexDirection: "row", backgroundColor: Colors.black, borderRadius: 5, justifyContent: "center", alignItems: "center", }}>
                                <MaterialCommunityIcons name="chevron-down" size={20} color={Colors.background} />
                                <Text style={{ fontFamily: "MontserratBold", fontSize: 18, color: Colors.background, marginLeft: 12 }}>{value}</Text>
                            </TouchableOpacity>

                            <View style={{ width: "22%", height: 70, backgroundColor: Colors.black, borderRadius: 5, justifyContent: "center", alignItems: "center", }}>
                                <TextInput
                                    maxLength={3}
                                    textAlign="center"
                                    style={{
                                        height: 30,
                                        width: "100%",
                                        fontFamily: "MontserratBold", fontSize: 18,
                                        color: "white",
                                    }}
                                    placeholder={"888"}
                                    placeholderTextColor={Colors.secondText3}
                                    // onChangeText={(t) => setTask(t)}
                                    // value={task}

                                    keyboardType="number-pad"
                                />

                            </View>

                            <View style={{ width: "17%", height: 70, flexDirection: "column", backgroundColor: Colors.black, borderRadius: 5, justifyContent: "center", alignItems: "center", }}>
                                <TextInput
                                    maxLength={2}
                                    textAlign="center"
                                    style={{
                                        height: 30,
                                        width: "100%",
                                        fontFamily: "MontserratBold", fontSize: 18,
                                        color: "white",
                                    }}
                                    placeholder={"20"}
                                    placeholderTextColor={Colors.secondText3}
                                    // onChangeText={(t) => setTask(t)}
                                    // value={task}

                                    keyboardType="number-pad"
                                />
                                <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>ایران</Text>
                            </View>
                        </View>


                        <IPT
                            styleview={{ width: "90%", backgroundColor: Colors.black0, borderColor: Colors.primary, marginTop: 20 }}
                            icon
                            styleinput={{ color: Colors.black0, fontFamily: "Montserrat", fontSize: 13 }}
                            iconname={checked ? "close" : ""}
                            coloricon={Colors.black0}
                            sizeicon={20}
                            onChangeText={(t) => setChecked(t)}
                            onPressicon={() => setChecked("")}
                            value={checked}

                            placeholderTextColor={Colors.secondText3}

                            placeholder={" نام خودرو را وارد کنید"}

                            keyboardType="default"
                            title="نام خودرو"
                        />



                        <IPT
                            styleview={{ width: "90%", backgroundColor: Colors.black0, borderColor: Colors.primary, marginTop: 0 }}
                            icon
                            styleinput={{ color: Colors.black0, fontFamily: "Montserrat", fontSize: 13 }}
                            iconname={checked ? "close" : ""}
                            coloricon={Colors.black0}
                            sizeicon={20}
                            onChangeText={(t) => setChecked(t)}
                            onPressicon={() => setChecked("")}
                            value={checked}

                            placeholderTextColor={Colors.secondText3}

                            placeholder={" شماره موبایل مالک خودرو را وارد کنید"}

                            keyboardType="number-pad"
                            title="شماره موبایل مالک خودرو"
                        />
                        <IPT
                            styleview={{ width: "90%", backgroundColor: Colors.black0, borderColor: Colors.primary, marginTop: 0 }}
                            icon
                            styleinput={{ color: Colors.black0, fontFamily: "Montserrat", fontSize: 13 }}
                            iconname={checked ? "close" : ""}
                            coloricon={Colors.black0}
                            sizeicon={20}
                            onChangeText={(t) => setChecked(t)}
                            onPressicon={() => setChecked("")}
                            value={checked}

                            placeholderTextColor={Colors.secondText3}

                            placeholder={"کد ملی مالک خودرو را وارد کنید"}

                            keyboardType="number-pad"
                            title="کد ملی مالک خودرو"
                        />


                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, bottom: 15 }}> برای پرداخت عوارض سالیانه(ویژه تهران)خودرو کد ملی مالک خودرو را وارد کنید</Text>

                        <IPT
                            styleview={{ width: "90%", backgroundColor: Colors.black0, borderColor: Colors.primary, marginTop: 0 }}
                            icon
                            styleinput={{ color: Colors.black0, fontFamily: "Montserrat", fontSize: 13 }}
                            iconname={checked ? "close" : ""}
                            coloricon={Colors.black0}
                            sizeicon={20}
                            onChangeText={(t) => setChecked(t)}
                            onPressicon={() => setChecked("")}
                            value={checked}

                            placeholderTextColor={Colors.secondText3}

                            placeholder={" شماره VIN را وارد کنید"}

                            keyboardType="default"
                            title="شماره VIN"
                        />
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, bottom: 15 }}> برای پرداخت عوارض سالیانه (ویژه تهران) خودرو VIN خودرو را وارد کنید</Text>
                        <IPT
                            styleview={{ width: "90%", backgroundColor: Colors.black0, borderColor: Colors.primary, marginTop: 0 }}
                            icon
                            styleinput={{ color: Colors.black0, fontFamily: "Montserrat", fontSize: 13 }}
                            iconname={checked ? "close" : ""}
                            coloricon={Colors.black0}
                            sizeicon={20}
                            onChangeText={(t) => setChecked(t)}
                            onPressicon={() => setChecked("")}
                            value={checked}

                            placeholderTextColor={Colors.secondText3}

                            placeholder={" شماره موتور را وارد کنید"}

                            keyboardType="default"
                            title="شماره موتور"
                        />


                        <TouchableOpacity style={{ width: "90%", height: 60, flexDirection: "row-reverse", alignItems: "center", backgroundColor: Colors.black4, borderRadius: 10 }}>

                            <Text style={{ fontFamily: 'MontserratBold', color: Colors.background, fontSize: 13, marginRight: 25, marginLeft: "30%" }}>پرداخت خودکار عوارض آزاد راه</Text>


                            <Switch

                                trackColor={{ false: Colors.secondText, true: Colors.primary }}
                                thumbColor={paymentWay ? Colors.primary : Colors.secondText3}

                                ios_backgroundColor="white"
                                onValueChange={toggleSwitch}
                                value={paymentWay}
                            />


                        </TouchableOpacity>


                        <TouchableOpacity style={{ width: "90%", height: 60, flexDirection: "row-reverse", alignItems: "center", marginTop: 15, backgroundColor: Colors.black4, borderRadius: 10 }}>

                            <Text style={{ fontFamily: 'MontserratBold', color: Colors.background, fontSize: 13, marginRight: 25, marginLeft: "23%" }}>پرداخت خودکار بدهی طرح ترافیک</Text>


                            <Switch

                                trackColor={{ false: Colors.secondText, true: Colors.primary }}
                                thumbColor={paymentWay ? Colors.primary : Colors.secondText3}

                                ios_backgroundColor="white"
                                onValueChange={toggleSwitch}
                                value={paymentWay}
                            />


                        </TouchableOpacity>

                        <View style={{ width: "90%", height: 70, justifyContent: "center", alignItems: "flex-end", padding: 10, marginBottom: 20 }}>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}>با فعال کردن این گزینه در صورت داشتن موجودی ، پرداخت به صورت خودکار از کیف پول آپ شما انجام میگیرد</Text>
                        </View>

                    </ScrollView>

                </>
                :
              



                    <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: "center", }}>
                        <View style={{ width: "90%", height: 70, justifyContent: "center", alignItems: "flex-end", padding: 10, marginTop: 10 }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 18, color: Colors.background, }}>لطفا اطلاعات زیر را تکمیل کنید</Text>
                        </View>



                        <View style={{ width: "90%", height: 40, justifyContent: "center", alignItems: "flex-end" }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>شماره پلاک</Text>
                        </View>



                        <View style={{ width: "90%", height: 70, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                            <View style={{ width: "10%", height: 70, flexDirection: "column", backgroundColor: Colors.blue, borderRadius: 5, justifyContent: "center", alignItems: "center", }}>

                                <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%" }}></Image>
                            </View>

                            <View style={{ width: "30%", height: 70, flexDirection: "column", backgroundColor: Colors.black, borderRadius: 5, justifyContent: "center", alignItems: "center",marginLeft:20 }}>
                                <TextInput
                                    maxLength={3}
                                    textAlign="center"
                                    style={{
                                        height: 30,
                                        width: "100%",
                                        fontFamily: "MontserratBold", fontSize: 18,
                                        color: "white",
                                    }}
                                    placeholder={"345"}
                                    placeholderTextColor={Colors.secondText3}
                                    // onChangeText={(t) => setTask(t)}
                                    // value={task}

                                    keyboardType="number-pad"
                                />

                            </View>
                        </View>
                        <View style={{ width: "40%", height: 70, backgroundColor: Colors.black, borderRadius: 5, justifyContent: "center", alignItems: "center",marginTop:10 }}>
                                <TextInput
                                    maxLength={5}
                                    textAlign="center"
                                    style={{
                                        height: 30,
                                        width: "100%",
                                        fontFamily: "MontserratBold", fontSize: 18,
                                        color: "white",
                                    }}
                                    placeholder={"34888"}
                                    placeholderTextColor={Colors.secondText3}
                                    // onChangeText={(t) => setTask(t)}
                                    // value={task}

                                    keyboardType="number-pad"
                                />

                            </View>

                        <IPT
                            styleview={{ width: "90%", backgroundColor: Colors.black0, borderColor: Colors.primary, marginTop: 20 }}
                            icon
                            styleinput={{ color: Colors.black0, fontFamily: "Montserrat", fontSize: 13 }}
                            iconname={checked ? "close" : ""}
                            coloricon={Colors.black0}
                            sizeicon={20}
                            onChangeText={(t) => setChecked(t)}
                            onPressicon={() => setChecked("")}
                            value={checked}

                            placeholderTextColor={Colors.secondText3}

                            placeholder={" نام موتور سیکلت خود را وارد کنید"}

                            keyboardType="default"
                            title="نام موتور سیکلت"
                        />



                        <IPT
                            styleview={{ width: "90%", backgroundColor: Colors.black0, borderColor: Colors.primary, marginTop: 0 }}
                            icon
                            styleinput={{ color: Colors.black0, fontFamily: "Montserrat", fontSize: 13 }}
                            iconname={checked ? "close" : ""}
                            coloricon={Colors.black0}
                            sizeicon={20}
                            onChangeText={(t) => setChecked(t)}
                            onPressicon={() => setChecked("")}
                            value={checked}

                            placeholderTextColor={Colors.secondText3}

                            placeholder={" شماره موبایل مالک موتورسیکلت را وارد کنید"}

                            keyboardType="number-pad"
                            title="شماره موبایل مالک موتورسیکلت"
                        />
                        <IPT
                            styleview={{ width: "90%", backgroundColor: Colors.black0, borderColor: Colors.primary, marginTop: 0 }}
                            icon
                            styleinput={{ color: Colors.black0, fontFamily: "Montserrat", fontSize: 13 }}
                            iconname={checked ? "close" : ""}
                            coloricon={Colors.black0}
                            sizeicon={20}
                            onChangeText={(t) => setChecked(t)}
                            onPressicon={() => setChecked("")}
                            value={checked}

                            placeholderTextColor={Colors.secondText3}

                            placeholder={"کد ملی مالک موتورسیکلت را وارد کنید"}

                            keyboardType="number-pad"
                            title="کد ملی مالک موتورسیکلت"
                        />


                       

                    </ScrollView>
            }






                    <View style={{ width: "100%", height: 60, position: "fixed", bottom: 0, backgroundColor: Colors.black4, justifyContent: "center" }}>
                        <Btn
                            label=" ثبت و افزودن"
                            style={{ width: "100%", }}


                            onPress={() => {
                                if (modalVisible == false) {
                                    props.navigation.navigate("internetlist")
                                } else {
                                    props.navigation.navigate("adslpage")
                                }

                            }}
                        />
                    </View>




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




            export default Add_Car

