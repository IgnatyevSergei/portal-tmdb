export const transfortMovesData = (result) => {
  const transformData = result.results.map((el) => {
    return {
      id: el.id,
      title: el.title,
      raiting: el.vote_average,
      posterPath: el.poster_path,
    };
  });

  return transformData;
};
