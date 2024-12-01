import { View, Text } from 'react-native';
import React from 'react';

const Listing = ({route}) => {

    const {id} = route.params;

    console.log(id)

  return (
    <View>
      <Text>Listing</Text>
    </View>
  );
};

export default Listing;