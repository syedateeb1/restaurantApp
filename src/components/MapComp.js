import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import { requestLocationPermission } from '../constants/utils'
import RestaurantImage from '../../assets/restaurant_image.svg'
import RedMarker from '../../assets/marker.svg'
import BlueMarker from '../../assets/bluemarker.svg'
import { dummydata } from '../data/dummydata'

const MapComp = ({ visibleIndex }) => {
  const myMapView = useRef(null)
  const initLoc = { latitude: 37.78825, longitude: -122.4324 }
  const [myLocation, setMyLocation] = useState(initLoc)

  useEffect(() => {
    _getLocationAsync()
  }, [])

  const _getLocationAsync = async () => {
    const granted =
      Platform.OS === 'android' ? await requestLocationPermission() : true
    if (granted) {
      Geolocation.getCurrentPosition(
        // Will give you the current location
        position => {
          // console.log({ position })
          const { latitude, longitude } = position.coords
          myMapView?.current?.animateCamera(
            {
              center: {
                latitude,
                longitude
              },
              zoom: 18,
              altitude: Platform.OS === 'ios' ? 3000 : 5
            },
            { duration: 1000 }
          )
          setMyLocation(position.coords)
        },
        error => console.log(error.message),
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000
        }
      )
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : null} // remove if not using Google Maps
        style={styles.map}
        showsUserLocation
        userLocationPriority="high"
        zoomEnabled
        ref={myMapView}>
        {dummydata.map((item, index) => {
          const selected = visibleIndex === index
          const latitude =
            myLocation.latitude + dummydata[visibleIndex].randDistance
          const longitude =
            myLocation.longitude + dummydata[visibleIndex].randDistance
          myMapView?.current?.animateCamera(
            {
              center: {
                latitude,
                longitude
              },
              zoom: 18,
              altitude: Platform.OS === 'ios' ? 3000 : 5
            },
            { duration: 1000 }
          )
          return (
            <Marker
              key={item.id}
              style={{ width: 30, height: 30 }}
              coordinate={{
                latitude: Number(myLocation.latitude + item.randDistance),
                longitude: Number(myLocation.longitude + item.randDistance)
              }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <RestaurantImage width={selected ? 25 : 18}></RestaurantImage>
                <View
                  style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    paddingTop: 10
                  }}>
                  {selected ? (
                    <RedMarker width={35}></RedMarker>
                  ) : (
                    <BlueMarker></BlueMarker>
                  )}
                </View>
              </View>
            </Marker>
          )
        })}
      </MapView>
    </View>
  )
}

export default MapComp
const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: 25,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})
