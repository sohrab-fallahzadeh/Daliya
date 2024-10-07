import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, Image, ScrollView, } from 'react-native';
import Btn from "../../components/btn"
import HeaderBar from "../../components/headerbar";
import Searchitem from '../../components/searchitem';
import Colors from '../../constants/Colors';








const SearchTicket = (props) => {

    const [task, setTask] = useState("");




    return (



























        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: "flex-start",
            // marginLeft: isSmallScreen ? 0 : "35%",
            backgroundColor: Colors.black2,

        }}>



            <HeaderBar
                onPressright={()=>props.navigation.goBack()}
                namepage={" انتخاب " + props.route.params.location}
                icon={"chevron-forward"}
            />

            <ScrollView style={{ width: "100%" }}>


                <View style={{ flexDirection: "row", width: "100%", height: 70, marginBottom: 10, justifyContent: "center", alignItems: "center" }}>

                    <TextInput

                        placeholder="شهر،استان"
                        //  onKeyPress={getSERVICEHandler}
                        
                        placeholderTextColor={Colors.secondText3}
                        style={styles.textinput}
                     onChangeText={(e) => setTask({ ...task, name: e })}

                    />
                    <MaterialCommunityIcons name="magnify" size={30} color={Colors.background} style={{ position: "absolute", right: "8%", zIndex: 2 }} />
                </View>



                <View style={{ width: "100%", height: 50, justifyContent: "center", alignItems: "flex-end", marginTop: "1%", backgroundColor: Colors.black3, paddingRight: 25 }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>مبداهای پرتکرار</Text>
                </View>

                <Searchitem
                    city="مشهد"
                    ostan="خراسان رضوی"
                    image={require("../../../assets/image/AsanPardakht.png")}
                />

                <Searchitem
                    city="تهران"
                    ostan="تهران"
                    image={require("../../../assets/image/AsanPardakht.png")}
                />
                <Searchitem
                    city="اصفهان"
                    ostan="اصفهان"
                    image={require("../../../assets/image/AsanPardakht.png")}
                />
                <Searchitem
                    city="اراک"
                    ostan="اراک"
                    image={require("../../../assets/image/AsanPardakht.png")}
                />
                <Searchitem
                    city="مشهد"
                    ostan="خراسان رضوی"
                    image={require("../../../assets/image/AsanPardakht.png")}
                />
                <Searchitem
                    city="مشهد"
                    ostan="خراسان رضوی"
                    image={require("../../../assets/image/AsanPardakht.png")}
                />
                <Searchitem
                    city="مشهد"
                    ostan="خراسان رضوی"
                    image={require("../../../assets/image/AsanPardakht.png")}
                />
                <Searchitem
                    city="مشهد"
                    ostan="خراسان رضوی"
                    image={require("../../../assets/image/AsanPardakht.png")}
                />

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




export default SearchTicket

