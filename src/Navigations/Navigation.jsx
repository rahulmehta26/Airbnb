import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Wishlist from "../screen/dashboard/tabScreens/Wishlist";
import Trips from "../screen/dashboard/tabScreens/Trips";
import Inbox from "../screen/dashboard/tabScreens/Inbox";
import Profile from "../screen/dashboard/tabScreens/Profile";
import Login from "../screen/auth/Login";
import Bookings from "../screen/dashboard/Bookings";
import Listing from "../screen/dashboard/Listing";
import Explore from "../screen/dashboard/tabScreens/Explore";
import * as SecureStore from "expo-secure-store";
import { useAuth } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CLERK_PUBLISH_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

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

function BottomTabs() {
  const { width, heigth } = useWindowDimensions();

  const iconSize = width * 0.07;
  const textSize = heigth * 0.02;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "purple",
        tabBarLabelStyle: {
          fontSize: textSize,
          fontWeight: "condensedBold",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Explore}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" color={color} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarLabel: "Wishlist",
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" color={color} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="airbnb" color={color} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="message-outline"
              color={color}
              size={iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person-circle-outline"
              color={color}
              size={iconSize}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function StackTabs() {
  const { width, heigth } = useWindowDimensions();

  const iconSize = width * 0.08;

  const { isLoaded, isSignedIn } = useAuth();

  const navigation = useNavigation();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigation.navigate("Login");
    }
  }, [isLoaded]);

  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={"black"} />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="BottomTab"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
            presentation: "modal",
            headerShown: true,
            headerTitle: "Login & Signup",
            headerLeftContainerStyle: {
              flex: 1,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 24,
            },
            headerLeft: () => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}
                className="pl-5"
              >
                <Ionicons name="close-outline" size={25} color={"black"} />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Bookings"
          component={Bookings}
          options={({ navigation }) => ({
            presentation: "transparentModal",
            headerShown: true,
            animation: "fade",
            headerLeft: () => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="close-outline"
                  size={iconSize}
                  color={"black"}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Listings"
          component={Listing}
          options={{
            headerTitle: "",
          }}
        />
      </Stack.Navigator>
    </>
  );
}
