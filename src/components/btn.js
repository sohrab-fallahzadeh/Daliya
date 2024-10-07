import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Colors from "../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient";




const Btn=(props)=> {
 
  return (
    <View key={props.key } style={{width: "100%", height: 50,alignItems:"center",justifyContent:"center", ...props.style, }}>
    
  
      

      <TouchableOpacity
        style={{width: "90%",
        height: "90%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary,
        borderRadius: 7,
        elevation: 3,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: Colors.primary, ...props.touchableStyle }}
        onPress={props.onPress}
      >
          <LinearGradient
     start={[0, 5]}
     end={[0.2, 0]}
        // Background Linear Gradient
        colors={[ Colors.secondText,Colors.primary, ]}
        style={{width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
         }}
>
         {props.loading && <ActivityIndicator size={props.sizespin} color={props.colorspin} style={{position:"absolute" }} />}
       
   {!props.loading && (
          <Text style={{fontFamily: "Montserrat",fontSize: 15,color: "#fff" , ...props.textStyle }}>
            {props.label}
          </Text>
  )}
  
  {props.icon &&
        <View style={{...props.viewicon}}>
           <MaterialCommunityIcons name={props.nameicon} size={props.sizeicon} color={props.coloricon} style={{...props.styleicon}} />
       
        </View>
}
        
      

         
       
       

   
</LinearGradient>
      </TouchableOpacity>
    
    </View>
  );
 }


export default Btn