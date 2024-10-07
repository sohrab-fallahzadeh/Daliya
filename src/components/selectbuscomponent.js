import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView,
    Image
} from "react-native";
import Colors from "../constants/Colors";





const Selectbuscomponent = (props) => {

    return (

        props.box ?
        <View style={{ width: "100%", height: 60, backgroundColor: Colors.black4, flexDirection: "row-reverse",justifyContent:"center",alignItems:'center' }}>
      


        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: 50, height: 50, backgroundColor:Colors.success, borderRadius: 5, marginRight: "59%" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 20, color: Colors.background, textAlign: "center" }}>2</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: 50, height: 50, backgroundColor: "gray", borderRadius: 5, marginRight: "3%" }}>
            <MaterialCommunityIcons name="face-man" size={40} color={Colors.background} />
        </TouchableOpacity>
    </View>
:

         <View style={{ width: "100%", height: 60, backgroundColor: Colors.black4, flexDirection: "row-reverse",justifyContent:"center",alignItems:'center' }}>
        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: 50, height: 50, backgroundColor: "gray", borderRadius: 5, marginLeft: "3%" }}>
            <MaterialCommunityIcons name="face-man" size={40} color={Colors.background} />
        </TouchableOpacity>


        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: 50, height: 50, backgroundColor: "gray", borderRadius: 5, marginLeft:"25%" }}>
            <MaterialCommunityIcons name="face-man" size={40} color={Colors.background} />
        </TouchableOpacity>


        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: 50, height: 50, backgroundColor:Colors.success, borderRadius: 5, marginRight: "3%" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 20, color: Colors.background, textAlign: "center" }}>2</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: 50, height: 50, backgroundColor: "gray", borderRadius: 5, marginRight: "3%" }}>
            <MaterialCommunityIcons name="face-man" size={40} color={Colors.background} />
        </TouchableOpacity>
    </View>
       

    );
}


export default Selectbuscomponent