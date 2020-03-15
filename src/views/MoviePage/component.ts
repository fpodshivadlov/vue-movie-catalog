import MovieOverview from '@/components/MovieOverview/MovieOverview.vue'
import { MovieItem } from '@/data/types'
import movies from '@/data/movies'

const movieItem: MovieItem = movies[0];

export default {
  name: 'MoviePage',
  data: () => {
    return {
      movieItem,
    };
  },
  components: {
    MovieOverview,
  }
}
