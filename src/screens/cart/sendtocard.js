import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, SafeAreaView, } from 'react-native';
import HeaderBar from '../../components/headerbar';
import Btn from "../../components/btn"
import Colors from '../../constants/Colors';

import { Modal, Portal, Button, PaperProvider, RadioButton, Checkbox } from 'react-native-paper';
import Searchitem from '../../components/searchitem';
import IPT from '../../components/ipt';








const SendToCard = (props) => {





    const [value, setValue] = useState('');
    const [show, setshow] = useState(false);

    const [select, setselect] = useState(false);



    const [mytime, setmyTime] = useState(0);

    const timer = setTimeout(() => {
        if (mytime !== 0) {
            setmyTime(mytime - 1);
        }
    }, 1000);







    return (


        <PaperProvider>







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
                    namepage="کارت به کارت"
                    icon={"chevron-forward"}
                    iconleft
                    iconL={"help-circle-outline"}

                />










                <View style={{ flexDirection: "column", width: "90%", height: 160, borderWidth: 2, borderRadius: 5, borderColor: Colors.background, marginTop: 10 }}>
                    <View style={{ width: '100%', height: 75, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                        <Searchitem
                            nounderline
                            card
                            numbercard="xxxx-xxxx-xxxx-0311"
                            styleview={{ height: 75, backgroundColor: Colors.black4, }}
                            city="مبدا"
                            ostan="بانک مهر ایران"
                            styleostan={{ fontFamily: "MontserratBold", fontSize: 15, textAlign: "right" }}
                            image={require("../../../assets/image/AsanPardakht.png")}
                            viewimage={{ backgroundColor: Colors.black, }}
                        />
                    </View>

                    <View style={{ zIndex: 2, borderStyle: 'dashed', borderWidth: 1, width: "100%", height: 2, backgroundColor: Colors.black3, justifyContent: "center", alignItems: "center", }}>
                        <AntDesign name="downcircle" size={20} color={Colors.background} style={{ position: "absolute", }} />
                    </View>
                    <View style={{ width: '100%', height: 75, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                        <Searchitem
                            nounderline
                            card
                            numbercard="4456-5566-1235-0311"
                            styleview={{ height: 75, backgroundColor: Colors.black4, marginTop: 5 }}
                            city="مقصد"
                            ostan="مجید رستمی"
                            styleostan={{ fontFamily: "MontserratBold", fontSize: 15, textAlign: "right" }}
                            image={require("../../../assets/image/AsanPardakht.png")}
                            viewimage={{ backgroundColor: Colors.black, }}
                        />
                    </View>


                </View>


                <View style={{ width: "100%", height: 30, flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 20, color: Colors.yellowlight, marginRight: 10 }}>23,245,353 ریال</Text>
                    <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, marginTop: 8 }}>مبلغ انتقال :</Text>

                </View>




                <View style={{ flexDirection: "row", width: "95%", height: 70, justifyContent: "space-between", alignItems: "center", padding: 10, marginTop: 10 }}>

                    {select == false || mytime == 0 ?
                        <TouchableOpacity onPress={() => { setselect(true), setmyTime(120) }} style={{ flexDirection: 'row', width: "30%", height: 60, backgroundColor: Colors.success, alignItems: "center", borderRadius: 10, justifyContent: "center" }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, marginRight: 10 }}>دریافت رمزپویا</Text>
                            <FontAwesome name="history" size={25} color={Colors.background} />

                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={{ flexDirection: 'row', width: "30%", height: 60, backgroundColor: Colors.secondText2, alignItems: "center", borderRadius: 10, justifyContent: "center" }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 20, color: Colors.black2, marginRight: 10 }}>{mytime}</Text>


                        </TouchableOpacity>
                    }




                    <IPT
                        styleview={{ width: "65%", }}
                        icon1
                        onPressicon1={() => { setshow(!show) }}
                        iconname1={!value ? "" : show == true ? "eye-outline" : "eye-off-outline"}
                        coloricon1={Colors.secondText3}
                        sizeicon1={30}



                        icon
                        onPressicon={() => setValue()}
                        iconname={value ? "close" : "content-copy"}
                        coloricon={value ? Colors.background : Colors.success}
                        sizeicon={30}
                        onChangeText={(t) => setValue(t)}
                        value={value}
                        textAlign="right"
                        maxLength={12}
                        secureTextEntry={show == false ? false : true}
                        keyboardType="number-pad"
                        title="رمز پویا"
                    />

                </View>





                <IPT


                    icon1
                    onPressicon1={() => { setshow(!show) }}
                    iconname1={!value ? "" : show == true ? "eye-outline" : "eye-off-outline"}
                    coloricon1={Colors.secondText3}
                    sizeicon1={30}

                    icon
                    onPressicon={() => setValue()}
                    iconname={value ? "close" : "content-copy"}
                    coloricon={value ? Colors.background : Colors.success}
                    sizeicon={30}
                    onChangeText={(t) => setValue(t)}
                    value={value}
                    textAlign="right"
                    maxLength={4}
                    secureTextEntry={show == false ? false : true}
                    keyboardType="number-pad"
                    title="CVV2"
                />





                <View style={{ flexDirection: "row", width: "95%", height: 70, justifyContent: "space-between", alignItems: "center", padding: 10, marginTop: 10 }}>

                    <IPT
                        styleview={{ width: "45%", }}


                        onPressicon={() => setValue()}
                        icon
                        iconname={value ? "close" : ""}
                        coloricon={Colors.background}
                        sizeicon={20}
                        textAlign="right"
                        maxLength={2}
                        secureTextEntry={true}
                        keyboardType="number-pad"
                        title="سال"
                        onChangeText={(t) => setValue(t)}
                        value={value}
                    />


                    <IPT
                        styleview={{ width: "45%", }}
                        icon

                        iconname={value ? "close" : ""}
                        coloricon={Colors.background}
                        sizeicon={20}
                        onChangeText={(t) => setValue(t)}
                        value={value}
                        textAlign="right"
                        maxLength={2}
                        secureTextEntry={true}
                        keyboardType="number-pad"
                        title="ماه"
                    />
                </View>































                <View style={{ width: "100%", height: 60, justifyContent: "center", alignItems: "center", marginTop: 60 }}>
                    <Btn
                        label="انتقال"
                        style={{ width: "100%", }}
                        onPress={() => {

                            // props.navigation.navigate("servicetrain")


                        }}
                    />
                </View>




            </View>

        </PaperProvider>

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




export default SendToCard

