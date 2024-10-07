






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









const CarService = (props) => {
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
                onPressright={() => props.navigation.navigate("home")}
                text={{ fontSize: 15 }}
                namepage="سرویس خودرویی"
                icon={"chevron-forward"}

            />
    <Portal>
                <Modal visible={visible}
                    onDismiss={hideModal} style={{ width: "80%", height: 200, backgroundColor: Colors.black0, marginLeft: 45, borderRadius: 10, position: "absolute", top: "30%" }}  >

                    <ScrollView>


                        <View style={{ width: "100%", height: 200,alignItems:"center" }}>

                            <View style={{ width: "100%", height: 50, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, alignItems: "center" }}>
                                <MaterialCommunityIcons onPress={hideModal} name="close" size={25} color={Colors.background} />
                                <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>کوییک</Text>

                            </View>


                            <View style={{ width: "100%", height: 1, backgroundColor: Colors.secondText3 }}></View>
                          
                          
                          

                                <TouchableOpacity 
                                onPress={() => {
                                    hideModal()
                                    props.navigation.navigate("add_car")}}
                                style={{ width: "90%", height: 50,  justifyContent: "center", paddingHorizontal: 10, alignItems: "center", backgroundColor: Colors.black4, borderRadius: 5, marginTop: 10 }}>
                                    
                                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>ویرایش</Text>

                                </TouchableOpacity>
                                <TouchableOpacity 
                                 onPress={() => {
                                    hideModal()
                                   }}
                                style={{ width: "90%", height: 50,  justifyContent: "center", paddingHorizontal: 10, alignItems: "center", backgroundColor: Colors.black4, borderRadius: 5, marginTop: 10 }}>
                                    
                                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>حذف</Text>

                                </TouchableOpacity>
                              


                        </View>





                    </ScrollView>
                </Modal>
            </Portal>
           

            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: "center", }}>

                <View style={{ flexDirection: "row-reverse", width: "100%", height: 50, justifyContent: "center", alignItems: "center", backgroundColor: Colors.black0 }}>

                    <View style={{ width: "60%", height: "100%", justifyContent: "center", alignItems: "flex-end", }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>وسیله های نقلیه</Text>
                    </View>

                    <TouchableOpacity
                    onPress={() => props.navigation.navigate("add_car")}
                        style={{ width: "30%", height: "100%", justifyContent: "center", alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 14, color: Colors.success }}>افزودن وسیله نقلیه</Text>
                        <MaterialCommunityIcons name="plus" size={20} color={Colors.success} />
                    </TouchableOpacity>

                </View>


                <View style={{ width: "100%", height: 60, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>

                    <MaterialCommunityIcons 
                     onPress={showModal}
                    name="dots-vertical" size={20} color={Colors.background} style={{ marginLeft: 20 }} />

                    <View style={{ width: "8%", height: 50, backgroundColor: Colors.blue, flexDirection: "column", borderTopLeftRadius: 5, borderBottomLeftRadius: 5, justifyContent: "center", alignItems: "center" }}>
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

                    <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, left: 120 }}>کوییک</Text>

                </View>



                <View
                    style={{ width: "90%", height: 30, justifyContent: "center", alignItems: "flex-end", marginTop: 10 }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>لیست بدهی ها</Text>
                </View>



                <TouchableOpacity 
                   onPress={() => props.navigation.navigate("pay_fine")}
                style={{ width: "90%", height: 60, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, borderRadius: 10 }}>

                    <View style={{ width: "10%", height: 60, justifyContent: "center", alignItems: "center" }}>
                        <MaterialCommunityIcons name="chevron-left" size={25} color={Colors.background} />
                    </View>
                    <View style={{ width: "25%", height: 60, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>3،600،000 ریال</Text>

                    </View>
                    <View style={{ width: "50%", height: 60, justifyContent: "center", alignItems: "flex-end" }}>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, marginLeft: "20%" }}>خلافی پرداخت نشده</Text>
                    </View>

                    <View style={{ width: "15%", height: 60, justifyContent: "center", alignItems: "center", }}>
                        <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "80%", height: "80%", }}></Image>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={() => props.navigation.navigate("traffic_plan")}
                style={{ width: "90%", height: 60, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, borderRadius: 10 }}>

                    <View style={{ width: "10%", height: 60, justifyContent: "center", alignItems: "center" }}>
                        <MaterialCommunityIcons name="chevron-left" size={25} color={Colors.background} />
                    </View>

                    <View style={{ width: "25%", height: 60, justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: "100%", height: 30, alignItems: "center", justifyContent: "center", backgroundColor: Colors.success, borderRadius: 10, }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>بدون بدهی</Text>
                        </View>
                    </View>

                    <View style={{ width: "50%", height: 60, justifyContent: "center", alignItems: "flex-end" }}>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, marginLeft: "20%" }}>طرح ترافیک</Text>
                    </View>

                    <View style={{ width: "15%", height: 60, justifyContent: "center", alignItems: "center", }}>
                        <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "80%", height: "80%", }}></Image>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={() => props.navigation.navigate("freeway")}
                style={{ width: "90%", height: 60, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, borderRadius: 10 }}>

                    <View style={{ width: "10%", height: 60, justifyContent: "center", alignItems: "center" }}>
                        <MaterialCommunityIcons name="chevron-left" size={25} color={Colors.background} />
                    </View>

                    <View style={{ width: "25%", height: 60, justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: "100%", height: 30, alignItems: "center", justifyContent: "center", backgroundColor: Colors.primary, borderRadius: 10, }}>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>غیر قابل استعلام</Text>
                        </View>
                    </View>

                    <View style={{ width: "50%", height: 60, justifyContent: "center", alignItems: "flex-end" }}>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, marginLeft: "20%", }}>عوارض آزاد راهی</Text>
                    </View>

                    <View style={{ width: "15%", height: 60, justifyContent: "center", alignItems: "center", }}>
                        <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "80%", height: "80%", }}></Image>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={{ width: "90%", height: 100, borderRadius: 10, marginTop: 20 }}>
                    <Image source={require("../../../assets/image/wallet.png")} alt="image" style={{ borderRadius: 10, width: "100%", height: "100%", }}></Image>
                </TouchableOpacity>

                <View
                    style={{ width: "90%", height: 30, justifyContent: "center", alignItems: "flex-end", marginTop: 10 }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>همه خدمات</Text>
                </View>

                <View style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", justifyContent: "flex-end", width: "100%", marginTop: 20,marginBottom:70 }}>


                    <TouchableOpacity
                       

                        style={{ marginRight: "1%", width: "32%", height: 110, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
                        <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "70%", height: "70%", borderRadius: 10 }} />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, padding: "5%" }}>
                            عوارض آزادراهی
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                       
                        style={{ marginRight: "1%", width: "32%", height: 110, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
                        <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "70%", height: "70%", borderRadius: 10 }} />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, padding: "5%" }}>
                            خلافی خودرو
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                       
                        style={{ marginRight: "1%", width: "32%", height: 110, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
                        <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "70%", height: "70%", borderRadius: 10 }} />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, padding: "5%" }}>
                            طرح ترافیک
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                       
                        style={{ marginRight: "1%", width: "32%", height: 110, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
                        <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "70%", height: "70%", borderRadius: 10 }} />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, padding: "5%" }}>
                           بیمه شخص ثالث
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        
                        style={{ marginRight: "1%", width: "32%", height: 110, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
                        <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "70%", height: "70%", borderRadius: 10 }} />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, padding: "5%" }}>
                            خدمات خودرو
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                       
                        style={{ marginRight: "1%", width: "32%", height: 110, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
                        <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "70%", height: "70%", borderRadius: 10 }} />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, padding: "5%" }}>
                           استعلام پلاک
                        </Text>

                    </TouchableOpacity>








                </View>

            </ScrollView>



            <FooterPage
            home
                iconnameR={"home"}
                nameR="خانه"

                name="تراکنش ها"
                iconname={"wallet"}
                onPress={()=>props.navigation.navigate("paymenting")}

                nameL="سوالات متداول"
                iconnameL={"help-circle-outline"}
                onPressL={()=>props.navigation.navigate("question_car")}
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




export default CarService

