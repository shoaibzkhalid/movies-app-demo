import { Text, Pressable } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'

import CustomImage from '@/components/CustomImage'
import { getMoviePosterPath } from '@/utils/paths'

import { Movie } from '@/types/api/movies'
import { RootStackParamList } from '@/types/navigation/rootstack'

type MovieCardProps = {
  movie: Movie
  size?: 'small' | 'medium'
}

export default function MovieCard({ movie, size = 'small' }: MovieCardProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const widthClass = size === 'small' ? 'w-84' : 'w-full'
  const imgWidthClass = size === 'small' ? 'w-72' : 'w-84'

  const handlePress = () => navigation.navigate('MovieDetails', { movie })

  return (
    <Pressable onPress={handlePress} className={`rounded-2xl  shadow-md ${widthClass}  bg-black`}>
      <CustomImage
        uri={getMoviePosterPath(movie.poster_path)}
        className={`h-64 ${imgWidthClass} rounded-xl`}
      />
      <Text className="absolute bottom-4 left-4 z-10 text-2xl font-semibold text-white">
        {movie.title}
      </Text>
    </Pressable>
  )
}
