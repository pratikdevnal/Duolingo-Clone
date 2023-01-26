import { View, Text , Image, Pressable} from 'react-native';
import styles from './styles';
import react , {useState} from 'react';
import PropTypes from "prop-types";


export default function ImageOption({image,text,isSelected,onPress}) {
  return (
    <Pressable 
      onPress={onPress}
      style={[styles.optionContainer, isSelected ? styles.selectedContainer : {} ]}>
    <Image source={{uri:image}} style={styles.optionImage} resizeMode="contain"/>
    <Text style={isSelected ? styles.selectedText : styles.optionText}>{text.toUpperCase()}</Text>
    </Pressable>
    
  )
}

ImageOption.propTypes = {
  image:PropTypes.string.isRequired,
  text:PropTypes.string,
  isSelected:PropTypes.bool,
  onPress:PropTypes.func,

}

ImageOption.defaultProps = {
  text:"Default",
  isSelected:false,
  onPress:()=>{},
}
