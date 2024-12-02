import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { colors } from '../constant/Color';

const CustomButton = ({title, onPress}) => {

  const {height} = useWindowDimensions();

  const heights = height * 0.07;

  return (

    <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    className = ' w-full flex justify-center items-center rounded-lg'
    style = {{
      height: heights,
      backgroundColor: colors.primary
    }}
    >
      <CustomText variants='small' customStyle={{color:'white', textAlign:'center' }} >{title}</CustomText>
    </TouchableOpacity>

  );
};

export default CustomButton;