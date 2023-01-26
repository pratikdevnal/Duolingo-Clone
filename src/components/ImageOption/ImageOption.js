import { View, Text , Image} from 'react-native';
import styles from './styles';
import react from 'react';


export default function ImageOption({image,text}) {
  return (
    <View style={styles.optionContainer}>
    <Image source={{uri:image}} style={styles.optionImage} resizeMode="contain"/>
    <Text style={styles.optionText}>{text}</Text>
   </View>
  )
}
