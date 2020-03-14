import MovieOverview from '@/components/MovieOverview/MovieOverview.vue'
import { MovieItem } from '@/components/MovieOverview/component'

const movieItem: MovieItem = {
  name: "Jay and Silent Bob Strike Back",
  year: 2001,
  genres: [ "Comedy" ],
  imageUrl: "https://m.media-amazon.com/images/M/MV5BY2EyYWEwZmQtZWU0Yy00M2Y3LThiZTktOTQxZDUxY2ZjOTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  rating: 6.8,
  durationMinutes: 104,
  description: "The comic 'Bluntman and Chronic' is based on real-life stoners Jay and Silent Bob, so when they get no profit from a big-screen adaptation, they set out to wreck the movie.",
};

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
