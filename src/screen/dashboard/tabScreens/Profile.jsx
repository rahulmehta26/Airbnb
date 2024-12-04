import { View, Text } from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';
import CustomButton from '../../../components/CustomButton';
import { useAuth } from '@clerk/clerk-expo';

const Profile = () => {

  const {signOut, isSignedIn} = useAuth();

  return (
    <CustomSafeAreaView>

      <Text className = 'text-red-500 font-extrabold text-2xl ' >Profile</Text>

      <CustomButton 
      title = "Sign out"
      onPress={() => signOut()}
      />
    </CustomSafeAreaView>
  );
};

export default Profile;