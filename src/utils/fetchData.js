export const exersiseOption = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const URL = "https://exercisedb.p.rapidapi.com/exercises";

export const fetchData = async (url, Option) => {
  const res = await fetch(url, Option);
  const data = await res.json();

  return data;
};

