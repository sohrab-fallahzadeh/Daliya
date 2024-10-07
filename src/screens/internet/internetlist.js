import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, } from 'react-native';
import HeaderBar from '../../components/headerbar';
import Btn from "../../components/btn"
import Colors from '../../constants/Colors';
import Searchitem from '../../components/searchitem';
import { Checkbox, Divider, Menu, Modal, Portal } from 'react-native-paper';










const InternetList = (props) => {

    const [visible, setVisible] = React.useState(false);

    const [visible1, setVisible1] = React.useState(false);
    const [Username1, setUsername1] = React.useState("همه");
    const [visible2, setVisible2] = React.useState(false);
    const [Username2, setUsername2] = React.useState("نوع");
    const openMenu = () => setVisible1(true);

    const closeMenu = () => setVisible1(false);
    const openMenu2 = () => setVisible2(true);

    const closeMenu2 = () => setVisible2(false);


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
                namepage=" بسته اینترنت اعباری"
                icon={"chevron-forward"}
                iconleft
                iconL={"help-circle-outline"}
                onPressLeft={showModal}
            />


<Portal>
                <Modal visible={visible} 
                onDismiss={hideModal} style={{ width: "80%", height: 200, backgroundColor: Colors.black0, marginLeft: 45, borderRadius: 10, position: "absolute", top: "30%" }}  >

                    <ScrollView>


                        <View style={{ width: "100%", height: 300,padding:5 }}>

                           <View style={{width:"100%",height:50,flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10,alignItems:"center"}}>
                            <MaterialCommunityIcons  onPress={hideModal} name="close" size={25} color={Colors.background} />
                           <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>راهنما</Text>
                          
                           </View>
                            <View style={{width:"100%",height:1,backgroundColor:Colors.secondText3}}></View>
                           <View style={{width:"100%",height:200,padding:5,flexDirection:"column",paddingHorizontal:10}}>
                   
                           <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}> بسته اینترنت</Text>
                           <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background ,textAlign:"center"}}>در این صفحه شما میتوانید  لیست تمامی بسته های خود را مشاهده کنید.
                           .</Text>
                           
                          


</View>

                        </View>





                    </ScrollView>
                </Modal>
            </Portal>


            <View style={{ width: "95%", height: 60, marginTop: 10, flexDirection: "row", borderRadius: 5, justifyContent: "space-between", }}>

                <TouchableOpacity onPress={openMenu} style={{ borderRadius: 5, width: "49%", height: 60, flexDirection: "row-reverse", backgroundColor: Colors.background, justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10 }}>
                    <MaterialCommunityIcons name="chevron-down" size={30} color={Colors.black3} />
                    <Text style={{ fontFamily: "Montserrat", fontSize: 16, color: Colors.black3, }}>{Username1}</Text>
                    <MaterialCommunityIcons name="circle-slice-5" size={30} color={Colors.black3} />

                </TouchableOpacity>

                <TouchableOpacity onPress={openMenu2} style={{ borderRadius: 5, width: "49%", height: 60, flexDirection: "row-reverse", backgroundColor: Colors.background, justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10, }}>
                    <MaterialCommunityIcons name="chevron-down" size={30} color={Colors.black3} />
                    <Text style={{ fontFamily: "Montserrat", fontSize: 16, color: Colors.black3, }}>{Username2}</Text>
                    <MaterialCommunityIcons name="filter" size={30} color={Colors.black3} />

                </TouchableOpacity>
            </View>

            <View
                style={{

                    paddingTop: 50,

                    justifyContent: 'center',
                    left: 5,
                    position: "absolute"
                }}>
                <Menu
                    style={{ width: "45%", }}
                    visible={visible1}
                    onDismiss={closeMenu}
                    statusBarHeight={60}


                    anchor={{
                        x: 15,
                        y: 120,
                    }}>

                    <Menu.Item onPress={() => {
                        setUsername1("همه")
                        closeMenu()
                    }} title="همه"
                        titleStyle={{ width: 160, textAlign: "center", fontFamily: "Montserrat", fontSize: 15, color: Colors.black, }} />



                    <Menu.Item
                        titleStyle={{ width: 160, textAlign: "center", fontFamily: "Montserrat", fontSize: 15, color: Colors.black, }}
                        onPress={() => {
                            setUsername1("روزانه")
                            closeMenu()
                        }} title="روزانه" />


                    <Menu.Item

                        titleStyle={{ width: 160, textAlign: "center", fontFamily: "Montserrat", fontSize: 15, color: Colors.black, }}
                        onPress={() => {
                            setUsername1("هفتگی")
                            closeMenu()
                        }} title="هفتگی" />

                    <Menu.Item onPress={() => {
                        setUsername1("ماهانه")
                        closeMenu()
                    }} title="ماهانه"
                        titleStyle={{ width: 160, textAlign: "center", fontFamily: "Montserrat", fontSize: 15, color: Colors.black, }} />



                    <Menu.Item
                        titleStyle={{ width: 160, textAlign: "center", fontFamily: "Montserrat", fontSize: 15, color: Colors.black, }}
                        onPress={() => {
                            setUsername1("دوماهه")
                            closeMenu()
                        }} title="دوماهه" />


                    <Menu.Item

                        titleStyle={{ width: 160, textAlign: "center", fontFamily: "Montserrat", fontSize: 15, color: Colors.black, }}
                        onPress={() => {
                            setUsername1("چهارماهه")
                            closeMenu()
                        }} title="چهارماهه" />
                </Menu>
            </View>
            <View
                style={{

                    paddingTop: 50,

                    justifyContent: 'center',
                    left: 5,
                    position: "absolute"
                }}>
                <Menu
                    style={{ width: "45%", }}
                    visible={visible2}
                    onDismiss={closeMenu2}
                    statusBarHeight={60}




                    anchor={{
                        x: 400,
                        y: 120,
                    }}>

                    <Menu.Item onPress={() => {
                        setUsername2("نوع")
                        closeMenu2()

                    }} title="نوع"
                        titleStyle={{ width: 160, textAlign: "center", fontFamily: "Montserrat", fontSize: 15, color: Colors.black, }} />



                    <Menu.Item
                        titleStyle={{ width: 160, textAlign: "center", fontFamily: "Montserrat", fontSize: 15, color: Colors.black, }}
                        onPress={() => {
                            setUsername2("اینترنت همراه")
                            closeMenu2()
                        }} title="اینترنت همراه" />



                </Menu>
            </View>

            <ScrollView style={{ width: "97%", padding: 5,marginTop:10 }}>

                <TouchableOpacity

                    onPress={() => props.navigation.navigate("sendtocard")}
                    style={{ flexDirection: "column", width: "100%", height: 140, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.background, borderRadius: 10, marginTop: 10 }}>


                    <View style={{ width: "30%", height: "20%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", position: "absolute", right: 10, marginTop: 10 }}>
                        <MaterialCommunityIcons name="cloud-download" size={25} color={Colors.black} />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.black, }}>15 گیگابایت</Text>
                    </View>

                    <View style={{ width: "100%", height: 30, flexDirection: "row", borderColor: Colors.secondText3, marginTop: 10 }}>
                        <View style={{ width: "30%", height: 32, alignItems: "center", justifyContent: "center", backgroundColor: Colors.success, flexDirection: "row" }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>830,800 ریال</Text>
                            <MaterialCommunityIcons name="arrow-right-bold" size={50} color={Colors.success} style={{ position: "absolute", bottom: -10, left: 91 }} />
                        </View>
                    </View>

                    <View style={{ width: "30%", height: "20%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", position: "absolute", top: 30, right: 10, marginTop: 10 }}>
                        <MaterialCommunityIcons name="circle-slice-5" size={25} color={Colors.black} />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.black, right: 15 }}>چهارماهه</Text>
                    </View>


                    <View style={{ flexDirection: "column", width: "100%", height: "40%", justifyContent: "center", alignItems: "flex-end", position: "absolute", bottom: 0, paddingHorizontal: 15 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black0, }}>آلفا 12+ گیگ (6 صبح تا 12 عصر)</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black0, }}>مبلغ با احتساب 10 درصد مالیات 147400 ریال</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity

                    onPress={() => props.navigation.navigate("sendtocard")}
                    style={{ flexDirection: "column", width: "100%", height: 140, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.background, borderRadius: 10, marginTop: 10 }}>


                    <View style={{ width: "30%", height: "20%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", position: "absolute", right: 10, marginTop: 10 }}>
                        <MaterialCommunityIcons name="cloud-download" size={25} color={Colors.black} />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.black, }}>15 گیگابایت</Text>
                    </View>

                    <View style={{ width: "100%", height: 30, flexDirection: "row", borderColor: Colors.secondText3, marginTop: 10 }}>
                        <View style={{ width: "30%", height: 32, alignItems: "center", justifyContent: "center", backgroundColor: Colors.success, flexDirection: "row" }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>830,800 ریال</Text>
                            <MaterialCommunityIcons name="arrow-right-bold" size={50} color={Colors.success} style={{ position: "absolute", bottom: -10, left: 91 }} />
                        </View>
                    </View>

                    <View style={{ width: "30%", height: "20%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", position: "absolute", top: 30, right: 10, marginTop: 10 }}>
                        <MaterialCommunityIcons name="circle-slice-5" size={25} color={Colors.black} />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.black, right: 15 }}>چهارماهه</Text>
                    </View>


                    <View style={{ flexDirection: "column", width: "100%", height: "40%", justifyContent: "center", alignItems: "flex-end", position: "absolute", bottom: 0, paddingHorizontal: 15 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black0, }}>آلفا 12+ گیگ (6 صبح تا 12 عصر)</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black0, }}>مبلغ با احتساب 10 درصد مالیات 147400 ریال</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity

                    onPress={() => props.navigation.navigate("sendtocard")}
                    style={{ flexDirection: "column", width: "100%", height: 140, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.background, borderRadius: 10, marginTop: 10 }}>


                    <View style={{ width: "30%", height: "20%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", position: "absolute", right: 10, marginTop: 10 }}>
                        <MaterialCommunityIcons name="cloud-download" size={25} color={Colors.black} />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.black, }}>15 گیگابایت</Text>
                    </View>

                    <View style={{ width: "100%", height: 30, flexDirection: "row", borderColor: Colors.secondText3, marginTop: 10 }}>
                        <View style={{ width: "30%", height: 32, alignItems: "center", justifyContent: "center", backgroundColor: Colors.success, flexDirection: "row" }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>830,800 ریال</Text>
                            <MaterialCommunityIcons name="arrow-right-bold" size={50} color={Colors.success} style={{ position: "absolute", bottom: -10, left: 91 }} />
                        </View>
                    </View>

                    <View style={{ width: "30%", height: "20%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", position: "absolute", top: 30, right: 10, marginTop: 10 }}>
                        <MaterialCommunityIcons name="circle-slice-5" size={25} color={Colors.black} />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.black, right: 15 }}>چهارماهه</Text>
                    </View>


                    <View style={{ flexDirection: "column", width: "100%", height: "40%", justifyContent: "center", alignItems: "flex-end", position: "absolute", bottom: 0, paddingHorizontal: 15 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black0, }}>آلفا 12+ گیگ (6 صبح تا 12 عصر)</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black0, }}>مبلغ با احتساب 10 درصد مالیات 147400 ریال</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity

                    onPress={() => props.navigation.navigate("sendtocard")}
                    style={{ flexDirection: "column", width: "100%", height: 140, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.background, borderRadius: 10, marginTop: 10 }}>


                    <View style={{ width: "30%", height: "20%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", position: "absolute", right: 10, marginTop: 10 }}>
                        <MaterialCommunityIcons name="cloud-download" size={25} color={Colors.black} />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.black, }}>15 گیگابایت</Text>
                    </View>

                    <View style={{ width: "100%", height: 30, flexDirection: "row", borderColor: Colors.secondText3, marginTop: 10 }}>
                        <View style={{ width: "30%", height: 32, alignItems: "center", justifyContent: "center", backgroundColor: Colors.success, flexDirection: "row" }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>830,800 ریال</Text>
                            <MaterialCommunityIcons name="arrow-right-bold" size={50} color={Colors.success} style={{ position: "absolute", bottom: -10, left: 91 }} />
                        </View>
                    </View>

                    <View style={{ width: "30%", height: "20%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", position: "absolute", top: 30, right: 10, marginTop: 10 }}>
                        <MaterialCommunityIcons name="circle-slice-5" size={25} color={Colors.black} />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.black, right: 15 }}>چهارماهه</Text>
                    </View>


                    <View style={{ flexDirection: "column", width: "100%", height: "40%", justifyContent: "center", alignItems: "flex-end", position: "absolute", bottom: 0, paddingHorizontal: 15 }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black0, }}>آلفا 12+ گیگ (6 صبح تا 12 عصر)</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black0, }}>مبلغ با احتساب 10 درصد مالیات 147400 ریال</Text>
                    </View>

                </TouchableOpacity>







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




export default InternetList

