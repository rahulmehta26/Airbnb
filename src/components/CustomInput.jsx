import { View, Text, useWindowDimensions, TextInput } from 'react-native';
import React from 'react';
import { colors } from '../constant/Color';

const CustomInput = ({
  placeholder = 'example',
  autoCapitalize = 'none',
  keyboardType
}) => {

  const { height } = useWindowDimensions();

  const heights = height * 0.07;

  return (
    <View
    className="w-full border border-b-1 border-solid border-black/50 rounded-lg flex justify-center px-2 outline-none relative "
    style={{ height: heights }}
    >
      
      <TextInput 
      className = 'w-full h-full outline-none text-lg '
      placeholder={ placeholder }
      placeholderTextColor={colors.grey}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      style = {{fontWeight:'700'}}

      />
    </View>
  );
};

export default CustomInput;