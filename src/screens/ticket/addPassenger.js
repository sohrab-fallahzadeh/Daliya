import { Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, SafeAreaView, } from 'react-native';
import HeaderBar from '../../components/headerbar';
import Btn from "../../components/btn"
import Colors from '../../constants/Colors';

import { Modal, Portal, Button, PaperProvider, RadioButton, Checkbox } from 'react-native-paper';








const AddPassenger = (props) => {

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
          onPressright={() => props.navigation.goBack()}
          text={{ fontSize: 15 }}
          namepage="انتخاب مسافر"
          icon={"chevron-forward"}
        />
        <ScrollView style={{ width: "100%", padding: 5, backgroundColor: Colors.black4 }}>

          {!select ?
            <SafeAreaView>


              <TouchableOpacity onPress={() => setselect(true)} style={{ flexDirection: "row-reverse", width: "100%", height: 70, borderWidth: 1, borderColor: Colors.green, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                <Entypo name="plus" size={20} color={Colors.green} />
                <Text style={{ fontFamily: "Montserrat", fontSize: 18, color: Colors.green }}>  افزودن مسافر</Text>

              </TouchableOpacity>

              <View style={{ width: "100%", height: 50, marginTop: 20, }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 18, color: Colors.background }}>لیست مسافران</Text>
              </View>

              <View style={{ flexDirection: "row", padding: 5, width: "100%", height: 60, backgroundColor: Colors.black, justifyContent: "flex-end", alignItems: "center", borderRadius: 10 }}>
                <TouchableOpacity style={{ width: 30, height: 30, position: "absolute", left: 15 }}>
                  <Ionicons name="trash-outline" size={25} color={Colors.background} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 30, height: 30, position: "absolute", left: 45 }}>
                  <Ionicons name="create-outline" size={25} color={Colors.background} />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, }}> / بزرگسال</Text>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>مصطفی فرزانه </Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />


              </View>

            </SafeAreaView>

            :

            <SafeAreaView>



              <View style={{ width: "100%", height: 20, alignContent: "center", alignItems: "center" }}>


                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background }}>لطفا اطلاعات ذیل را وارد نمایید</Text>
              </View>

              <View style={{ width: "100%", height: 50, alignContent: "center", borderRadius: 10, backgroundColor: "#AED6F1", padding: 5, marginTop: 10 }}>


                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.black, textAlign: "center" }}>  کاربر گرامی توجه داشته باشید تمام اطلاعات درج شده در این صفحه باید منطبق با مدارک شناسایی مسافر باشد</Text>
              </View>


              <View style={{ flexDirection: "row", padding: 5, width: "100%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>

                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>نام به لاتین</Text>
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



              <View style={{ flexDirection: "row", padding: 5, width: "100%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>نام خانوادگی به لاتین</Text>
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



              <View style={{ flexDirection: "row", padding: 5, width: "100%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>

                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>شماره گذر نامه</Text>
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




              <View style={{ flexDirection: "row", padding: 5, width: "100%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>انقضا گذرنامه</Text>
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



              <View style={{ flexDirection: "row", padding: 5, width: "100%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>

                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>تاریخ تولد میلادی</Text>
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

              <View style={{ flexDirection: "row", padding: 5, width: "100%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>

                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>محل صدور گذرنامه</Text>
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

              <View style={{ flexDirection: "row", padding: 5, width: "100%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>

                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>محل  تولد</Text>
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


              <View style={{ flexDirection: "row", padding: 5, width: "100%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>کد ملی</Text>
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

                  keyboardType="numeric"
                />
                <TouchableOpacity style={{ width: 30, height: 30, position: "absolute", left: 15, top: 15 }}>
                  <Ionicons name="close" size={25} color={Colors.background} />
                </TouchableOpacity>

              </View>


              <View style={{ flexDirection: "row", padding: 5, width: "100%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>تاریخ تولد</Text>
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

                  keyboardType="numeric"
                />


              </View>




              <View style={{ flexDirection: "row", padding: 5, width: "100%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>نام</Text>
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



              <View style={{ flexDirection: "row", padding: 5, width: "100%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>

                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>نام خانوادگی</Text>
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


              <TouchableOpacity onPress={showModal} style={{ flexDirection: "row", padding: 5, width: "100%", height: 60, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>جنسیت</Text>
                <Text style={{ fontFamily: "Montserrat", fontSize: 16, color: Colors.background, textAlign: "center", position: "absolute", right: 20, top: "50%" }}>مرد</Text>
                <Entypo name="chevron-small-down" size={30} color={Colors.background} style={{ position: "absolute", left: 15, top: 15 }} />
              </TouchableOpacity>


              <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ position: "absolute", top: 100, }}>
                  <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "center", position: "absolute", right: 20, top: 3, }}>جنسیت</Text>

                  <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={{ width: "100%", height: 50, flexDirection: "row-reverse", marginTop: 15 }}>
                      <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "center", position: "absolute", left: "13%", top: 3 }}>آقا / Male</Text>
                      <RadioButton value="first" />
                    </View>
                    <View style={{ width: "100%", height: 50, flexDirection: "row-reverse", }}>
                      <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "center", position: "absolute", left: "13%", top: 3 }}>خانم / Female</Text>
                      <RadioButton value="second" />
                    </View>
                  </RadioButton.Group>

                </Modal>
              </Portal>

            </SafeAreaView>

          }
        </ScrollView>

        {!select ?
          <View style={{ width: "100%", height: 60, backgroundColor: Colors.black4, justifyContent: "center", alignItems: "center" }}>
            <Btn
              label="انتخاب سرپرست"
              style={{ width: "100%", }}
              onPress={() => setselect(true)}
            />
          </View>
          :

          <View style={{ width: "100%", height: 60, backgroundColor: Colors.black4, justifyContent: "center", alignItems: "center" }}>
            <Btn
              label="انتخاب و تایید"
              style={{ width: "100%", }}
              onPress={() => {
                if (props.route.params.train=="bus") {
                  props.navigation.navigate("getticket")
                } else {
                  props.navigation.navigate("servicetrain")
                }
                
            }}
            />
          </View>
        }



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




export default AddPassenger

