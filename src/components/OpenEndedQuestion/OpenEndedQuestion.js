import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Image } from "react-native";
import Button from "../Button";
import style from "./styles";
import mascot from "../../../assets/images/mascot.png";

// import question from "../../../assets/data/openEndedQuestions";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("Enter your answer");
  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput("");
  };
  return (
    <>
      <Text style={style.title}>Translate This Sentence</Text>
      <View style={style.row}>
        {/* image */}
        <Image source={mascot} style={style.mascot} resizeMode="contain" />
        <View>
          <Text style={style.sentence}>{question.text}</Text>
        </View>
      </View>
      <TextInput
        value={input}
        // onChangeText={(changedValue) => setInput(changedValue)}
        onChangeText={setInput}
        placeholder="Type in English"
        style={style.textInput}
        textAlignVertical="top"
        multiline
      />
      <Button text="Check" onPress={onButtonPress} disabled={false} />
    </>
  );
};

export default OpenEndedQuestion;
