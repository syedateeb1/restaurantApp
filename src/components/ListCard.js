import React from 'react'
import { StyleSheet, View } from 'react-native'
import Rating from 'react-native-easy-rating'
import RestaurantImage from '../../assets/restaurant_image.svg'
import Star from '../../assets/ic_star.svg'
import Location from '../../assets/location.svg'
import { APPGRAY } from '../constants/Colors'
import { Fonts } from '../constants/Fonts'
import TextComp from './TextComp'

const ic_unselected = require('../../assets/ic_starunselected.png')
const slect_star = require('../../assets/select_star.png')

const ListCard = ({ item }) => {
  return (
    <View style={{ marginBottom: 11, backgroundColor: 'white' }}>
      <View style={styles.topContainer}>
        <RestaurantImage style={styles.Img}></RestaurantImage>
        <View style={{ marginLeft: 13 }}>
          <TextComp style={styles.toptxt}>{item.name}</TextComp>
          <TextComp style={styles.midtxt}>{item.address}</TextComp>
          <Rating
            style={{ marginTop: 5 }}
            rating={5}
            max={5}
            iconWidth={8}
            iconHeight={8}
            iconSelected={slect_star}
            iconUnselected={ic_unselected}
          />
          <View
            style={{
              marginTop: 11,
              flexDirection: 'row',
              paddingBottom: 17,
              alignItems: 'center'
            }}>
            <Location></Location>
            <TextComp
              style={{
                marginLeft: 4,
                fontSize: 12,
                fontWeight: '400',
                color: '#888888'
              }}>
              {item.distance}
            </TextComp>
          </View>
        </View>
        <View style={styles.durationtxt}>
          <Star style={{ alignSelf: 'center' }}></Star>
        </View>
      </View>
    </View>
  )
}
export default ListCard
const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    marginTop: 18
  },
  Img: { marginLeft: 20, height: 50, width: 50, borderRadius: 10 },
  toptxt: {
    fontSize: 16,
    color: '#212121',
    fontFamily: Fonts.poppinsbold,
    fontWeight: '600'
  },
  midtxt: {
    fontSize: 12,
    color: '#888888',
    marginTop: 0,
    fontFamily: Fonts.poppinsregular,
    fontWeight: '400'
  },
  bottomtxt: {
    fontSize: 8,
    color: APPGRAY,
    marginTop: 5,
    width: '35%',
    fontFamily: Fonts.poppinsregular
  },
  durationtxt: {
    fontSize: 8,
    backgroundColor: '#F0F0F3',
    position: 'absolute',
    top: 10,
    right: 17,
    height: 29,
    width: 29,
    justifyContent: 'center',
    borderRadius: 5
  },
  dividerView: {
    width: '80%',
    height: 1,
    backgroundColor: APPGRAY,
    marginTop: 20,
    alignSelf: 'center',
    marginLeft: 65
  }
})
