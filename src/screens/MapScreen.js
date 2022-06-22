import React, { useState } from 'react'
import { Dimensions, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'
import Header from '../components/Header'
import MapCard from '../components/MapCard'
import MapComp from '../components/MapComp'
import { dummydata } from '../data/dummydata'

const Map = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <SafeAreaView>
      <Header headertxt="Restaurants" onBackPress={() => navigation.goBack()} />
      <MapComp visibleIndex={currentIndex}></MapComp>
      <View style={{ position: 'absolute', bottom: '12%' }}>
        <Carousel
          data={dummydata}
          onSnapToItem={index => setCurrentIndex(index)}
          renderItem={({ item, index }) => (
            <MapCard item={item} visible={index === currentIndex} />
          )}
          sliderWidth={Dimensions.get('screen').width}
          itemWidth={295}
        />
      </View>
    </SafeAreaView>
  )
}
export default Map
