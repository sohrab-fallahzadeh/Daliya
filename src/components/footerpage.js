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



const FooterPage = (props) => {

    return (


        <View style={{ flexDirection: "row-reverse", justifyContent: "space-between", width: "100%", height: 60, backgroundColor: Colors.black3, position: "absolute", bottom: 0 }}>


            {props.home ?

                <TouchableOpacity onPress={props.onPressR} style={{ width: "30%", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Ionicons name={props.iconnameR} size={25} color={Colors.primary} />
                    <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.primary, textAlign: "center" }}>{props.nameR}</Text>
                </TouchableOpacity>

                :
                <TouchableOpacity onPress={props.onPressR} style={{ width: "30%", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Ionicons name={props.iconnameR} size={25} color={Colors.background} />
                    <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, textAlign: "center" }}>{props.nameR}</Text>
                </TouchableOpacity>

            }


{props.paymenting?   

<TouchableOpacity onPress={props.onPress} style={{ width: "30%", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Ionicons name={props.iconname} size={25} color={Colors.primary} />
                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.primary, textAlign: "center" }}>{props.name}</Text>
            </TouchableOpacity>


:
   <TouchableOpacity onPress={props.onPress} style={{ width: "30%", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Ionicons name={props.iconname} size={25} color={Colors.background} />
                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, textAlign: "center" }}>{props.name}</Text>
            </TouchableOpacity>

}
         



{props.question ? 
 <TouchableOpacity onPress={props.onPressL} style={{ width: "30%", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
 <Ionicons name={props.iconnameL} size={25} color={Colors.primary} />
 <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.primary, textAlign: "center" }}>{props.nameL}</Text>
</TouchableOpacity>
:
<TouchableOpacity onPress={props.onPressL} style={{ width: "30%", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
<Ionicons name={props.iconnameL} size={25} color={Colors.background} />
<Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, textAlign: "center" }}>{props.nameL}</Text>
</TouchableOpacity>
}
           

        </View>








    );
}










const styles = StyleSheet.create({



})
export default FooterPage