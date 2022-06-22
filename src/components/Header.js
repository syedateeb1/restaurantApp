import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import TextComp from './TextComp'
import { Fonts } from '../constants/Fonts'
import BackIcon from '../../assets/ic_back.svg'

const Header = props => {
  const { headertxt, style, headertxtStyle, onBackPress } = props
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={{ zIndex: 1 }} onPress={onBackPress}>
        <View style={{ marginLeft: 18 }}>
          <BackIcon></BackIcon>
        </View>
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          width: '100%'
        }}>
        <TextComp style={[styles.headertxt, headertxtStyle]}>
          {headertxt}
        </TextComp>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  backimage: {
    height: 22,
    tintColor: 'black',
    width: 22
  },
  headertxt: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontFamily: Fonts.poppinsbold,
    fontWeight: '700'
  }
})

export default Header
