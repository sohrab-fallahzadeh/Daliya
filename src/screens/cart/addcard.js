import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, Image, ScrollView, } from 'react-native';
import { Modal, Portal, RadioButton, Switch } from 'react-native-paper';
import Btn from "../../components/btn"
import HeaderBar from "../../components/headerbar";
import Searchitem from '../../components/searchitem';
import Colors from '../../constants/Colors';








const Addcard = (props) => {

    const [task, setTask] = useState("");
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'black', padding: 20 };
    const [value, setValue] = React.useState('first');
    const [select, setselect] = React.useState(false);
    const toggleSwitch = () => {
        setpaymentWay(previousState => !previousState)
    };
    const [paymentWay, setpaymentWay] = useState(false);

    const [checked, setChecked] = React.useState(false);


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
                namepage={"انتخاب کارت "  +  props.route.params.titlecard}
                icon={"chevron-forward"}
            />


            <View style={{ flexDirection: "row", padding: 5, width: "90%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", marginBottom: "5%", borderRadius: 10, }}>

                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>کارت {props.route.params.titlecard}</Text>
                <TextInput


                    textAlign="right"


                    style={{
                        height: 30,
                        width: "80%",
                        marginTop: 20,

                        marginLeft: "13%",
                        color: "white",

                    }}

                    // onChangeText={(t) => setTask(t)}
                    // value={task}

                    keyboardType="number-pad"
                />


            </View>

            <ScrollView style={{ width: "100%", backgroundColor: Colors.black }}>







                <TouchableOpacity style={{ flexDirection: "row", padding: 5, width: "90%", height: 75, backgroundColor: Colors.black2, justifyContent: "flex-end", alignItems: "center", marginTop: "5%", marginLeft: "5%", borderRadius: 10 }}>
                    {/* <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.secondText3, marginRight:10 }}>کارت مقصد</Text> */}





                    <MaterialCommunityIcons onPress={showModal} name="dots-vertical" size={25} color={Colors.background} style={{ left: 40, zIndex: 2 }} />
                    <Searchitem
                        styleview={{ backgroundColor: Colors.black2 }}
                        nounderline
                        city="حسن رجبی مقدم"
                        ostan="xxxx-xxxx-xxxx-0311"
                        styleostan={{ fontFamily: "MontserratBold", fontSize: 15, textAlign: "right" }}
                        image={require("../../../assets/image/AsanPardakht.png")}
                        viewimage={{ backgroundColor: Colors.black2 }}
                    />


                </TouchableOpacity>
                
                <TouchableOpacity style={{ flexDirection: "row", padding: 5, width: "90%", height: 75, backgroundColor: Colors.black2, justifyContent: "flex-end", alignItems: "center", marginTop: "5%", marginLeft: "5%", borderRadius: 10 }}>
                    {/* <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.secondText3, marginRight:10 }}>کارت مقصد</Text> */}





                    <MaterialCommunityIcons onPress={showModal} name="dots-vertical" size={25} color={Colors.background} style={{ left: 40, zIndex: 2 }} />
                    <Searchitem
                        styleview={{ backgroundColor: Colors.black2 }}
                        nounderline
                        city=" رجب مقدم"
                        ostan="xxxx-xxxx-xxxx-0311"
                        styleostan={{ fontFamily: "MontserratBold", fontSize: 15, textAlign: "right" }}
                        image={require("../../../assets/image/AsanPardakht.png")}
                        viewimage={{ backgroundColor: Colors.black2 }}
                    />


                </TouchableOpacity>
                
                <TouchableOpacity style={{ flexDirection: "row", padding: 5, width: "90%", height: 75, backgroundColor: Colors.black2, justifyContent: "flex-end", alignItems: "center", marginTop: "5%", marginLeft: "5%", borderRadius: 10 }}>
                    {/* <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.secondText3, marginRight:10 }}>کارت مقصد</Text> */}





                    <MaterialCommunityIcons onPress={showModal} name="dots-vertical" size={25} color={Colors.background} style={{ left: 40, zIndex: 2 }} />
                    <Searchitem
                        styleview={{ backgroundColor: Colors.black2 }}
                        nounderline
                        city="حسن  مقدم"
                        ostan="xxxx-xxxx-xxxx-0311"
                        styleostan={{ fontFamily: "MontserratBold", fontSize: 15, textAlign: "right" }}
                        image={require("../../../assets/image/AsanPardakht.png")}
                        viewimage={{ backgroundColor: Colors.black2 }}
                    />


                </TouchableOpacity>

                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ position: "absolute", top: 100, }}>

                        <View style={{ flexDirection: "row-reverse", width: "100%", height: 50,justifyContent:"space-between",alignItems:"center" }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>انتخاب به عنوان پیش فرض</Text>

                            <Switch

                                trackColor={{ false: Colors.secondText, true: Colors.primary }}
                                thumbColor={paymentWay ? Colors.primary : Colors.secondText3}

                                ios_backgroundColor="white"
                                onValueChange={toggleSwitch}
                                value={paymentWay}
                            />
                        </View>

                        
                        <TouchableOpacity style={{flexDirection: "row-reverse", width: "100%", height: 50,justifyContent:"flex-start",alignItems:"center" }}>
                        <MaterialCommunityIcons onPress={showModal} name="calendar-text" size={25} color={Colors.background}  />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background,marginRight:10 }}>فهرست تراکنش های کارت</Text>
                      
                        </TouchableOpacity>

                        <TouchableOpacity style={{flexDirection: "row-reverse", width: "100%", height: 50,justifyContent:"flex-start",alignItems:"center" }}>
                        <MaterialCommunityIcons onPress={showModal} name="content-copy" size={25} color={Colors.background}  />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background,marginRight:10 }}> کپی شماره کارت</Text>
                      
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: "row-reverse", width: "100%", height: 50,justifyContent:"flex-start",alignItems:"center" }}>
                        <MaterialCommunityIcons onPress={showModal} name="credit-card-edit" size={25} color={Colors.background}  />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background,marginRight:10 }}>ویرایش</Text>
                      
                        </TouchableOpacity>

                        <TouchableOpacity style={{flexDirection: "row-reverse", width: "100%", height: 50,justifyContent:"flex-start",alignItems:"center" }}>
                        <MaterialCommunityIcons onPress={showModal} name="delete" size={25} color={Colors.background}  />
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background,marginRight:10 }}>حذف</Text>
                      
                        </TouchableOpacity>





                    </Modal>
                </Portal>

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
    textinput: {
        paddingLeft: Platform.OS === "web" ? "35%" : 0,
        flexDirection: "row",
        width: "90%",
        height: 50,
        backgroundColor: Colors.black,
        position: "absolute",
        left: "5%",
        borderRadius: 10,

        padding: 10,
        paddingRight: 50,
        fontFamily: "Montserrat",



    },

})




export default Addcard

