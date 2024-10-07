import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, } from 'react-native';
import HeaderBar from '../../../components/headerbar';
import Btn from "../../../components/btn"
import Colors from '../../../constants/Colors';
import { Picker } from '@react-native-picker/picker';
import { Checkbox, Divider, Menu, Modal, Portal, RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-jalaali-date-picker'








const TicketTrain = (props) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'black', padding: 20 };
  const [value, setValue] = React.useState("1");
  const [value1, setValue1] = React.useState("1");
  const [checked, setChecked] = React.useState(false);

  const [select, setselect] = useState(false);
  const showModal1 = () => setselect(true);
  const hideModal1 = () => setselect(false);

  const [visible1, setVisible1] = React.useState(false);

  const openMenu = () => setVisible1(true);

  const closeMenu = () => setVisible1(false);


  const [visible2, setVisible2] = React.useState(false);
  const containerStyle2 = { backgroundColor: Colors.background, padding: 20,borderRadius:10 };
  const showModal2 = () => setVisible2(true);
  const hideModal2 = () => setVisible2(false);

  return (










    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: "flex-start",
      // marginLeft: isSmallScreen ? 0 : "35%",
      backgroundColor: Colors.black2,

    }}>


      <HeaderBar
        onPressright={() => props.navigation.navigate("ticketpage")}
        namepage="بلیط قطار"
        icon={"chevron-forward"}
        iconleft
        iconL={"dots-vertical"}
        onPressLeft={openMenu}
      />

<View
        style={{
          paddingTop: 50,
         
          justifyContent: 'center',
          left:5,
          position:"absolute"
        }}>
        <Menu
          visible={visible1}
          onDismiss={closeMenu}
          statusBarHeight={60}
         

          anchor={{
            x: 50,
            y:60,
          }}>

          <Menu.Item   leadingIcon={"ticket-confirmation-outline"}  onPress={() => {}} title="بلیط های من" 
          titleStyle={{fontFamily: "Montserrat", fontSize: 13, color: Colors.primary,}}/>
         
          <Divider  />
           
          <Menu.Item 
          titleStyle={{fontFamily: "Montserrat", fontSize: 13, color: Colors.primary,}}
          leadingIcon={"note-text-outline"} onPress={() => {}} title="قوانین و مقررات"  />

           
          <Menu.Item 
          leadingIcon={"help-circle-outline"} 
            titleStyle={{fontFamily: "Montserrat", fontSize: 13, color: Colors.primary,}}
          onPress={() => {}} title="راهنما و سوالات متداول" />
           
        </Menu>
      </View>
      <ScrollView style={{ width: "100%" }}>


        <View style={{ flexDirection: "row-reverse", width: "100%", height: 50, justifyContent: "center", alignItems: "center", marginTop: "5%", backgroundColor: Colors.black2 }}>
          <TouchableOpacity
           
            style={{ borderBottomRightRadius: 10, borderTopRightRadius: 10, width: "45%", height: "100%", backgroundColor: Colors.secondText3, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: Colors.background }}>

            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>فقط رفت</Text>

          </TouchableOpacity>

          {/* <TouchableOpacity style={{ zIndex: 2, width: 50, height: 50, backgroundColor: Colors.black3, justifyContent: "center", alignItems: "center", borderRadius: 50 }}>
          <FontAwesome name="exchange" size={25} color={Colors.background} />
        </TouchableOpacity> */}

          <TouchableOpacity
            
            style={{ borderBottomLeftRadius: 10, borderTopLeftRadius: 10, width: "45%", height: "100%", backgroundColor: Colors.black3, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: Colors.background }}>

            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>رفت و برگشت</Text>

          </TouchableOpacity>



        </View>

        <TouchableOpacity  onPress={() => props.navigation.navigate("searchticket", {
              location: "مبدا"
            })}style={{ marginHorizontal: 20, flexDirection: "row-reverse", width: "90%", height: 50, borderRadius: 10, justifyContent: "flex-start", alignItems: "center", marginTop: "5%", backgroundColor: Colors.background, padding: 5 }} >


          <View style={{ width: "20%", height: 50, borderLeftWidth: 2, justifyContent: "center", alignItems: "center", }}>
            <FontAwesome name="train" size={25} color={Colors.primary} style={{ marginTop: 10 }} />
            <AntDesign name="swapleft" size={25} color={Colors.primary} />
          </View>

          <View style={{ width: "80%", height: 50, justifyContent: "center", alignItems: "center", }}>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.black, textAlign: "center", }}>تهران</Text>
          </View>


        </TouchableOpacity>



        <TouchableOpacity onPress={() => props.navigation.navigate("searchticket", {
              location: "مقصد"
            })}style={{ marginHorizontal: 20, flexDirection: "row-reverse", width: "90%", height: 50, borderRadius: 10, justifyContent: "flex-start", alignItems: "center", marginTop: "5%", backgroundColor: Colors.background, padding: 5 }} >


          <View style={{ width: "20%", height: 50, borderLeftWidth: 2, justifyContent: "center", alignItems: "center", }}>
            <FontAwesome name="train" size={25} color={Colors.primary} style={{ marginTop: 10 }} />
            <AntDesign name="swapright" size={25} color={Colors.primary} />
          </View>

          <View style={{ width: "80%", height: 50, justifyContent: "center", alignItems: "center", }}>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.black, textAlign: "center", }}>مشهد</Text>
          </View>


        </TouchableOpacity>


        <TouchableOpacity onPress={showModal2} style={{ marginHorizontal: 20, flexDirection: "row-reverse", width: "90%", height: 50, borderRadius: 10, justifyContent: "flex-start", alignItems: "center", marginTop: "5%", backgroundColor: Colors.background, padding: 5 }} >


          <View style={{ width: "20%", height: 50, borderLeftWidth: 2, justifyContent: "center", alignItems: "center", }}>
            <AntDesign name="indent-left" size={25} color={Colors.primary} />
          </View>

          <View style={{ width: "80%", height: 50, justifyContent: "center", alignItems: "center", }}>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.black, textAlign: "center", }}>تاریخ رفت</Text>
          </View>


        </TouchableOpacity>
        <Portal>
          <Modal  
           
          visible={visible2}
           onDismiss={hideModal2} 
           contentContainerStyle={containerStyle2}
           style={{justifyContent:"center",alignItems:"center",}} >
             <DatePicker
             
           
                showTitleDate={true}
                TitleDateStyle={{color:Colors.black,fontFamily: "MontserratBold", fontSize: 15,bottom:20}}
                btnColor={Colors.success}
                btnStyle={{width:"100%",height:50}}
                btnUnderlayColor={Colors.secondText3}
                arrowTintColor={Colors.primary}
                arrowSize={25}
                dateBoxStyle={{width:85,height:80}}
                dateStyle={{fontFamily: "MontserratBold", fontSize: 15, color: Colors.background,}}
                onChangeDate={(date)=>{
                console.log(date)
            }}
            />
          
          </Modal>
        </Portal>

        <TouchableOpacity style={{ marginHorizontal: 20, flexDirection: "row-reverse", width: "90%", height: 50, borderRadius: 10, justifyContent: "flex-start", alignItems: "center", marginTop: "5%", backgroundColor: Colors.background, padding: 5 }} >

          <View style={{ width: "20%", height: 50, borderLeftWidth: 2, justifyContent: "center", alignItems: "center", }}>
            <AntDesign name="indent-right" size={25} color={Colors.primary} />
          </View>

          <View style={{ width: "80%", height: 50, justifyContent: "center", alignItems: "center", }}>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.black, textAlign: "center", }}>تاریخ برگشت</Text>
          </View>


        </TouchableOpacity>



        <View style={{ marginHorizontal: 20, flexDirection: "row-reverse", width: "90%", height: 50, borderRadius: 10, justifyContent: "space-between", alignItems: "center", marginTop: "5%", backgroundColor: Colors.black2, padding: 5 }} >

          <View style={{ width: "45%", height: 50, justifyContent: "center", alignItems: "center", flexDirection: "column" }}>


            <TouchableOpacity onPress={showModal} style={{ flexDirection: "row", padding: 5, width: "100%", height: 50, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>
              <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>نوع بلیط</Text>
              <Text style={{ fontFamily: "Montserrat", fontSize: 16, color: Colors.background, textAlign: "center", position: "absolute", right: 20, top: "50%" }}>مسافرین عادی</Text>
              <Entypo name="chevron-small-down" size={30} color={Colors.background} style={{ position: "absolute", left: 15, top: 15 }} />
            </TouchableOpacity>

          </View>


          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ position: "absolute", top: 100, }}>
              <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "center", position: "absolute", right: 20, top: 3, }}>نوع بلیط</Text>

              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{ width: "100%", height: 50, flexDirection: "row-reverse", marginTop: 15 }}>
                  <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "center", position: "absolute", left: "13%", top: 3 }}>مسافرین عادی</Text>
                  <RadioButton value="1" />
                </View>
                <View style={{ width: "100%", height: 50, flexDirection: "row-reverse", }}>
                  <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "center", position: "absolute", left: "13%", top: 3 }}>ویژه برادران</Text>
                  <RadioButton value="2" />
                </View>
                <View style={{ width: "100%", height: 50, flexDirection: "row-reverse", }}>
                  <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "center", position: "absolute", left: "13%", top: 3 }}>ویژه خواهران</Text>
                  <RadioButton value="3" />
                </View>
              </RadioButton.Group>

            </Modal>
          </Portal>


          <View style={{ width: "45%", height: 50, justifyContent: "center", alignItems: "center", flexDirection: "column" }}>


            <TouchableOpacity onPress={showModal1} style={{ flexDirection: "row", padding: 5, width: "100%", height: 50, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", marginTop: "5%", borderRadius: 10 }}>
              <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.secondText3, textAlign: "center", position: "absolute", right: 20, top: 3 }}>تعداد مسافر</Text>
              <Text style={{ fontFamily: "Montserrat", fontSize: 16, color: Colors.background, textAlign: "center", position: "absolute", right: 20, top: "50%" }}>1</Text>
              <Entypo name="chevron-small-down" size={30} color={Colors.background} style={{ position: "absolute", left: 15, top: 15 }} />
            </TouchableOpacity>


            <Portal>
            <Modal visible={select} onDismiss={hideModal1} contentContainerStyle={containerStyle} style={{ position: "absolute", top: 100, }}>
              <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "center", position: "absolute", right: 20, top: 3, }}>تعداد مسافر</Text>

              <RadioButton.Group onValueChange={newValue => setValue1(newValue)} value={value1}>
                <View style={{ width: "100%", height: 50, flexDirection: "row-reverse", marginTop: 15 }}>
                  <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "center", position: "absolute", left: "13%", top: 3 }}>1</Text>
                  <RadioButton value="1" />
                </View>
                <View style={{ width: "100%", height: 50, flexDirection: "row-reverse", }}>
                  <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "center", position: "absolute", left: "13%", top: 3 }}>2</Text>
                  <RadioButton value="2" />
                </View>
                <View style={{ width: "100%", height: 50, flexDirection: "row-reverse", }}>
                  <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "center", position: "absolute", left: "13%", top: 3 }}>3</Text>
                  <RadioButton value="3" />
                </View>
                <View style={{ width: "100%", height: 50, flexDirection: "row-reverse", }}>
                  <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "center", position: "absolute", left: "13%", top: 3 }}>4</Text>
                  <RadioButton value="4" />
                </View>
                <View style={{ width: "100%", height: 50, flexDirection: "row-reverse", }}>
                  <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "center", position: "absolute", left: "13%", top: 3 }}>5</Text>
                  <RadioButton value="5" />
                </View>
                <View style={{ width: "100%", height: 50, flexDirection: "row-reverse", }}>
                  <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "center", position: "absolute", left: "13%", top: 3 }}>6</Text>
                  <RadioButton value="6" />
                </View>
              </RadioButton.Group>

            </Modal>
          </Portal>
          </View>


        </View>

        <TouchableOpacity  style={{backgroundColor:Colors.black3 ,marginHorizontal: 20, flexDirection: "row", padding: 7, width: "90%", height: 50, justifyContent: "space-between", alignItems: "center", marginTop: "5%", borderRadius: 10 }}>
        <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />

          <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, textAlign: "center", right: 15 }}>کوپه دربست میخواهم</Text>
        </TouchableOpacity>
      </ScrollView>


      <Btn
        label="جست و جو"
        style={{ width: "100%",marginBottom:10, marginTop: "5%", }}


        onPress={() => props.navigation.navigate("listtrain")}
      />

      {/* <View style={{ width: "100%", height: "100%", backgroundColor: Colors.black0, marginTop: "5%" }}>

        <View style={{ flexDirection: "row-reverse", width: "100%", height: 50, justifyContent: "space-between", alignItems: "center" }}>

          <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, left: 15 }}>جست و جو های اخیر (4)</Text>
          <TouchableOpacity>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.primary, left: 10 }}>پاک کردن</Text>
          </TouchableOpacity>

        </View>

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
          <View
            style={{
              width: 100,
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Colors.black3,
              borderRadius: 10,
              marginTop: 50,
              marginRight: 10,

              flexDirection: "column"

            }}
          >
            <View style={{ width: 50, height: 50, backgroundColor: Colors.black2, borderRadius: 50, bottom: 15 }}>
              <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>

            </View>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, bottom: 15 }}>مشهد - اصفهان</Text>
            <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, bottom: 15 }}>17 اردیبهشت </Text>

          </View>

          <View
            style={{
              width: 100,
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Colors.black3,
              borderRadius: 10,
              marginTop: 50,
              marginRight: 10,
              flexDirection: "column"

            }}
          >
            <View style={{ width: 50, height: 50, backgroundColor: Colors.black2, borderRadius: 50, bottom: 15 }}>
              <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>

            </View>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, bottom: 15 }}>مشهد - تهران</Text>
            <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, bottom: 15 }}>17 اردیبهشت </Text>

          </View>

          <View
            style={{
              width: 100,
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Colors.black3,
              borderRadius: 10,
              marginTop: 50,
              marginRight: 10,
              flexDirection: "column"

            }}
          >
            <View style={{ width: 50, height: 50, backgroundColor: Colors.black2, borderRadius: 50, bottom: 15 }}>
              <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>

            </View>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, bottom: 15 }}>مشهد - تهران</Text>
            <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, bottom: 15 }}>17 اردیبهشت </Text>

          </View>
          <View
            style={{
              width: 100,
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Colors.black3,
              borderRadius: 10,
              marginTop: 50,
              marginRight: 10,
              flexDirection: "column"

            }}
          >
            <View style={{ width: 50, height: 50, backgroundColor: Colors.black2, borderRadius: 50, bottom: 15 }}>
              <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>

            </View>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, bottom: 15 }}>مشهد - تهران</Text>
            <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, bottom: 15 }}>17 اردیبهشت </Text>

          </View>
          <View
            style={{
              width: 100,
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Colors.black3,
              borderRadius: 10,
              marginTop: 50,
              marginRight: 10,
              flexDirection: "column"

            }}
          >
            <View style={{ width: 50, height: 50, backgroundColor: Colors.black2, borderRadius: 50, bottom: 15 }}>
              <Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 50 }}></Image>

            </View>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, bottom: 15 }}>مشهد - تهران</Text>
            <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, bottom: 15 }}>17 اردیبهشت </Text>

          </View>
        </ScrollView>










      </View> */}

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




export default TicketTrain

