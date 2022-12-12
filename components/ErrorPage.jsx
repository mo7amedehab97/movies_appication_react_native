import { View, Text } from "react-native";
import React from "react";
import NoResults from "../assets/images/no-results 1.svg";
const ErrorPage = ({ Img, title, description }) => {
  return (
    <View
      style={{
        width: "100%",
        marginTop: 144,

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Img />
      <Text
        style={{
          fontFamily: "MontserratSemiBold",
          fontSize: 16,
          lineHeight: 26,
          letterSpacing: 0.12,
          textAlign: "center",
          color: "#EBEBEF",
          marginTop: 16,
          width: 188,
        }}
      >
        {title}{" "}
      </Text>
      <Text
        style={{
          fontFamily: "MontserratRegular",
          fontSize: 12,
          lineHeight: 20,
          letterSpacing: 0.12,
          textAlign: "center",
          color: "#92929D",
          marginTop: 8,
          width: 188,
        }}
      >
        {description}
      </Text>
    </View>
  );
};

export default ErrorPage;
