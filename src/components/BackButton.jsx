import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/outline'

const BackButton = () => {

  const {width, height} = useWindowDimensions();

  const customStyle = {
    width: width * 0.10,
    height: height * 0.05,
    backgroundColor: 'black',
    borderRadius: '50%',
  }

  return (
    <TouchableOpacity
    activeOpacity={0.8} 
    style = { customStyle }
    className = 'flex justify-center items-center'
    >

      <ArrowLeftIcon size={18} color='white' strokeWidth={2} />
      
    </TouchableOpacity>
  );
};

export default BackButton;