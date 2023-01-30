import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ProgressBar from "../ProgressBar";

export default function Header({ progress }) {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress} />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
  },
});
