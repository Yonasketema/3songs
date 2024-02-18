import fetcher from "../lib/fetcher";
import { Song } from "../state/song/songSlice";

const baseURL = "http://localhost:8000";

export const fetchSongsApi = () => {
  return fetcher({ url: baseURL + "/api/v1/songs", method: "GET" });
};

export const createSongsApi = (data: Song) => {
  return fetcher({
    url: baseURL + "/api/v1/songs",
    method: "POST",
    body: data,
  });
};

export const updateSongsApi = (data: Song) => {
  return fetcher({
    url: baseURL + `/api/v1/songs/${data.id}`,
    method: "PATCH",
    body: data,
  });
};
