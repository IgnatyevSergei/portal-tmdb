import { SET_ACTORS, SET_ACTOR_INFO, SET_ACTOR_MOVIE } from '../actions/actionActors';

const initialState = {
  actors: [],
  actorInfo: [],
  actorMovie: {}
};

export const actorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTORS:
      return {
        ...state,
        actors: action.payload,
      };
    case SET_ACTOR_INFO:
      return {
        ...state,
        actorInfo: action.payload,
      };
      case SET_ACTOR_MOVIE:
        return {
          ...state,
          actorMovie: action.payload
        };
    default:
      return state;
  }
};
