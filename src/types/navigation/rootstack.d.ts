import { Movie } from '@/types/api/movies'

export type RootStackParamList = {
  TabsHome: undefined

  //
  MoviesList: undefined
  MovieDetails: { movie: Movie }
  MoviePlayback: { videoId: string | undefined }
  MoviesSearch: undefined
  MovieSchedule: undefined
}
