import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useMemo, useRef } from "react";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import DataListing from "./DataListing";
import { colors } from "../constant/Color";
import CustomText from "./CustomText";
import { MapIcon } from "react-native-heroicons/outline";

const BottomSheetList = ({ listings, category }) => {
  const bottomRef = useRef(null);

  const snapPoint = useMemo(() => ["10%", "82%"], []);

  const handleMap = () => {
    bottomRef.current.collapse();
  };

  return (
    <BottomSheet
      ref={bottomRef}
      index={1}
      snapPoints={snapPoint}
      handleIndicatorStyle={{
        backgroundColor: colors.primary,
      }}
      style = {styles.container}
    >
      <BottomSheetFlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DataListing item={item} category={category} />
        )}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}
      />

      <View
      style = {styles.btnContainer}
      > 
        <TouchableOpacity 
        onPress={handleMap}
        activeOpacity={0.8}
        className=" w-28 gap-x-2 rounded-full bg-[#000] flex flex-row justify-center items-center px-4 py-3 ">
          <CustomText variants="xSmall" customStyle={{ color: "#fff" }}>
            Map
          </CustomText>

          <MapIcon size={18} color={"white"} />
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({

  container:{
    backgroundColor:'#fff',
    borderRadius:10,
    elevation:4,
    shadowColor:'#000',
    shadowOpacity:0.5,
    shadowRadius:5,
    shadowOffset:{
      width:1,
      height:1
    }
  },
  
  btnContainer:{
    position: "absolute",
    bottom: 25, 
    left: 0,
    right: 0,
    alignItems: "center", 
  }
})

export default BottomSheetList;
