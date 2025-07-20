export const getGenreColor = (genre: string): string => {
  switch (genre.toLowerCase()) {
    case 'action':
      return '#E53935' // red
    case 'adventure':
      return '#FDD835' // yellow
    case 'animation':
      return '#00ACC1' // teal
    case 'comedy':
      return '#FFB300' // amber
    case 'crime':
      return '#6D4C41' // brown
    case 'documentary':
      return '#26A69A' // cyan
    case 'drama':
      return '#5C6BC0' // indigo
    case 'family':
      return '#8D6E63' // soft brown
    case 'fantasy':
      return '#AB47BC' // purple
    case 'history':
      return '#8E24AA' // deep purple
    case 'horror':
      return '#D81B60' // pink red
    case 'music':
      return '#3949AB' // blue
    case 'mystery':
      return '#455A64' // blue-grey
    case 'romance':
      return '#EC407A' // pink
    case 'science fiction':
      return '#7E57C2' // violet
    case 'tv movie':
      return '#9E9E9E' // gray
    case 'thriller':
      return '#EF6C00' // orange
    case 'war':
      return '#B71C1C' // dark red
    case 'western':
      return '#A1887F' // light brown
    default:
      return '#BDBDBD' // fallback gray
  }
}
