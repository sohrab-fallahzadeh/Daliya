import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, Switch, SafeAreaView, } from 'react-native';
import HeaderBar from '../../components/headerbar';
import Btn from "../../components/btn"
import Colors from '../../constants/Colors';
import Searchitem from '../../components/searchitem';
import { Checkbox, Modal, Portal } from 'react-native-paper';
import IPT from '../../components/ipt';










const Increase = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [paymentWay, setpaymentWay] = useState(false);
    const toggleSwitch = () => {


        setpaymentWay(previousState => !previousState)

    };
    const [checked, setChecked] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [value, setValue] = useState('');
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
                namepage="افزایش اعتبار"
                icon={"chevron-forward"}
                iconleft

                iconL={"help-circle-outline"}
             onPressLeft={ showModal}
            />

            <View style={{ width: "100%", height: 50, justifyContent: "center", alignItems: "center", padding: 10 }}>
                <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>مبلغ مورد نظر را انتخاب نمایید</Text>

            </View>





            <IPT
                styleview={{ width: "90%", backgroundColor: Colors.background, borderColor: Colors.black0 }}
                icon
                styleinput={{ color: Colors.black0, fontFamily: "Montserrat", fontSize: 13 }}
                iconname={value ? "close" : ""}
                coloricon={Colors.black0}
                sizeicon={20}
                onChangeText={(t) => setValue(t)}
                onPressicon={() => setValue("")}
                value={value}

                placeholderTextColor={Colors.secondText3}

                placeholder={"لطفا مبلغ را وارد کنید"}

                keyboardType="number-pad"
                title="مبلغ (ریال)"
            />

            <TouchableOpacity
               

                style={{ padding: 5, borderRadius: 10, marginHorizontal: 20, marginTop: 10, flexDirection: "row", width: "90%", height: 60, justifyContent: "center", alignItems: "center", backgroundColor: Colors.background }}>

                <TouchableOpacity onPress={(t) => setValue("5,000,000")} style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black }}>5,000,000</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={(t) => setValue("2,000,000")} style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center", borderRightWidth: 1, borderLeftWidth: 1 }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black }}>2,000,000</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={(t) => setValue("1,000,000")} style={{ width: "33%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black }}>1,000,000</Text>

                </TouchableOpacity>


            </TouchableOpacity>

            <Portal>
                <Modal visible={visible} 
                onDismiss={hideModal} style={{ width: "80%", height: 220, backgroundColor: Colors.black0, marginLeft: 45, borderRadius: 10, position: "absolute", top: "30%" }}  >

                    <ScrollView>


                        <View style={{ width: "100%", height: 300,padding:5 }}>

                           <View style={{width:"100%",height:50,flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10,alignItems:"center"}}>
                            <MaterialCommunityIcons  onPress={hideModal} name="close" size={25} color={Colors.background} />
                           <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>راهنما</Text>
                          
                           </View>
                            <View style={{width:"100%",height:1,backgroundColor:Colors.secondText3}}></View>
                           <View style={{width:"100%",height:200,padding:5,flexDirection:"column"}}>
                   
                           <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}>افزایش اعتبار</Text>
                           <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}> در اینجا شما میتوانید اعتبار کیف پول خود را افزایش دهید.</Text>
                           <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}> 1 - وارد کردن مبلغ به ریال</Text>
                           <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}> 2 - انتخاب گزینه افزایش اعتبار</Text>
                           <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}> 3 - وارد کردن اطلاعات کارت بانکی</Text>
                           <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}>  مبلغ پرداخت شده به حساب کیف پول شما واریز خواهد شد </Text>
                          


</View>

                        </View>





                    </ScrollView>
                </Modal>
            </Portal>






            <Btn
                label="افزایش اعتبار"
                style={{ width: "100%", marginTop: "70%" }}


                onPress={() => props.navigation.navigate("sendtocard")}
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




export default Increase

