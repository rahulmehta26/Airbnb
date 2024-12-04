import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {

  const {width, height} = useWindowDimensions();

  const navigation = useNavigation();

  const customStyle = {
    width: width * 0.10,
    height: height * 0.05,
    backgroundColor: 'white',
    borderRadius: '50%',
  }

  return (
    <TouchableOpacity
    activeOpacity={0.8} 
    style = { customStyle }
    className = 'flex justify-center items-center'
    onPress={() => navigation.goBack()}
    >

      <ArrowLeftIcon size={18} color='black' strokeWidth={2} />
      
    </TouchableOpacity>
  );
};

export default BackButton;