import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  Share,
} from "react-native";
import React from "react";
import listingData from "../../assets/data/airbnb-listings.json";
import Animated, {
  interpolate,
  SlideInDown,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import CustomText from "../../components/CustomText";
import BackButton from "../../components/BackButton";
import { colors } from "../../constant/Color";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  HeartIcon,
  ShareIcon,
} from "react-native-heroicons/outline";

const Listing = ({ route }) => {
  const { id } = route.params;

  const listedData = listingData?.find((item) => item.id === id);

  const navigation = useNavigation();

  // console.log(listedData);

  const { width, height } = useWindowDimensions();

  const imageStyle = {
    width: width * 1,
    height: height * 0.4,
  };

  const customStyle = {
    width: width * 0.1,
    height: height * 0.05,
    backgroundColor: "white",
    borderRadius: "50%",
  };

  const shareListing = async () => {
    try {
      await Share.share({
        title: listedData?.name,
        url: listedData?.listing_url,
        message: `${listedData?.name}\n${listedData?.listing_url}`
      });
    } catch (error) {
      console.log(error);
    }
  };

  const scrollRef = useAnimatedRef();

  const scrollOffSet = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffSet.value,
            [-imageStyle.height, 0, imageStyle.height],
            [-imageStyle.height / 2, 0, imageStyle.height * 0.3]
          ),
        },

        {
          scale: interpolate(
            scrollOffSet.value,
            [-imageStyle.height, 0, imageStyle.height],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const headerIconAnimatedStyle = useAnimatedStyle(() => {
    
    return{
    opacity: interpolate(scrollOffSet.value, [0, imageStyle / 1.5], [0, 1])}
         
  });

  return (
    <View className="flex-1 bg-white relative ">
      <Animated.ScrollView
        ref={scrollRef}
        className="mb-20 relative "
        scrollEventThrottle={16}
      >
        <Animated.Image
          source={{ uri: listedData?.xl_picture_url }}
          style={[imageStyle, imageAnimatedStyle]}
          resizeMode={"cover"}
          resizeMethod="resize"
        />

        <View className=" absolute mt-6 left-0 top-0 px-4 ">
          <BackButton />
        </View>

        <View className=" flex flex-row gap-x-4 absolute mt-6 right-0 top-0 px-4 ">
          <TouchableOpacity
            activeOpacity={0.8}
            style={customStyle}
            className="flex justify-center items-center"
            onPress={shareListing} 
          >
            <ShareIcon size={18} color="black" strokeWidth={2} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={customStyle}
            className="flex justify-center items-center"
          >
            <HeartIcon size={18} color="black" strokeWidth={2} />
          </TouchableOpacity>
        </View>

        <View className="p-4 px-5 gap-y-2 bg-white ">
          <CustomText variants="medium">{listedData?.name}</CustomText>

          <CustomText variants="small">
            {listedData?.room_type} in {listedData?.smart_location}
          </CustomText>

          <CustomText
            variants="xSmall"
            customStyle={{ color: colors.grey, fontWeight: "700" }}
          >
            {listedData?.guests_included} guests ・{listedData?.bedrooms}{" "}
            bedrooms ・{listedData?.beds} bed ・{listedData?.bathrooms}{" "}
            bathrooms{" "}
          </CustomText>

          <View className="flex flex-row px-0.5 gap-x-2 ">
            <Ionicons name="star" size={15} color={"black"} />

            <CustomText variants="xSmall" customStyle={{ flex: 1 }}>
              {listedData?.review_scores_rating / 20} ・{" "}
              {listedData?.number_of_reviews} reviews{" "}
            </CustomText>
          </View>

          <View
            className=" w-full border-b-hairline border-solid"
            style={{ borderColor: colors.grey }}
          ></View>

          <View className="flex flex-row items-center gap-x-4 ">
            <View className=" w-16 h-16 rounded-full bg-gray-500 ">
              <Image
                source={{ uri: listedData?.host_picture_url }}
                className="w-full h-full object-cover "
              />
            </View>
            <View>
              <CustomText variants="xSmall">
                Hosted by {listedData?.host_name}
              </CustomText>

              <CustomText variants="xSmall" customStyle={{ fontWeight: "700" }}>
                Host since {listedData?.host_since}
              </CustomText>
            </View>
          </View>

          <View
            className=" w-full border-t-hairline border-solid"
            style={{ borderColor: colors.grey }}
          ></View>

          <CustomText
            variants="xSmall"
            customStyle={{ fontWeight: "700", color: colors.grey }}
          >
            {listedData?.description}
          </CustomText>
        </View>
      </Animated.ScrollView>

      <Animated.View
        className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t-gray-300 border-t-hairline "
        entering={SlideInDown.delay(200)}
      >
        <View className="flex flex-row items-center justify-between ">
          <TouchableOpacity>
            <CustomText variants="xSmall">
              {" "}
              $ {listedData?.price}{" "}
              <Text style={{ fontWeight: "700" }}>night</Text>{" "}
            </CustomText>
          </TouchableOpacity>

          <CustomButton title="Reserve" customStyle={{ width: "50%" }} />
        </View>
      </Animated.View>
    </View>
  );
};

export default Listing;
