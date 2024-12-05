import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

const CustomSafeAreaView = ({children, paddingHorizontal ='15' ,customStyle}) => {
  return (
    <SafeAreaView
    style = {[customStyle, styles.container,{paddingHorizontal: paddingHorizontal}]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:5,
    width: '100%',
    height:'100%',
    backgroundColor:'#fff'
  }
})

export default CustomSafeAreaView;