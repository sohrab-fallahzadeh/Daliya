
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, } from 'react-native';
import HeaderBar from '../../../components/headerbar';
import Btn from "../../../components/btn"
import Colors from '../../../constants/Colors';
import Searchitem from '../../../components/searchitem';
import { Checkbox, Modal, Portal } from 'react-native-paper';










const MyTicket = (props) => {

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
        namepage="بلیط های من"
        icon={"chevron-forward"}
      />



      <View style={{ width: "100%", backgroundColor: Colors.black3, alignItems: "center" }}>

        <ScrollView
          pagingEnabled={false}
          horizontal
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}
          onContentSizeChange={scrollToEnd}
          contentContainerStyle={styles.contentContainerStyle}

          style={{
            margin: 10,
          }}>
          <TouchableOpacity
            onPress={() => setValue("1")}
            style={{
              width: 80,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: value == "1" ? Colors.success : Colors.secondText3,
              borderRadius: 10,
              marginRight: 10,

              flexDirection: "column"

            }}
          >
            <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background }}>قطار</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setValue("2")}
            style={{
              width: 80,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: value == "2" ? Colors.success : Colors.secondText3,
              borderRadius: 10,
              marginRight: 10,

              flexDirection: "column"

            }}
          >
            <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background }}>اتوبوس</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setValue("3")}
            style={{
              width: 80,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: value == "3" ? Colors.success : Colors.secondText3,
              borderRadius: 10,
              marginRight: 10,

              flexDirection: "column"

            }}
          >
            <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background }}>پرواز داخلی</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setValue("4")}
            style={{
              width: 80,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: value == "4" ? Colors.success : Colors.secondText3,
              borderRadius: 10,
              marginRight: 10,

              flexDirection: "column"

            }}
          >
            <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background }}>پرواز خارجی</Text>
          </TouchableOpacity>





        </ScrollView>

      </View>





      <View style={{ width: "90%", height: 200, backgroundColor: Colors.black2, marginTop: 10, borderRadius: 10 }}>

        <View style={{ width: "100%", height: 40, flexDirection: "row", marginTop: 10, alignItems: "center", justifyContent: "flex-end", }}>

          <Text style={{ textAlign: "center", borderRadius: 5, width: 50, backgroundColor: Colors.green1, fontFamily: "MontserratBold", fontSize: 15, color: Colors.success, position: "absolute", left: 20, }}>موفق</Text>

          <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, marginRight: 5 }}>تهران</Text>
          <MaterialCommunityIcons name="arrow-left-thin" size={25} color={Colors.background} style={{ marginRight: 5 }} />

          <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, marginRight: 5 }}>مشهد</Text>
          <MaterialCommunityIcons name="bus" size={25} color={Colors.background} style={{ marginRight: 20 }} />
        </View>

        <View style={{ width: "100%", height: 30, flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 25 }}>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>تاریخ رفت :</Text>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>جمعه 05 مرداد 1403</Text>
        </View>

        <View style={{ width: "100%", height: 30, flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 25 }}>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>ساعت حرکت :</Text>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>20:00</Text>
        </View>

        <View style={{ width: "100%", height: 30, flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 25 }}>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>شناسه بلیط :</Text>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>29453646</Text>
        </View>
        <View style={{ width: "100%", height: 30, flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 25,marginTop:15 }}>
          <TouchableOpacity style={{alignItems:"center",justifyContent:"center",width:"45%",height:30,borderWidth:2,borderColor:Colors.background,borderRadius:5}}>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>استرداد بلیط</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={()=>props.navigation.navigate("detailsmyticket")} style={{alignItems:"center",justifyContent:"center",width:"45%",height:30,borderWidth:2,borderColor:Colors.primary,borderRadius:5}}>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.primary, }}>جزییات بلیط</Text>
          </TouchableOpacity>
        </View>



      </View>





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




export default MyTicket

