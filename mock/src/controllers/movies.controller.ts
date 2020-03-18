import { Request, Response, Router } from 'express';

import { GetRequestParams, SearchRequestParams, ParamsDictionary } from '../types';
import MoviesRepository from '../repository/movies.repository';

export default class PostsController {
  public router = Router();

  private repo = new MoviesRepository();

  constructor() {
    this.router.get('/api/movies', this.searchMovies);
    this.router.get('/api/movies/:id', this.getMovie);
  }

  searchMovies = (req: Request, res: Response) => {
    const query: SearchRequestParams = req.query;

    const result = this.repo.getMovies(
      query.search,
      query.searchBy,
      query.sortBy,
      query.sortOrder,
      parseInt(query.limit) || 10,
      parseInt(query.offset) || 0,
    );

    res.send(result);
  }

  getMovie = (req: Request<GetRequestParams & ParamsDictionary>, res: Response) => {
    const id = parseInt(req.params.id);
    if (!id) {
      return res.status(400).send({
        error: 'Bad Request'
      });
    }

    const movie = this.repo.getMovie(id);
    if (!movie) {
      return res.status(404).send({
        error: 'Not Found'
      });
    }

    res.send(movie);
  }
}
