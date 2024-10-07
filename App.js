import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import {  I18nManager, StyleSheet,  } from 'react-native';
import MainNavigate from './src/navigation/mainnavigate';



import Colors from './src/constants/Colors';
import { PaperProvider } from 'react-native-paper';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);




export default function App() {












  
  const [loaded] = useFonts({
    Montserrat: require('./assets/font/IRANSansMobile.ttf'),
    Montserrat1: require('./assets/font/IRANSansMobile1.ttf'),
    MontserratBold: require('./assets/font/IRANSansMobileBold.ttf'),
    MontserratBold1: require('./assets/font/IRANSansMobileBold1.ttf'),
    MontserratLight: require('./assets/font/IRANSansMobileLight.ttf'),
  });
  if (!loaded) {
    return null;
  }





  return (

    //  <Provider
    //   // store = { store }
    //    >
    <PaperProvider>
    <NavigationContainer
    // linking={linking}
    >
      <StatusBar
        style="light"

        backgroundColor={Colors.black2} />

      <MainNavigate />
  {/* </Provider >  */}

    </NavigationContainer>
    </PaperProvider>

  



  )



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
