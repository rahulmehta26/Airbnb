import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useMemo, useRef, useState } from "react";
import CustomSafeAreaView from "../../../components/CustomSafeAreaView";
import Login from "../../auth/Login";
import Bookings from "../Bookings";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../../components/CustomHeader";
import DataListing from "../../../components/DataListing";
import categories from "../../../constant/categories";
import CustomText from "../../../components/CustomText";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../../constant/Color";
import listingData from "../../../assets/data/airbnb-listings.json";
import MapListings from "../../../components/MapListings";
import listingGeo from "../../../assets/data/airbnb-listings.geo.json";
import BottomSheetList from "../../../components/BottomSheetList";

const Explore = () => {
  const navigation = useNavigation();

  const items = useMemo(() => listingData, []);

  const itemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [category, setCategory] = useState("Tiny homes");

  const selectedCategories = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <CustomSafeAreaView 
      paddingHorizontal="0">
        <View className=" flex-1 ">
          <View className = 'mt-2 px-5' >
            <CustomHeader />

            <View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: 25,
                  paddingHorizontal: 5,
                }}
              >
                {categories?.map((data, index) => {
                  return (
                    <TouchableOpacity
                      ref={(val) => (itemsRef.current[index] = val)}
                      onPress={() => {
                        selectedCategories(index);
                        setCategory(data.name);
                      }}
                      key={index}
                      activeOpacity={0.4}
                      className=" flex items-center"
                      style={activeIndex === index ? styles.activeBtn : null}
                    >
                      <MaterialIcons
                        name={data?.icon}
                        size={25}
                        color={activeIndex === index ? "#000" : colors.grey}
                      />

                      <CustomText
                        variants="xSmall"
                        customStyle={{
                          color: activeIndex === index ? "#000" : colors.grey,
                        }}
                      >
                        {data.name}
                      </CustomText>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>

          <View className="overflow-hidden ">
            <MapListings listings={listingGeo} />
          </View>
          <BottomSheetList listings={items} category={category} />
        </View>
      </CustomSafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  activeBtn: {
    flex: 1,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    paddingVertical: 2,
  },
});

export default Explore;
