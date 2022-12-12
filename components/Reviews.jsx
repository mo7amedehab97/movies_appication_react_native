import { View, Image, Text } from "react-native";
import React from "react";

const Reviews = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
      }}
    >
      <View
        style={{
          alignItems: "center",
          marginVertical: 8,
        }}
      >
        <Image
          source={require("../assets/images/person.png")}
          resizeMode="contain"
          style={{
            width: 44,
            height: 44,
            borderRadius: 50,
          }}
        />
        <Text
          style={{
            color: "#0296E5",
            marginTop: 4,
            fontFamily: "PoppinsRegular",
            fontSize: 12,
            lineHeight: 18,
          }}
        >
          9.5
        </Text>
      </View>
      <View>
        <Text
          style={{
            marginHorizontal: 16,
            marginVertical: 8,
            width: "27%",
            color: "#FFF",
            fontFamily: "PoppinsSemiBold",
            fontSize: 12,
            lineHeight: 18,
          }}
        >
          Iqbal Shafiq Rozaan
        </Text>
        <Text
          numberOfLines={4}
          style={{
            flexWrap: "wrap",
            width: "27%",
            color: "#FFF",
            fontFamily: "PoppinsRegular",
            fontSize: 12,
            lineHeight: 18,
            marginHorizontal: 16,
          }}
        >
          From DC Comics comes the Suicide Squad, an antihero team of
          incarcerated supervillains who act as deniable assets for the United
          States government.
        </Text>
      </View>
    </View>
  );
};

export default Reviews;
