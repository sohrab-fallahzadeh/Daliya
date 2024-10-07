import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, } from 'react-native';
import HeaderBar from '../../components/headerbar';
import Btn from "../../components/btn"
import Colors from '../../constants/Colors';
import Searchitem from '../../components/searchitem';
import { Checkbox, List, Modal, Portal } from 'react-native-paper';
import FooterPage from '../../components/footerpage';










const QuestionCar = (props) => {

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'black', };
    const [value, setValue] = React.useState('first');


    const [checked, setChecked] = React.useState(false);



    const scrollRef = useRef();
    const scrollToEnd = () => scrollRef.current.scrollToEnd({ animated: false });




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
                namepage="پرسش های متداول"
                icon={"chevron-forward"}
            />



            <View style={{ width: "100%", height: 60, backgroundColor: Colors.black2, justifyContent: "center", alignItems: "center", marginTop: 10 }}>


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
                            width: 70,
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Colors.success,
                            borderRadius: 20,
                            marginRight: 10,

                            flexDirection: "column"

                        }}
                    >

                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>همه</Text>


                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: 70,
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Colors.secondText3,
                            borderRadius: 20,
                            marginRight: 10,

                            flexDirection: "column"

                        }}
                    >

                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>خلافی</Text>


                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            alignSelf: "auto",
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Colors.secondText3,
                            borderRadius: 20,
                            marginRight: 10,
                            paddingHorizontal: 10,
                            flexDirection: "column"

                        }}
                    >

                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>عوارض آزادراهی</Text>


                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            alignSelf: "auto",
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Colors.secondText3,
                            borderRadius: 20,
                            marginRight: 10,
                            paddingHorizontal: 10,
                            flexDirection: "column"

                        }}
                    >

                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>طرح ترافیک</Text>


                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            alignSelf: "auto",
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Colors.secondText3,
                            borderRadius: 20,
                            marginRight: 10,
                            paddingHorizontal: 10,
                            flexDirection: "column"

                        }}
                    >

                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>عوارض آزادراهی</Text>


                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            alignSelf: "auto",
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Colors.secondText3,
                            borderRadius: 20,
                            marginRight: 10,
                            paddingHorizontal: 10,
                            flexDirection: "column"

                        }}
                    >

                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>طرح ترافیک</Text>


                    </TouchableOpacity>


                </ScrollView>

            </View>


            <ScrollView style={{ width: "100%", padding: 5 }} contentContainerStyle={{ alignItems: "center", }} >

                <View style={{ marginTop: 10,  width: "95%", height: 40, flexDirection: "row-reverse", alignItems: "center", }}>

                    <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: 40, height: 40, }}></Image>
                    <Text style={{ fontFamily: 'MontserratBold', color: Colors.background, fontSize: 15, marginRight: 10, }}>عوارض آزادراهی</Text>

                </View>



                <View style={{ width: "95%" }}>
                    <List.Section  >
                        <List.Accordion
                            style={{ backgroundColor: Colors.black4, }}
                            //   rippleColor={Colors.primary}
                            title="سرویس  پرداختی عوارض آزاد راه چیست؟"
                            titleStyle={{ fontFamily: "MontserratBold", color: Colors.background, textAlign: "right", }}
                            titleNumberOfLines={2}>
                            <View style={{ width: "100%", alignSelf: "auto" }}>
                                <View style={{ width: "100%", alignSelf: "auto" , backgroundColor: Colors.black4, alignItems: "center", paddingRight: 20 }}>
                                    <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, textAlign: "right" }}>تا یک ساعت بعد از خرید ،مشروط به دو ساعت مانده تا حرکت،بدون جریمه کل مبلغ پرداختی باز می گردد.</Text>
                                </View>
                            </View>
                        </List.Accordion>
                    </List.Section>
                    <List.Section  >
                        <List.Accordion
                            style={{ backgroundColor: Colors.black4, }}
                            //   rippleColor={Colors.primary}
                            title="سرویس  پرداختی عوارض آزاد راه چیست؟"
                            titleStyle={{ fontFamily: "MontserratBold", color: Colors.background, textAlign: "right", }}
                            titleNumberOfLines={2}>
                           
                                <View style={{ width: "100%", alignSelf: "auto" , backgroundColor: Colors.black4, alignItems: "center", paddingRight: 20 }}>
                                    <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, textAlign: "right" }}>تا یک ساعت بعد از خرید ،مشروط به دو ساعت مانده تا حرکت،بدون جریمه کل مبلغ پرداختی باز می گردد.</Text>
                                </View>
                           
                        </List.Accordion>
                    </List.Section>
                </View>














            </ScrollView>


            <FooterPage
                question

                iconnameR={"home"}
                nameR="خانه"
                onPressR={() => props.navigation.navigate("carservice")}

                name="تراکنش ها"
                iconname={"wallet"}
                onPress={() => props.navigation.navigate("paymenting")}

                nameL="سوالات متداول"
                iconnameL={"help-circle-outline"}

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




export default QuestionCar

