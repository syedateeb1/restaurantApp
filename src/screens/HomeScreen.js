import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'
import Header from '../components/Header'
import { Fonts } from '../constants/Fonts'
import Open from '../../assets/ic_open.svg'
import ListCard from '../components/ListCard'
import { APPBLUE } from '../constants/Colors'
import Button from '../components/Button'
import { dummydata } from '../data/dummydata'
import ROUTES from '../constants/Routes'

const Home = ({ navigation }) => {
  const flatlistheader = () => {
    return (
      <View style={styles.container}>
        <Button
          buttonText="Open Now"
          onPress={() => navigation.navigate(ROUTES.map)}></Button>
        <View style={{ marginRight: 30 }}>
          <Open></Open>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <Header style={{ fontSize: 20 }} headertxt="Restaurants" />
        <TouchableOpacity>
          <Text style={styles.fvrtTxt}>Favourites</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 25 }}
        data={dummydata}
        ListHeaderComponent={flatlistheader}
        renderItem={({ item }) => <ListCard item={item} />}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  fvrtTxt: {
    position: 'absolute',
    fontSize: 13,
    fontWeight: '500',
    color: APPBLUE,
    right: 15,
    top: 5,
    fontFamily: Fonts.poppinsbold
  },
  bannerView: {
    marginLeft: 16,
    height: 36,
    width: 101,
    borderWidth: 1,
    borderColor: APPBLUE,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center'
  }
})
export default Home
