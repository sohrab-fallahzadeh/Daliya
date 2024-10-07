import React, { useEffect, useState } from 'react';
import { View, Image, Text, StatusBar, ActivityIndicator, StyleSheet, I18nManager, Button } from 'react-native';
import Colors from '../constants/Colors';








const Splash=(props)=>{


    const [animating, setAnimating] = useState(true);



   useEffect(() => {
  
        setTimeout(() => {
         props.navigation.replace('login')  
  
    }, 3000);

  }, []);
return(
    <View style={styles.viewContainer}>
    <StatusBar backgroundColor={Colors.black}/>
    <Image source={require("../../assets/image/Asan.png")} alt="image" style={styles.image} />
   
    <ActivityIndicator color={Colors.background} size={40} 
    animating={animating} />

  </View>
)
}

const styles=StyleSheet.create({
    viewContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.black,
        alignItems: 'center',
        justifyContent: "center"
      },
      text: {
        color: Colors.primary,
        fontSize: 70,
        fontFamily: "MontserratBold",
        bottom: "6%"
    
      },
      text1: {
        color: Colors.primary,
        fontSize: 70,
        fontFamily: "MontserratBold",
        bottom: "10%"
      },
      image: {
        width: 300,
        height: 300,
    
      }
})

export default Splash