import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from "./styles"
import PropTypes from "prop-types"

export default function Button({text, onPress , disabled}) {
  return (
    <Pressable 
    onPress={onPress}
    style={[styles.container, disabled? styles.disabledContainer:{ }]}
    disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
};

Button.protoTypes = {
    text:PropTypes.string.isRequired,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    onPress:() =>{},
    disabled: false,
}