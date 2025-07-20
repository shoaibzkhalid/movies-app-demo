import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '@/api/config/axiosInstance'
import { MovieVideoResponse } from '@/types/api/movieVideos'

export const useGetMovieVideosQuery = (videoId: number) => {
  return useQuery({
    queryKey: ['movie-videos', videoId],
    queryFn: async (): Promise<MovieVideoResponse> => {
      const response = await axiosInstance.get(`/movie/${videoId}/videos`)

      return response.data
    },

    enabled: !!videoId,
  })
}
