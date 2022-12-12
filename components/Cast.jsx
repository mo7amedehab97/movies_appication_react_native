import { View, FlatList } from "react-native";
import React from "react";
import CastProfile from "./CastProfile";

const Cast = () => {
  return (
    <View
      style={{
        height: 260,
      }}
    >
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "dfsd" },
          { key: "3" },
          { key: "fdfg" },
          { key: "fdsf" },
          { key: "sfdfsa" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
        ]}
        renderItem={({ item }) => <CastProfile />}
      />
    </View>
  );
};

export default Cast;
