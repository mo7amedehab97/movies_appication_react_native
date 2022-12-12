import { View, Text, Image } from "react-native";
import React from "react";

const CastProfile = () => {
  return (
    <View
      style={{
        width: 120,
        height: 123,
        marginBottom: 24,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Image
        source={require("../assets/images/tom.jpg")}
        resizeMode="contain"
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
        }}
      />
      <Text
        style={{
          color: "#FFF",
          fontFamily: "PoppinsRegular",
          fontSize: 12,
          lineHeight: 18,
          textAlign: "center",
        }}
      >
        Tom Holland
      </Text>
    </View>
  );
};

export default CastProfile;
