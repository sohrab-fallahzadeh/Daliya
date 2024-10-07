import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, } from 'react-native';
import HeaderBar from '../../../components/headerbar';
import Btn from "../../../components/btn"
import Colors from '../../../constants/Colors';
import Searchitem from '../../../components/searchitem';
import { Checkbox, Modal, Portal } from 'react-native-paper';










const ListAirPlane = (props) => {

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'black', };
  const [value, setValue] = React.useState('first');


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
        onPressright={() => props.navigation.goBack()}
        text={{ fontSize: 15 }}
        namepage=" تهران به مشهد 1403/02/17"
        icon={"chevron-forward"}
      />



<View style={{ width: "100%",  backgroundColor: Colors.black0}}>



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
        style={{
            width: 40,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.success,
            borderRadius: 10,
            marginRight: 10,

            flexDirection: "column"

        }}
    >
        
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>06</Text>
        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}>1,568 </Text>

    </TouchableOpacity>

 <TouchableOpacity
        style={{
            width: 40,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.black3,
            borderRadius: 10,
            marginRight: 10,

            flexDirection: "column"

        }}
    >
        
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>07</Text>
        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}>1,268 </Text>

    </TouchableOpacity>
    <TouchableOpacity
        style={{
            width: 40,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.black3,
            borderRadius: 10,
            marginRight: 10,

            flexDirection: "column"

        }}
    >
        
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>08</Text>
        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}>2,568 </Text>

    </TouchableOpacity>
    <TouchableOpacity
        style={{
            width: 40,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.black3,
            borderRadius: 10,
            marginRight: 10,

            flexDirection: "column"

        }}
    >
        
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>09</Text>
        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}>1,568 </Text>

    </TouchableOpacity>
    <TouchableOpacity
        style={{
            width: 40,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.black3,
            borderRadius: 10,
            marginRight: 10,

            flexDirection: "column"

        }}
    >
        
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.primarydark }}>10</Text>
        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.primarydark, }}>1,568 </Text>

    </TouchableOpacity>
    <TouchableOpacity
        style={{
            width: 40,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.black3,
            borderRadius: 10,
            marginRight: 10,

            flexDirection: "column"

        }}
    >
        
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>11</Text>
        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}>1,568 </Text>

    </TouchableOpacity>
    <TouchableOpacity
        style={{
            width: 40,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.black3,
            borderRadius: 10,
            marginRight: 10,

            flexDirection: "column"

        }}
    >
        
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>12</Text>
        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}>1,568 </Text>

    </TouchableOpacity>
    <TouchableOpacity
        style={{
            width: 40,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.black3,
            borderRadius: 10,
            marginRight: 10,

            flexDirection: "column"

        }}
    >
        
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>13</Text>
        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}>1,568 </Text>

    </TouchableOpacity>
    <TouchableOpacity
        style={{
            width: 40,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.black3,
            borderRadius: 10,
            marginRight: 10,

            flexDirection: "column"

        }}
    >
        
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>14</Text>
        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}>1,568 </Text>

    </TouchableOpacity>
    
   
    
   
</ScrollView>










</View>
      <ScrollView style={{ width: "100%",padding:5 }}>



        <TouchableOpacity

          onPress={() => props.navigation.navigate("checkticketairplan")}
          style={{ flexDirection: "column", width: "100%", height: 140, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.black4,borderRadius:10,marginTop:10 }}>

          <Searchitem
            styleview={{ backgroundColor: Colors.black4,borderRadius:10 }}
            city="ماهان"
            ostan="بویینگ"
            image={require("../../../../assets/image/AsanPardakht.png")}
            nounderline

          />

          <View style={{ width: "40%", height: "20%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center", position: "absolute", left: 5, marginTop: 10 }}>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>06:00</Text>
            <MaterialCommunityIcons name="airplane" size={19} color={Colors.background} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>-----------</Text>
            <MaterialCommunityIcons name="map-marker" size={19} color={Colors.background} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>07:40</Text>
          </View>


          <View style={{ width: "100%", height: 30, flexDirection: "row", borderColor: Colors.secondText3, marginTop: 10 }}>




            <View style={{ width: "20%", height: 30, alignItems: "center", justifyContent: "center", backgroundColor: Colors.success, borderRadius: 10, marginLeft: 8 }}>


              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>سیستمی</Text>
            </View>


            <View style={{ width: "20%", height: 30, alignItems: "center", justifyContent: "center", backgroundColor: Colors.blue, borderRadius: 10, marginLeft: 8 }}>


              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>اکونومی</Text>
            </View>



          </View>



          <View style={{ width: "100%", height: "25%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, marginRight: 20 }}>19 نفر موجود</Text>

            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, marginLeft: 20 }}>هر بزرگسال 12،970،000 ریال</Text>
          </View>

        </TouchableOpacity>
       
        <TouchableOpacity

          onPress={() => props.navigation.navigate("checkticketairplan")}
          style={{ flexDirection: "column", width: "100%", height: 140, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.black4,borderRadius:10,marginTop:10 }}>

          <Searchitem
            styleview={{ backgroundColor: Colors.black4,borderRadius:10 }}
            city="ماهان"
            ostan="بویینگ"
            image={require("../../../../assets/image/AsanPardakht.png")}
            nounderline

          />

          <View style={{ width: "40%", height: "20%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center", position: "absolute", left: 5, marginTop: 10 }}>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>06:00</Text>
            <MaterialCommunityIcons name="airplane" size={19} color={Colors.background} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>-----------</Text>
            <MaterialCommunityIcons name="map-marker" size={19} color={Colors.background} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>07:40</Text>
          </View>


          <View style={{ width: "100%", height: 30, flexDirection: "row", borderColor: Colors.secondText3, marginTop: 10 }}>




            <View style={{ width: "20%", height: 30, alignItems: "center", justifyContent: "center", backgroundColor: Colors.success, borderRadius: 10, marginLeft: 8 }}>


              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>سیستمی</Text>
            </View>


            <View style={{ width: "20%", height: 30, alignItems: "center", justifyContent: "center", backgroundColor: Colors.blue, borderRadius: 10, marginLeft: 8 }}>


              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>اکونومی</Text>
            </View>



          </View>



          <View style={{ width: "100%", height: "25%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, marginRight: 20 }}>19 نفر موجود</Text>

            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, marginLeft: 20 }}>هر بزرگسال 12،970،000 ریال</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity

          onPress={() => props.navigation.navigate("checkticketairplan")}
          style={{ flexDirection: "column", width: "100%", height: 140, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.black4,borderRadius:10,marginTop:10 }}>

          <Searchitem
            styleview={{ backgroundColor: Colors.black4,borderRadius:10 }}
            city="ماهان"
            ostan="بویینگ"
            image={require("../../../../assets/image/AsanPardakht.png")}
            nounderline

          />

          <View style={{ width: "40%", height: "20%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center", position: "absolute", left: 5, marginTop: 10 }}>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>06:00</Text>
            <MaterialCommunityIcons name="airplane" size={19} color={Colors.background} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>-----------</Text>
            <MaterialCommunityIcons name="map-marker" size={19} color={Colors.background} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>07:40</Text>
          </View>


          <View style={{ width: "100%", height: 30, flexDirection: "row", borderColor: Colors.secondText3, marginTop: 10 }}>




            <View style={{ width: "20%", height: 30, alignItems: "center", justifyContent: "center", backgroundColor: Colors.success, borderRadius: 10, marginLeft: 8 }}>


              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>سیستمی</Text>
            </View>


            <View style={{ width: "20%", height: 30, alignItems: "center", justifyContent: "center", backgroundColor: Colors.blue, borderRadius: 10, marginLeft: 8 }}>


              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>اکونومی</Text>
            </View>



          </View>



          <View style={{ width: "100%", height: "25%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, marginRight: 20 }}>19 نفر موجود</Text>

            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, marginLeft: 20 }}>هر بزرگسال 12،970،000 ریال</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity

          onPress={() => props.navigation.navigate("checkticketairplan")}
          style={{ flexDirection: "column", width: "100%", height: 140, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.black4,borderRadius:10,marginTop:10 }}>

          <Searchitem
            styleview={{ backgroundColor: Colors.black4,borderRadius:10 }}
            city="ماهان"
            ostan="بویینگ"
            image={require("../../../../assets/image/AsanPardakht.png")}
            nounderline

          />

          <View style={{ width: "40%", height: "20%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center", position: "absolute", left: 5, marginTop: 10 }}>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>06:00</Text>
            <MaterialCommunityIcons name="airplane" size={19} color={Colors.background} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>-----------</Text>
            <MaterialCommunityIcons name="map-marker" size={19} color={Colors.background} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>07:40</Text>
          </View>


          <View style={{ width: "100%", height: 30, flexDirection: "row", borderColor: Colors.secondText3, marginTop: 10 }}>




            <View style={{ width: "20%", height: 30, alignItems: "center", justifyContent: "center", backgroundColor: Colors.success, borderRadius: 10, marginLeft: 8 }}>


              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>سیستمی</Text>
            </View>


            <View style={{ width: "20%", height: 30, alignItems: "center", justifyContent: "center", backgroundColor: Colors.blue, borderRadius: 10, marginLeft: 8 }}>


              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>اکونومی</Text>
            </View>



          </View>



          <View style={{ width: "100%", height: "25%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, marginRight: 20 }}>19 نفر موجود</Text>

            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, marginLeft: 20 }}>هر بزرگسال 12،970،000 ریال</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity

          onPress={() => props.navigation.navigate("checkticketairplan")}
          style={{ flexDirection: "column", width: "100%", height: 140, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.black4,borderRadius:10,marginTop:10 }}>

          <Searchitem
            styleview={{ backgroundColor: Colors.black4,borderRadius:10 }}
            city="ماهان"
            ostan="بویینگ"
            image={require("../../../../assets/image/AsanPardakht.png")}
            nounderline

          />

          <View style={{ width: "40%", height: "20%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center", position: "absolute", left: 5, marginTop: 10 }}>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>06:00</Text>
            <MaterialCommunityIcons name="airplane" size={19} color={Colors.background} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>-----------</Text>
            <MaterialCommunityIcons name="map-marker" size={19} color={Colors.background} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>07:40</Text>
          </View>


          <View style={{ width: "100%", height: 30, flexDirection: "row", borderColor: Colors.secondText3, marginTop: 10 }}>




            <View style={{ width: "20%", height: 30, alignItems: "center", justifyContent: "center", backgroundColor: Colors.success, borderRadius: 10, marginLeft: 8 }}>


              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>سیستمی</Text>
            </View>


            <View style={{ width: "20%", height: 30, alignItems: "center", justifyContent: "center", backgroundColor: Colors.blue, borderRadius: 10, marginLeft: 8 }}>


              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>اکونومی</Text>
            </View>



          </View>



          <View style={{ width: "100%", height: "25%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, marginRight: 20 }}>19 نفر موجود</Text>

            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, marginLeft: 20 }}>هر بزرگسال 12،970،000 ریال</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity

          onPress={() => props.navigation.navigate("checkticketairplan")}
          style={{ flexDirection: "column", width: "100%", height: 140, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.black4,borderRadius:10,marginTop:10 }}>

          <Searchitem
            styleview={{ backgroundColor: Colors.black4,borderRadius:10 }}
            city="ماهان"
            ostan="بویینگ"
            image={require("../../../../assets/image/AsanPardakht.png")}
            nounderline

          />

          <View style={{ width: "40%", height: "20%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center", position: "absolute", left: 5, marginTop: 10 }}>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>06:00</Text>
            <MaterialCommunityIcons name="airplane" size={19} color={Colors.background} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>-----------</Text>
            <MaterialCommunityIcons name="map-marker" size={19} color={Colors.background} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>07:40</Text>
          </View>


          <View style={{ width: "100%", height: 30, flexDirection: "row", borderColor: Colors.secondText3, marginTop: 10 }}>




            <View style={{ width: "20%", height: 30, alignItems: "center", justifyContent: "center", backgroundColor: Colors.success, borderRadius: 10, marginLeft: 8 }}>


              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>سیستمی</Text>
            </View>


            <View style={{ width: "20%", height: 30, alignItems: "center", justifyContent: "center", backgroundColor: Colors.blue, borderRadius: 10, marginLeft: 8 }}>


              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>اکونومی</Text>
            </View>



          </View>



          <View style={{ width: "100%", height: "25%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, marginRight: 20 }}>19 نفر موجود</Text>

            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, marginLeft: 20 }}>هر بزرگسال 12،970،000 ریال</Text>
          </View>

        </TouchableOpacity>



      </ScrollView>

      <View style={{ width: "100%", height: 50, backgroundColor: Colors.black, flexDirection: "row-reverse" }}>

<TouchableOpacity  onPress={showModal}style={{ width: "25%", height: 50, flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
  <Text style={{ fontFamily: "Montserrat", fontSize: 16, color: Colors.background, }}>فیلتر</Text>
  <MaterialCommunityIcons name="filter-variant" size={30} color={Colors.background} />
</TouchableOpacity>

<TouchableOpacity onPress={showModal} style={{ width: "35%", height: 50, flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
  <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}> مرتب سازی</Text>
  <MaterialCommunityIcons name="format-list-numbered" size={25} color={Colors.background} />
</TouchableOpacity>



<Portal>
  <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ position: "absolute", }}>
   
   <ScrollView>

  
    <View style={{ width: "100%", height: 30, backgroundColor: Colors.secondText3,flexDirection:"row-reverse",justifyContent:"space-between",paddingHorizontal:10 }}>
      <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "right", paddingRight: 10 }}>مرتب سازی بر اساس</Text>
      <MaterialCommunityIcons name="chevron-down" size={25} color={Colors.background} />
    </View>

    <View style={{ width: "100%", height: 100, display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", }}>

      <TouchableOpacity onPress={() => {
        setChecked("1");
      }} style={{ width: "50%", height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>کمترین قیمت     </Text>
        <Checkbox
          color={Colors.success}
          uncheckedColor={Colors.background}
          status={checked == "1" ? 'checked' : 'unchecked'}

        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        setChecked("2");
      }} style={{ width: "50%", height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>دیرترین  پرواز</Text>
        <Checkbox
          color={Colors.success}
          uncheckedColor={Colors.background}
          status={checked == "2" ? 'checked' : 'unchecked'}

        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        setChecked("3");
      }} style={{ width: "50%", height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>کمترین مدت سفر</Text>
        <Checkbox
          color={Colors.success}
          uncheckedColor={Colors.background}
          status={checked == "3" ? 'checked' : 'unchecked'}

        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        setChecked("4");
      }} style={{ width: "50%", height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>زودترین پرواز</Text>
        <Checkbox
          color={Colors.success}
          uncheckedColor={Colors.background}
          status={checked == "4" ? 'checked' : 'unchecked'}

        />
      </TouchableOpacity>


    </View>

    
    <View style={{ width: "100%", height: 30, backgroundColor: Colors.secondText3,flexDirection:"row-reverse",justifyContent:"space-between",paddingHorizontal:10 }}>
    <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "right", paddingRight: 10 }}>شرکت هواپیمایی</Text>
      <MaterialCommunityIcons name="chevron-down" size={25} color={Colors.background} />
    </View>

    <View style={{ width: "100%", alignSelf: "auto", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", }}>

      <TouchableOpacity onPress={() => {
        setChecked(!checked);
      }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>آتا </Text>
        <Checkbox
          color={Colors.success}
          uncheckedColor={Colors.background}
          status={checked ? 'checked' : 'unchecked'}

        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setChecked(!checked);
      }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>ایرتور</Text>
        <Checkbox
          color={Colors.success}
          uncheckedColor={Colors.background}
          status={checked ? 'checked' : 'unchecked'}

        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setChecked(!checked);
      }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>آسمان</Text>
        <Checkbox
          color={Colors.success}
          uncheckedColor={Colors.background}
          status={checked ? 'checked' : 'unchecked'}

        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setChecked(!checked);
      }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>ساها</Text>
        <Checkbox
          color={Colors.success}
          uncheckedColor={Colors.background}
          status={checked ? 'checked' : 'unchecked'}

        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setChecked(!checked);
      }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>ماهان</Text>
        <Checkbox
          color={Colors.success}
          uncheckedColor={Colors.background}
          status={checked ? 'checked' : 'unchecked'}

        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setChecked(true);
      }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>کاسپین</Text>
        <Checkbox
          color={Colors.success}
          uncheckedColor={Colors.background}
          status={true == "6" ? 'checked' : 'unchecked'}

        />
      </TouchableOpacity>
     








    </View>

  
    <View style={{ width: "100%", height: 30, backgroundColor: Colors.secondText3,flexDirection:"row-reverse",justifyContent:"space-between",paddingHorizontal:10 }}>
    <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "right", paddingRight: 10 }}>کلاس پرواز</Text>
      <MaterialCommunityIcons name="chevron-down" size={25} color={Colors.background} />
    </View>

    <View style={{ width: "100%", alignSelf: "auto", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", }}>

      <TouchableOpacity onPress={() => {
        setChecked(!checked);
      }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>اکونومی</Text>
        <Checkbox
          color={Colors.success}
          uncheckedColor={Colors.background}
          status={checked ? 'checked' : 'unchecked'}

        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setChecked(!checked);
      }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>بیزینس </Text>
        <Checkbox
          color={Colors.success}
          uncheckedColor={Colors.background}
          status={checked ? 'checked' : 'unchecked'}

        />
      </TouchableOpacity>
     









    </View>


    

    <View style={{ width: "100%", height: 30, backgroundColor: Colors.secondText3,flexDirection:"row-reverse",justifyContent:"space-between",paddingHorizontal:10 }}>
    <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "right", paddingRight: 10 }}>نوع پرواز</Text>
      <MaterialCommunityIcons name="chevron-down" size={25} color={Colors.background} />
    </View>
    <View style={{ width: "100%", alignSelf: "auto", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", }}>

      <TouchableOpacity onPress={() => {
        setChecked(!checked);
      }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>سیستمی</Text>
        <Checkbox
          color={Colors.success}
          uncheckedColor={Colors.background}
          status={checked ? 'checked' : 'unchecked'}

        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setChecked(!checked);
      }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>چارتری</Text>
        <Checkbox
          color={Colors.success}
          uncheckedColor={Colors.background}
          status={checked ? 'checked' : 'unchecked'}

        />
      </TouchableOpacity>
   



    </View>


    <View style={{ width: "100%", height: 60, backgroundColor: Colors.black4, justifyContent: "center", alignItems: "center" }}>
    <Btn
      label="مشاهده نتایج"
      style={{ width: "100%", }}
      onPress={() =>hideModal()}
    />
  </View>
   
    </ScrollView>
  </Modal>
</Portal>


<TouchableOpacity style={{ width: "20%", height: 50, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
  <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>روز قبل</Text>
  <MaterialCommunityIcons name="chevron-right" size={20} color={Colors.background} />
</TouchableOpacity>

<TouchableOpacity style={{ width: "20%", height: 50, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
  <MaterialCommunityIcons name="chevron-left" size={20} color={Colors.background} />
  <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>روز بعد</Text>

</TouchableOpacity>
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




export default ListAirPlane

