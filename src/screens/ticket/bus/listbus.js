import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, } from 'react-native';
import HeaderBar from '../../../components/headerbar';
import Btn from "../../../components/btn"
import Colors from '../../../constants/Colors';
import Searchitem from '../../../components/searchitem';
import { Checkbox, List, Modal, Portal, RadioButton } from 'react-native-paper';










const ListBus = (props) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'black', };
  const [value, setValue] = React.useState('first');


  const [checked, setChecked] = React.useState(false);

  const [select, setselect] = React.useState(false);




  return (










    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: "flex-start",
      // marginLeft: isSmallScreen ? 0 : "35%",
      backgroundColor: Colors.black2,


    }}>


      <HeaderBar
        onPressright={() => props.navigation.goBack()}
        text={{ fontSize: 15 }}
        namepage="تهران به مشهد 1403/02/17"
        icon={"chevron-forward"}
      />
      <ScrollView style={{ width: "100%" }}>



        <TouchableOpacity

          onPress={() => props.navigation.navigate("checkticketbus")}
          style={{ flexDirection: "column", width: "100%", height: 220, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.black4 }}>

          <Searchitem
            styleview={{ backgroundColor: Colors.black4, }}
            city="تعاونی 17 صبا پیک"
            ostan="اسکانیا 29 نفره کلاسیک"
            image={require("../../../../assets/image/AsanPardakht.png")}
            nounderline
            time
          />


          <View style={{ width: "90%", height: 100, borderWidth: 1, borderColor: Colors.secondText3, borderRadius: 10, marginTop: 10 }}>


            <View style={{ width: "100%", height: "30%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>تهران پایانه بیهقی</Text>
              <MaterialCommunityIcons name="bus" size={19} color={Colors.background} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>-----------</Text>
              <MaterialCommunityIcons name="map-marker" size={19} color={Colors.background} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>اصفهان پایانه کاوه</Text>
            </View>

            <View style={{ width: "100%", height: "25%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>مقصد نهایی  </Text>

              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.success, }}>  اصفهان</Text>
            </View>

            <View style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10, width: "100%", height: "45%", backgroundColor: Colors.black3, flexDirection: "row-reverse", justifyContent: "flex-start", alignItems: "center", padding: 5 }}>
              <MaterialCommunityIcons name="information" size={19} color={Colors.background} />

              <Text style={{ width: "95%", fontFamily: "Montserrat", fontSize: 10, color: Colors.background }}> ماره  22 اصفهانسکوی شماره  22 اصفهان</Text>
            </View>






          </View>

          <View style={{ width: "100%", height: "25%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, marginRight: 20 }}>19 صندلی موجود</Text>

            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, marginLeft: 20 }}>هر نفر 1،970،000 ریال</Text>
          </View>

        </TouchableOpacity>
        <View style={{ width: "100%", height: 1, backgroundColor: Colors.secondText3 }}></View>

        <TouchableOpacity style={{ flexDirection: "column", width: "100%", height: 220, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.black4 }}>

          <Searchitem
            styleview={{ backgroundColor: Colors.black4, }}
            city="تعاونی 17 صبا پیک"
            ostan="اسکانیا 29 نفره کلاسیک"
            image={require("../../../../assets/image/AsanPardakht.png")}
            nounderline
            time
          />


          <View style={{ width: "90%", height: 100, borderWidth: 1, borderColor: Colors.secondText3, borderRadius: 10, marginTop: 10 }}>


            <View style={{ width: "100%", height: "30%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>تهران پایانه بیهقی</Text>
              <MaterialCommunityIcons name="bus" size={19} color={Colors.background} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>-----------</Text>
              <MaterialCommunityIcons name="map-marker" size={19} color={Colors.background} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>اصفهان پایانه کاوه</Text>
            </View>

            <View style={{ width: "100%", height: "25%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>مقصد نهایی  </Text>

              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.success, }}>  اصفهان</Text>
            </View>

            <View style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10, width: "100%", height: "45%", backgroundColor: Colors.black3, flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", padding: 5 }}>
              <MaterialCommunityIcons name="information" size={19} color={Colors.background} />

              <Text style={{ width: "95%", fontFamily: "Montserrat", fontSize: 10, color: Colors.background }}> اصفهانسکوی شماره  22 اصفهان</Text>
            </View>






          </View>

          <View style={{ width: "100%", height: "25%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, marginRight: 20 }}>19 صندلی موجود</Text>

            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, marginLeft: 20 }}>هر نفر 1،970،000 ریال</Text>
          </View>

        </TouchableOpacity>
        <View style={{ width: "100%", height: 1, backgroundColor: Colors.secondText3 }}></View>


        <TouchableOpacity style={{ flexDirection: "column", width: "100%", height: 220, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.black4 }}>

          <Searchitem
            styleview={{ backgroundColor: Colors.black4, }}
            city="تعاونی 17 صبا پیک"
            ostan="اسکانیا 29 نفره کلاسیک"
            image={require("../../../../assets/image/AsanPardakht.png")}
            nounderline
            time
          />


          <View style={{ width: "90%", height: 100, borderWidth: 1, borderColor: Colors.secondText3, borderRadius: 10, marginTop: 10 }}>


            <View style={{ width: "100%", height: "30%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>تهران پایانه بیهقی  </Text>
              <MaterialCommunityIcons name="bus" size={19} color={Colors.background} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>-----------</Text>
              <MaterialCommunityIcons name="map-marker" size={19} color={Colors.background} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>  اصفهان پایانه کاوه</Text>
            </View>

            <View style={{ width: "100%", height: "25%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>مقصد نهایی  </Text>

              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.success, }}>  اصفهان</Text>
            </View>

            <View style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10, width: "100%", height: "45%", alignItems: "center", backgroundColor: Colors.black3, flexDirection: "row-reverse", justifyContent: "flex-start", padding: 5 }}>
              <MaterialCommunityIcons name="information" size={19} color={Colors.background} />

              <Text style={{ width: "95%", fontFamily: "Montserrat", fontSize: 10, color: Colors.background }}> ماره  22 اصفهانسکوی شماره  22 اصفهان</Text>
            </View>






          </View>

          <View style={{ width: "100%", height: "25%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, marginRight: 20 }}>19 صندلی موجود</Text>

            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, marginLeft: 20 }}>هر نفر 1،970،000 ریال</Text>
          </View>

        </TouchableOpacity>
        <View style={{ width: "100%", height: 1, backgroundColor: Colors.secondText3 }}></View>

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
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>کمترین قیمت </Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked == "1" ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                setChecked("2");
              }} style={{ width: "50%", height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>دیرترین زمان حرکت </Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked == "2" ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                setChecked("3");
              }} style={{ width: "50%", height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>بیشترین قیمت</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked == "3" ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                setChecked("4");
              }} style={{ width: "50%", height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>زودترین زمان حرکت </Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked == "4" ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>


            </View>

            
            <View style={{ width: "100%", height: 30, backgroundColor: Colors.secondText3,flexDirection:"row-reverse",justifyContent:"space-between",paddingHorizontal:10 }}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "right", paddingRight: 10 }}>شرکت تعاونی</Text>
              <MaterialCommunityIcons name="chevron-down" size={25} color={Colors.background} />
            </View>

            <View style={{ width: "100%", alignSelf: "auto", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", }}>

              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>تعاونی 4 میهن نور </Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>رویال سفر ایرانیان</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>شرکت تی بی تی-تعاونی شماره 15 پایانه جنوب</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>شرکت تی بی تی-تعاونی شماره 15 پایانه جنوب </Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>شرکت تی بی تی-تعاونی شماره 15 پایانه جنوب</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked(true);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>شرکت تی بی تی-تعاونی شماره 15 پایانه جنوب </Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={true == "6" ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked(true);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>رویال سفر ایرانیان </Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={true ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>








            </View>

          
            <View style={{ width: "100%", height: 30, backgroundColor: Colors.secondText3,flexDirection:"row-reverse",justifyContent:"space-between",paddingHorizontal:10 }}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "right", paddingRight: 10 }}>پایانه مبدا (تهران)</Text>
              <MaterialCommunityIcons name="chevron-down" size={25} color={Colors.background} />
            </View>

            <View style={{ width: "100%", alignSelf: "auto", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", }}>

              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>پایانه شرق</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>پایانه غرب</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>پایانه جنوب</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>









            </View>


            

            <View style={{ width: "100%", height: 30, backgroundColor: Colors.secondText3,flexDirection:"row-reverse",justifyContent:"space-between",paddingHorizontal:10 }}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "right", paddingRight: 10 }}>پایانه مقصد (اصفهان)</Text>
              <MaterialCommunityIcons name="chevron-down" size={25} color={Colors.background} />
            </View>
            <View style={{ width: "100%", alignSelf: "auto", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", }}>

              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>پایانه صفه</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>پایانه جی</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>پایانه کاوه</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>



            </View>


            <View style={{ width: "100%", height: 60, backgroundColor: Colors.black4, justifyContent: "center", alignItems: "center" }}>
            <Btn
              label="اعمال فیلتر"
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




export default ListBus

