import * as React from 'react'
import { View, Image, Button, ScrollView, TouchableOpacity } from 'react-native'
import { BottomNavigation, Text, Provider as PaperProvider, DefaultTheme } from 'react-native-paper'

// const theme = {
//   ...DefaultTheme,
// }

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

const FoodRoute = ({jumpto, route}) => {
  
  console.log(route)

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

        <ScrollView style={{ flex : 4, paddingVertical : 15 }}>

          <View style={{ height : 200, flexDirection : 'row' }}>
            
            <View style={{ flex : 1, padding : 30 }}>
              <TouchableOpacity onPress={() => route.navigation.navigation.navigate('screenProduct')}>
            <Image source={require('../../assets/img/crevetteGarlic.png')} style={{ width : 135, height : 135, resizeMode : 'contain' }} />
            </TouchableOpacity>
            </View>
            <View style={{ flex : 1, padding : 30 }}>
            <Image source={require('../../assets/img/crevetteGarlic.png')} style={{ width : 135, height : 135, resizeMode : 'contain' }} />
            </View>
          </View>
          <View style={{ height : 200, flexDirection : 'row' }}>
            
            <View style={{ flex : 1, padding : 30 }}>
              <TouchableOpacity onPress={() => route.navigation.navigation.navigate('screenProduct')}>
            <Image source={require('../../assets/img/crevetteGarlic.png')} style={{ width : 135, height : 135, resizeMode : 'contain' }} />
            </TouchableOpacity>
            </View>
            <View style={{ flex : 1, padding : 30 }}>
            <Image source={require('../../assets/img/crevetteGarlic.png')} style={{ width : 135, height : 135, resizeMode : 'contain' }} />
            </View>
          </View>

          <View style={{ height : 200, flexDirection : 'row' }}>
            
            <View style={{ flex : 1, padding : 30 }}>
              <TouchableOpacity onPress={() => route.navigation.navigation.navigate('screenProduct')}>
            <Image source={require('../../assets/img/crevetteGarlic.png')} style={{ width : 135, height : 135, resizeMode : 'contain' }} />
            </TouchableOpacity>
            </View>
            <View style={{ flex : 1, padding : 30 }}>
            <Image source={require('../../assets/img/crevetteGarlic.png')} style={{ width : 135, height : 135, resizeMode : 'contain' }} />
            </View>
          </View>

          <View style={{ height : 200, flexDirection : 'row' }}>
            
            <View style={{ flex : 1, padding : 30 }}>
              <TouchableOpacity onPress={() => route.navigation.navigation.navigate('screenProduct')}>
            <Image source={require('../../assets/img/crevetteGarlic.png')} style={{ width : 135, height : 135, resizeMode : 'contain' }} />
            </TouchableOpacity>
            </View>
            <View style={{ flex : 1, padding : 30 }}>
            <Image source={require('../../assets/img/crevetteGarlic.png')} style={{ width : 135, height : 135, resizeMode : 'contain' }} />
            </View>
          </View>

        </ScrollView>
  </View>

  

)
}



const InfoRoute = () => <Text>Infos</Text>;

const ContactRoute = () => <Text>Contact</Text>;

const TabNavigation = (props) => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home', color : '#EC6810' },
    { key: 'food', title: 'Food', icon: 'noodles', color : '#EC6810', navigation : props },
    { key: 'info', title: 'Info', icon: 'information', color : '#EC6810' },
    { key: 'contact', title: 'Contact', icon: 'card-account-mail', color : '#EC6810' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    food: FoodRoute,
    info: InfoRoute,
    contact: ContactRoute,
  });


  return (
    <PaperProvider>
      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </PaperProvider>
    
  );
};

export default TabNavigation;