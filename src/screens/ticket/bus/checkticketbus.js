import { Feather, FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, SafeAreaView, } from 'react-native';
import HeaderBar from '../../../components/headerbar';
import Btn from "../../../components/btn"
import Colors from '../../../constants/Colors';
import Searchitem from '../../../components/searchitem';
import { List } from 'react-native-paper';









const CheckTicketBus = (props) => {

  const [expanded, setExpanded] =useState(true);

  const handlePress = () => setExpanded(!expanded);


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
        namepage="تهران به مشهد"
        icon={"chevron-forward"}
      />
      <ScrollView style={{ width: "100%",padding:5  }}>

        <SafeAreaView style={{ width: "100%", height: 250, flexDirection: "row-reverse",borderRadius:10 ,backgroundColor: Colors.black4,}}>
         
         
         
          <View style={{ width: "10%", height: 250, flexDirection: "column", justifyContent:"center",alignItems:"center" }}>
            <MaterialCommunityIcons name="bus" size={25} color={Colors.background} />
           <View style={{height:170,borderWidth:1,borderColor:Colors.background,borderStyle: 'dashed',margin:5}}></View>
            <MaterialCommunityIcons name="map-marker" size={25} color={Colors.background} />
          </View>




          <View style={{ flexDirection: "column", width: "100%", height: 250, justifyContent: "flex-start", alignItems: "center" }}>


            <View style={{ width: "100%", height: "10%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10 }}>
              <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>تهران پایانه جنوب</Text>
            </View>


            <View style={{ width: "100%", height: "13%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10 }}>
              <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>23:30</Text>
              <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background, }}>  / دوشنبه17 اردیبهشت 1403</Text>
            </View>



            <Searchitem
              styleview={{ backgroundColor: Colors.black4, }}
              city="تعاونی 17 صبا پیک"
              ostan="اسکانیا 29 نفره کلاسیک"
              image={require("../../../../assets/image/AsanPardakht.png")}
              nounderline

            />


            <View style={{ width: "100%", height: "13%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10 }}>
              <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, }}>نوع اتوبوس : </Text>
              <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>تک صندلی 29 نفره شارژردار</Text>
            </View>


            <View style={{ width: "100%", height: "13%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10 }}>
              <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, }}>قیمت : </Text>
              <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>هر نفر 1،550،000 ریال</Text>
            </View>


            <View style={{ width: "100%", height: "13%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10 }}>
              <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>اصفهان همه پایانه ها</Text>
            </View>


            <View style={{ width: "100%", height: "11%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10 }}>
              <Text style={{ fontFamily: "Montserrat", fontSize: 11, color: Colors.background, }}> مقصد نهایی : </Text>
              <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, }}>اصفهان</Text>
            </View>

            {/* <View style={{ width: "90%", height: 100, borderWidth: 1, borderColor: Colors.secondText3, borderRadius: 10, marginTop: 10 }}>


              <View style={{ width: "100%", height: "30%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, }}>تهران پایانه بیهقی</Text>
                
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






            </View> */}

            <View style={{ width: "100%", height: "25%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }}>
              <Text style={{ fontFamily: "Montserrat", fontSize: 13, color: Colors.background, marginRight: 20 }}>19 صندلی موجود</Text>

              <Text style={{ fontFamily: "MontserratBold", fontSize: 13, color: Colors.background, marginLeft: 20 }}>هر نفر 1،970،000 ریال</Text>
            </View>

          </View>
        </SafeAreaView>

        <View style={{ flexDirection: "column", width: "100%", height: 200, justifyContent: "flex-start", alignItems: "center", backgroundColor: Colors.black4,marginTop:5,borderRadius:10  }}>
        <View style={{ width: "100%", height: "15%", flexDirection: "row-reverse", alignItems: "center", justifyContent: "flex-start", right: 10 }}>
             
              <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background,marginLeft:"25%" }}>نمای صندلی</Text>
              <Octicons name="dot" size={25} color={Colors.background} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background,marginLeft:"25%"  }}>  خالی</Text>
              <Octicons name="dot-fill" size={25} color={Colors.background} />
              <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>  پر</Text>
            </View>

           
            <View style={{padding:10,width:"85%",height:140,borderWidth:1,borderColor:Colors.background,borderRadius:5,marginTop:20,flexDirection:"row-reverse"}}>

<View style={{width:"7%",height:"100%",backgroundColor:Colors.black,flexDirection:"column",alignItems:"center"}}>
<Octicons name="dot-fill" size={25} color={Colors.background}   />
<Octicons name="dot" size={25} color={Colors.background} />
<Octicons name="dot-fill" size={25} color={Colors.background} style={{marginTop:15}}  />
<Octicons name="dot" size={25} color={Colors.background} />

</View>

<View style={{width:"7%",height:"100%",backgroundColor:Colors.black,flexDirection:"column",alignItems:"center"}}>
<Octicons name="dot-fill" size={25} color={Colors.background}   />
<Octicons name="dot" size={25} color={Colors.background} />
<Octicons name="dot-fill" size={25} color={Colors.background} style={{marginTop:15}}  />
<Octicons name="dot" size={25} color={Colors.background}/>

</View>
<View style={{width:"7%",height:"100%",backgroundColor:Colors.black,flexDirection:"column",alignItems:"center"}}>
<Octicons name="dot-fill" size={25} color={Colors.background}   />
<Octicons name="dot" size={25} color={Colors.background} />
<Octicons name="dot-fill" size={25} color={Colors.background} style={{marginTop:15}}  />
<Octicons name="dot" size={25} color={Colors.background} />

</View>
<View style={{width:"7%",height:"100%",backgroundColor:Colors.black,flexDirection:"column",alignItems:"center"}}>
<Octicons name="dot-fill" size={25} color={Colors.background}   />
<Octicons name="dot" size={25} color={Colors.background} />
<Octicons name="dot-fill" size={25} color={Colors.background} style={{marginTop:15}}  />
<Octicons name="dot" size={25} color={Colors.background} />

</View>
<View style={{width:"7%",height:"100%",backgroundColor:Colors.black,flexDirection:"column",alignItems:"center"}}>
<Octicons name="dot-fill" size={25} color={Colors.background}   />
<Octicons name="dot" size={25} color={Colors.background} />
<Octicons name="dot-fill" size={25} color={Colors.background} style={{marginTop:15}}  />
<Octicons name="dot" size={25} color={Colors.background} />

</View>




<View style={{width:"7%",height:"100%",backgroundColor:Colors.black,flexDirection:"column",alignItems:"center"}}>


<Octicons name="dot-fill" size={25} color={Colors.background} style={{marginTop:67}}  />
<Octicons name="dot" size={25} color={Colors.background} />

</View>
<View style={{width:"7%",height:"100%",backgroundColor:Colors.black,flexDirection:"column",alignItems:"center"}}>

<Octicons name="dot-fill" size={25} color={Colors.background} style={{marginTop:67}}  />
<Octicons name="dot" size={25} color={Colors.background} />

</View>





<View style={{width:"7%",height:"100%",backgroundColor:Colors.black,flexDirection:"column",alignItems:"center"}}>
<Octicons name="dot-fill" size={25} color={Colors.background}   />
<Octicons name="dot" size={25} color={Colors.background} />
<Octicons name="dot-fill" size={25} color={Colors.background} style={{marginTop:15}}  />
<Octicons name="dot" size={25} color={Colors.background} />

</View>

<View style={{width:"7%",height:"100%",backgroundColor:Colors.black,flexDirection:"column",alignItems:"center"}}>
<Octicons name="dot-fill" size={25} color={Colors.background}   />
<Octicons name="dot" size={25} color={Colors.background} />
<Octicons name="dot-fill" size={25} color={Colors.background} style={{marginTop:15}}  />
<Octicons name="dot" size={25} color={Colors.background} />

</View>
<View style={{width:"7%",height:"100%",backgroundColor:Colors.black,flexDirection:"column",alignItems:"center"}}>
<Octicons name="dot-fill" size={25} color={Colors.background}   />
<Octicons name="dot" size={25} color={Colors.background} />
<Octicons name="dot-fill" size={25} color={Colors.background} style={{marginTop:15}}  />
<Octicons name="dot" size={25} color={Colors.background} />

</View>
<View style={{width:"7%",height:"100%",backgroundColor:Colors.black,flexDirection:"column",alignItems:"center"}}>
<Octicons name="dot-fill" size={25} color={Colors.background}   />
<Octicons name="dot" size={25} color={Colors.background} />
<Octicons name="dot-fill" size={25} color={Colors.background} style={{marginTop:15}}  />
<Octicons name="dot" size={25} color={Colors.background} />

</View>
<View style={{width:"7%",height:"100%",backgroundColor:Colors.black,flexDirection:"column",alignItems:"center"}}>
<Octicons name="dot-fill" size={25} color={Colors.background}   />
<Octicons name="dot" size={25} color={Colors.background} />
<Octicons name="dot-fill" size={25} color={Colors.background} style={{marginTop:15}}  />
<Octicons name="dot" size={25} color={Colors.background} />

</View>



<View style={{width:"1%",height:"100%",backgroundColor:Colors.background,flexDirection:"column",marginRight:10}}>
</View>




<View style={{width:"15%",height:"100%",flexDirection:"column"}}>
<Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "25%"}}></Image>
<Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "25%"  }}></Image>
<Image source={require("../../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "100%", height: "25%",marginTop:20 }}></Image>
</View>



            </View>


            

        </View>


        <List.Section  >
      <List.Accordion
      
      style={{backgroundColor:Colors.black4,}}
      rippleColor={Colors.primary}
        title="قوانین جریمه و استرداد"
        titleStyle={{fontFamily:"MontserratBold",color:Colors.background}}
       >
        
        <View style={{backgroundColor:"red",width:"100%",alignSelf:"auto"}}>
          <View style={{width:"100%",height:50,backgroundColor:Colors.black4,justifyContent:"center",alignItems:"center"}}>
          <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background,textAlign:"right" }}>تا یک ساعت بعد از خرید ،مشروط به دو ساعت مانده تا حرکت،بدون جریمه کل مبلغ پرداختی باز می گردد.</Text>
          </View>


          <View style={{flexDirection:"row-reverse",width:"100%",height:50,backgroundColor:Colors.black4,justifyContent:"center",alignItems:"center"}}>
          <View style={{width:30,height:30,borderRadius:30,backgroundColor:"gray",marginRight:"20%",justifyContent:"center",alignItems:"center"}}>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 14, color: Colors.primary, }}>%10</Text>
          </View>
          <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background,textAlign:"right",marginLeft:"15%",marginRight:"3%" }}>بلیط هایی که بیش از یک ساعت به زمان حرکت سرویس آنها باقی مانده است،10 درصد پول بلیط به عنوان جریمه کسر میگردد.</Text>
          </View>
          
          <View style={{flexDirection:"row-reverse",width:"100%",height:50,backgroundColor:Colors.black4,justifyContent:"center",alignItems:"center"}}>
          <View style={{width:30,height:30,borderRadius:30,backgroundColor:"gray",marginRight:"20%",justifyContent:"center",alignItems:"center"}}>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 14, color: Colors.primary, }}>%50</Text>
          </View>
          <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background,textAlign:"right",marginLeft:"15%",marginRight:"3%" }}>بلیط هایی که کمتر از یک ساعت به زمان حرکت سرویس آنها باقی مانده است،50 درصد پول بلیط به عنوان جریمه کسر میگردد.</Text>
          </View>

          <View style={{flexDirection:"row-reverse",width:"100%",height:50,backgroundColor:Colors.black4,justifyContent:"center",alignItems:"center"}}>
          <View style={{width:30,height:30,borderRadius:30,backgroundColor:"gray",marginRight:"20%",justifyContent:"center",alignItems:"center"}}>
          <Text style={{ fontFamily: "MontserratBold", fontSize: 14, color: Colors.primary, }}>%50</Text>
          </View>
          <Text style={{ fontFamily: "Montserrat", fontSize: 12, color: Colors.background,textAlign:"right",marginLeft:"15%",marginRight:"3%" }}>بلیط هایی که زمان حرکت آنهاسپری شده است،50 درصد هزینه ی کنسلی می باشد.</Text>
          </View>
</View>


       
        
      </List.Accordion>

    </List.Section>
    
      </ScrollView>

      <Btn
        label="انتخاب بلیط"
        style={{ width: "100%",  }}


        onPress={ () => props.navigation.navigate("selectticketbus")}
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




export default CheckTicketBus

