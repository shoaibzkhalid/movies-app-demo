// types/api/models/MovieVideo.ts

export interface MovieVideoResponse {
  id: number
  results: MovieVideo[]
}

export interface MovieVideo {
  id: string
  iso_639_1: string
  iso_3166_1: string
  key: string
  name: string
  site: 'YouTube' | 'Vimeo' | string
  size: number
  type: 'Trailer' | 'Teaser' | 'Clip' | 'Featurette' | string
  official: boolean
  published_at: string
}
