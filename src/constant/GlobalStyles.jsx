import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";

const GlobalStyles = StyleSheet.create({
  shadow: {
    elevation: 12,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default GlobalStyles;
