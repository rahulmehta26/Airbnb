import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

const CustomSafeAreaView = ({children, customStyle}) => {
  return (
    <SafeAreaView
    style = {customStyle}
    className = 'bg-white px-5 py-2 flex-1 w-full h-full '
    >
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;