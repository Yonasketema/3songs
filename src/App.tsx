import styled from "styled-components";
import SideBar from "./components/SideBar";
import SongStats from "./components/SongStats";
import SongsContainer from "./components/SongsContainer";
import Header from "./components/Header";
import FullPageSpinner from "./components/FullPageSpinner";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSongs } from "./state/song/songSlice";

const StyledMain = styled.main`
  height: 88vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 1fr 1fr;
  padding-right: 0;
  padding: 0 1rem;
`;
const INBOX = styled.div`
  overflow-y: scroll;
  height: 88vh;
  padding: 1.7rem 1rem;
`;

function App() {
  const song = useSelector((state: RootState) => state.song);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(
      fetchSongs({
        genre: song.selectedGenre,
        key: (song.searchText.length >= 3 && song.searchText) || "",
      })
    );
  }, [dispatch, song.selectedGenre, song.searchText]);

  return (
    <>
      <Header />
      {song.isLoadingFetchSong &&
      song.songs.length === 0 &&
      !song.searchText ? (
        <FullPageSpinner />
      ) : (
        <StyledMain>
          <INBOX>
            <SongStats />
            <SongsContainer />
          </INBOX>
          <SideBar />
        </StyledMain>
      )}
    </>
  );
}

export default App;
