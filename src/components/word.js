
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



const Word = (props) => {

    return (


    <TouchableOpacity
    onPress={props.onPress}
        style={{  width: "24%", height:50, alignItems: "center", justifyContent: "center", marginTop: 5,backgroundColor:Colors.black2,borderRadius:5 }}>
        <Text style={{ fontFamily: "MontserratBold", fontSize: 18, color: Colors.background, padding: "5%" }}>
          {props.name}
        </Text>
      </TouchableOpacity>





    


    );
}










const styles = StyleSheet.create({

   

})
export default Word