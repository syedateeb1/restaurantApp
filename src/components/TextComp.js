import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Fonts } from '../constants/Fonts'

const TextComp = props => {
  const { children, style, numberOfLines = 2 } = props
  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: { fontFamily: Fonts.poppinsbold, fontSize: 18, color: 'white' }
})

export default TextComp
