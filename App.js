import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './App.style';
import icon from "./assets/icon.png";
import ImageOption  from './src/components/ImageOption/ImageOption';
// const ImageOption = () =>
// {
//   return(
//     <View style={styles.optionContainer}>
//     <Image source={{uri:"https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png"}} style={styles.optionImage} resizeMode="contain"/>
//     <Text style={styles.optionText}>Glass</Text>
//     </View>
//   );
// };
const App = ()=> 
{
  const status = 'ok';
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Which of these is "the glass"?</Text>
      <View style={styles.optionsContainer}>  
      <ImageOption/>
      </View>
        
    </View>
  );
};
export default App;