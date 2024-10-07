


import React, { useEffect, useRef, useState } from 'react';

import { View, Text,  StyleSheet, TouchableOpacity, Alert, ActivityIndicator, Platform, BackHandler, Linking, TextInput } from 'react-native';




import { Feather, MaterialCommunityIcons } from "@expo/vector-icons"
import Btn from '../components/btn';
import Colors from '../constants/Colors';
import HeaderBar from '../components/headerbar';



function OTPscreen(props) {

  const [mytime, setmyTime] = useState(60);
  const [task, setTask] = useState("");
  const [show, setShow] = useState(false);
 
 
  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      if (mytime !== 0) {
        setmyTime(mytime - 1);
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };

  });




  return (
  


  <View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: "flex-start",
    backgroundColor: Colors.black2,

  }}>


    <HeaderBar
    onPressright={() => props.navigation.navigate("login")}
      namepage="کد فعالسازی"
      icon={"chevron-forward"}
    />

    <View style={{ flexDirection:"column",width: "75%", alignSelf: "auto", justifyContent: "center", alignItems: "center", marginTop: "5%" }}>
      <Text style={{ fontFamily: "Montserrat", fontSize: 16, color: Colors.background, textAlign: "center" }}>کد 5 رقمی ارسال شده به شماره زیر را وارد کنید</Text>
      <Text style={{ fontFamily: "Montserrat", fontSize: 16, color: Colors.background, textAlign: "center" }}>{props.route.params.number}   <Feather name="edit" size={20} color={Colors.success} /></Text>
      
    </View>

    <View style={{ flexDirection:"row",padding:7,width: "90%", height:80,backgroundColor:Colors.black, justifyContent: "center", alignItems:"flex-end", marginTop: "8%",borderRadius:10 }}>
    <TextInput
    maxLength={5}
    underlineColorAndroid="white"
    textAlign="left"


      style={{   height: 40,
        width:200,
        margin: 12,
        borderWidth: 1,
        borderColor:Colors.black,
        padding: 10,
        color:"white",
        marginRight:60
      }}
    
      onChangeText={()=>setTask()}
      value={task}
      
      keyboardType="numeric"
    />
        
            
    
     <View style={{width:"25%",justifyContent:"space-around",alignItems:"center",height:70,}}>
           <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.secondText3, textAlign: "center" ,right:20}}>کد فعالسازی</Text>
      <Feather name="smartphone" size={30} color={Colors.background}  style={{right:20}}/>
     </View>
    
    </View>


    {/* <View style={{ flexDirection:"row",width: "90%", alignSelf: "auto", justifyContent: "center", alignItems: "center", marginTop: "8%", }}>
      <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: "red", textAlign: "center",marginRight:10 }}>کد اعتبار سنجی شما صحیح نیست</Text>
      <Feather name="alert-triangle" size={18} color={"red"} />
    </View> */}


               {mytime > 0 ?
                 <View style={{ flexDirection:"row",width: "90%", alignSelf: "auto", justifyContent: "center", alignItems: "center", marginTop: "5%",marginTop:"25%" }}>
      <Text style={{ fontFamily: "Montserrat", fontSize: 18, color: Colors.background, textAlign: "center",marginRight:10 }}>{mytime} تا ارسال مجدد کد  </Text>
      <Feather name="clock" size={20} color={Colors.background} />
    </View>
    :
    <TouchableOpacity onPress={()=>setmyTime(60)} style={{ width: "90%", alignSelf: "auto", justifyContent: "center", alignItems: "center", marginTop: "25%", }}>
      <Text style={{ fontFamily: "Montserrat", fontSize: 18, color: Colors.success, textAlign: "center" }}> ارسال مجدد کد</Text>

    </TouchableOpacity>
              }

    
  


    

    <Btn
        label="فعالسازی"
        style={{ width: "100%",marginTop:"15%",  }}
       
       
        onPress={
          () => {
          
              

              props.navigation.navigate("home");
        

         

            
          }}
      />



  </View>
  );
}

const styles = StyleSheet.create({

  viewContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.background,
    position:Platform.OS=="web"?"fixed":"relative"
  },
  viewlogo: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%"
  },
  imagelogo: {
    width: 110,
    height: 140,
  },
  textlogo: {
    fontFamily: "Montserrat",
    fontSize: 24,
    position: "absolute",
    top: "90%"
  },
  viewotp: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "15%",
    marginRight:Platform.OS=="web"?"20%":0 
  },
  fonttext: {
    fontFamily: "Montserrat",
    fontSize: 15,
    color: Colors.primary
  },
  fonttext1: {
    fontFamily: "Montserrat",
    fontSize: 15,
    color: Colors.primary,
    top:Platform.OS=="web"?50:0
  },
  viewtimer: {
    width: 100,
    height: 20,
    alignItems: "center",
    position: "relative",
    left: 190,
    bottom: 26,
    
  },
  fielotp: {
    width: 45,
    height: 60,
    borderWidth: 1,
    margin: 2,
    color: 'black',
  }
})
export default OTPscreen




