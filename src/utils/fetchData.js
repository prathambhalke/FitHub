export const excerciseOptions = {
  method: "GET",
  params: { limit: "100" },
  headers: {
    "X-RapidAPI-Key": "238dc330a1msh459d5d89b0ef176p15f593jsn8a89f65a7cd2",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (API, options) => {
  const response = await fetch(API, options);
  const data = await response.json();

  return data;
};
