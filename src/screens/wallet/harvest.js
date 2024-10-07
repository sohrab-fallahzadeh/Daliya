import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, Switch, SafeAreaView, } from 'react-native';
import HeaderBar from '../../components/headerbar';
import Btn from "../../components/btn"
import Colors from '../../constants/Colors';
import Searchitem from '../../components/searchitem';
import { Checkbox, Modal, Portal } from 'react-native-paper';
import IPT from '../../components/ipt';










const Harvest = (props) => {
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
                namepage="برداشت از کیف پول"
                icon={"chevron-forward"}
                iconleft

                iconL={"help-circle-outline"}
                onPressLeft={ showModal}
            />

            <View style={{ width: "100%", height: 50, justifyContent: "center", alignItems: "center", padding: 10 }}>
                <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>لطفا اطلاعات ذیل را وارد نمایید</Text>

            </View>
            <View
                style={{ padding: 5, borderRadius: 10, marginHorizontal: 20, marginTop: 10, flexDirection: "column", width: "90%", height: 80, justifyContent: "space-around", alignItems: "center", backgroundColor: Colors.black0 }}>

               
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>موجودی قابل برداشت :</Text>

                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>522,000 ریال</Text>

            </View>


            <TouchableOpacity onPress={() => props.navigation.navigate("addcard",{
              titlecard:"مقصد",
            })} style={{ flexDirection: "row", padding: 5, width: "90%", height: 75, backgroundColor: Colors.background, justifyContent: "flex-end", alignItems: "center", marginTop: "5%", borderRadius: 10 }}>

              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.secondText3, marginRight: 10 }}>شماره کارت</Text>
             


            </TouchableOpacity>


            <IPT
                styleview={{ width: "90%", backgroundColor: Colors.background, borderColor: Colors.black0 }}
                icon
                styleinput={{ color: Colors.black0 ,fontFamily:"Montserrat",fontSize:13}}
                iconname={value ? "close" : ""}
                coloricon={Colors.black0}
                sizeicon={20}
                onChangeText={(t) => setValue(t)}
                onPressicon={() => setValue("")}
                value={value}

                placeholderTextColor={Colors.secondText3}

                placeholder={"لطفا مبلغ را وارد کنید"}

                keyboardType="number-pad"
                title="مبلغ(ریال)"
            />



<Portal>
                <Modal visible={visible} 
                onDismiss={hideModal} style={{ width: "80%", height: 240, backgroundColor: Colors.black0, marginLeft: 45, borderRadius: 10, position: "absolute", top: "30%" }}  >

                    <ScrollView>


                        <View style={{ width: "100%", height: 300,padding:5 }}>

                           <View style={{width:"100%",height:50,flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10,alignItems:"center"}}>
                            <MaterialCommunityIcons  onPress={hideModal} name="close" size={25} color={Colors.background} />
                           <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>راهنما</Text>
                          
                           </View>
                            <View style={{width:"100%",height:1,backgroundColor:Colors.secondText3}}></View>
                           <View style={{width:"100%",height:200,padding:5,flexDirection:"column",paddingHorizontal:10}}>
                   
                           <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>برداشت از کیف پول</Text>
                           <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background ,textAlign:"center"}}>در این صفحه شما میتوانید اعتبار کیف پول خود را به یکی از کارت های عضو شتاب خود واریز نمایید.
                            لطفا توجه نمایید که کارتی که قصد رارید اعتبار خود را به آن واریز نمایید باید متعلق به صاحب شماره تلفن آپ شما باشد.</Text>
                           
                          


</View>

                        </View>





                    </ScrollView>
                </Modal>
            </Portal>





            <Btn
                label="برداشت"
                style={{ width: "100%", marginTop: "40%" }}


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




export default Harvest

