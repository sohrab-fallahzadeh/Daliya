import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    StatusBar,
    Platform
} from "react-native";
import Colors from "../constants/Colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"



const Footer = (props) => {

    return (


        <View style={{
            flexDirection: "row",
            width: "90%" , 
            height: 60,
            backgroundColor: Colors.black2,
            position: Platform.OS === "web" ? "fixed" : "absolute",
            bottom: 20,
            borderRadius:10
        }}>



            {props.Order ?




                <View style={{ width: "20%", height: 60, position: "absolute", right: "5%", alignItems: "center", }}>

                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: Colors.yellowlight, borderWidth: 5, borderColor: Colors.background, bottom: 28, alignItems: "center", justifyContent: "center" }}>
                        <Ionicons name="reader-outline" size={20} color={Colors.background} />
                    </View>

                    <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.yellow, position: 'absolute', bottom: 15 }}>
                   سفارشات
                    </Text>
                    <View style={{ width: 30, height: 5, borderRadius: 5, backgroundColor: Colors.yellowlight, position: 'absolute', bottom: 5 }}></View>

                </View>
                :

                <TouchableOpacity onPress={props.ToOrders} style={{ width: "20%", height: 60, position: "absolute", right: "5%", alignItems: "center", padding: 5 }}>
                    <Ionicons name="reader-outline" size={25} color={Colors.background} />
                    <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}>
                   سفارشات
                    </Text>
                </TouchableOpacity>
            }









            {props.Product ?

                <View style={{ width: "20%", height: 60, alignItems: "center", left: 15, top: 0 }}>

                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: Colors.yellowlight, borderWidth: 5, borderColor: Colors.background, bottom: 28, alignItems: "center", justifyContent: "center" }}>
                        <MaterialCommunityIcons name="badge-account-outline" size={25} color={Colors.background} />
                    </View>

                    <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.yellow, position: 'absolute', bottom: 15 }}>
                   پروفایل
                    </Text>
                    <View style={{ width: 30, height: 5, borderRadius: 5, backgroundColor: Colors.yellowlight, position: 'absolute', bottom: 5 }}></View>
                </View>

                :

                <TouchableOpacity onPress={props.ToProduct} style={{ width: "20%", height: 60, alignItems: "center", left: 15, top: 5 }}>
                    <MaterialCommunityIcons name="badge-account-outline" size={25} color={Colors.background} />
                    <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}>
                   پروفایل
                    </Text>
                </TouchableOpacity>

            }









            {props.Home ?

                <View style={{ width: "30%", height: 60, left: "35%", alignItems: "center", flexDirection: "column", position: "absolute" }}>

                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: Colors.yellowlight, borderWidth: 5, borderColor: Colors.background, bottom: 28, alignItems: "center", justifyContent: "center" }}>
                        <Ionicons name="home-outline" size={20} color={Colors.background} />
                    </View>

                    <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.yellow, position: 'absolute', bottom: 15 }}>
                    صفحه اصلی
                    </Text>
                    <View style={{ width: 30, height: 5, borderRadius: 5, backgroundColor: Colors.yellowlight, position: 'absolute', bottom: 5 }}></View>
                </View>
                :
                <TouchableOpacity onPress={props.ToHome} style={{ width: "30%", height: 60, left: "35%", alignItems: "center", flexDirection: "column", position: "absolute" }}>

                      
                <Ionicons name="home-outline" size={25} color={Colors.background} />
                <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background }}>
                صفحه اصلی 
                </Text>

            </TouchableOpacity>
            }





        </View>


    );
}










const styles = StyleSheet.create({

    viewHeader: {
        flexDirection: "row",
        width: "100%",
        height: Platform.OS == "web" ? 60 : 80,
        backgroundColor: Colors.primary,
    },
    viewfooter: {
        flexDirection: "row",
        width: Platform.OS == "web" ? "400px" : "100%",
        height: 60,
        backgroundColor: Colors.primary,
        position: Platform.OS === "web" ? "fixed" : "absolute",
        bottom: 0


    },
    menu1: {
        backgroundColor: Colors.primary,
        width: 50,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 15,
        top: Platform.OS == "web" ? "15%" : "39%",
    },
    menu: {
        backgroundColor: Colors.primary,
        width: 50,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: "85%",
        top: Platform.OS == "web" ? "20%" : "38%",
    },
    menu2: {
        backgroundColor: Colors.primary,
        width: 80,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: "35%",
        top: Platform.OS == "web" ? "0%" : "28%"
    },


    menuback: {
        backgroundColor: Colors.primary,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 15,
        top: Platform.OS == "web" ? "25%" : "40%",

    },

    textheaderback: {
        backgroundColor: Colors.primary,
        width: "27%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: "12%",
        top: Platform.OS == "web" ? "10%" : "40%"
    },
    filter: {
        backgroundColor: Colors.primary,
        width: 120,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "absolute",
        left: "0%",
        top: Platform.OS == "web" ? "12%" : "30%"
    },

})
export default Footer