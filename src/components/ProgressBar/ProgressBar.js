import { View, Text, StyleSheet } from "react-native";
import React from "react";
import style from "./styles";
export default function ProgressBar({ progress }) {
  return (
    <View style={styles.bg}>
      <View style={[styles.fg, { width: `${progress * 100}%` }]}>
        <View style={styles.highlight}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: {
    backgroundColor: "lightgrey",
    height: 30,
    borderRadius: 15,
    flex: 1,
  },
  fg: {
    flex: 1,
    backgroundColor: "#FAC800",
    borderRadius: 15,
    // width: "60%",
  },
  highlight: {
    backgroundColor: "#FAD131",
    borderRadius: 5,
    marginTop: 5,
    width: "90%",
    height: 5,
    alignSelf: "center",
  },
});
