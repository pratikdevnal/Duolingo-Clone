import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Alert } from 'react-native';
import styles from './App.style';
import icon from "./assets/icon.png";
import ImageOption  from './src/components/ImageOption/ImageOption';
import question from "./assets/data/imageMulatipleChoiceQuestions";
import { useState, useEffect} from 'react';
import Button from './src/components/Button';
import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQuestion';

const App = ()=> 
{
  // const origin = [1,2,3];
  // const double = origin.map((iterator)=>iterator*2);
  // console.log(double);
  // const status = 'ok';
  const [currentQuestionIndex,setCurrentQuestionIndex]= useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(question[currentQuestionIndex]);

  useEffect(()=>
  {
    if(currentQuestionIndex>=question.length)
    {
      Alert.alert("You Won!!!")
      setCurrentQuestionIndex(0);
    }
    else{
      setCurrentQuestion(question[currentQuestionIndex])
    }

  },[currentQuestionIndex]);
 
 
 const onCorrect = () =>
 {
  setCurrentQuestionIndex(currentQuestionIndex+1);
 }

 const onWrong = () =>
 {
  Alert.alert("Wrooong");
 }
 
  // value = 10;
  return (
    <View style={styles.root}>
  <ImageMultipleChoiceQuestion 
    question={currentQuestion}
    onCorrect={onCorrect}
    onWrong={onWrong}
  />
    </View>
  );
};
export default App;