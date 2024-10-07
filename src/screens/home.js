import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Linking, ActivityIndicator, Alert, BackHandler, ScrollView, StatusBar, StyleSheet, TouchableHighlight, TouchableOpacity, Animated, Platform, DevSettings, TextInput, View, Text, Modal, Image, Switch, Pressable } from 'react-native'

import Colors from '../constants/Colors';

import { MaterialCommunityIcons, Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import HeaderBar from '../components/headerbar';
import Btn from '../components/btn';
import Footer from '../components/footer';
import Swiper from 'react-native-swiper';
import MyDrawer from '../components/drawer';








function Home(props) {

  const scrollRef = useRef();

  const scrollToEnd = () => scrollRef.current.scrollToEnd({ animated: false });

  const [modalVisible, setModalVisible] = useState(false);
  const [paymentWay, setpaymentWay] = useState(false);

  const toggleSwitch = () => {
    setpaymentWay(previousState => !previousState)
  };


  return (


    <View style={{
      width: "100%",
      alignItems: 'center',
      height: "100%",
      backgroundColor: Colors.black3,

    }}>


      <HeaderBar
        back
        onPressright={() => setModalVisible(true)}

        icon={"menu"}
      />



      <ScrollView style={{
        width: "100%",
        marginBottom: 110
      }}>



        <Modal
          style={{ position: "relative" }}
          animationType="slide"
          transparent={true}

          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>

          <View style={{ width: "75%", height: "100%", position: "absolute", right: 0, backgroundColor: "#222222", padding: 10, alignItems: "center" }}>
            <ScrollView>
              <TouchableOpacity style={{ width: "10%", height: 30, position: "absolute", left: 0, top: 0, }}>
                <Ionicons onPress={() => { setModalVisible(!modalVisible) }} name="close-circle" size={25} color={Colors.background} />
              </TouchableOpacity>

              <View style={{ width: 250, height: 200, backgroundColor: Colors.black2, borderRadius: 10, marginTop: 40, alignItems: "flex-end", padding: 10 }}>
                <TouchableOpacity style={{
                  borderRadius: 100,
                  backgroundColor: Colors.background,
                  height: 100,
                  width: 100,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  borderWidth: 0,
                  borderColor: Colors.background,
                  padding: 0,
                }}>

                  <Image style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 100,
                  }} source={require("../../assets/image/AsanPardakht.png")} alt="image" />
                  {/* ) : (
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 10,
                                        fontFamily: 'Montserrat'
                                    }}>تصویر شما</Text>
                                )} */}
                </TouchableOpacity>



                <Text style={{
                  fontFamily: 'MontserratBold',
                  fontSize: 15,
                  color: Colors.background,
                  marginTop: 10,
                  position: "absolute",
                  left: "7%",
                  top: 10
                }}>شماره موبایل</Text>
                <Text style={{
                  fontFamily: 'Montserrat',
                  fontSize: 15,
                  color: Colors.background,
                  marginTop: 10,
                  position: "absolute",
                  left: "7%",
                  top: 40
                }}>09154143630</Text>


                <Text style={{
                  fontFamily: 'MontserratBold',
                  fontSize: 15,
                  color: Colors.background,
                  marginTop: 10,
                  position: "absolute",
                  left: "7%",
                  top: 115
                }}>امتیاز شما</Text>
                <Text style={{
                  fontFamily: 'MontserratBold',
                  fontSize: 15,
                  color: Colors.yellowdark,
                  marginTop: 10,
                  position: "absolute",
                  left: "15%",
                  top: 145
                }}>325</Text>



                <Text style={{
                  fontFamily: 'MontserratBold',
                  fontSize: 13,
                  position: "absolute",
                  right: "5%",
                  bottom: 50,
                  color: Colors.background,
                }}>مصطفی رجبی مقدم</Text>



              </View>

              <TouchableOpacity style={{ width: "auto", height: 30, flexDirection: "row-reverse", alignItems: "center", marginTop: 10 }}>
                <MaterialCommunityIcons name="truck-delivery-outline" size={30} color={Colors.primary} style={{ marginRight: 15 }} />
                <Text style={{ fontFamily: 'Montserrat', color: Colors.background, fontSize: 13, marginRight: 25 }}>وضعیت سرویس دهی</Text>


                <Switch

                  trackColor={{ false: Colors.secondText, true: Colors.primary }}
                  thumbColor={paymentWay ? Colors.primary : Colors.secondText3}

                  ios_backgroundColor="white"
                  onValueChange={toggleSwitch}
                  value={paymentWay}
                />


              </TouchableOpacity>
              <View style={{ width: "100%", height: 2, backgroundColor: Colors.secondText, left: "15%", marginTop: 10, marginBottom: 10 }}></View>



              <TouchableOpacity
                style={{ width: "auto", height: 30, flexDirection: "row-reverse", alignItems: "center", }}>
                <MaterialCommunityIcons name="account-box-outline" size={30} color={Colors.primary} style={{ marginRight: 15 }} />
                <Text style={{ fontFamily: 'Montserrat', color: Colors.background, fontSize: 13, marginRight: 25 }}>مشخصات شما</Text>
              </TouchableOpacity>
              <View style={{ width: "100%", height: 2, backgroundColor: Colors.secondText, left: "15%", marginTop: 10, marginBottom: 10 }}></View>


              <TouchableOpacity

                style={{ width: "auto", height: 30, flexDirection: "row-reverse", alignItems: "center", }}>
                <MaterialCommunityIcons name="finance" size={30} color={Colors.primary} style={{ marginRight: 15 }} />
                <Text style={{ fontFamily: 'Montserrat', color: Colors.background, fontSize: 13, marginRight: 25 }}>گزارشات</Text>
              </TouchableOpacity>

              <View style={{ width: "100%", height: 2, backgroundColor: Colors.secondText, left: "15%", marginTop: 10, marginBottom: 10 }}></View>
              <TouchableOpacity

                style={{ width: "auto", height: 30, flexDirection: "row-reverse", alignItems: "center", }}>
                <MaterialCommunityIcons name="clipboard-text-outline" size={30} color={Colors.primary} style={{ marginRight: 15 }} />
                <Text style={{ fontFamily: 'Montserrat', color: Colors.background, fontSize: 13, marginRight: 25 }}>لیست سفارشات</Text>
              </TouchableOpacity>
              <View style={{ width: "100%", height: 2, backgroundColor: Colors.secondText, left: "15%", marginTop: 10, marginBottom: 10 }}></View>


              <TouchableOpacity style={{ width: "auto", height: 30, flexDirection: "row-reverse", alignItems: "center", }}>
                <MaterialCommunityIcons name="information-variant" size={30} color={Colors.primary} style={{ marginRight: 15 }} />
                <Text style={{ fontFamily: 'Montserrat', color: Colors.background, fontSize: 13, marginRight: 25 }}>درباره ما</Text>
              </TouchableOpacity>
              <View style={{ width: "100%", height: 2, backgroundColor: Colors.secondText, left: "15%", marginTop: 10, marginBottom: 10 }}></View>


              <TouchableOpacity style={{ width: "auto", height: 30, flexDirection: "row-reverse", alignItems: "center", }}>
                <MaterialCommunityIcons name="book-sync-outline" size={30} color={Colors.primary} style={{ marginRight: 15 }} />
                <Text style={{ fontFamily: 'Montserrat', color: Colors.background, fontSize: 13, marginRight: 25 }}>راهنما</Text>
              </TouchableOpacity>
              <View style={{ width: "100%", height: 2, backgroundColor: Colors.secondText, left: "15%", marginTop: 10, marginBottom: 10 }}></View>

              <TouchableOpacity onPress={async () => {
                Alert.alert('اعلان', 'خارج می شوید ؟', [
                  {
                    text: 'خیر',
                    onPress: () => null,
                    style: 'cancel',
                  },
                  {
                    text: 'بله', onPress: async () => {
                      await LogoutHandler(props.navigation);
                    }
                  },
                ]);
              }}
                style={{ width: "auto", height: 30, flexDirection: "row-reverse", alignItems: "center", }}>

                <MaterialCommunityIcons name="logout" size={30} color={Colors.primary} style={{ marginRight: 15 }} />
                <Text style={{ fontFamily: 'Montserrat', color: Colors.background, fontSize: 13, marginRight: 25 }}>خروج از حساب کاربری</Text>
              </TouchableOpacity>

              <View style={{ width: "100%", height: 2, backgroundColor: Colors.secondText, left: "15%", marginTop: 10, marginBottom: 10 }}></View>




            </ScrollView>
          </View>

        </Modal>









        <TouchableOpacity onPress={() => props.navigation.replace('mywallet')} style={{ flexDirection: "row", padding: 7, width: "90%", height: 50, backgroundColor: Colors.black2, marginTop: "5%", borderRadius: 10, justifyContent: "space-between", marginLeft: "5%" }}>

          <Feather name="chevron-left" size={30} color={Colors.background} />
          <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, textAlign: "center", }}>کیف پول</Text>
          <Feather name="credit-card" size={30} color={Colors.primary} />
        </TouchableOpacity>

        <View style={{ width: "90%", height: 100, backgroundColor: "red", borderRadius: 10, marginTop: 20, marginLeft: "5%" }}>





          <Swiper
            loadMinimal
            loadMinimalSize={50}


            paginationStyle={{
              bottom: 0,
              left: 0
            }}

            autoplay={false}

            loop



            dot={
              <View style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                margin: 5,
                backgroundColor: Colors.secondText
              }} />
            }
            activeDot={
              <View style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                margin: 5,
                backgroundColor: Colors.black0
              }} />
            }
          >





            <TouchableHighlight style={{ flex: 1 }}  >

              <Image
                source={require("../../assets/image/wallet.png")} alt="image"
                style={{ height: 100, width: "100%", borderRadius: 10 }}
              />
            </TouchableHighlight>

            <TouchableHighlight style={{ flex: 1 }}  >

              <Image
                source={require("../../assets/image/wallet.png")} alt="image"
                style={{ height: 100, width: "100%", borderRadius: 10 }}
              />
            </TouchableHighlight>
            <TouchableHighlight style={{ flex: 1 }}  >

              <Image
                source={require("../../assets/image/wallet.png")} alt="image"
                style={{ height: 100, width: "100%", borderRadius: 10 }}
              />
            </TouchableHighlight>



          </Swiper>

        </View>


        <View style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", justifyContent: "flex-end", width: "100%", marginTop: 20 }}>


          <TouchableOpacity
            onPress={() => props.navigation.replace('ticketpage')}

            style={{ marginRight: "1%", width: "32%", height: 110, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
            <Image source={require("../../assets/image/shahrak.jpg")} alt="image" style={{ width: "70%", height: "70%", borderRadius: 10 }} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, padding: "5%" }}>
              خدمات گردشگری
            </Text>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.replace('cardtocard')}
            style={{ marginRight: "1%", width: "32%", height: 110, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
            <Image source={require("../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "70%", height: "70%", borderRadius: 10 }} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, padding: "5%" }}>
              کارت به کارت
            </Text>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.replace('sendtocard')}
            style={{ marginRight: "1%", width: "32%", height: 110, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
            <Image source={require("../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "70%", height: "70%", borderRadius: 10 }} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, padding: "5%" }}>
              موجودی
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.replace('chargetype')}
            style={{ marginRight: "1%", width: "32%", height: 110, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
            <Image source={require("../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "70%", height: "70%", borderRadius: 10 }} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, padding: "5%" }}>
              خرید شارژ
            </Text>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.replace('carservice')}
            style={{ marginRight: "1%", width: "32%", height: 110, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
            <Image source={require("../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "70%", height: "70%", borderRadius: 10 }} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, padding: "5%" }}>
              خدمات خودرو
            </Text>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.replace('nettype')}
            style={{ marginRight: "1%", width: "32%", height: 110, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
            <Image source={require("../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "70%", height: "70%", borderRadius: 10 }} />
            <Text style={{ fontFamily: "MontserratBold", fontSize: 12, color: Colors.background, padding: "5%" }}>
              اینترنت
            </Text>

          </TouchableOpacity>








        </View>


        <View style={{ width: "90%", height: 100, backgroundColor: "red", borderRadius: 10, marginTop: 20, marginLeft: "5%", marginBottom: 10 }}>





          <Swiper
            loadMinimal
            loadMinimalSize={50}


            paginationStyle={{
              bottom: 0,
              left: 0
            }}

            autoplay={false}

            loop



            dot={
              <View style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                margin: 5,
                backgroundColor: Colors.secondText
              }} />
            }
            activeDot={
              <View style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                margin: 5,
                backgroundColor: Colors.black0
              }} />
            }
          >





            <TouchableHighlight style={{ flex: 1 }}  >

              <Image
                source={require("../../assets/image/wallet.png")} alt="image"
                style={{ height: 100, width: "100%", borderRadius: 10 }}
              />
            </TouchableHighlight>

            <TouchableHighlight style={{ flex: 1 }}  >

              <Image
                source={require("../../assets/image/wallet.png")} alt="image"
                style={{ height: 100, width: "100%", borderRadius: 10 }}
              />
            </TouchableHighlight>
            <TouchableHighlight style={{ flex: 1 }}  >

              <Image
                source={require("../../assets/image/wallet.png")} alt="image"
                style={{ height: 100, width: "100%", borderRadius: 10 }}
              />
            </TouchableHighlight>



          </Swiper>

        </View>



        <View style={{ width: "100%", height: "100%", marginTop: "5%" }}>

          <View style={{ flexDirection: "row-reverse", width: "100%", height: 50, justifyContent: "space-between", alignItems: "center" }}>

            <Text style={{ fontFamily: "MontserratBold", fontSize: 18, color: Colors.background, left: 15 }}>دسته بندی ها</Text>
            <TouchableOpacity>
              <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.primary, left: 10 }}>مشاهده همه</Text>
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
                width: 180,
                height: 100,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.black3,
                borderRadius: 10,
                marginLeft: 10



              }}
            >
              <View style={{ width: 180, height: 100, backgroundColor: Colors.black2, borderRadius: 10 }}>
                <Image source={require("../../assets/image/wallet.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 10 }}></Image>
              </View>

            </View>
            <View
              style={{
                width: 180,
                height: 100,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.black3,
                borderRadius: 10,
                marginLeft: 10


              }}
            >
              <View style={{ width: 180, height: 100, backgroundColor: Colors.black2, borderRadius: 10 }}>
                <Image source={require("../../assets/image/wallet.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 10 }}></Image>
              </View>

            </View>


            <View
              style={{
                width: 180,
                height: 100,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.black3,
                borderRadius: 10,
                marginLeft: 10


              }}
            >
              <View style={{ width: 180, height: 100, backgroundColor: Colors.black2, borderRadius: 10 }}>
                <Image source={require("../../assets/image/wallet.png")} alt="image" style={{ width: "100%", height: "100%", borderRadius: 10 }}></Image>
              </View>

            </View>
          </ScrollView>










        </View>
      </ScrollView>


      <Footer


        Home

      />

    </View>







  )




};
const styles = StyleSheet.create({

  viewHeader: {
    flexDirection: "row",
    width: "100%",
    height: Platform.OS == "web" ? 60 : 80,
    backgroundColor: Colors.primary,
  },
  viewfooter: {
    flexDirection: "row",
    width: Platform.OS == "web" ? "400px" : "100%",
    height: 60,
    backgroundColor: Colors.primary,
    position: Platform.OS === "web" ? "fixed" : "absolute",
    bottom: 0


  },
  menu0: {
    backgroundColor: Colors.primary,
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 15,
    top: Platform.OS == "web" ? "15%" : "39%",
  },
  menu1: {
    backgroundColor: Colors.primary,
    width: 60,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 15,
    top: Platform.OS == "web" ? "15%" : "39%",
  },
  menu: {
    backgroundColor: Colors.primary,
    width: 95,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: "55%",
    top: Platform.OS == "web" ? "0%" : "28%",
  },
  menu2: {
    backgroundColor: Colors.primary,
    width: 90,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: "25%",
    top: Platform.OS == "web" ? "0%" : "28%"
  },
  textheader: {
    backgroundColor: Colors.primary,
    width: 130,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute", left: 3,
    top: "25%"
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  }

})


export default Home;







