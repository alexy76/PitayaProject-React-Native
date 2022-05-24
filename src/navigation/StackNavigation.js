import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import TabNavigation from './TabNavigation'
import ProductsScreen from '../screens/ProductsScreen'

const { Navigator, Screen } = createNativeStackNavigator();

const StackNavigation = () => {
  return (
      <SafeAreaProvider>

          <NavigationContainer>

                <Navigator initialRouteName='bottomNav'>

                    <Screen name='bottomNav' component={TabNavigation} options={{headerShown : false}} />

                    <Screen name='screenProduct' component={ProductsScreen} options={{
                        headerTintColor: '#EC6810',
                        headerTitle : 'test',
                        headerTitleStyle: {
                          color : '#EC6810'
                        },
                        headerStyle :{
                            backgroundColor : '#0e0e0e',
                            color : 'white'
                        }
                    }}/>

                </Navigator>

          </NavigationContainer>

          

      </SafeAreaProvider>
  )
}

export default StackNavigation