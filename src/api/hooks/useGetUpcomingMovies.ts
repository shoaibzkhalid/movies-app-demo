import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/api/config/axiosInstance'
import { MoviesResultsResponse } from '@/types/api/movies'

const PAGE = 1

export const useGetUpcomingMovies = () => {
  return useQuery({
    queryKey: ['upcoming-movies'],
    queryFn: async (): Promise<MoviesResultsResponse> => {
      const response = await axiosInstance.get(`/movie/upcoming?page=${PAGE}`)

      return response.data
    },
  })
}
