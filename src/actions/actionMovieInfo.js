import { options } from '../components/service/service';

export const SET_MOVIE_INFO = 'SET_MOVIE_INFO';
export const SET_CAST = 'SET_CAST';

export const setMovieInfoAC = (movieInfoData) => ({
  type: SET_MOVIE_INFO,
  payload: movieInfoData,
});

export const setCastAC = (cast) => ({ type: SET_CAST, payload: cast });

const transformMovieInfoData = (response) => {
  const transformData = {
    budget: response.budget,
    genres: response.genres,
    homepage: response.homepage,
    overview: response.overview,
    poster: response.poster_path,
    title: response.title,
    release: response.release_date,
    runtime: response.runtime,
    raiting: response.vote_average,
  };
  return transformData;
};

const transformCatsInformation = (respose) => {
  const transformdata = respose.map((el) => {
    return {
      name: el.name,
      character: el.character,
    };
  });
  transformdata.length = 10;
  transformdata.push({name: 'and others'})
  return transformdata;
};

export const getMovieInfoData = (id) => (dispatch) => {
  fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    .then((response) => response.json())
    .then((response) => {
      const res = transformMovieInfoData(response);
      dispatch(setMovieInfoAC(res));
    })
    .catch((err) => console.error(err));
};

export const getCast = (id) => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const res = transformCatsInformation(response.cast);
      dispatch(setCastAC(res));
    })
    .catch((err) => console.error(err));
};
