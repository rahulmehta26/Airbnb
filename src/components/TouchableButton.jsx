import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { Ionicons } from "@expo/vector-icons";

const TouchableButton = ({ onPress, title, names }) => {
  const { height } = useWindowDimensions();

  const heights = height * 0.07;

  return (
    <TouchableOpacity
    activeOpacity={0.6}
      onPress={onPress}
      className="w-full border border-b-0.5 border-solid border-black/50 rounded-lg flex justify-center items-center relative "
      style={{ height: heights }}
    >
      <Ionicons name={names} size={24} style = {styles.iconSize} />

      <CustomText variants="small">{title}</CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  iconSize:{
    position:'absolute',
    left:16
  }
})

export default TouchableButton;
