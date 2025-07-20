import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, Pressable } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'

import Icon from '@/components/Icon'
import MoviesList from '@/components/movie/MoviesList'
import { RootStackParamList } from '@/types/navigation/rootstack'
import { useGetUpcomingMovies } from '@/api/hooks/useGetUpcomingMovies'

export default function MoviesUpcoming() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const Header = () => {
    return (
      <View className="h-24 flex-row items-center justify-between bg-white">
        <View className="mx-5 flex-1 py-5">
          <Text className="text-2xl font-medium text-black">Watch</Text>
        </View>

        <Pressable
          hitSlop={20}
          onPress={() => navigation.navigate('MoviesSearch')}
          className="mx-5">
          <View className="mx-5 flex-row ">
            <Icon name="search" color="black" width={20} height={20} />
          </View>
        </Pressable>
      </View>
    )
  }

  const List = () => {
    const { data: upcoming, isLoading: loadingUpcoming, error } = useGetUpcomingMovies()

    if (loadingUpcoming) {
      return <Text className="mx-5 text-white">Loading...</Text>
    }

    const movies = upcoming?.results

    if (error || !movies) {
      return <Text className="mx-5 text-white">Error loading movies</Text>
    }

    return <MoviesList movies={movies} />
  }

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-white">
      <Header />
      <List />
    </SafeAreaView>
  )
}
