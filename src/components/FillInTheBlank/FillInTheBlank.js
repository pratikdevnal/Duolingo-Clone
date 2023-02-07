import React from "react";
import { View, Text } from "react-native";
import Button from "../Button";
import styles from "./styles";

const FillInTheBlank = () => {
  const onButtonPress = () => {};
  return (
    <View>
      <Text style={styles.title}>Fill In the Blanks</Text>
      <View style={styles.row}>
        <Text>e wq ecx asfd asdqf adsf</Text>
        <View style={styles.blank}></View>
      </View>
      <View style={styles.optionsContainer}></View>
      <Button text="Check" onPress={onButtonPress} disabled={true} />
    </View>
  );
};
export default FillInTheBlank;
