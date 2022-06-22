import { PermissionsAndroid, Alert } from 'react-native'

export const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    }
    Alert.alert('Location permission denied')
    return false
  } catch (err) {
    return false
  }
}
