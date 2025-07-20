import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/api/config/axiosInstance'
import { MoviesResultsResponse } from '@/types/api/movies'

const PAGE = 1
const LANG = 'en-US'

export const useGetMovieSearchQuery = (search = '') => {
  return useQuery({
    queryKey: ['movies-search', search],
    queryFn: async (): Promise<MoviesResultsResponse> => {
      const response = await axiosInstance.get(
        `/search/movie?query=${encodeURIComponent(search)}&include_adult=false&language=${LANG}&page=${PAGE}`
      )

      return response.data
    },

    enabled: !!search,
  })
}
