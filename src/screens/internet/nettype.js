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









const NetType = (props) => {
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
            backgroundColor: Colors.black2,


        }}>


            <HeaderBar
                onPressright={() => props.navigation.navigate("home")}
                text={{ fontSize: 15 }}
                namepage="بسته اینترنت"
                icon={"chevron-forward"}

                iconleft
                iconL={"help-circle-outline"}
                onPressLeft={showModal}
            />

            <Portal>
                <Modal visible={visible}
                    onDismiss={hideModal} style={{ width: "80%", height: 200, backgroundColor: Colors.black0, marginLeft: 45, borderRadius: 10, position: "absolute", top: "30%" }}  >

                    <ScrollView>


                        <View style={{ width: "100%", height: 300, padding: 5 }}>

                            <View style={{ width: "100%", height: 50, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, alignItems: "center" }}>
                                <MaterialCommunityIcons onPress={hideModal} name="close" size={25} color={Colors.background} />
                                <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>راهنما</Text>

                            </View>
                            <View style={{ width: "100%", height: 1, backgroundColor: Colors.secondText3 }}></View>
                            <View style={{ width: "100%", height: 200, padding: 5, flexDirection: "column", paddingHorizontal: 10 }}>

                                <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}> شارژ اینترنت</Text>
                                <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, textAlign: "center" }}>در این صفحه شما میتوانید  اکانت اینترنت سیم کارت یا سرویس اینترنت خانگی خود را شارژ کنید.
                                    .</Text>




                            </View>

                        </View>





                    </ScrollView>
                </Modal>
            </Portal>

            <View style={{ flexDirection: "row-reverse", width: "100%", height: 50, justifyContent: "center", alignItems: "center", backgroundColor: Colors.black2 }}>
                <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={{ width: "45%", height: "100%", justifyContent: "center", alignItems: "center", borderBottomWidth: modalVisible == false ? 2 : 0, borderColor: modalVisible == false ? Colors.primary : Colors.secondText3 }}>

                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: modalVisible == false ? Colors.primary : Colors.secondText3, }}>پکیج اینترنت</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{ width: "45%", height: "100%", justifyContent: "center", alignItems: "center", borderBottomWidth: modalVisible == true ? 2 : 0, borderColor: modalVisible == true ? Colors.primary : Colors.secondText3 }}>

                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: modalVisible == true ? Colors.primary : Colors.secondText3, }}>ADSL</Text>

                </TouchableOpacity>



            </View>

            {modalVisible == false ?
                <>
                    <View style={{ width: "100%", height: 70, justifyContent: "center", alignItems: "center", padding: 10, marginTop: 10 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, textAlign: "center" }}>شماره موبایلی که میخواهید برای آن بسته خریداری کنید را وارد نمایید و یا آیکون شماره موبایل خود را لمس نمایید.</Text>

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

                    <View style={{ width: "100%", height: 40, justifyContent: "center", alignItems: "center", }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, textAlign: "center" }}>اپراتور شماره موبایل وارد شده را انتخاب کنید</Text>
                    </View>

                    <View style={{ width: "90%", height: 100, marginTop: "2%" }}>
                        <ScrollView
                            pagingEnabled={false}
                            horizontal
                            ref={scrollRef}
                            showsHorizontalScrollIndicator={false}
                            onContentSizeChange={scrollToEnd}
                            contentContainerStyle={styles.contentContainerStyle}

                            style={{

                                margin: 10,

                            }}>
                            <TouchableOpacity
                                style={{
                                    width: 80,
                                    height: 60,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: Colors.black3,
                                    borderRadius: 10,
                                    marginTop: 10,
                                    marginRight: 10,

                                    flexDirection: "column"

                                }}
                            >
                                <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 80,
                                    height: 60,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: Colors.black3,
                                    borderRadius: 10,
                                    marginTop: 10,
                                    marginRight: 10,

                                    flexDirection: "column"

                                }}
                            >
                                <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 80,
                                    height: 60,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: Colors.black3,
                                    borderRadius: 10,
                                    marginTop: 10,
                                    marginRight: 10,

                                    flexDirection: "column"

                                }}
                            >
                                <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 80,
                                    height: 60,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: Colors.black3,
                                    borderRadius: 10,
                                    marginTop: 10,
                                    marginRight: 10,

                                    flexDirection: "column"

                                }}
                            >
                                <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 80,
                                    height: 60,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: Colors.black3,
                                    borderRadius: 10,
                                    marginTop: 10,
                                    marginRight: 10,

                                    flexDirection: "column"

                                }}
                            >
                                <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>
                            </TouchableOpacity>


                        </ScrollView>
                    </View>





                </>
                :
                <>



                    <View style={{ width: "90%", height: 80, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                        <TouchableOpacity style={{ width: "20%", height: 60, borderRadius: 10, flexDirection: "column", alignItems: "center" }}>
                            <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: 50, borderRadius: 10 }} />
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>شاتل</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: "20%", height: 60, borderRadius: 10, flexDirection: "column", alignItems: "center" }}>
                            <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: 50, borderRadius: 10 }} />
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>آسیا تک</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: "20%", height: 60, borderRadius: 10, flexDirection: "column", alignItems: "center" }}>
                            <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: 50, borderRadius: 10 }} />
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>صبا نت</Text>
                        </TouchableOpacity>


                    </View>


                    <View style={{ width: "100%", height: 50, justifyContent: "center", alignItems: "center", padding: 10, marginTop: 10 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>شناسه پرداخت ADSL یا کد اشتراک را وارد کنید</Text>

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

                        placeholder={" شناسه ADSL را وارد کنید"}

                        keyboardType="number-pad"
                        title="شناسه ADSL"
                    />
                </>
            }







            <Btn
                label="مرحله بعد"
                style={{ width: "100%", position: "absolute", bottom: 20 }}


                onPress={() =>{
                    if (modalVisible==false) {
                         props.navigation.navigate("internetlist")
                    } else {
                        props.navigation.navigate("adslpage")
                    }
                    
                  }}
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




export default NetType

