import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import HeaderBar from "../../components/headerbar";
import Colors from '../../constants/Colors';









const Ticketpage = (props) => {

    const [task, setTask] = useState("");




    return (



























        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: "flex-start",
            // marginLeft: isSmallScreen ? 0 : "35%",
            backgroundColor: Colors.black,

        }}>


            <HeaderBar
                onPressright={() => props.navigation.navigate("home")}
                namepage="خدمات گردشگری"
                icon={"chevron-forward"}
            />

            <View style={{ width: "100%", height: 180, justifyContent: "flex-start", alignItems: "center", }}>
                <Image source={require("../../../assets/image/wallet.png")} alt="image" style={{ width: "100%", height: "100%", }} />

            </View>


            <View style={{ flexDirection: "row", padding: 10, width: "100%", height: "10%", backgroundColor: Colors.black, justifyContent: "flex-end", alignItems: "center", bottom: 40, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                <Text style={{ fontFamily: "MontserratBold", fontSize: 18, color: Colors.background, textAlign: "center" }}>خدمات</Text>

            </View>




            <View style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", width: "100%", justifyContent: "center", bottom: 20 }}>
                <TouchableOpacity
                    onPress={() => props.navigation.replace('ticketbus')}

                    style={{ marginRight: "1%", width: "22%", height: 60, alignItems: "center", justifyContent: "center", }}>
                    <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "80%", height: "100%", borderRadius: 15, backgroundColor: Colors.black3 }} />
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 10, color: Colors.background, padding: "5%" }}>
                        بلیط اتوبوس
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.replace('ticketairplane')}

                    style={{ marginRight: "1%", width: "22%", height: 60, alignItems: "center", justifyContent: "center", }}>
                    <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "80%", height: "100%", borderRadius: 15, backgroundColor: Colors.black3 }} />
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 10, color: Colors.background, padding: "5%" }}>
                        پرواز داخلی
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.replace('ticketexternal')}

                    style={{ marginRight: "1%", width: "22%", height: 60, alignItems: "center", justifyContent: "center", }}>
                    <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "80%", height: "100%", borderRadius: 15, backgroundColor: Colors.black3 }} />
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 10, color: Colors.background, padding: "5%" }}>
                        پرواز خارجی
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.replace('tickettrain')}

                    style={{ marginRight: "1%", width: "22%", height: 60, alignItems: "center", justifyContent: "center", }}>
                    <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "80%", height: "100%", borderRadius: 15, backgroundColor: Colors.black3 }} />
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 10, color: Colors.background, padding: "5%" }}>
                        بلیط قطار
                    </Text>

                </TouchableOpacity>


            </View>



            <View style={{ flexDirection: "row-reverse", justifyContent: "space-between", width: "100%", height: 70, backgroundColor: Colors.black3, position: "absolute", bottom: 0 }}>

                <TouchableOpacity    onPress={() => props.navigation.replace('addPassenger')} style={{ width: "30%", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Ionicons name="person-add-outline" size={25} color={Colors.background} />
                    <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, textAlign: "center" }}>مدیریت مسافران</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "30%", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Ionicons name="home-outline" size={25} color={Colors.primary} />
                    <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.primary, textAlign: "center" }}>خانه</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.replace('myticket')} style={{ width: "30%", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Ionicons name="folder-outline" size={25} color={Colors.background} />
                    <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, textAlign: "center" }}>بلیط های من</Text>
                </TouchableOpacity>

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

})




export default Ticketpage

