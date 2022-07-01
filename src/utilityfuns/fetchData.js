export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "42239f1e4cmshd6b257584eac049p165435jsnac0c437315dc",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "42239f1e4cmshd6b257584eac049p165435jsnac0c437315dc",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
