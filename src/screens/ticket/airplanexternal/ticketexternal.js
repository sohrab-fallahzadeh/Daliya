import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, SafeAreaView, TouchableHighlight, } from 'react-native';
import HeaderBar from '../../../components/headerbar';
import Btn from "../../../components/btn"
import Colors from '../../../constants/Colors';
import { Divider, Menu, Modal, Portal } from 'react-native-paper';
import DatePicker from 'react-native-jalaali-date-picker'









const TicketExternal = (props) => {


    const [visible, setVisible] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);



    const scrollRef = useRef();
    const scrollToEnd = () => scrollRef.current.scrollToEnd({ animated: false });


    const [visible1, setVisible1] = React.useState(false);
    const containerStyle = { backgroundColor: Colors.background, padding: 20, borderRadius: 10 };
    const showModal = () => setVisible1(true);
    const hideModal = () => setVisible1(false);


    const [visible3, setVisible3] = React.useState(false);
    const containerStyle3 = { backgroundColor: Colors.background, padding: 20, borderRadius: 10 };
    const showModal3 = () => setVisible3(true);
    const hideModal3 = () => setVisible3(false);

    return (










        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: "flex-start",
            // marginLeft: isSmallScreen ? 0 : "35%",
            backgroundColor: Colors.black2,


        }}>


            <HeaderBar
                onPressright={() => props.navigation.navigate("ticketpage")}
                namepage="پرواز خارجی"
                icon={"chevron-forward"}
                iconleft
                iconL={"dots-vertical"}
                onPressLeft={openMenu}
            />


            <View
                style={{
                    paddingTop: 50,

                    justifyContent: 'center',
                    left: 5,
                    position: "absolute"
                }}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    statusBarHeight={60}


                    anchor={{
                        x: 50,
                        y: 60,
                    }}>

                    <Menu.Item leadingIcon={"ticket-confirmation-outline"} onPress={() => { }} title="بلیط های من"
                        titleStyle={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.primary, }} />

                    <Divider />

                    <Menu.Item
                        titleStyle={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.primary, }}
                        leadingIcon={"note-text-outline"} onPress={() => { }} title="قوانین و مقررات" />


                    <Menu.Item
                        leadingIcon={"help-circle-outline"}
                        titleStyle={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.primary, }}
                        onPress={() => { }} title="راهنما و سوالات متداول" />

                </Menu>
            </View>

            <View style={{ flexDirection: "row-reverse", width: "100%", height: 30, justifyContent: "center", alignItems: "center", backgroundColor: Colors.black2 }}>
                <TouchableOpacity

                    style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center", borderBottomWidth: 2, borderColor: Colors.primary }}>

                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.primary, }}>یک طرفه</Text>

                </TouchableOpacity>

                <TouchableOpacity

                    style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center", }}>

                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.secondText3, }}>رفت و برگشت</Text>

                </TouchableOpacity>
                <TouchableOpacity

                    style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center", }}>

                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.secondText3, }}>چند مسیره</Text>

                </TouchableOpacity>





            </View>


            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>



                <View style={{ width: "100%", height: 30, justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>مسیر اول</Text>

                </View>
                <View style={{ flexDirection: "row-reverse", width: "90%", height: 80, justifyContent: "center", alignItems: "center", marginTop: "3%", backgroundColor: Colors.black2 }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("searchticket", {
                            location: "مبدا"
                        })}
                        style={{ borderBottomRightRadius: 10, borderTopRightRadius: 10, flexDirection: "column", width: "50%", height: "100%", backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-end", left: 24 }}>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, right: 10 }}>مبدا</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, right: 10 }}>(MHD)مشهد</Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, right: 10 }}>فرودگاه هاشمی نژاد</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ zIndex: 2, width: 50, height: 50, backgroundColor: Colors.black3, justifyContent: "center", alignItems: "center", borderRadius: 50 }}>
                        <AntDesign name="swap" size={25} color={Colors.background} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("searchticket", {
                            location: "مقصد"
                        })}
                        style={{ borderBottomLeftRadius: 10, borderTopLeftRadius: 10, flexDirection: "column", width: "50%", height: "100%", backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", right: 24 }}>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, left: 10 }}>مقصد</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, left: 10 }}>(THR)تهران</Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, left: 10 }}>فرودگاه مهرآباد</Text>
                    </TouchableOpacity>



                </View>

                <TouchableOpacity onPress={showModal} style={{ flexDirection: "row", padding: 7, width: "90%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-end", marginTop: "5%", borderRadius: 10 }}>

                    <View style={{ width: "85%", justifyContent: "center", alignItems: "flex-end", height: 60, flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, textAlign: "center", right: 15 }}>تاریخ رفت</Text>

                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, textAlign: "center", right: 15 }}>23  شهریور 1403</Text>

                    </View>


                    <View style={{ width: "15%", justifyContent: "center", alignItems: "flex-end", height: 60, }}>

                        <Feather name="calendar" size={30} color={Colors.background} style={{ right: 10 }} />
                    </View>


                </TouchableOpacity>

                <Portal>
                    <Modal visible={visible1} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ justifyContent: "center", alignItems: "center" }} >
                        <DatePicker


                            showTitleDate={true}
                            TitleDateStyle={{ color: Colors.black, fontFamily: "MontserratBold", fontSize: 15, bottom: 20 }}
                            btnColor={Colors.success}
                            btnStyle={{ width: "100%", height: 50 }}
                            btnUnderlayColor={Colors.secondText3}
                            arrowTintColor={Colors.primary}
                            arrowSize={25}
                            dateBoxStyle={{ width: 85, height: 80 }}
                            dateStyle={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}
                            onChangeDate={(date) => {
                                console.log(date)
                            }}
                        />

                    </Modal>
                </Portal>












                <View style={{ width: "100%", height: 30, justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>مسیر دوم</Text>

                </View>
                <View style={{ flexDirection: "row-reverse", width: "90%", height: 80, justifyContent: "center", alignItems: "center", marginTop: "3%", backgroundColor: Colors.black2 }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("searchticket", {
                            location: "مبدا"
                        })}
                        style={{ borderBottomRightRadius: 10, borderTopRightRadius: 10, flexDirection: "column", width: "50%", height: "100%", backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-end", left: 24 }}>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, right: 10 }}>مبدا</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, right: 10 }}>(MHD)مشهد</Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, right: 10 }}>فرودگاه هاشمی نژاد</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ zIndex: 2, width: 50, height: 50, backgroundColor: Colors.black3, justifyContent: "center", alignItems: "center", borderRadius: 50 }}>
                        <AntDesign name="swap" size={25} color={Colors.background} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("searchticket", {
                            location: "مقصد"
                        })}
                        style={{ borderBottomLeftRadius: 10, borderTopLeftRadius: 10, flexDirection: "column", width: "50%", height: "100%", backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", right: 24 }}>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, left: 10 }}>مقصد</Text>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, left: 10 }}>(THR)تهران</Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, left: 10 }}>فرودگاه مهرآباد</Text>
                    </TouchableOpacity>



                </View>

                <TouchableOpacity onPress={showModal} style={{ flexDirection: "row", padding: 7, width: "90%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-end", marginTop: "5%", borderRadius: 10 }}>

                    <View style={{ width: "85%", justifyContent: "center", alignItems: "flex-end", height: 60, flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, textAlign: "center", right: 15 }}>تاریخ رفت</Text>

                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, textAlign: "center", right: 15 }}>23  شهریور 1403</Text>

                    </View>


                    <View style={{ width: "15%", justifyContent: "center", alignItems: "flex-end", height: 60, }}>

                        <Feather name="calendar" size={30} color={Colors.background} style={{ right: 10 }} />
                    </View>


                </TouchableOpacity>

                <Portal>
                    <Modal visible={visible1} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ justifyContent: "center", alignItems: "center" }} >
                        <DatePicker


                            showTitleDate={true}
                            TitleDateStyle={{ color: Colors.black, fontFamily: "MontserratBold", fontSize: 15, bottom: 20 }}
                            btnColor={Colors.success}
                            btnStyle={{ width: "100%", height: 50 }}
                            btnUnderlayColor={Colors.secondText3}
                            arrowTintColor={Colors.primary}
                            arrowSize={25}
                            dateBoxStyle={{ width: 85, height: 80 }}
                            dateStyle={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}
                            onChangeDate={(date) => {
                                console.log(date)
                            }}
                        />

                    </Modal>
                </Portal>














                <TouchableOpacity onPress={() => setVisible2(!visible2)} style={{ flexDirection: "row", width: "100%", height: 30, justifyContent: "center", alignItems: "center", marginTop: 10 }}>

                    {visible2 == false ?
                        <Feather name="plus" size={20} color={Colors.success} style={{ marginTop: 5 }} />
                        :
                        <Feather name="x" size={20} color={Colors.background} style={{ marginTop: 5 }} />}

                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: visible2 == true ? Colors.background : Colors.success, }}>مسیر سوم  </Text>
                </TouchableOpacity>
                {visible2 == true ?
                    <SafeAreaView style={{ alignItems: "center" }}>



                        <View style={{ right: 10, flexDirection: "row-reverse", width: "90%", height: 80, justifyContent: "center", alignItems: "center", marginTop: "3%", backgroundColor: Colors.black2 }}>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate("searchticket", {
                                    location: "مبدا"
                                })}
                                style={{ borderBottomRightRadius: 10, borderTopRightRadius: 10, flexDirection: "column", width: "50%", height: "100%", backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-end", left: 24 }}>
                                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, right: 10 }}>مبدا</Text>
                                <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, right: 10 }}>(MHD)مشهد</Text>
                                <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, right: 10 }}>فرودگاه هاشمی نژاد</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ zIndex: 2, width: 50, height: 50, backgroundColor: Colors.black3, justifyContent: "center", alignItems: "center", borderRadius: 50 }}>
                                <AntDesign name="swap" size={25} color={Colors.background} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => props.navigation.navigate("searchticket", {
                                    location: "مقصد"
                                })}
                                style={{ borderBottomLeftRadius: 10, borderTopLeftRadius: 10, flexDirection: "column", width: "50%", height: "100%", backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", right: 24 }}>
                                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, left: 10 }}>مقصد</Text>
                                <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, left: 10 }}>(THR)تهران</Text>
                                <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, left: 10 }}>فرودگاه مهرآباد</Text>
                            </TouchableOpacity>



                        </View>

                        <TouchableOpacity onPress={showModal} style={{ flexDirection: "row", padding: 7, width: "90%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-end", marginTop: "5%", borderRadius: 10 }}>

                            <View style={{ width: "85%", justifyContent: "center", alignItems: "flex-end", height: 60, flexDirection: "column" }}>
                                <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, textAlign: "center", right: 15 }}>تاریخ رفت</Text>

                                <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, textAlign: "center", right: 15 }}>23  شهریور 1403</Text>

                            </View>


                            <View style={{ width: "15%", justifyContent: "center", alignItems: "flex-end", height: 60, }}>

                                <Feather name="calendar" size={30} color={Colors.background} style={{ right: 10 }} />
                            </View>


                        </TouchableOpacity>

                        <Portal>
                            <Modal visible={visible1} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ justifyContent: "center", alignItems: "center" }} >
                                <DatePicker


                                    showTitleDate={true}
                                    TitleDateStyle={{ color: Colors.black, fontFamily: "MontserratBold", fontSize: 15, bottom: 20 }}
                                    btnColor={Colors.success}
                                    btnStyle={{ width: "100%", height: 50 }}
                                    btnUnderlayColor={Colors.secondText3}
                                    arrowTintColor={Colors.primary}
                                    arrowSize={25}
                                    dateBoxStyle={{ width: 85, height: 80 }}
                                    dateStyle={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}
                                    onChangeDate={(date) => {
                                        console.log(date)
                                    }}
                                />

                            </Modal>
                        </Portal>

                    </SafeAreaView>
                    :

                    null
                }





                <TouchableOpacity onPress={showModal3} style={{ flexDirection: "row", padding: 7, width: "90%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-end", marginTop: "5%", borderRadius: 10 }}>

                    <View style={{ width: "85%", justifyContent: "center", alignItems: "flex-end", height: 60, flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, textAlign: "center", right: 15 }}>تعداد مسافران</Text>

                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, textAlign: "center", right: 15 }}>1 بزرگسال</Text>

                    </View>


                    <View style={{ width: "15%", justifyContent: "center", alignItems: "flex-end", height: 60, }}>

                        <Feather name="user" size={30} color={Colors.background} style={{ right: 10 }} />
                    </View>


                </TouchableOpacity>



                <Portal>
          <Modal visible={visible3} onDismiss={hideModal3} contentContainerStyle={containerStyle3}style={{justifyContent:"center",alignItems:"center"}} >
       <View style={{width:300,height:200}}>
           <View style={{width:"100%",height:30}}>
           <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.black, textAlign: "right",  }}>مسافران</Text>
           </View>
           

       </View>
          
          </Modal>
        </Portal>


                <TouchableOpacity style={{ flexDirection: "row", padding: 7, width: "90%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-end", marginTop: "5%", borderRadius: 10 }}>

                    <View style={{ width: "85%", justifyContent: "center", alignItems: "flex-end", height: 60, flexDirection: "column" }}>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, textAlign: "center", right: 15 }}>کلاس پرواز</Text>

                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, textAlign: "center", right: 15 }}>اکونومی</Text>

                    </View>


                    <View style={{ width: "15%", justifyContent: "center", alignItems: "flex-end", height: 60, }}>

                        <MaterialCommunityIcons name="chair-rolling" size={30} color={Colors.background} style={{ right: 10 }} />
                    </View>


                </TouchableOpacity>


                <Btn
                    label="جست و جو"
                    style={{ width: "100%", marginTop: "5%" }}


                    onPress={() => props.navigation.navigate("listexternal")}
                />


            </ScrollView>

            <View style={{ width: "100%", backgroundColor: Colors.black0, marginTop: "5%" }}>

                <View style={{ flexDirection: "row-reverse", width: "100%", height: 30, justifyContent: "space-between", alignItems: "center" }}>

                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, left: 15 }}>جست و جو های اخیر (4)</Text>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.primary, left: 10 }}>پاک کردن</Text>
                    </TouchableOpacity>

                </View>

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
                    <View
                        style={{
                            width: 100,
                            height: 120,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Colors.black3,
                            borderRadius: 10,
                            marginTop: 30,
                            marginRight: 10,

                            flexDirection: "column"

                        }}
                    >
                        <View style={{ width: 50, height: 50, backgroundColor: Colors.black2, borderRadius: 50, bottom: 20 }}>
                            <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>

                        </View>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, bottom: 20 }}>مشهد - اصفهان</Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.success, bottom: 20 }}>پرواز رفت </Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, bottom: 20 }}>1 بزرگسال</Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, bottom: 20 }}>17 اردیبهشت </Text>
                    </View>
                    <View
                        style={{
                            width: 100,
                            height: 120,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Colors.black3,
                            borderRadius: 10,
                            marginTop: 30,
                            marginRight: 10,

                            flexDirection: "column"

                        }}
                    >
                        <View style={{ width: 50, height: 50, backgroundColor: Colors.black2, borderRadius: 50, bottom: 20 }}>
                            <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>

                        </View>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, bottom: 20 }}>مشهد - اصفهان</Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.success, bottom: 20 }}>پرواز رفت </Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, bottom: 20 }}>1 بزرگسال</Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, bottom: 20 }}>17 اردیبهشت </Text>
                    </View>
                    <View
                        style={{
                            width: 100,
                            height: 120,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Colors.black3,
                            borderRadius: 10,
                            marginTop: 30,
                            marginRight: 10,

                            flexDirection: "column"

                        }}
                    >
                        <View style={{ width: 50, height: 50, backgroundColor: Colors.black2, borderRadius: 50, bottom: 20 }}>
                            <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>

                        </View>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, bottom: 20 }}>مشهد - اصفهان</Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.success, bottom: 20 }}>پرواز رفت </Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, bottom: 20 }}>1 بزرگسال</Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, bottom: 20 }}>17 اردیبهشت </Text>
                    </View>
                    <View
                        style={{
                            width: 100,
                            height: 120,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Colors.black3,
                            borderRadius: 10,
                            marginTop: 30,
                            marginRight: 10,

                            flexDirection: "column"

                        }}
                    >
                        <View style={{ width: 50, height: 50, backgroundColor: Colors.black2, borderRadius: 50, bottom: 20 }}>
                            <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>

                        </View>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, bottom: 20 }}>مشهد - اصفهان</Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.success, bottom: 20 }}>پرواز رفت </Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, bottom: 20 }}>1 بزرگسال</Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, bottom: 20 }}>17 اردیبهشت </Text>
                    </View>
                    <View
                        style={{
                            width: 100,
                            height: 120,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Colors.black3,
                            borderRadius: 10,
                            marginTop: 30,
                            marginRight: 10,

                            flexDirection: "column"

                        }}
                    >
                        <View style={{ width: 50, height: 50, backgroundColor: Colors.black2, borderRadius: 50, bottom: 20 }}>
                            <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>

                        </View>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, bottom: 20 }}>مشهد - اصفهان</Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.success, bottom: 20 }}>پرواز رفت </Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, bottom: 20 }}>1 بزرگسال</Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, bottom: 20 }}>17 اردیبهشت </Text>
                    </View>


                </ScrollView>










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




export default TicketExternal

