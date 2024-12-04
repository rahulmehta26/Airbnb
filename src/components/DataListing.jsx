import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CustomText from './CustomText';
import Animated, { FadeIn, FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const DataListing = ({listings, category}) => {

  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  const {width, height} = useWindowDimensions();

  const navigation = useNavigation();

  const imageStyle = {
    // width: width * 1,
    height: height * 0.4
  };


  useEffect(() => {
    setLoading(true)
  }, [category] );

  const renderRow = ({item}) => (
        
    <TouchableOpacity
    onPress={() => navigation.navigate("Listings", {id: item.id})}
    activeOpacity={0.8}
    >
 
      <Animated.View
      entering={FadeInRight}
      exiting={FadeOutLeft}
      className = 'w-full py-3 relative '
      style = {{gap:4}}
      >

        <Image 
        source={{uri: item?.medium_url }} 
        style = {[imageStyle ,{resizeMode:"cover", width:'100%', borderRadius:15 }]}
        />

        <TouchableOpacity
        activeOpacity={0.8}
        className = 'absolute top-12 -right-[88%]'
        >
          <Ionicons name='heart-outline' size={24} color={'black'} />
          
        </TouchableOpacity>

        <View
        style = {{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          paddingRight: 1,
        }}
        >

          <CustomText variants='xSmall' >{item?.name}</CustomText>

          <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: 5, 
              }}
          >

            <Ionicons name='star' size={15} color={'black'} />

            <CustomText variants='xSmall'>{item?.review_scores_rating / 20 }</CustomText>
          </View>
        </View>

        <CustomText variants='xSmall' customStyle={{fontWeight:'700'}} >{item?.room_type}</CustomText>

        <CustomText variants='xSmall' customStyle={{fontWeight:'700'}} >$ {item?.price} night </CustomText>

      </Animated.View>

    </TouchableOpacity>
  );

  if(loading){
    <ActivityIndicator color={'black'} size={'large'} />
  }

  return (
    <View className = 'mt-6' >
      <FlatList 
      showsVerticalScrollIndicator={false}
      ref={listRef}
      data={listings}
      renderItem={renderRow}
      keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default DataListing;