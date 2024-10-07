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





const Searchitem = (props) => {

    return (
        <TouchableOpacity style={{ width: "100%", }}>


            <View style={{ flexDirection: "row-reverse", width: "100%", height: 60, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.black, ...props.styleview }}>

                <View style={{ width: 50, height: 50, backgroundColor: Colors.black2, borderRadius: 50, marginRight: 10,...props.viewimage }}>
                    <Image source={props.image} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>
                </View>

                <View style={{ width: 200, flexDirection: "column", marginRight: 10 }}>
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>{props.city}</Text>
                    <Text style={{ fontFamily: "Montserrat", fontSize: 10, color: Colors.background,...props.styleostan }}>{props.ostan}</Text>
                </View>



                {props.time ?
                    <View style={{ justifyContent: "space-between", alignItems: "center", width: 60, height: 25, backgroundColor: "gray", borderRadius: 20, flexDirection: "row", padding: 2, left: "5%" }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, left: 5 }}>{props.number}</Text>
                        <MaterialCommunityIcons name="clock" size={19} color={Colors.background} />
                    </View>
                    :props.card ?
                    <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background,right:"75%" }}>{props.numbercard}</Text>
:
                    null}

            </View>



            {props.nounderline ?
                null :
                <View style={{ width: "100%", height: 1, backgroundColor: Colors.secondText3 }}></View>
            }

        </TouchableOpacity>
    );
}


export default Searchitem