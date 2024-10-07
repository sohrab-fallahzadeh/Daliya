import { Feather, FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, SafeAreaView, } from 'react-native';
import HeaderBar from '../../../components/headerbar';
import Btn from "../../../components/btn"
import Colors from '../../../constants/Colors';
import Searchitem from '../../../components/searchitem';
import { List } from 'react-native-paper';
import Selectbuscomponent from '../../../components/selectbuscomponent';









const SelectTicketBus = (props) => {

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
                namepage="تهران به مشهد"
                icon={"chevron-forward"}
            />
            <ScrollView style={{ width: "100%", padding: 5 }}>



                <View style={{ width: "100%", height: 50 }}>
                    <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "center" }}>به تعداد مسافران ،صندلی های مورد نظر خود را انتخاب کنید لطفا در انتخاب صندلی به جنسیت مسافر صندلی مجاور دقت کنید.</Text>
                </View>


                <View style={{ justifyContent: "center", alignItems: "center", width: "100%", height: 40, flexDirection: "row-reverse" }}>


                    <View style={{ width: 25, height: 25, backgroundColor: Colors.success, borderRadius: 5 }}></View>
                    <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, textAlign: "center" }}>  قابل خرید</Text>

                    <View style={{ justifyContent: "center", alignItems: "center", width: 25, height: 25, backgroundColor: "gray", borderRadius: 5, marginRight: 25 }}>
                        <MaterialCommunityIcons name="face-man" size={20} color={Colors.background} />
                    </View>
                    <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, textAlign: "center" }}>  خریداری شده (آقا)</Text>

                    <View style={{ justifyContent: "center", alignItems: "center", width: 25, height: 25, backgroundColor: "gray", borderRadius: 5, marginRight: 25 }}>
                        <MaterialCommunityIcons name="face-woman" size={20} color={Colors.background} />
                    </View>
                    <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, textAlign: "center" }}>  خریداری شده (خانم)</Text>

                </View>

                <View style={{ width: "90%", alignSelf: "auto", backgroundColor: "gray", marginLeft: "5%", marginBottom: 30, marginTop: 20 }}>



                    <Selectbuscomponent />

                    <Selectbuscomponent />
                    <Selectbuscomponent />
                    <Selectbuscomponent />
                    <Selectbuscomponent />

                    <Selectbuscomponent
                        box
                    />

                    <Selectbuscomponent
                        box
                    />
                    <Selectbuscomponent />
                    <Selectbuscomponent />
                    <Selectbuscomponent />

                    <Selectbuscomponent />
                    <Selectbuscomponent />








                </View>



            </ScrollView>


            <View style={{ width: "100%", height: 40, backgroundColor: Colors.black4, flexDirection: "row-reverse", alignItems: "center", paddingLeft: 20, justifyContent: 'space-between' }}>

                <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, textAlign: "center" }}>مجموع قیمت : صندلی 25</Text>
                <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, textAlign: "center", marginLeft: 20 }}>1،200،000 ریال</Text>
            </View>

            <View style={{ width: "100%", height: 60, backgroundColor: Colors.black4, justifyContent: "center", alignItems: "center" }}>
                <Btn
                    label="انتخاب و تایید"
                    style={{ width: "100%", }}
                    onPress={() => props.navigation.navigate("addPassenger",{
                        train:"bus"
                    })}
                />
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




export default SelectTicketBus

