import { Feather, FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, SafeAreaView, } from 'react-native';
import HeaderBar from '../../../components/headerbar';
import Btn from "../../../components/btn"
import Colors from '../../../constants/Colors';
import Searchitem from '../../../components/searchitem';
import { List } from 'react-native-paper';









const CheckTicketExternal = (props) => {

    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);


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
                namepage="جزییات سفر "
                icon={"chevron-forward"}
            />
            <ScrollView style={{ width: "100%", padding: 5 }}>



                <View style={{ flexDirection:"column",width: "100%", alignSelf:"auto", alignContent: "center", borderRadius: 10, backgroundColor: "#AED6F1", padding: 5, marginTop: 10,marginBottom:10 }}>

                <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.black, textAlign: "right" }}>برای کلیه سفر ها به جز ترکیه و عراق خرید بلیط به صورت رفت و برگشت الزامی می باشد.</Text>
                   
                    <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.black, textAlign: "right" }}>برای کشورهایی که جهت ورود به ویزا احتیاج دارند ، اخذ  کلیه مجوزها قانونی بر عهده مسافر می باشد</Text>
               
                    <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.black, textAlign: "right" }}>برای اطلاع از میزان و شرایط بار به شماره 021833333 داخلی 3 تماس بگیرید</Text>
                </View>

                <SafeAreaView style={{ width: "100%", height: 250, flexDirection: "row-reverse", borderRadius: 10, backgroundColor: Colors.black4, }}>



                    <View style={{ width: "10%", height: 250, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <MaterialCommunityIcons name="airplane" size={25} color={Colors.background} />
                        <View style={{ height: 170, borderWidth: 1, borderColor: Colors.background, borderStyle: 'dashed', margin: 5 }}></View>
                        <MaterialCommunityIcons name="map-marker" size={25} color={Colors.background} />
                    </View>




                    <View style={{ flexDirection: "column", width: "100%", height: 250, justifyContent: "flex-start", alignItems: "center" }}>


                        <View style={{ width: "100%", height: "10%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>تهران</Text>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.yellowlight, marginLeft: "15%" }}>20 کیلوگرم</Text>
                        </View>


                        <View style={{ width: "100%", height: "13%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10 }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>23:30</Text>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}>  / دوشنبه17 اردیبهشت 1403</Text>
                        </View>


                        <View style={{ flexDirection: "row-reverse", width: "90%", height: 50, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.black, position: "relative", left: 21, borderRadius: 50 }}>

                            <View style={{ width: 40, height: 40, backgroundColor: Colors.black2, borderRadius: 50, marginRight: 10 }}>
                                <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>
                            </View>

                            <View style={{ width: "80%", flexDirection: "row", justifyContent: "space-between", marginRight: 10, }}>
                                <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>745</Text>
                                <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>ماهان</Text>



                            </View>
                        </View>

                        <View style={{ width: "100%", height: "13%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10 }}>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, }}> شماره پرواز : </Text>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>171</Text>

                            <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, marginRight: "30%" }}> نوع : </Text>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>سیستمی</Text>
                        </View>


                        <View style={{ width: "100%", height: "13%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10 }}>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, }}>کلاس پرواز : </Text>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>اکونومی</Text>


                            <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, marginRight: "25%" }}>کلاس نرخی : </Text>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>7</Text>
                        </View>


                        <View style={{ width: "100%", height: "13%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10, marginTop: 10 }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>نجف</Text>
                        </View>


                        <View style={{ width: "100%", height: "13%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10 }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>01:30</Text>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}>  / دوشنبه17 اردیبهشت 1403</Text>
                        </View>



                        <View style={{ width: "100%", height: "25%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }}>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, marginRight: 20 }}>19 صندلی موجود</Text>

                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, marginLeft: 20 }}>هر نفر 1،970،000 ریال</Text>
                        </View>

                    </View>
                </SafeAreaView>
                <SafeAreaView style={{ width: "100%", height: 250, flexDirection: "row-reverse", borderRadius: 10, backgroundColor: Colors.black4, marginTop: 10 }}>



                    <View style={{ width: "10%", height: 250, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <MaterialCommunityIcons name="airplane" size={25} color={Colors.background} />
                        <View style={{ height: 170, borderWidth: 1, borderColor: Colors.background, borderStyle: 'dashed', margin: 5 }}></View>
                        <MaterialCommunityIcons name="map-marker" size={25} color={Colors.background} />
                    </View>




                    <View style={{ flexDirection: "column", width: "100%", height: 250, justifyContent: "flex-start", alignItems: "center" }}>


                        <View style={{ width: "100%", height: "10%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>نجف</Text>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.yellowlight, marginLeft: "15%" }}>20 کیلوگرم</Text>
                        </View>


                        <View style={{ width: "100%", height: "13%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10 }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>23:30</Text>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}>  / دوشنبه17 اردیبهشت 1403</Text>
                        </View>


                        <View style={{ flexDirection: "row-reverse", width: "90%", height: 50, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.black, position: "relative", left: 21, borderRadius: 50 }}>

                            <View style={{ width: 40, height: 40, backgroundColor: Colors.black2, borderRadius: 50, marginRight: 10 }}>
                                <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>
                            </View>

                            <View style={{ width: "80%", flexDirection: "row", justifyContent: "space-between", marginRight: 10, }}>
                                <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>745</Text>
                                <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>ماهان</Text>



                            </View>
                        </View>

                        <View style={{ width: "100%", height: "13%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10 }}>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, }}> شماره پرواز : </Text>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>171</Text>

                            <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, marginRight: "30%" }}> نوع : </Text>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>سیستمی</Text>
                        </View>


                        <View style={{ width: "100%", height: "13%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10 }}>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, }}>کلاس پرواز : </Text>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>اکونومی</Text>


                            <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, marginRight: "25%" }}>کلاس نرخی : </Text>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>7</Text>
                        </View>


                        <View style={{ width: "100%", height: "13%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10, marginTop: 10 }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>تهران</Text>
                        </View>


                        <View style={{ width: "100%", height: "13%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10 }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>01:30</Text>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}>  / دوشنبه17 اردیبهشت 1403</Text>
                        </View>



                        <View style={{ width: "100%", height: "25%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }}>
                            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, marginRight: 20 }}>19 صندلی موجود</Text>

                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, marginLeft: 20 }}>هر نفر 1،970،000 ریال</Text>
                        </View>

                    </View>
                </SafeAreaView>



                <List.Section  >
                    <List.Accordion

                        style={{ backgroundColor: Colors.black4, }}
                        rippleColor={Colors.primary}
                        title="جزییات قیمت رفت"
                        titleStyle={{ fontFamily: "MontserratBold", color: Colors.background }}
                    >





                        <View style={{ paddingHorizontal: 10, flexDirection: "row-reverse", width: "100%", height: 50, backgroundColor: Colors.black4, justifyContent: "space-between", alignItems: "center" }}>

                            <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, }}> بلیت بزرگسال (1 نفر)</Text>


                            <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}> 1 x  15,254,000 ریال</Text>


                        </View>


                    </List.Accordion>

                </List.Section>




                <View style={{ bottom: 10, paddingHorizontal: 10, flexDirection: "row-reverse", width: "100%", height: 50, backgroundColor: Colors.black4, justifyContent: "space-between", alignItems: "center" }}>

                    <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, }}>مجموع قیمت (1 مسافر)</Text>


                    <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}> 15,254,000 ریال</Text>


                </View>



            </ScrollView>

            <Btn
                label="پرداخت"
                style={{ width: "100%", }}


            // onPress={() => props.navigation.navigate("addPassenger")}
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




export default CheckTicketExternal

