import fetcher from "../lib/fetcher";
import { baseURL } from "./api-client";

export const fetchSongStatsApi = () => {
  return fetcher({ url: baseURL + "/songs/songs-stats", method: "GET" });
};
export const fetchGenreStatsApi = () => {
  return fetcher({ url: baseURL + "/songs/genre-stats", method: "GET" });
};
export const fetchAlbumStatsApi = () => {
  return fetcher({ url: baseURL + "/songs//album-stats", method: "GET" });
};
export const fetchArtistStatsApi = () => {
  return fetcher({ url: baseURL + "/songs/artist-stats", method: "GET" });
};
