import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login';
import OTPscreen from '../screens/otp';
// import Register1 from '../screens/register1';
import Home from '../screens/home';
import Splash from '../screens/splashpage';
import Ticketpage from '../screens/ticket/ticketpage';

import SearchTicket from '../screens/ticket/searchticket';

import TicketBus from '../screens/ticket/bus/ticketbus';
import CheckTicketBus from '../screens/ticket/bus/checkticketbus';
import SelectTicketBus from '../screens/ticket/bus/selectticketbus';
import ListBus from '../screens/ticket/bus/listbus';
import AddPassenger from '../screens/ticket/addPassenger';
import GetTicket from '../screens/ticket/getticket';
import TicketTrain from '../screens/ticket/train/tickettrain';
import ListTrain from '../screens/ticket/train/listtrain';
import CheckOutTrain from '../screens/ticket/train/checkouttrain';
import TicketAirPlane from '../screens/ticket/airplane/ticketairplane';
import ListAirPlane from '../screens/ticket/airplane/listairplane';
import CheckTicketAirPlan from '../screens/ticket/airplane/checkticketairplan';
import ServiceTrain from '../screens/ticket/train/servicetrain';
import TicketExternal from '../screens/ticket/airplanexternal/ticketexternal';
import ListExternal from '../screens/ticket/airplanexternal/listexternal';
import CheckTicketExternal from '../screens/ticket/airplanexternal/checkticketexternal';
import CardtoCard from '../screens/cart/cardtocard';
import Addcard from '../screens/cart/addcard';
import SendToCard from '../screens/cart/sendtocard';
import DetailsMyTicket from '../screens/ticket/myticket/detailsmyticket';
import MyTicket from '../screens/ticket/myticket/myticket';
import MyWallet from '../screens/wallet/mywallet';
import TornOver from '../screens/wallet/tornover';
import Increase from '../screens/wallet/increase';
import Harvest from '../screens/wallet/harvest';
import ChangeWallet from '../screens/wallet/changewallet';
import Chargetype from '../screens/chrge/chrgetype';
import NetType from '../screens/internet/nettype';
import InternetList from '../screens/internet/internetlist';
import AdslPage from '../screens/internet/adslpage';
import CarService from '../screens/service_car/carservice';
import Add_Car from '../screens/service_car/add_car';
import FreeWay from '../screens/service_car/freeway';
import Pay_Fine from '../screens/service_car/pay_fine';
import Paymenting from '../screens/service_car/paymenting';
import TrafficPlan from '../screens/service_car/traffic_plan';
import QuestionCar from '../screens/service_car/question_car';
// import Order from '../screens/order';
// import Chat from '../screens/chat';
// import Form from '../screens/form';
// import Searching from '../screens/searching';
// import List from '../screens/list';
// import Service from '../screens/service';
// import Final from '../screens/final';
// import Orderlist from '../screens/orderlist';
// import Profile from '../screens/profile';
// import Register2 from '../screens/register2';
// import Mdfwhite from '../screens/mdfwhite';
// import OrderColor from '../screens/ordercolor';
// import DetailsService from '../screens/detailsService';
// import WEB from '../screens/web';
// import Ticket from '../screens/ticket';
// import ChatTicket from '../screens/chatticket';
// import Wallet from '../screens/wallet';
// import WalletCode from '../screens/walletcode';











const MainNavigate = (props) => {
  const Stack = createNativeStackNavigator();


  return (


    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="otp" component={OTPscreen} options={{ headerShown: false }} />
      <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />


      <Stack.Screen name="ticketpage" component={Ticketpage} options={{ headerShown: false }} />
      <Stack.Screen name="searchticket" component={SearchTicket} options={{ headerShown: false }} />
      <Stack.Screen name="addPassenger" component={AddPassenger} options={{ headerShown: false }} />
      <Stack.Screen name="getticket" component={GetTicket} options={{ headerShown: false }} />


      <Stack.Screen name="myticket" component={MyTicket} options={{ headerShown: false }} />
      <Stack.Screen name="detailsmyticket" component={DetailsMyTicket} options={{ headerShown: false }} />

      <Stack.Screen name="ticketbus" component={TicketBus} options={{ headerShown: false }} />
      <Stack.Screen name="listbus" component={ListBus} options={{ headerShown: false }} />
      <Stack.Screen name="checkticketbus" component={CheckTicketBus} options={{ headerShown: false }} />
      <Stack.Screen name="selectticketbus" component={SelectTicketBus} options={{ headerShown: false }} />


      <Stack.Screen name="tickettrain" component={TicketTrain} options={{ headerShown: false }} />
      <Stack.Screen name="listtrain" component={ListTrain} options={{ headerShown: false }} />
      <Stack.Screen name="checkouttrain" component={CheckOutTrain} options={{ headerShown: false }} />
      <Stack.Screen name="servicetrain" component={ServiceTrain} options={{ headerShown: false }} />
     
     
       <Stack.Screen name="ticketairplane" component={TicketAirPlane} options={{ headerShown: false }} />
       <Stack.Screen name="listairplane" component={ListAirPlane} options={{ headerShown: false }} />
       <Stack.Screen name="checkticketairplan" component={CheckTicketAirPlan} options={{ headerShown: false }} />
     
     
     
       <Stack.Screen name="ticketexternal" component={TicketExternal} options={{ headerShown: false }} />
       <Stack.Screen name="listexternal" component={ListExternal} options={{ headerShown: false }} />
       <Stack.Screen name="checkticketexternal" component={CheckTicketExternal} options={{ headerShown: false }} />


       <Stack.Screen name="cardtocard" component={CardtoCard} options={{ headerShown: false }} />
       <Stack.Screen name="addcard" component={Addcard} options={{ headerShown: false }} />
       <Stack.Screen name="sendtocard" component={SendToCard} options={{ headerShown: false }} />
     
     
       <Stack.Screen name="mywallet" component={MyWallet} options={{ headerShown: false }} />
       <Stack.Screen name="tornover" component={TornOver} options={{ headerShown: false }} />
       <Stack.Screen name="increase" component={Increase} options={{ headerShown: false }} />
       <Stack.Screen name="harvest" component={Harvest} options={{ headerShown: false }} />
       <Stack.Screen name="changewallet" component={ChangeWallet} options={{ headerShown: false }} />
    
    
    
       <Stack.Screen name="chargetype" component={Chargetype} options={{ headerShown: false }} />
    
    
       <Stack.Screen name="nettype" component={NetType} options={{ headerShown: false }} />
       <Stack.Screen name="internetlist" component={InternetList} options={{ headerShown: false }} />
       <Stack.Screen name="adslpage" component={AdslPage} options={{ headerShown: false }} />



       <Stack.Screen name="carservice" component={CarService} options={{ headerShown: false }} />
       <Stack.Screen name="add_car" component={Add_Car} options={{ headerShown: false }} />
       <Stack.Screen name="freeway" component={FreeWay} options={{ headerShown: false }} />
       <Stack.Screen name="pay_fine" component={Pay_Fine} options={{ headerShown: false }} />
       <Stack.Screen name="paymenting" component={Paymenting} options={{ headerShown: false }} />
       <Stack.Screen name="traffic_plan" component={TrafficPlan} options={{ headerShown: false }} />
       <Stack.Screen name="question_car" component={QuestionCar} options={{ headerShown: false }} />
      {/* 
      

     
      
     
    
      
     
      <Stack.Screen name="detailsService" component={DetailsService} options={{ headerShown: false }} />
       <Stack.Screen name="final" component={Final} options={{ headerShown: false }} />
      <Stack.Screen name="orderlist" component={Orderlist} options={{ headerShown: false }} />
      <Stack.Screen name="profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="mdfwhite" component={Mdfwhite} options={{ headerShown: false }} />
      <Stack.Screen name="wallet" component={Wallet} options={{ headerShown: false }} />
      <Stack.Screen name="walletCode" component={WalletCode} options={{ headerShown: false }} /> */}
    </Stack.Navigator>

  );

}
export default MainNavigate