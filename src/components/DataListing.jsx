import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomText from "./CustomText";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const DataListing = ({ item, category }) => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  const imageStyle = {
    height: height * 0.4,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 15,
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Listings", { id: item.id })}
      activeOpacity={0.8}
      className="px-5 mt-6 "
    >
      <Animated.View
        entering={FadeInRight}
        exiting={FadeOutLeft}
        style={{ width: "100%", paddingVertical: 12, gap: 4 }}
      >
        <Image
          source={{
            uri: item?.medium_url || "https://via.placeholder.com/150",
          }}
          style={imageStyle}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={{ position: "absolute", top: 20, right: 12 }}
        >
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomText variants="xSmall">{item?.name || "No Name"}</CustomText>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Ionicons name="star" size={15} color="black" />
            <CustomText variants="xSmall">
              {(item?.review_scores_rating || 0) / 20}
            </CustomText>
          </View>
        </View>

        <CustomText variants="xSmall" customStyle={{ fontWeight: "700" }}>
          {item?.room_type || "N/A"}
        </CustomText>
        <CustomText variants="xSmall" customStyle={{ fontWeight: "700" }}>
          ${item?.price || "N/A"} per night
        </CustomText>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default DataListing;
