import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    StatusBar,
    Platform,
    Image
} from "react-native";
import Colors from "../constants/Colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"




const HeaderBar = (props) => {

    return (

        <View style={styles.viewHeader}>
           



           



           
                <TouchableOpacity onPress={props.onPressright} style={styles.menuback}   >
                    <Ionicons name={props.icon} size={30} color={Colors.background} />
                </TouchableOpacity>



            {!props.back ?
                <TouchableOpacity onPress={props.onPressright} style={styles.textheaderback}>
                    <Text style={{ fontFamily: "MontserratBold",textAlign:"center", fontSize: 18, color: Colors.background,...props.text }}>
                        {props.namepage}
                    </Text>
                </TouchableOpacity>
                :
                 <TouchableOpacity onPress={props.onPressright} style={styles.textheaderback}>
                    <Image source={require("../../assets/image/AsanPardakht.png")} alt="image" style={{width:50,height:50}} />
                </TouchableOpacity>
            }



           {props.iconleft &&
                <TouchableOpacity style={styles.menu1} onPress={props.onPressLeft}  >
                    <MaterialCommunityIcons name={props.iconL} size={30} color={Colors.background} />
                   
                </TouchableOpacity>} 



{/* {props.icon ?
            <TouchableOpacity onPress={props.onPressleft} style={styles.menu}>
                <View style={{justifyContent:"center",alignItems:"center",width:18,height:18,borderRadius:5,backgroundColor:Colors.primary,position:"absolute",bottom:"68%",right:0}}>
                <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background }}>
                    {props.numberbasket}
                </Text>
                </View>
                <Ionicons name="cart" size={30} color={Colors.primary} />
               

            </TouchableOpacity>

:
            < TouchableOpacity onPress={props.onPress} style={styles.filter}>
                <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.primary, marginRight: 5 }}>
                    {props.nameiconleft}
                </Text>

                <Ionicons name={props.iconleft} size={30} color={Colors.primary} />
            </TouchableOpacity>
} */}


        </View>



    );
}










const styles = StyleSheet.create({

    viewHeader: {
        flexDirection: "row",
        width: "100%",
        height: Platform.OS == "web" ? 60 : 100,
        backgroundColor: Colors.black2,
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth:3,
        borderColor:Colors.black0
    },
    viewfooter: {
        flexDirection: "row",
        width: Platform.OS == "web" ? "400px" : "100%",
        height: 60,
        backgroundColor: Colors.background,
        position: Platform.OS === "web" ? "fixed" : "absolute",
        bottom: 0


    },
    menu1: {
        
        width: 50,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 15,
        top: Platform.OS == "web" ? "15%" : "50%",
    },
    menu: {
        backgroundColor: Colors.background,
        width: 50,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: "85%",
        top: Platform.OS == "web" ? "20%" : "50%",
    },
    menu2: {
        backgroundColor: Colors.background,
        width: 80,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: "35%",
        top: Platform.OS == "web" ? "0%" : "28%"
    },
   

    menuback: {
        backgroundColor: Colors.black2,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 15,
        bottom:10
       

    },

    textheaderback: {
        backgroundColor: Colors.black2,
        width: "40%",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        
        bottom:10
    },
    filter: {
        backgroundColor: Colors.background,
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
export default HeaderBar