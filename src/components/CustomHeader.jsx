import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constant/Color";
import GlobalStyles from "../constant/GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = () => {

  const navigation = useNavigation();

  return (
    <View className=" w-full mb-4 ">
      <View className="flex flex-row gap-x-5 items-center justify-between ">
        <View style={{ flex: 1 }}>
          <TouchableOpacity
          onPress={() => navigation.navigate("Bookings")}
          activeOpacity={0.8}
            style={GlobalStyles.shadow}
            className="flex gap-x-4 flex-row bg-white items-center border-hairline border-gray-300 rounded-full p-2 px-3"
          >
            <Ionicons name="search" size={25} />

            <View>
              <CustomText variants="small" customStyle={{ fontWeight: "900" }}>
                Where to?
              </CustomText>
              <CustomText
                variants="xSmall"
                customStyle={{ fontWeight: "700", color: colors.grey }}
              >
                Anywhere  ●  Any week
              </CustomText>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.6}
          className="w-12 h-12 border border-solid border-slate-500 rounded-full flex justify-center "
        >
          <Ionicons name="options-outline" size={24} className="text-center" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomHeader;
