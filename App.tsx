/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import { useFonts, Baloo2_700Bold } from '@expo-google-fonts/baloo-2'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from './src/components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Baloo2_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <View>
      <Text>hELLO</Text>
      <StatusBar style="auto" />
    </View>
  )
}
