import fetcher from "../lib/fetcher";
import { Song } from "../state/song/songSlice";
import { baseURL } from "./api-client";

export const fetchSongsApi = () => {
  return fetcher({ url: baseURL + "/songs", method: "GET" });
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
