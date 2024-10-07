import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, } from 'react-native';
import HeaderBar from '../../../components/headerbar';
import Btn from "../../../components/btn"
import Colors from '../../../constants/Colors';
import { Button, Divider, Menu, Modal, Portal } from 'react-native-paper';
import DatePicker from 'react-native-jalaali-date-picker'









const TicketBus = (props) => {

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const scrollRef = useRef();
  const scrollToEnd = () => scrollRef.current.scrollToEnd({ animated: false });

  const [visible1, setVisible1] = React.useState(false);
  const containerStyle = { backgroundColor: Colors.background, padding: 20 };
  const showModal = () => setVisible1(true);
  const hideModal = () => setVisible1(false);
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
        namepage="بلیط اتوبوس"
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
          visible={visible}
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

      <View style={{ flexDirection: "row-reverse", width: "90%", height: 100, justifyContent: "center", alignItems: "center", marginTop: "5%", backgroundColor: Colors.black2 }}>
        <TouchableOpacity 
        onPress={()=> props.navigation.navigate("searchticket",{
          location:"مبدا"
        })}
        style={{ borderBottomRightRadius: 10, borderTopRightRadius: 10, flexDirection: "column", width: "50%", height: "100%", backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-end", left: 24 }}>
          <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, right: 10 }}>مبدا</Text>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, right: 10 }}>مشهد</Text>
          <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, right: 10 }}>خراسان رضوی</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ zIndex: 2, width: 50, height: 50, backgroundColor: Colors.black3, justifyContent: "center", alignItems: "center", borderRadius: 50 }}>
          <AntDesign name="swap" size={25} color={Colors.background} />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> props.navigation.navigate("searchticket",{
          location:"مقصد"
        })}
        style={{ borderBottomLeftRadius: 10, borderTopLeftRadius: 10, flexDirection: "column", width: "50%", height: "100%", backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-start", right: 24 }}>
          <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, left: 10 }}>مقصد</Text>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, left: 10 }}>تهران</Text>
          <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, left: 10 }}>تهران</Text>
        </TouchableOpacity>



      </View>

      <TouchableOpacity onPress={showModal} style={{ flexDirection: "row", padding: 7, width: "90%", height: 70, backgroundColor: Colors.black, justifyContent: "center", alignItems: "flex-end", marginTop: "10%", borderRadius: 10 }}>

        <View style={{ width: "85%", justifyContent: "center", alignItems: "flex-end", height: 70, flexDirection: "column" }}>
          <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, textAlign: "center", right: 15 }}>تاریخ حرکت</Text>

          <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, textAlign: "center", right: 15 }}>23  شهریور 1403</Text>

        </View>


        <View style={{ width: "15%", justifyContent: "center", alignItems: "flex-end", height: 70, }}>

          <Feather name="calendar" size={30} color={Colors.background} style={{ right: 10 }} />
        </View>


      </TouchableOpacity>
      <Portal>
          <Modal visible={visible1} onDismiss={hideModal} contentContainerStyle={containerStyle}style={{justifyContent:"center",alignItems:"center"}} >
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


    



      <Btn
        label="جست و جو"
        style={{ width: "100%", marginTop: "10%" }}


        onPress={ () => props.navigation.navigate("listbus")}
      />

      <View style={{ width: "100%", height: "100%", backgroundColor: Colors.black0, marginTop: "5%" }}>

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




export default TicketBus

