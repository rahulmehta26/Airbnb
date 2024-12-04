import { View, Text, KeyboardAvoidingView, Alert } from "react-native";
import React from "react";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import TouchableButton from "../../components/TouchableButton";
import CustomText from "../../components/CustomText";
import { useOAuth, useUser } from "@clerk/clerk-expo";
import * as Linking from 'expo-linking'

const Login = () => {

   const {startOAuthFlow} = useOAuth({strategy: "oauth_google"});

   const handleGoogleAuth = async() => {
    console.log("Startingggggggg")

    try {
      console.log("Aboveeeeeee")

      const {createdSessionId, setActive} = await startOAuthFlow({
        redirectUrl: Linking.createURL("Explore", { scheme: "Login" })
      })

       console.log("insideeeee", createdSessionId)

       if(createdSessionId){
          setActive({session: createdSessionId});
          console.log("SetAcrtiveeeeee")
       }else{

       }

       console.log("SessionId ===>", createdSessionId)
    } catch (error) {
      return null;
    }
   }

   const {user} = useUser();

   console.log("Userssssss========>",user)

  return (
    <CustomSafeAreaView>

      <KeyboardAvoidingView
      className = 'gap-y-8 mt-3 '
      >

        <CustomInput 
        placeholder="email"
        keyboardType='email-address'
        />

        <CustomButton title = 'Continue' onPress = {() => {} } />

        <View className = 'flex flex-row gap-x-4 w-full justify-center items-center' >

          <View className = 'border-b-[0.1rem] border-gray-500 w-full flex-1 ' ></View>

          <CustomText variants="small" customStyle={{ fontWeight: "700" }}>
            or
          </CustomText>

          <View className = 'border-b-[0.1rem] border-solid border-gray-500 w-full flex-1 ' ></View>
        </View>

        <View className = "gap-y-8" >
          <TouchableButton names = 'call-outline' title = 'Continue with Phone ' />

          <TouchableButton names = 'logo-google' title = 'Continue with Google ' onPress={handleGoogleAuth} />

          <TouchableButton names = 'logo-apple' title = 'Continue with Apple ' onPress={() => handleOAuthSignIn("apple") } />
        </View>
      </KeyboardAvoidingView>
    </CustomSafeAreaView>
  );
};

export default Login;
