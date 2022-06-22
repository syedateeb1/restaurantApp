import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { APPBLUE } from '../constants/Colors'
import { Fonts } from '../constants/Fonts'
import TextComp from './TextComp'

const Button = props => {
  const { buttonStyle, buttonText, textStyle, onPress } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, buttonStyle]}>
        <TextComp style={[styles.textStyle, textStyle]}>{buttonText}</TextComp>
      </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    height: 36,
    width: 101,
    borderWidth: 2,
    borderColor: APPBLUE,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 14,
    fontFamily: Fonts.poppinsbold,
    fontWeight: '500',
    color: APPBLUE
  }
})
