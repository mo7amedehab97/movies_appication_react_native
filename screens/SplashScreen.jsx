import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import React from "react";
import { primaryColor } from "../assets/Colors";
import PopCorn from "../assets/images/popcorn 1.svg";
import { StatusBar } from "expo-status-bar";
const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: primaryColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PopCorn />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text
          style={{
            fontFamily: "PoppinsLight",
            fontSize: 22,
            marginTop: 32,
            backgroundColor: "rgba(8, 8, 12, 0.32)",
            borderRadius: 16,
            padding: 12,
            color: "#0296E5",
            letterSpacing: 1.3,
          }}
        >
          Click Here to satrt
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SplashScreen;
