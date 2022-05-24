import * as React from 'react'
import { View, Image } from 'react-native'
import { Text } from 'react-native-paper'

const HomeRoute = () => (
<View style={{ flex : 1, backgroundColor : 'black' }}>
  <View style={{ flex : 3, paddingVertical : 15 }}>
    <Image source={require('../../assets/img/logo.png')} style={{ width : 'auto', height : '100%', resizeMode : 'contain' }} />
  </View>
  <View style={{ flex : 5, paddingHorizontal : 15, paddingVertical : 15 }}>
    <Image source={require('../../assets/img/PITAYA-131.jpg')} style={{ width : 'auto', height : '100%', resizeMode : 'contain', rounded : 50 }} />
  </View>
  <View style={{ flex : 1, justifyContent : 'center', alignItems : 'center' }}>
    <Text style={{ fontSize : 26, color : 'white' }}>La Street Food de Bangkok</Text>
  </View>
</View>
);

export default HomeRoute