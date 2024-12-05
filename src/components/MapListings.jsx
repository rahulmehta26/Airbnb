import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import { Callout, CalloutSubview, Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import CustomText from "./CustomText";
import MapView from "react-native-map-clustering";

const MapListings = ({ listings }) => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  // console.log(listings.features[0].properties?.latitude)

  const customStyles = {
    width: width * 1,
    height: height * 1,
  };

  const initialRegion = {
    latitude: 12.9716,
    longitude: 77.5946,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const onMarkerSelected = (val) => {
    navigation.push("Listings", { id: val?.properties?.id });
  };

  return (
    <View className="w-full h-full">
      <MapView
        style={customStyles}
        showsUserLocation
        provider={"google"}
        showsMyLocationButton
        initialRegion={initialRegion}
        animationEnabled = {false}
        clusterColor="#000"
        clusterTextColor="#fff"
      >
        {listings?.features.map((info, index) => {
          const latitude = parseFloat(info?.properties?.latitude);
          const longitude = parseFloat(info?.properties?.longitude);

          return (
            <Marker
              onPress={() => onMarkerSelected(info)}
              key={index}
              coordinate={{
                latitude,
                longitude,
              }}
            >
                <Callout>
              
                <View 
                className="w-20  bg-white rounded-xl p-2"
                >
                  <CustomText variants="xSmall">
                    $ {info?.properties?.price}
                  </CustomText>
                </View>
                </Callout>
              
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default MapListings;
