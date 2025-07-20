import { Image } from 'expo-image'
import { ActivityIndicator, Alert, ScrollView, Text, View } from 'react-native'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import { colors } from '@/styles/colors'
import BackButton from '@/components/BackButton'
import CustomButton from '@/components/CustomButton'

import { Movie } from '@/types/api/movies'
import { RootStackParamList } from '@/types/navigation/rootstack'

import { formatDate } from '@/utils/datetime'
import { getGenreColor } from '@/utils/genresColors'
import { getMoviePosterPath } from '@/utils/paths'

import { useGetMovieQuery } from '@/api/hooks/useMovieQuery'
import { useGetMovieVideosQuery } from '@/api/hooks/useGetMovieVideosQuery'

export default function MovieDetails() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const route = useRoute<RouteProp<{ params: { movie: Movie } }, 'params'>>()

  const movieId = route.params.movie.id

  const { data: movie, isLoading, error: movieQueryError } = useGetMovieQuery(movieId)
  const { data: videos, error, isLoading: videosLoading } = useGetMovieVideosQuery(movieId)

  if (isLoading || videosLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size={'large'} color={colors.primary} />
      </View>
    )
  }

  if (error || movieQueryError || !movie) {
    return (
      <View className="flex-1 items-center justify-center">
        <BackButton />
        <Text className="mx-5 text-black">Error loading movies</Text>
      </View>
    )
  }

  const trailer = videos?.results.find((v) => v.type === 'Trailer' && v.site === 'YouTube')

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="absolute top-14 z-20  flex-row items-center">
        <BackButton />
        <Text className="text-2xl font-medium text-white">Watch</Text>
      </View>

      <View>
        <Image source={getMoviePosterPath(movie.poster_path)} style={{ height: 450 }} />
        <View className="absolute bottom-4 left-0 right-0 items-center">
          <Text className="text-2xl text-white">In theaters {formatDate(movie?.release_date)}</Text>

          <CustomButton
            title={'Get Tickets'}
            onPress={() => Alert.alert('This feature is under development')}
            color={'primary'}
          />
          <CustomButton
            title={'Watch Trailer'}
            icon="play"
            onPress={() => navigation.navigate('MoviePlayback', { videoId: trailer?.key })}
            color={'transparent'}
          />
        </View>
      </View>

      <Text className="m-4 text-lg">Genres</Text>
      <View className="m-4 flex-row flex-wrap gap-2">
        {movie.genres.map((genre, index) => (
          <Text
            key={index}
            className="rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: getGenreColor(genre.name) }}>
            {genre.name}
          </Text>
        ))}
      </View>

      <View className="my-2 h-px w-full bg-gray-300" />
      <Text className="m-4 text-lg">Overview</Text>
      <Text className="m-4 text-lg">{movie.overview}</Text>
    </ScrollView>
  )
}
