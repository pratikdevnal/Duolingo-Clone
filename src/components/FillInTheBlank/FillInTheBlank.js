import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "../Button";
import styles from "./styles";
import WordOption from "../WordOption";

const FillInTheBlank = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null);
  const onButtonPress = () => {
    if (selected === question.correct) {
      // Alert.alert("correct");
      //Move to the next question
      // setCurrentQuestionIndex(currentQuestionIndex+1);
      onCorrect();
    } else {
      onWrong();
    }
    setSelected(null);
  };
  const onPress = () => {};
  return (
    <>
      <Text style={styles.title}>Fill In the Blanks</Text>
      <View style={styles.row}>
        <Text style={styles.text}>e wq ecx asfd asdqf adsf</Text>
        <View style={styles.blank}>
          {selected && (
            <WordOption text={selected} onPress={() => setSelected(null)} />
          )}
        </View>
      </View>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <WordOption
            text={option}
            onPress={() => setSelected(option)}
            isSelected={selected === option}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </>
  );
};
export default FillInTheBlank;
