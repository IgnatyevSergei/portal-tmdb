import { options } from '../components/service/service';

export const SET_ACTORS = 'SET_ACTORS';
export const SET_ACTOR_INFO = 'SET_ACTOR_INFO';
export const SET_ACTOR_MOVIE = 'SET_ACTOR_MOVIE';

export const setActorsAC = (actorsData) => ({
  type: SET_ACTORS,
  payload: actorsData,
});

export const setActorInfoAC = (actorInfoData) => ({
  type: SET_ACTOR_INFO,
  payload: actorInfoData,
});

export const setActorMovieAC = (movieData) => ({
  type: SET_ACTOR_MOVIE,
  payload: movieData,
});

const transformActorsData = (result) => {
  const transformData = result.results.map((el) => {
    return {
      id: el.id,
      name: el.name,
      posterPath: el.profile_path,
    };
  });

  return transformData;
};

const transformActorInfoData = (response) => {
  const transformData = {
    name: response.name,
    birthday: response.birthday,
    placeOfBirth: response.place_of_birth,
    deathday: response.deathday,
    biography: response.biography,
    poster: response.profile_path,
  };
  return transformData;
};

const transformActorMovieData = (respose) => {
  const sortData = respose.sort((a, b) =>
    b.vote_average > a.vote_average ? 1 : -1
  );
  sortData.length = 5;
  const transformData = sortData.map((el) => {
    return {
      title: el.title,
      releaseDate: el.release_date,
      poster: el.poster_path,
      raiting: el.vote_average,
    };
  });
  return transformData;
};

export const getActorsData =
  (page = 1) =>
  (dispatch) => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const res = transformActorsData(response);
        dispatch(setActorsAC(res));
      })
      .catch((err) => console.error(err));
  };

export const getActorInfoData = (id) => (dispatch) => {
  fetch(`https://api.themoviedb.org/3/person/${id}?language=en-US`, options)
    .then((response) => response.json())
    .then((response) => {
      const res = transformActorInfoData(response);
      dispatch(setActorInfoAC(res));
    })
    .catch((err) => console.error(err));
};

export const getActorMovieData = (id) => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const res = transformActorMovieData(response.cast);
      console.log(response.cast);
    })
    .catch((err) => console.error(err));
};
