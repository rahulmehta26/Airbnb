import { View, Text } from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';

const Inbox = () => {
  return (
    <CustomSafeAreaView>
      <Text className = 'text-red-500 font-extrabold text-2xl ' >Inbox</Text>
    </CustomSafeAreaView>
  );
};

export default Inbox;