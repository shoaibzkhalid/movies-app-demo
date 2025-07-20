import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/api/config/axiosInstance'
import { MovieDetails } from '@/types/api/movieDetails'

export const useGetMovieQuery = (id: number) => {
  return useQuery({
    queryKey: ['movie', id],
    queryFn: async (): Promise<MovieDetails> => {
      const response = await axiosInstance.get(`/movie/${id}`)

      return response.data
    },
  })
}
