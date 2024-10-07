import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, Switch, SafeAreaView, } from 'react-native';
import HeaderBar from '../../components/headerbar';
import Btn from "../../components/btn"
import Colors from '../../constants/Colors';
import Searchitem from '../../components/searchitem';
import { Checkbox, Modal, Portal } from 'react-native-paper';










const TornOver = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [paymentWay, setpaymentWay] = useState(false);
    const toggleSwitch = () => {


        setpaymentWay(previousState => !previousState)

    };
    const [checked, setChecked] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

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
                namepage="گردش حساب"
                icon={"chevron-forward"}
                iconleft

                iconL={"help-circle-outline"}
            // onPressLeft={openMenu}
            />

            <View style={{ width: "100%", height: 50, justifyContent: "center", alignItems: "center", padding: 10 }}>
                <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>کلیه مبالغ به ریال است</Text>

            </View>



            <ScrollView style={{ width: "100%", marginBottom: 10 }}>



                <TouchableOpacity
                    onPress={showModal}

                    style={{ padding: 5, borderRadius: 10, marginHorizontal: 20, marginTop: 10, flexDirection: "row", width: "90%", height: 120, justifyContent: "flex-end", alignItems: "center", backgroundColor: Colors.background }}>

                    <View style={{ width: "100%", height: "100%", flexDirection: "column", }}>
                        <View style={{ width: "100%", height: "30%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between" }}>

                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>برداشت</Text>

                            <Text style={{ fontFamily: "MontserratBold", fontSize: 18, color: Colors.primary, position: "absolute", right: 40 }}>-2,003,500</Text>

                            <MaterialCommunityIcons name="dots-vertical" size={25} color={Colors.black0} />
                        </View>
                        <View style={{ width: "100%", height: 30, flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginLeft: 40 }}>1403/05/04 - 9:43</Text>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>شماره ارجاع : 07859565555555 </Text>

                        </View>


                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5, marginTop: 5 }}>بابت پرداخت گاز به شماره شبا 3602556688898888</Text>
                    </View>


                </TouchableOpacity>


                <TouchableOpacity
                    onPress={showModal}

                    style={{ padding: 5, borderRadius: 10, marginHorizontal: 20, marginTop: 10, flexDirection: "row", width: "90%", height: 120, justifyContent: "flex-end", alignItems: "center", backgroundColor: Colors.background }}>

                    <View style={{ width: "100%", height: "100%", flexDirection: "column", }}>
                        <View style={{ width: "100%", height: "30%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between" }}>

                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>واریز</Text>

                            <Text style={{ fontFamily: "MontserratBold", fontSize: 18, color: Colors.success, position: "absolute", right: 40 }}>+2,003,500</Text>

                            <MaterialCommunityIcons name="dots-vertical" size={25} color={Colors.black0} />
                        </View>
                        <View style={{ width: "100%", height: 30, flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginLeft: 40 }}>1403/05/04 - 9:43</Text>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>شماره ارجاع : 07859565555555 </Text>

                        </View>


                        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5, marginTop: 5 }}>بابت پرداخت گاز به شماره شبا 3602556688898888</Text>
                    </View>


                </TouchableOpacity>


            </ScrollView>




            <Portal>
                <Modal visible={visible} 
                onDismiss={hideModal} style={{ width: "80%", height: 120, backgroundColor: Colors.black0, marginLeft: 45, borderRadius: 10, position: "absolute", top: "50%" }}  >

                    <ScrollView>


                        <View style={{ width: "100%", alignSelf: "auto", }}>

                            <TouchableOpacity style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>اشتراک گذاری</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>ذخیره در گالری</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>اشتراک متن</Text>

                            </TouchableOpacity>


                        </View>





                    </ScrollView>
                </Modal>
            </Portal>


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




export default TornOver

