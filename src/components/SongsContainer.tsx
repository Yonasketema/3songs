import { useEffect, useState } from "react";
import CreateSongForm from "./CreateSongForm";
import Modal from "./Modal";
import Row from "./Row";
import SongTable from "./SongTable";
import { PiPlus } from "react-icons/pi";
import Button from "./Button";
import Select from "./Select";
import Input from "./Input";
import styled from "styled-components";
import { CgSearch } from "react-icons/cg";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch } from "react-redux";
import { fetchSongs } from "../state/song/songSlice";

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  & svg {
    width: 2.2rem;
    height: 2.2rem;

    color: var(--color-brand-500);
    position: relative;
    right: 30px;
  }
`;

function SongsContainer() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectGenre, setSelectGenre] = useState("");
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const genreStats = useSelector(
    (state: RootState) => state.SongStats.genreStats
  );

  const options = genreStats.map(({ genre }) => ({
    label: genre,
    value: genre,
  }));

  useEffect(() => {
    if (searchText && searchText.length > 3) {
      dispatch(fetchSongs({ genre: selectGenre, key: searchText }));
    } else {
      dispatch(fetchSongs({ genre: selectGenre, key: "" }));
    }
  }, [dispatch, selectGenre, searchText]);

  function handleChange(e) {
    setSelectGenre(e.target.value);
  }

  return (
    <section
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2.7rem 0 1.4rem 0",
        }}
      >
        <h1>All songs</h1>
        <Row>
          <SearchInput>
            <Input
              type="text"
              placeholder="search title ..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <CgSearch />
          </SearchInput>

          <Select
            options={[{ label: "genre", value: "" }, ...options]}
            onChange={handleChange}
            value={selectGenre}
          />
          <Button
            variation="primary"
            size="small"
            onClick={() => setIsOpenModal(true)}
          >
            Add Song <PiPlus />{" "}
          </Button>
          {isOpenModal && (
            <Modal onClose={() => setIsOpenModal(false)}>
              <CreateSongForm onClose={() => setIsOpenModal(false)} />
            </Modal>
          )}
        </Row>
      </header>
      <SongTable />
    </section>
  );
}

export default SongsContainer;
