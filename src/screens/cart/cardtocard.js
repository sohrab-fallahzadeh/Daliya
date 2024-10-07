import { Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, SafeAreaView, } from 'react-native';
import HeaderBar from '../../components/headerbar';
import Btn from "../../components/btn"
import Colors from '../../constants/Colors';

import { Modal, Portal, Button, PaperProvider, RadioButton, Checkbox } from 'react-native-paper';
import Searchitem from '../../components/searchitem';








const CardtoCard = (props) => {

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'black', padding: 20 };
  const [value, setValue] = React.useState('first');



  const [checked, setChecked] = React.useState(false);

  const [select, setselect] = React.useState(false);

  return (


    <PaperProvider>







      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        // marginLeft: isSmallScreen ? 0 : "35%",
        backgroundColor: Colors.black0,


      }}>


        <HeaderBar
          onPressright={() => props.navigation.navigate("home")}
          text={{ fontSize: 15 }}
          namepage="کارت به کارت"
          icon={"chevron-forward"}
          iconleft
          iconL={"calendar-text"}

        />
        <ScrollView style={{ width: "100%", padding: 5, backgroundColor: Colors.black4 }}>





          <SafeAreaView>



            <TouchableOpacity onPress={() => props.navigation.navigate("addcard",{
              titlecard:"مبدا",
            })} style={{ flexDirection: "row", padding: 5, width: "100%", height: 75, backgroundColor: Colors.black, justifyContent: "flex-end", alignItems: "center", marginTop: "5%", borderRadius: 10 }}>

              <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.secondText3, marginRight: 10 }}>کارت مبدا</Text>
             


            </TouchableOpacity>



            {select == true ?
              <TouchableOpacity onPress={() => props.navigation.navigate("addcard",{
                titlecard:"مقصد",
              })} style={{ flexDirection: "row", padding: 5, width: "100%", height: 75, backgroundColor: Colors.black, justifyContent: "flex-end", alignItems: "center", marginTop: "5%", borderRadius: 10 }}>
                <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.secondText3, marginRight: 10 }}>کارت مقصد</Text>
              </TouchableOpacity>
              :
              <TouchableOpacity style={{ flexDirection: "row", padding: 5, width: "100%", height: 75, backgroundColor: Colors.black, justifyContent: "flex-end", alignItems: "center", marginTop: "5%", borderRadius: 10 }}>
                {/* <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.secondText3, marginRight:10 }}>کارت مقصد</Text> */}





                <MaterialCommunityIcons onPress={() => setselect(true)} name="close" size={25} color={Colors.background} style={{ left: 40, zIndex: 2 }} />
                <Searchitem
                  nounderline
                  city="بانک مهر ایران"
                  ostan="xxxx-xxxx-xxxx-0311"
                  styleostan={{ fontFamily: "MontserratBold", fontSize: 15, textAlign: "right" }}
                  image={require("../../../assets/image/AsanPardakht.png")}
                  viewimage={{ backgroundColor: Colors.black }}
                />


              </TouchableOpacity>

            }

            <View style={{ flexDirection: "row", padding: 5, width: "100%", height: 75, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>

              <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>مبلغ ( ریال )</Text>
              <TextInput
                

                textAlign="right"


                style={{
                  height: 30,
                  width: "80%",
                  marginTop: 20,

                  marginLeft: "13%",
                  color: "white",

                }}

                // onChangeText={(t) => setTask(t)}
                // value={task}

                keyboardType="number-pad"
              />


            </View>




            <View style={{ flexDirection: "row", padding: 5, width: "100%", height: 75, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>
              <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>توضیحات</Text>
              <TextInput
                maxLength={10}

                textAlign="right"


                style={{
                  height: 30,
                  width: "80%",
                  marginTop: 20,

                  marginLeft: "13%",
                  color: "white",

                }}

                // onChangeText={(t) => setTask(t)}
                // value={task}

                keyboardType="default"
              />


            </View>












          </SafeAreaView>


        </ScrollView>



        <View style={{ width: "100%", height: 60, backgroundColor: Colors.black4, justifyContent: "center", alignItems: "center" }}>
          <Btn
            label="مرحله بعد"
            style={{ width: "100%", }}
            onPress={() => {

              props.navigation.navigate("sendtocard")


            }}
          />
        </View>




      </View>

    </PaperProvider>

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




export default CardtoCard

