import { View, Text } from "react-native";
import React from "react";

const AboutMovie = ({ description }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: "PoppinsRegular",
          fontSize: 12,
          lineHeight: 18,
          color: "#fff",
        }}
      >
        {description}
      </Text>
    </View>
  );
};

export default AboutMovie;
