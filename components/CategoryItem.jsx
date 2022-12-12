import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";

const CategoryItem = ({ name, index, genreIds }) => {
  const [isActive, setIsActive] = useState(false);

  const { setGenreID, genreName, setGenreName } = useContext(Context);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 33,
        width: 92,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setIsActive(!isActive);
          setGenreID(genreIds);
          setGenreName(name);
        }}
      >
        <Text
          style={{
            fontFamily: index === 0 ? "PoppinsSemiBold" : "PoppinsRegular",
            fontSize: 14,
            lineHeight: 21,
            textAlign: "center",
            color: "#fff",
            borderBottomWidth: genreName == name ? 4 : 0,
            borderColor: genreName == name ? "#3A3F47" : "transparent",
            paddingVertical: 5,
            justifyContent: "space-between",
          }}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
