import { View, Text, StatusBar } from "react-native";
import React from "react";
import "./global.css";
import StackTabs from "./src/Navigations/Navigation";
import * as SecureStore from "expo-secure-store";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";

const CLERK_PUBLISH_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ;

const getToken = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (error) {
      return null;
    }
  },

  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (error) {
      return null;
    }
  },
};

const App = () => {
  
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISH_KEY} tokenCache={getToken}>
      <NavigationContainer>
        <StackTabs />
      </NavigationContainer>
    </ClerkProvider>
  );
};

export default App;
