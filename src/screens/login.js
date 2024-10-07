import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, } from 'react-native';
import HeaderBar from '../components/headerbar';
import Btn from "../components/btn"
import Colors from '../constants/Colors';
import { Updates } from 'expo-updates';







const Login = (props) => {
  
  const [task, setTask] = useState("");
 

  useEffect(() => {

  
    


    // if (I18nManager.isRTL) {
    //   I18nManager.forceRTL(false);
    //   Updates.reloadAsync();
    // }

  },[]);

  return (

  























 

    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: "flex-start",
      // marginLeft: isSmallScreen ? 0 : "35%",
      backgroundColor: Colors.black2,

    }}>


      <HeaderBar
        onPressright={() => props.navigation.navigate("splash")}
        namepage="شماره همراه"
        icon={"chevron-forward"}
      />

      <View style={{ width: "67%", alignSelf: "auto", justifyContent: "center", alignItems: "center", marginTop: "5%" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 16, color: Colors.background, textAlign: "center" }}>لطفا شماره همراه خود را وارد نمایید،کد فعالسازی برای شما پیامک خواهد شد</Text>

      </View>

      <View style={{ flexDirection: "row", padding: 7, width: "90%", height: 80, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-end", marginTop: "10%", borderRadius: 10 }}>
        <TextInput
          maxLength={11}
          underlineColorAndroid="white"
          textAlign="left"


          style={{
            height: 40,
            width: 200,
            margin: 12,
            borderWidth: 1,
            borderColor: Colors.black,
            padding: 10,
            color: "white",
            marginRight: 60
          }}

          onChangeText={(t) => setTask(t)}
          value={task}

          keyboardType="numeric"
        />

    

        <View style={{ width: "25%", justifyContent: "space-around", alignItems: "center", height: 70, }}>
          <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.secondText3, textAlign: "center",right:15 }}>شماره همراه</Text>
          <Feather name="smartphone" size={30} color={Colors.background} style={{right:15}} />
        </View>


      </View>


      <View style={{ width: "90%", alignSelf: "auto", justifyContent: "center", alignItems: "center",marginTop: "15%"  }}>
        <Text style={{ fontFamily: "MontserratBold", fontSize: 18, color: Colors.success, textAlign: "center" }}>قوانین فعالیت و حریم خصوصی</Text>

      </View>

      <Btn
        label="پذیرش قوانین و ورود"
        style={{ width: "100%", marginTop: "30%"  }}


        onPress={
          () => {
            if (task.length === 11) {
             

              props.navigation.navigate("otp", {
                number: task

              });
            } else {
              alert("error")
              // setShow(true);

            }
          }}
      />



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




export default Login

