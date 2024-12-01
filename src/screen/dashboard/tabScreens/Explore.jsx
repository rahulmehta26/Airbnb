import { View, Text } from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import Login from '../../auth/Login';
import Bookings from '../Bookings';
import { useNavigation } from '@react-navigation/native';

const Explore = () => {

  const navigation = useNavigation();

  return (
    <CustomSafeAreaView>

      <Text onPress = {() => navigation.navigate("Login") } >Login</Text>

      <Text onPress = {() => navigation.navigate("Bookings") } >Booking</Text>

      <Text onPress = {(Id) => navigation.navigate("Listings",{id:Id}) } >Listing</Text>

      <Text className = 'text-red-500 font-extrabold text-2xl ' >Explore</Text>
    </CustomSafeAreaView>
  );
};

export default Explore;