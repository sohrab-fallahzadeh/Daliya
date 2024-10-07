import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    TextInput
} from "react-native";
import Colors from "../constants/Colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"




const IPT = (props) => {

    const [focuse, setfocuse] = React.useState(false)

    return (
        <View style={{
            flexDirection: "row",
            padding: 5,
            width: "90%",
            height: 60,
            backgroundColor: Colors.black,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginTop: "5%",
            marginBottom: "5%",
            borderColor: (focuse == true ? Colors.primary : Colors.secondText3),
            borderWidth: (focuse == true ? 1 : 0),
            ...props.styleview
        }}>

            {props.icon &&
                <MaterialCommunityIcons name={props.iconname} size={props.sizeicon} color={props.coloricon} onPress={props.onPressicon} style={{ left: 15 }} />
            }
            {props.icon1 &&
                <MaterialCommunityIcons name={props.iconname1} size={props.sizeicon1} color={props.coloricon1} onPress={props.onPressicon1} style={{ left: 20 }} />
            }


            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>{props.title}</Text>
            <TextInput

                onFocus={() => setfocuse(true)}
                onBlur={() => setfocuse(false)}
                secureTextEntry={props.secureTextEntry}

                textAlign="right"


                style={{

                    
                    height: 40,
                    width: "80%",
                    marginTop: 20,
                    paddingRight: 30,
                    marginLeft: "13%",
                    color: "white",
                    fontSize: 18,
                    ...props.styleinput


                }}

                onChangeText={props.onChangeText}
                

                // underlineColorAndroid={(focuse == true ? Colors.background : null)}
                placeholderTextColor={props.placeholderTextColor}
                value={props.value}
                placeholder={props.placeholder}
                
                keyboardType={props.keyboardType}

                maxLength={props.maxLength}


            />



        </View>
    );
}


export default IPT