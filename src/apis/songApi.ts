import fetcher from "../lib/fetcher";
import { Song } from "../state/song/songSlice";
import { baseURL } from "./api-client";

type Query = {
  key?: string;
  genre?: string;
};

export const fetchSongsApi = (q: Query) => {
  return fetcher({
    url: baseURL + `/songs?genre=${q.genre}&key=${q.key}`,
    method: "GET",
  });
};

export const createSongsApi = (data: Song) => {
  return fetcher({
    url: baseURL + "/songs",
    method: "POST",
    body: data,
  });
};

export const updateSongsApi = (data: Song) => {
  return fetcher({
    url: baseURL + `/songs/${data.id}`,
    method: "PATCH",
    body: data,
  });
};
export const deleteSongsApi = (data: Song) => {
  return fetcher({
    url: baseURL + `/songs/${data.id}`,
    method: "DELETE",
    json: false,
  });
};
