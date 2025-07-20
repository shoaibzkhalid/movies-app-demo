import { View, Text, FlatList } from 'react-native'

import MovieCard from './MovieCard'
import { colors } from '@/styles/colors'
import { Movie } from '@/types/api/movies'
import { useSearchStore } from '@/stores/search.store'

type MoviesListProps = {
  movies: Movie[]
}

export default function MoviesList({ movies }: MoviesListProps) {
  const search = useSearchStore((store) => store.search)
  const searchOpen = useSearchStore((store) => store.searchOpen)

  return (
    <FlatList
      data={movies}
      bounces={false}
      keyboardShouldPersistTaps={'always'}
      keyboardDismissMode="on-drag"
      keyExtractor={(movie) => movie.id.toString()}
      contentContainerStyle={{ backgroundColor: colors.background }}
      ListHeaderComponent={() => {
        if (search) {
          return (
            <View className="mx-4 mt-10">
              <Text>{movies.length} Results Found</Text>
              <View className="my-2 h-px w-full bg-gray-300" />
            </View>
          )
        }
      }}
      ListEmptyComponent={() => (
        <>
          <Text className="my-5 text-center text-9xl text-white">📭</Text>
          <Text className="text-center text-lg text-black">No movies found</Text>
        </>
      )}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: movie }) => (
        <View className={`p-4`}>
          <MovieCard movie={movie} size={'medium'} />
        </View>
      )}
    />
  )
}
