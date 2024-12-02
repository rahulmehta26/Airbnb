import { View, Text, KeyboardAvoidingView } from "react-native";
import React from "react";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import TouchableButton from "../../components/TouchableButton";
import CustomText from "../../components/CustomText";

const Login = () => {
  return (
    <CustomSafeAreaView customStyle={{ padding: 20 }}>

      <KeyboardAvoidingView
      className = 'gap-y-8'
      >

        <CustomInput 
        placeholder="email"
        keyboardType='email-address'
        />

        <CustomButton title = 'Continue' onPress = {() => {} } />

        <View className = 'flex justify-center items-center' >

          <View className = 'border-b-hairline border-gray-600 ' ></View>

          <CustomText variants="small" customStyle={{ fontWeight: "700" }}>
            or
          </CustomText>

          <View className = 'border-b-hairline border-gray-600 ' ></View>
        </View>

        <View className = "gap-y-8" >
          <TouchableButton names = 'call-outline' title = 'Continue with Phone ' />

          <TouchableButton names = 'logo-google' title = 'Continue with Google ' />

          <TouchableButton names = 'logo-apple' title = 'Continue with Apple ' />
        </View>
      </KeyboardAvoidingView>
    </CustomSafeAreaView>
  );
};

export default Login;
