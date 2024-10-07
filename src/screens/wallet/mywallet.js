
import { Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, } from 'react-native';
import HeaderBar from '../../components/headerbar';
import Btn from "../../components/btn"
import Colors from '../../constants/Colors';
import Searchitem from '../../components/searchitem';
import { Checkbox, Modal, Portal } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';










const MyWallet = (props) => {

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'black', };
  const [value, setValue] = React.useState("1");


  const [checked, setChecked] = React.useState(false);



  const scrollRef = useRef();
  const scrollToEnd = () => scrollRef.current.scrollToEnd({ animated: false });




  return (










    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: "flex-start",
      // marginLeft: isSmallScreen ? 0 : "35%",
      backgroundColor: Colors.black0,


    }}>


      <HeaderBar
        onPressright={() => props.navigation.navigate("ticketpage")}
        text={{ fontSize: 15 }}
        namepage="کیف پول"
        icon={"chevron-forward"}
        iconleft

        iconL={"help-circle-outline"}
        onPressLeft={showModal}
      />


     



      <View style={{ width: 180, height: 180, borderRadius: 180, }}>
        <LinearGradient
          start={[2, 0]}
          end={[0, 4]}
          // Background Linear Gradient
          colors={['blue', "white"]}
          style={{
            height: 180, width: 180, borderRadius: 180, flexDirection: "column", justifyContent: "space-around", marginTop: 10
          }}
        >
          <Text style={{ textAlign: "center", fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, bottom: 10 }}>موجودی</Text>
          <Text style={{ textAlign: "center", fontFamily: "MontserratBold", fontSize: 30, color: Colors.background, }}>330،000</Text>
          <Text style={{ textAlign: "center", fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, top: 10 }}>ریال</Text>


        </LinearGradient>


      </View>


      <TouchableOpacity onPress={()=>props.navigation.navigate("tornover")} style={{ padding: 5, flexDirection: "row", width: "95%", height: 50, backgroundColor: Colors.black2, borderRadius: 30, marginTop: 15, alignItems: "center", justifyContent: "space-between" }}>
        <Ionicons name={"chevron-back"} size={30} color={Colors.background} />
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, marginRight: 5 }}>مشاهده گردش</Text>
        <View style={{ width: 40, height: 40, backgroundColor: Colors.background, borderRadius: 40, }}>
          <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }} />
        </View>

      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.navigation.navigate("tornover")}style={{ padding: 5, flexDirection: "row", width: "95%", height: 50, backgroundColor: Colors.black2, borderRadius: 30, marginTop: 15, alignItems: "center", justifyContent: "space-between" }}>
        <Ionicons name={"chevron-back"} size={30} color={Colors.background} />
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, marginRight: 5 }}>مشاهده گردش</Text>
        <View style={{ width: 40, height: 40, backgroundColor: Colors.background, borderRadius: 40, }}>
          <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }} />
        </View>

      </TouchableOpacity>
      <TouchableOpacity onPress={()=>props.navigation.navigate("tornover")}style={{ padding: 5, flexDirection: "row", width: "95%", height: 50, backgroundColor: Colors.black2, borderRadius: 30, marginTop: 15, alignItems: "center", justifyContent: "space-between" }}>
        <Ionicons name={"chevron-back"} size={30} color={Colors.background} />
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, marginRight: 5 }}>مشاهده گردش</Text>
        <View style={{ width: 40, height: 40, backgroundColor: Colors.background, borderRadius: 40, }}>
          <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }} />
        </View>



      </TouchableOpacity>

      <View style={{ width: "100%", height: 2, backgroundColor: Colors.background, marginTop: 20 }}>

        <LinearGradient
          start={[1, 0]}
          end={[0, 1]}
          // Background Linear Gradient
          colors={['black', 'white', 'black']}
          style={{
            height: 2,
          }}
        />

      </View>



      <View style={{ width: "100%", height: 120, flexDirection: "column", marginTop: 20, alignItems: "center" }}>



        <View style={{ width: "100%", height: "75%", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30 }}>
          <TouchableOpacity  onPress={()=>props.navigation.navigate("harvest")} style={{ width: 70, height: 70, borderRadius: 70, backgroundColor: Colors.success, alignItems: "center", justifyContent: "center" }}>
            <Ionicons name={"remove"} size={30} color={Colors.background} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("changewallet")}style={{ width: 70, height: 70, borderRadius: 70, backgroundColor: Colors.success, alignItems: "center", justifyContent: "center" }}>
            <Ionicons name={"swap-horizontal-sharp"} size={30} color={Colors.background} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("increase")} style={{ width: 70, height: 70, borderRadius: 70, backgroundColor: Colors.success, alignItems: "center", justifyContent: "center" }}>
            <Ionicons name={"add"} size={30} color={Colors.background} />
          </TouchableOpacity>
        </View>


        <View style={{ width: "100%", height: "25%", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 40 }}>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>برداشت</Text>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>انتقال</Text>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>افزایش</Text>
        </View>

      </View>


      <Portal>
                <Modal visible={visible} 
                onDismiss={hideModal} style={{ width: "80%", height: 200, backgroundColor: Colors.black0, marginLeft: 45, borderRadius: 10, position: "absolute", top: "30%" }}  >

                    <ScrollView>


                        <View style={{ width: "100%", height: 300,padding:5 }}>

                           <View style={{width:"100%",height:50,flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10,alignItems:"center"}}>
                            <MaterialCommunityIcons  onPress={hideModal} name="close" size={25} color={Colors.background} />
                           <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>راهنما</Text>
                          
                           </View>
                            <View style={{width:"100%",height:1,backgroundColor:Colors.secondText3}}></View>
                           <View style={{width:"100%",height:200,padding:5,flexDirection:"column",paddingHorizontal:10}}>
                   
                           <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>برداشت از کیف پول</Text>
                           <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background ,textAlign:"center"}}>در این صفحه شما میتوانید اعتبار کیف پول خود را به یکی از کارت های عضو شتاب خود واریز نمایید.
                           افزایش دهید یا برداشت نمایید .همچنین میتوانید گردش حساب خود را چک کنید.</Text>
                           
                          


</View>

                        </View>





                    </ScrollView>
                </Modal>
            </Portal>


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
  contentContainerStyle: {
    flexDirection: 'row-reverse'
  }

})




export default MyWallet

