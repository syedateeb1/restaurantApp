import React from 'react'
import { View, StyleSheet } from 'react-native'
import Rating from 'react-native-easy-rating'
import TextComp from './TextComp'

import Location from '../../assets/location.svg'
import { Fonts } from '../constants/Fonts'
import { APPBLUE } from '../constants/Colors'

const ic_unselected = require('../../assets/ic_starunselected.png')
const slect_star = require('../../assets/select_star.png')

const MapCard = ({ item, visible }) => {
  return (
    <View style={[styles.topView, { borderTopWidth: visible ? 5 : 0 }]}>
      <TextComp style={styles.opentxt}>OPEN</TextComp>
      <TextComp style={styles.resturantName}>{item.name}</TextComp>
      <TextComp style={styles.locatoontxt}>{item.address}</TextComp>
      <View
        style={{
          paddingBottom: 16,
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
        <Rating
          style={{ marginTop: 5, marginLeft: 28 }}
          rating={5}
          max={5}
          iconWidth={8}
          iconHeight={8}
          // onRate={setRating}
          iconSelected={slect_star}
          iconUnselected={ic_unselected}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Location></Location>
          <TextComp style={styles.distancetxt}>{item.distance}</TextComp>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topView: {
    backgroundColor: 'white',
    marginRight: 12,
    width: 295,
    borderTopColor: APPBLUE,
    borderRadius: 4
  },
  opentxt: {
    marginLeft: 24,
    marginTop: 10,
    color: '#16804E',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: Fonts.poppinsbold
  },
  resturantName: {
    marginLeft: 24,
    marginTop: 10,
    color: '#212121',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Fonts.poppinsbold
  },
  locatoontxt: {
    marginLeft: 24,
    marginTop: 10,
    color: '#888888',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: Fonts.poppinsbold
  },
  distancetxt: {
    marginLeft: 2,
    color: '#888888',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: Fonts.poppinsbold,
    marginRight: 16
  }
})
export default MapCard
