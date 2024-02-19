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

export const createSongApi = (data: Song) => {
  return fetcher({
    url: baseURL + "/songs",
    method: "POST",
    body: data,
  });
};

export const updateSongApi = (data: Song) => {
  return fetcher({
    url: baseURL + `/songs/${data.id}`,
    method: "PATCH",
    body: data,
  });
};
export const deleteSongApi = (data: Song) => {
  return fetcher({
    url: baseURL + `/songs/${data.id}`,
    method: "DELETE",
    json: false,
  });
};
