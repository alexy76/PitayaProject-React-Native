import * as React from 'react'
import { View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import {data} from '../../assets/json/products.js'


const FoodRoute = ({route}) => {

  return (
    <View style={{ flex : 1, backgroundColor : 'black' }}>

      <View style={{ flex : 1, paddingVertical : 15, flexDirection : 'row' }}>

        <View style={{ flex : 2 }}>
        <Image source={require('../../assets/img/logo.png')} style={{ width : 'auto', height : '100%', resizeMode : 'contain' }} />
        </View>

        <View style={{ flex : 2, marginTop : 15 }}>
          <Text style={{ fontSize : 32, color : 'white', textAlign : 'center', fontWeight : 'bold' }}>LA CARTE</Text>
        </View>

      </View>

      <View style={{ flex : 1, paddingHorizontal : 20, alignItems : 'center', justifyContent : 'center' }}>
        <Text style={{ fontSize : 36, color : 'white', textAlign : 'center' }}>Commandez votre plat</Text>
      </View>

      <View style={{ flex : 4, backgroundColor : '#0e0e0e' }}>
        <ScrollView style={{ flex : 6, paddingVertical : 15 }}>

          <View style={{ display : 'flex', flexDirection : 'row', flexWrap : 'wrap', justifyContent: 'center', alignItems : 'center' }}>
          
          {data.map((elt, key) =>  (

              <View key={key} style={{ flexShrink : 2, padding : 30, alignItems : 'center'}}>
                  <TouchableOpacity onPress={() => route.navigation.navigate('screenProduct', { title : elt.name, img : elt.image, describe : elt.describe })} onLongPress={() => console.log("coucou")}>
                      <Image source={{ uri : elt.image}} style={{ width : 120, height : 120, resizeMode : 'contain' }} />
                  </TouchableOpacity>
              </View>
              
            )
          )}
          </View>

        </ScrollView>
        </View>

  </View>



)
}

export default FoodRoute