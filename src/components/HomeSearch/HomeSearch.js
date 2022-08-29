import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
const HomeSearch = () => {
  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where To ?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={18} color="black" />
          <Text>Now.</Text>
          <AntDesign name="down" size={18} color="black" />
        </View>
      </View>
    </View>
  );
};

export default HomeSearch;
