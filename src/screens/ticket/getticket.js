import { Entypo, Feather, FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, SafeAreaView, } from 'react-native';
import HeaderBar from '../../components/headerbar';
import Btn from "../../components/btn"
import Colors from '../../constants/Colors';
import Searchitem from '../../components/searchitem';
import { List, Modal, Portal } from 'react-native-paper';









const GetTicket = (props) => {

    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);
    const showModal = () => setVisible(true);
    const [visible, setVisible] = React.useState(false);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'black', padding: 20 };

    return (










        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: "flex-start",
            // marginLeft: isSmallScreen ? 0 : "35%",
            backgroundColor: Colors.black3,


        }}>


            <HeaderBar
                onPressright={() => props.navigation.goBack()}
                text={{ fontSize: 15 }}
                namepage="خرید بلیط"
                icon={"chevron-forward"}
            />
            <ScrollView style={{ width: "100%", padding: 5 }}>

                <View style={{ width: "100%", height: 50, marginTop: 10, paddingRight: 30 }}>
                    <Text style={{ fontFamily: "Montserrat", fontSize: 18, color: Colors.background }}>اطلاعات بلیت</Text>
                </View>









                <SafeAreaView style={{ width: "100%", height: 250, borderRadius: 10, backgroundColor: Colors.black2, alignItems: "flex-start", padding: 10, justifyContent: "space-around" }}>

                    <View style={{ padding: 10, width: "100%", height: "30%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", backgroundColor: Colors.black4, borderRadius: 10 }}>

                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}> تهران </Text>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>  پایانه بیهقی </Text>
                        </View>



                        <View style={{ flexDirection: "row-reverse", }} >
                            <MaterialCommunityIcons name="bus" size={19} color={Colors.background} />
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>-----------</Text>
                            <MaterialCommunityIcons name="map-marker" size={19} color={Colors.background} />
                        </View>

                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>اصفهان</Text>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>  پایانه کاوه  </Text>

                        </View>

                    </View>


                   

                    <View style={{ width: "100%", height: "10%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>زمان حرکت  :</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>23:30 / دوشنبه17 اردیبهشت 1403</Text>
                    </View>

                    <View style={{ width: "100%", height: "10%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>سرپرست مسافران :</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>مصطفی جهرمی اذری</Text>
                    </View>

                    <View style={{ width: "100%", height: "10%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>تعداد مسافران :</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>4</Text>
                    </View>

                    <View style={{ width: "100%", height: "10%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>شماره صندلی :</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>10-12-15-14-</Text>
                    </View>

                    <View style={{ width: "100%", height: "10%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>مقصد نهایی  :</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.yellowlight, }}>اصفهان</Text>
                    </View>



                </SafeAreaView>

                <TouchableOpacity onPress={showModal} style={{ width: "100%", height: 50, flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10,marginTop:10 }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}> اطلاعات تماس  :</Text>
                    
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>09154143236</Text>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.primary, }}>ویرایش</Text>
                </TouchableOpacity>
                <View style={{width:"100%",height:2,backgroundColor:Colors.black}}></View>



                <TouchableOpacity  onPress={showModal} style={{ width: "100%", height: 50, flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10,marginTop:10 }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}> افزودن کد تخفیف : </Text>
                    <Entypo name="chevron-small-down" size={30} color={Colors.background}  />
                </TouchableOpacity>
                <View style={{width:"100%",height:2,backgroundColor:Colors.black}}></View>

              
                <TouchableOpacity  onPress={showModal} style={{ width: "100%", height: 50, flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10,marginTop:10 }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>  توضیحات بیشتر  : </Text>
                    <Entypo name="chevron-small-down" size={30} color={Colors.background}  />
                </TouchableOpacity>
                <View style={{width:"100%",height:2,backgroundColor:Colors.black}}></View>

                <TouchableOpacity  onPress={showModal}style={{ width: "100%", height: 50, flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10,marginTop:10 }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>  راهنمای سفر  : </Text>
                    <Entypo name="chevron-small-down" size={30} color={Colors.background}  />
                </TouchableOpacity>
                <View style={{width:"100%",height:2,backgroundColor:Colors.black}}></View>


                <View style={{ width: "100%", height: 50, flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10,marginTop:10 }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>  مبلغ قابل پرداخت  :</Text>
                    
                    
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 18, color: Colors.background, }}>1,200,000 ریال</Text>
                </View>
                <View style={{ width: "100%", height: 50, alignItems: "center",marginTop:10,marginBottom:10 }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>با ادامه فرایند خرید <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.primary, }}>قوانین و مقررات</Text> آپ را می پذیرم </Text>
                    
                    
                  
                </View>


              <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ position: "absolute", top: 100, }}>
                  <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, textAlign: "center", }}>افزودن کد تخفیف</Text>

                 

                </Modal>
              </Portal>

            </ScrollView>

            <Btn
                label="پرداخت"
                style={{ width: "100%",marginBottom:10 }}


               // onPress={() => props.navigation.navigate("selectticketbus")}
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




export default GetTicket

