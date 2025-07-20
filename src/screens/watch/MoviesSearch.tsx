import { View, Text, SafeAreaView } from 'react-native'

import SearchBar from '@/components/SearchBar'
import { useSearchStore } from '@/stores/search.store'
import MoviesList from '@/components/movie/MoviesList'
import { useGetMovieSearchQuery } from '@/api/hooks/useGetMovieSearchQuery'

const MoviesSearch = () => {
  const List = () => {
    const search = useSearchStore((store) => store.search)
    const { data: searched, isLoading, error } = useGetMovieSearchQuery(search)

    if (isLoading) {
      return <Text className="mx-5 text-black">Loading...</Text>
    }

    if (error) {
      return <Text className="mx-5 text-black">Error loading movies</Text>
    }

    return <MoviesList movies={searched?.results || []} />
  }

  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-between bg-white">
        <SearchBar />
      </View>

      <List />
    </SafeAreaView>
  )
}

export default MoviesSearch
