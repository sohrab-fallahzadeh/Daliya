import { Entypo, Feather, FontAwesome, MaterialCommunityIcons, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, SafeAreaView, } from 'react-native';
import HeaderBar from '../../../components/headerbar';
import Btn from "../../../components/btn"
import Colors from '../../../constants/Colors';
import { Checkbox, Divider, List, Menu, Modal, Portal } from 'react-native-paper';









const ServiceTrain = (props) => {

    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);
    
    const [visible, setVisible] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
  

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'black', };


    const [mytime, setmyTime] = useState(60);


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
            // marginLeft: isSmallScreen ? 0 : "35%",
            backgroundColor: Colors.black3,


        }}>


            <HeaderBar
                onPressright={() => props.navigation.goBack()}
                text={{ fontSize: 15 }}
                namepage="سرویس مسافران"
                icon={"chevron-forward"}
            />
            <ScrollView style={{ width: "100%", padding: 5 }}>

                <View style={{ width: "100%", height: 80, flexDirection: "column", alignItems: "center", }}>
                    <View style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5, width: "90%", height: 30, backgroundColor: "white", paddingRight: 20, justifyContent: "center" }}>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.black, textAlign: "right", }}>علی اکبر رحیم بخش</Text>
                    </View>



                    <View style={{ justifyContent: "space-between", width: "90%", height: 50, backgroundColor: "gray", flexDirection: "row-reverse", alignItems: "center" }}>
                        <SimpleLineIcons name="cup" size={20} color={Colors.background} style={{ left: 20 }} />
                        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.black, textAlign: "right", right: 50 }}>خدمات</Text>
                        <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.black, textAlign: "center", }}>بدون غذا</Text>
                        <Entypo onPress={showModal} name="chevron-small-down" size={30} color={Colors.background} />
                    </View>

                </View>

              
                <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ position: "absolute", }}>
           
           <ScrollView>

          
         

            
            <View style={{ width: "100%", height: 30, backgroundColor: Colors.secondText3,flexDirection:"row-reverse",justifyContent:"space-between",paddingHorizontal:10 }}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, textAlign: "right", paddingRight: 10 }}>نوع قطار</Text>
              <MaterialCommunityIcons name="chevron-down" size={25} color={Colors.background} />
            </View>

            <View style={{ width: "100%", alignSelf: "auto", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", }}>

              <TouchableOpacity onPress={() => {
                setChecked("1");
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>بدون غذا </Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked=="1" ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked("2");
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>چلو گوشت   (156،000،000)</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked=="2" ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked("3");
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>چلو کباب   (150،000،000)</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked=="3" ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setChecked("4");
              }} style={{ width: "100%", height: 40, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, }}>زرشک پلو با مرغ  (120،000،000)</Text>
                <Checkbox
                  color={Colors.success}
                  uncheckedColor={Colors.background}
                  status={checked=="4" ? 'checked' : 'unchecked'}

                />
              </TouchableOpacity>
             







            </View>

        



            

           


            {/* <View style={{ width: "100%", height: 60, backgroundColor: Colors.black4, justifyContent: "center", alignItems: "center" }}>
            <Btn
              label="اعمال فیلتر"
              style={{ width: "100%", }}
              onPress={() =>hideModal()}
            />
          </View> */}
           
            </ScrollView>
          </Modal>
        </Portal>



            </ScrollView>

            <View style={{width:"100%",height:30,alignItems:"center",justifyContent:"center"}}>
            <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, textAlign: "center", }}>مبلغ (0 ریال) به مبلغ سفر شما اضافه خواهد شد</Text>
            </View>

            <Btn
                label="تایید"
                style={{ width: "100%", marginBottom: 10 }}


           onPress={() => props.navigation.navigate("checkouttrain")}
            />


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




export default ServiceTrain

