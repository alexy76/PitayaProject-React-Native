import React from 'react'
import StackNavigation from './src/navigation/StackNavigation'
import { Provider as PaperProvider } from 'react-native-paper' 

const App = () => (

    <PaperProvider>
        <StackNavigation />
    </PaperProvider>

)

export default App