import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import React from "react";

const CustomText = ({ children, variants = 'medium' , customStyle }) => {
  
  const { width, height } = useWindowDimensions();

  const FontSizes = {
    xSmall: { fontSize: height * 0.020 },
    small: { fontSize: height * 0.0225 },
    medium: { fontSize: height * 0.030 },
    large: { fontSize: height * 0.040 },
  };

  return (
    <Text style={[ styles.text, customStyle,{ fontSize: FontSizes[variants].fontSize }]}>{children}</Text>
  );
};

const styles = StyleSheet.create({

    text:{
        color:'black',
        fontWeight:'900',
    }
})

export default CustomText;
