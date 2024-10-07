import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, I18nManager, TouchableOpacity, Linking, TextInput, ScrollView, Image, FlatList, } from 'react-native';
import HeaderBar from '../../components/headerbar';
import Btn from "../../components/btn"
import Colors from '../../constants/Colors';
import Searchitem from '../../components/searchitem';
import { Checkbox, Modal, Portal } from 'react-native-paper';
import FooterPage from '../../components/footerpage';










const Paymenting = (props) => {

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
        namepage="لیست تراکنش ها"
        icon={"chevron-forward"}
      />



<View style={{ width: "100%",height:150,  backgroundColor: Colors.black2,justifyContent:"center",alignItems:"center",marginTop:10}}>

<View style={{width:"90%",height:80,backgroundColor:Colors.black4,flexDirection:"row-reverse",borderRadius:10,marginTop:10,justifyContent:"space-between",alignItems:"center",paddingHorizontal:20}}>
<Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>انتخاب وسیله نقلیه</Text>
<TouchableOpacity style={{width:"50%",height:30,flexDirection:"row-reverse",backgroundColor:Colors.black2,paddingHorizontal:10,borderRadius:5,justifyContent:"space-between",alignItems:"center"}}>
<Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background, }}>همه وسیله نقلیه ها</Text>
<MaterialCommunityIcons name="chevron-down" size={25} color={Colors.background} />
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
    <TouchableOpacity
        style={{
            width: 70,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.success,
            borderRadius:20,
            marginRight: 10,

            flexDirection: "column"

        }}
    >
        
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>همه</Text>
       

    </TouchableOpacity>
    <TouchableOpacity
        style={{
            width: 70,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.secondText3,
            borderRadius:20,
            marginRight: 10,

            flexDirection: "column"

        }}
    >
        
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>خلافی</Text>
       

    </TouchableOpacity>

    <TouchableOpacity
        style={{
            alignSelf:"auto",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.secondText3,
            borderRadius:20,
            marginRight: 10,
            paddingHorizontal:10,
            flexDirection: "column"

        }}
    >
      
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>عوارض آزادراهی</Text>
       

    </TouchableOpacity>
    <TouchableOpacity
        style={{
            alignSelf:"auto",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.secondText3,
            borderRadius:20,
            marginRight: 10,
            paddingHorizontal:10,
            flexDirection: "column"

        }}
    >
      
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>طرح ترافیک</Text>
       

    </TouchableOpacity>
    <TouchableOpacity
        style={{
            alignSelf:"auto",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.secondText3,
            borderRadius:20,
            marginRight: 10,
            paddingHorizontal:10,
            flexDirection: "column"

        }}
    >
      
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>عوارض آزادراهی</Text>
       

    </TouchableOpacity>
    <TouchableOpacity
        style={{
            alignSelf:"auto",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.secondText3,
            borderRadius:20,
            marginRight: 10,
            paddingHorizontal:10,
            flexDirection: "column"

        }}
    >
      
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>طرح ترافیک</Text>
       

    </TouchableOpacity>
    
   
</ScrollView>










</View>
      <ScrollView style={{ width: "100%",padding:5 }}  contentContainerStyle={{ alignItems: "center", }} > 

      <View style={{ flexDirection: "column", width: "95%", alignSelf:"auto", backgroundColor: Colors.black2, marginTop: 15, borderRadius: 10, alignItems: "center", justifyContent: "space-around" }}>


<View style={{ borderRadius: 10, width: "95%", height: 60, backgroundColor: Colors.black2, flexDirection: "row", justifyContent: "flex-start", alignItems: "center", }}>
    <View style={{ width: "8%", height: 50, backgroundColor: Colors.blue, flexDirection: "column", borderTopLeftRadius: 5, borderBottomLeftRadius: 5, justifyContent: "center", alignItems: "center", }}>
        <Image source={require("../../../assets/image/AsanPardakht.png")} alt="image" style={{ width: "50%", height: "50%", }}></Image>
    </View>

    <View style={{ width: "30%", height: 50, flexDirection: "row", backgroundColor: Colors.black0, marginRight: 2, justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20 }}>
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>12</Text>
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>ل</Text>
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>365</Text>
    </View>

    <View style={{ width: "8%", height: 50, backgroundColor: Colors.black0, flexDirection: "column", borderTopRightRadius: 5, borderBottomRightRadius: 5, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontFamily: "MontserratBold", fontSize: 15, color: Colors.background }}>12</Text>
        <Text style={{ fontFamily: "Montserrat", fontSize: 10, color: Colors.background }}>ایران</Text>
    </View>

    <Text style={{ fontFamily: "Montserrat", fontSize: 15, color: Colors.background, left: 100 }}>کوییک</Text>

</View>

<Text style={{ fontFamily: "MontserratBold", fontSize: 18, color: Colors.background,textAlign:"center",marginBottom:10 }}>خلافی خودرو</Text>

<View style={{ width: "95%", height: 60, flexDirection: "row-reverse", alignItems: "center", backgroundColor: Colors.black3, borderRadius: 10 }}>
<View style={{width:"40%",height:60,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
<Text style={{ fontFamily: 'MontserratBold', color: Colors.background, fontSize: 13,  }}>مجموع پرداختی</Text>
    <Text style={{ fontFamily: 'MontserratBold', color: Colors.background, fontSize: 13, }}>700،000 ریال</Text>

</View>
    
<View style={{width:"60%",height:60,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
<Text style={{ fontFamily: 'MontserratBold', color: Colors.background, fontSize: 13, }}>تاریخ پرداخت</Text>
    <Text style={{ fontFamily: 'MontserratBold', color: Colors.background, fontSize: 13,  }}>17:33  |  1403/04/12</Text>

</View>
</View>


<View style={{ marginTop:10,marginBottom:10,width: "95%", height: 60, flexDirection: "row-reverse", alignItems: "center", backgroundColor: Colors.black3, borderRadius: 10 }}>

    <Text style={{ fontFamily: 'MontserratBold', color: Colors.background, fontSize: 13, marginRight: 25, marginLeft: "30%" }}>شناسه پرداخت</Text>
    <Text style={{ fontFamily: 'MontserratBold', color: Colors.background, fontSize: 13, marginRight: 25, marginLeft: "30%" }}>054659878998</Text>

</View>
</View>

       
      



      </ScrollView>


      <FooterPage
paymenting

                iconnameR={"home"}
                nameR="خانه"
                onPressR={()=>props.navigation.navigate("carservice")}

                name="تراکنش ها"
                iconname={"wallet"}
                

                nameL="سوالات متداول"
                iconnameL={"help-circle-outline"}
                onPressL={()=>props.navigation.navigate("question_car")}
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




export default Paymenting

