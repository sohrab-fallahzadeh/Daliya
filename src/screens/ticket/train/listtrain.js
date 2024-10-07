import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, Switch, SafeAreaView, } from 'react-native';
import HeaderBar from '../../../components/headerbar';
import Btn from "../../../components/btn"
import Colors from '../../../constants/Colors';
import Searchitem from '../../../components/searchitem';
import { Checkbox, Modal, Portal } from 'react-native-paper';










const ListTrain = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentWay, setpaymentWay] = useState(false);
  const toggleSwitch = () => {


    setpaymentWay(previousState => !previousState)

  };
  const [checked, setChecked] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'black', };
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

      <View style={{ width: "100%", height: 50, flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", padding: 10 }}>
        <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background }}>فقط بلیط های  قابل خرید</Text>
        <Switch
          trackColor={{ false: Colors.secondText, true: Colors.primary }}
          thumbColor={paymentWay ? Colors.primary : Colors.secondText3}

          ios_backgroundColor="white"
          onValueChange={toggleSwitch}
          value={paymentWay}
        />
      </View>


      <View style={{ width: "95%", height: 50, backgroundColor: Colors.background, borderRadius: 10, flexDirection: "row-reverse" }}>
        <TouchableOpacity style={{ width: "10%", height: 50, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
          <View style={{ width: 2, height: 40, backgroundColor: Colors.secondText3 }}></View>
          <AntDesign name="right" size={30} color={Colors.black} />

        </TouchableOpacity>
        <TouchableOpacity style={{ width: "80%", height: 50, justifyContent: "center", alignItems: "center" }}>

          <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, }}>پنج شنبه 3 خرداد 1403</Text>

        </TouchableOpacity>
        <TouchableOpacity style={{ width: "10%", height: 50, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>

          <AntDesign name="left" size={30} color={Colors.black} />
          <View style={{ width: 2, height: 40, backgroundColor: Colors.secondText3 }}></View>
        </TouchableOpacity>

      </View>
      <ScrollView style={{ width: "100%", marginBottom: 10 }}>



        <TouchableOpacity

          onPress={() => props.navigation.navigate("addPassenger", {
            train: "train"
          })}
          style={{ padding: 5, borderRadius: 10, marginHorizontal: 20, marginTop: 10, flexDirection: "row", width: "90%", height: 150, justifyContent: "flex-end", alignItems: "center", backgroundColor: Colors.background }}>

          <View style={{ width: "70%", height: "100%", flexDirection: "column", }}>
            <View style={{ width: "100%", height: "30%", flexDirection: "row-reverse", alignItems: "center", }}>

              <MaterialCommunityIcons name="clock-outline" size={19} color={Colors.black} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>07:05</Text>




              <Text style={{ fontFamily: "MontserratBold", fontSize: 18, color: Colors.black, position: "absolute", right: 0 }}>2,003,500 ریال</Text>
            </View>
            <View style={{ width: "100%", height: 20, flexDirection: "row", justifyContent: "flex-end" }}>

              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>48 نفر </Text>
              <MaterialCommunityIcons name="seat-passenger" size={19} color={Colors.black} />
            </View>

            <View style={{ width: "100%", height: "30%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between" }}>

              <MaterialCommunityIcons name="train" size={19} color={Colors.black} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, right: 40 }}>کوپه ای 6 نفره</Text>


              <View style={{ width: "25%", height: "65%", flexDirection: "row-reverse", justifyContent: "space-between" }}>
                <MaterialIcons name="live-tv" size={25} color={Colors.black} />
                <View style={{ width: 2, height: 30, backgroundColor: Colors.secondText3 }}></View>
                <MaterialCommunityIcons name="fan" size={25} color={Colors.black} />
              </View>



            </View>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>3 ستاره 6 تخته اپتیما</Text>
          </View>


          <View style={{ width: "30%", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "space-around", borderLeftWidth: 1, borderColor: Colors.secondText3 }}>
            <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "50%", borderRadius: 50 }}></Image>
            <View style={{ width: "90%", height: 25, backgroundColor: Colors.primary, borderRadius: 5, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>رجا</Text>
            </View>
            <View style={{ width: "90%", height: 25, borderRadius: 5, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, }}>شماره 318</Text>
            </View>
          </View>


        </TouchableOpacity>


        <TouchableOpacity

          onPress={() => props.navigation.navigate("addPassenger")}
          style={{ padding: 5, borderRadius: 10, marginHorizontal: 20, marginTop: 10, flexDirection: "row", width: "90%", height: 150, justifyContent: "flex-end", alignItems: "center", backgroundColor: Colors.background }}>

          <View style={{ width: "70%", height: "100%", flexDirection: "column", }}>
            <View style={{ width: "100%", height: "30%", flexDirection: "row-reverse", alignItems: "center", }}>

              <MaterialCommunityIcons name="clock-outline" size={19} color={Colors.black} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>18:00</Text>




              <Text style={{ fontFamily: "MontserratBold", fontSize: 18, color: Colors.black, position: "absolute", right: 0 }}>2,693,500 ریال</Text>
            </View>
            <View style={{ width: "100%", height: 20, flexDirection: "row", justifyContent: "flex-end" }}>

              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>2 نفر </Text>
              <MaterialCommunityIcons name="seat-passenger" size={19} color={Colors.black} />
            </View>

            <View style={{ width: "100%", height: "30%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between" }}>

              <MaterialCommunityIcons name="train" size={19} color={Colors.black} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, right: 40 }}>کوپه ای 4 نفره</Text>


              <View style={{ width: "25%", height: "65%", flexDirection: "row-reverse", justifyContent: "space-between" }}>
                <MaterialIcons name="live-tv" size={25} color={Colors.black} />
                <View style={{ width: 2, height: 30, backgroundColor: Colors.secondText3 }}></View>
                <MaterialCommunityIcons name="fan" size={25} color={Colors.black} />
              </View>



            </View>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>5 ستاره 4 تخته زندگی با پذیرایی و شام</Text>
          </View>


          <View style={{ width: "30%", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "space-around", borderLeftWidth: 1, borderColor: Colors.secondText3 }}>
            <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "50%", borderRadius: 50 }}></Image>
            <View style={{ width: "90%", height: 25, backgroundColor: Colors.primary, borderRadius: 5, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>نوالرضا</Text>
            </View>
            <View style={{ width: "90%", height: 25, borderRadius: 5, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, }}>شماره 215</Text>
            </View>
          </View>


        </TouchableOpacity>


        <TouchableOpacity

          // onPress={()=>props.navigation.navigate("checkticketbus")}
          style={{ padding: 5, borderRadius: 10, marginHorizontal: 20, marginTop: 10, flexDirection: "row", width: "90%", height: 150, justifyContent: "flex-end", alignItems: "center", backgroundColor: Colors.secondText3 }}>

          <View style={{ width: "70%", height: "100%", flexDirection: "column", }}>
            <View style={{ width: "100%", height: "30%", flexDirection: "row-reverse", alignItems: "center", }}>

              <MaterialCommunityIcons name="clock-outline" size={19} color={Colors.black} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>18:00</Text>




              <Text style={{ fontFamily: "MontserratBold", fontSize: 18, color: Colors.black, position: "absolute", right: 0 }}>2,693,500 ریال</Text>
            </View>
            <View style={{ width: "100%", height: 20, flexDirection: "row", justifyContent: "flex-end" }}>

              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>0 نفر </Text>
              <MaterialCommunityIcons name="seat-passenger" size={19} color={Colors.black} />
            </View>

            <View style={{ width: "100%", height: "30%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between" }}>

              <MaterialCommunityIcons name="train" size={19} color={Colors.black} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, right: 40 }}>کوپه ای 4 نفره</Text>


              <View style={{ width: "25%", height: "65%", flexDirection: "row-reverse", justifyContent: "space-between" }}>
                <MaterialIcons name="live-tv" size={25} color={Colors.black} />
                <View style={{ width: 2, height: 30, backgroundColor: Colors.secondText3 }}></View>
                <MaterialCommunityIcons name="fan" size={25} color={Colors.black} />
              </View>



            </View>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>5 ستاره 4 تخته زندگی با پذیرایی و شام</Text>
          </View>


          <View style={{ width: "30%", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "space-around", borderLeftWidth: 1, borderColor: Colors.secondText3 }}>
            <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "50%", borderRadius: 50 }}></Image>
            <View style={{ width: "90%", height: 25, backgroundColor: Colors.primary, borderRadius: 5, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>سیر ترابر</Text>
            </View>
            <View style={{ width: "90%", height: 25, borderRadius: 5, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, }}>شماره 215</Text>
            </View>
          </View>


        </TouchableOpacity>

        <TouchableOpacity

          // onPress={()=>props.navigation.navigate("checkticketbus")}
          style={{ padding: 5, borderRadius: 10, marginHorizontal: 20, marginTop: 10, flexDirection: "row", width: "90%", height: 150, justifyContent: "flex-end", alignItems: "center", backgroundColor: Colors.secondText3 }}>

          <View style={{ width: "70%", height: "100%", flexDirection: "column", }}>
            <View style={{ width: "100%", height: "30%", flexDirection: "row-reverse", alignItems: "center", }}>

              <MaterialCommunityIcons name="clock-outline" size={19} color={Colors.black} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>18:00</Text>




              <Text style={{ fontFamily: "MontserratBold", fontSize: 18, color: Colors.black, position: "absolute", right: 0 }}>2,693,500 ریال</Text>
            </View>
            <View style={{ width: "100%", height: 20, flexDirection: "row", justifyContent: "flex-end" }}>

              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>0 نفر </Text>
              <MaterialCommunityIcons name="seat-passenger" size={19} color={Colors.black} />
            </View>

            <View style={{ width: "100%", height: "30%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between" }}>

              <MaterialCommunityIcons name="train" size={19} color={Colors.black} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, right: 40 }}>کوپه ای 4 نفره</Text>


              <View style={{ width: "25%", height: "65%", flexDirection: "row-reverse", justifyContent: "space-between" }}>
                <MaterialIcons name="live-tv" size={25} color={Colors.black} />
                <View style={{ width: 2, height: 30, backgroundColor: Colors.secondText3 }}></View>
                <MaterialCommunityIcons name="fan" size={25} color={Colors.black} />
              </View>



            </View>

            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, marginRight: 5 }}>5 ستاره 4 تخته زندگی با پذیرایی و شام</Text>


          </View>



          <View style={{ width: "30%", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "space-around", borderLeftWidth: 1, borderColor: Colors.secondText3 }}>
            <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "50%", borderRadius: 50 }}></Image>
            <View style={{ width: "90%", height: 25, backgroundColor: Colors.primary, borderRadius: 5, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>نوالرضا</Text>
            </View>
            <View style={{ width: "90%", height: 25, borderRadius: 5, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.black, }}>شماره 215</Text>
            </View>
          </View>


        </TouchableOpacity>

      </ScrollView>


      <View style={{ width: "100%", height: 1, backgroundColor: "none" }}>
        <TouchableOpacity onPress={showModal} style={{ justifyContent: "center", alignItems: "center", width: 50, height: 50, borderRadius: 50, backgroundColor: Colors.primary, position: "absolute", bottom: 10, left: 25 }}>
          <MaterialCommunityIcons name="filter" size={25} color={Colors.background} />
        </TouchableOpacity>
      </View>

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
            <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "right", paddingRight: 10 }}>نوع قطار</Text>
              <MaterialCommunityIcons name="chevron-down" size={25} color={Colors.background} />
            </View>

            <View style={{ width: "100%", alignSelf: "auto", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", }}>

              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>اتوبوسی </Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>3 ستاره کوپه ای 6 تخته</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>4 ستاره کوپه ای 4 تخته</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>5 ستاره کوپه ای 4 تخته</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
             







            </View>

          
            <View style={{ width: "100%", height: 30, backgroundColor: Colors.secondText3,flexDirection:"row-reverse",justifyContent:"space-between",paddingHorizontal:10 }}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "right", paddingRight: 10 }}>شرکت های ریلی</Text>
              <MaterialCommunityIcons name="chevron-down" size={25} color={Colors.background} />
            </View>

            <View style={{ width: "100%", alignSelf: "auto", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", }}>

              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>بن ریل</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>رجا</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked(!checked);
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>جوپار</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>









            </View>


            

            {/* <View style={{ width: "100%", height: 30, backgroundColor: Colors.secondText3,flexDirection:"row-reverse",justifyContent:"space-between",paddingHorizontal:10 }}>
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



            </View> */}


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




export default ListTrain

