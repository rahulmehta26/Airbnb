import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

const CustomSafeAreaView = ({children, customStyle}) => {
  return (
    <SafeAreaView
    style = {customStyle}
    className = 'bg-white p-2 flex-1 '
    >
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;