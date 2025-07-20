export const getMoviePosterPath = (posterPath: string = '') => {
  return `https://image.tmdb.org/t/p/w500${posterPath}`
}

export const getMovieTrailerPath = (key: string = '') => {
  return `https://www.youtube.com/watch?v=${key}`
}
