import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TabNavigator from './TabNavigator'
import MovieDetails from '@/screens/watch/MovieDetails'
import MoviePlayback from '@/screens/watch/MoviePlayback'
import MoviesSearch from '@/screens/watch/MoviesSearch'
import { RootStackParamList } from '@/types/navigation/rootstack'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="TabsHome" component={TabNavigator} options={{ headerShown: false }} />
      <RootStack.Screen name="MovieDetails" component={MovieDetails} />
      <RootStack.Screen name="MoviesSearch" component={MoviesSearch} />
      <RootStack.Screen name="MoviePlayback" component={MoviePlayback} />
    </RootStack.Navigator>
  )
}
