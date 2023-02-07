// import { StatusBar } from "expo-status-bar";
// import icon from "./assets/icon.png";
// import ImageOption from "./src/components/ImageOption/ImageOption";
// import question from "./assets/data/imageMulatipleChoiceQuestions"; // import question from "./assets/data/openEndedQuestions";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import styles from "./App.style";
import { useState, useEffect } from "react";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import question from "./assets/data/allQuestions";
import Header from "./src/components/Header/Header";
import allQuestions from "./assets/data/allQuestions";
import AsyncStorage from "@react-native-async-storage/async-storage"; //npm install @react-native-async-storage/async-storage
import { ActivityIndicator } from "react-native";
import FillInTheBlank from "./src/components/FillInTheBlank";

const App = () => {
  // const origin = [1,2,3]; // const double = origin.map((iterator)=>iterator*2); // console.log(double); // const status = 'ok';
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    question[currentQuestionIndex]
  );
  const saveData = async () => {
    await AsyncStorage.setItem("lives", lives.toString());
    await AsyncStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
  };
  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem("lives");
    if (loadedLives) {
      setLives(parseInt(loadedLives));
    }
    const currentQuestionIndex = await AsyncStorage.getItem(
      "currentQuestionIndex"
    );
    if (currentQuestionIndex) {
      setCurrentQuestionIndex(parseInt(currentQuestionIndex));
    }
    setHasLoaded(true);
  };
  const [lives, setLives] = useState(5);
  useEffect(() => {
    loadData();
  }, []);
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    if (hasLoaded) {
      saveData();
    }
  }, [lives, currentQuestionIndex, hasLoaded]);

  useEffect(() => {
    if (currentQuestionIndex >= question.length) {
      Alert.alert("You Won!!!");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(question[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);
  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };
  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert("game over", "try again", [
        {
          text: "try again",
          onPress: restart,
        },
      ]);
    } else {
      setLives(lives - 1);
      Alert.alert("Wrooong");
    }
  };
  if (!hasLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.root}>
      <Header progress={currentQuestionIndex / question.length} lives={lives} />
      <FillInTheBlank
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />

      {/* {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === "OPEN_ENDED" && (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )} */}
    </View>
  );
};
export default App;
