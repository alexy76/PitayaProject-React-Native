import { Text, View, Image } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'

const ProductsScreen = ({route, navigation}) => {

  navigation.setOptions({ headerTitle : route.params.title})
console.log(route.params)
  return (
    <View style={{flex : 1, backgroundColor : 'black'}}>

      <View style={{ flex : 2, marginTop : 10}}>
        <Image source={require('../../assets/img/logo.png')} style={{ width : 'auto', height : '100%', resizeMode : 'contain' }} />
      </View>

      <View style={{flex : 4, justifyContent : 'center', alignItems : 'center'}}>
        <Image source={{ uri : route.params.img }} style={{ width : '80%', height : '80%', resizeMode : 'contain' }} />
      </View>

      <View style={{flex : 1, paddingHorizontal : 25 }}>
        <Text style={{ color : '#EC6810', fontSize : 30 }}>{route.params.title}</Text>
      </View>

      <View style={{flex : 4, paddingHorizontal : 25}}>
        <Text style={{ color : '#fff', fontSize : 20 }}>{route.params.describe}</Text>
        <Text>Supplément Piment</Text>
      </View>

      <View style={{flex : 2, paddingHorizontal : 30, justifyContent : 'center', alignItems : 'center'}}>
      <Button style={{ width : '100%', padding : 6, backgroundColor : '#EC6810' }} mode="contained" onPress={() => console.log('Pressed')}>
    <Text style={{ color : 'white', fontSize : 18 }}>COMMANDEZ MAINTENANT</Text>
  </Button>
      </View>
      
    </View>
  )
}

export default ProductsScreen