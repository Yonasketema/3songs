import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch } from "react-redux";
import { fetchSongs } from "../state/song/songSlice";

import { CgSearch } from "react-icons/cg";
import { PiPlus } from "react-icons/pi";
import Button from "./Button";
import Select from "./Select";
import Input from "./Input";
import CreateSongForm from "./CreateSongForm";
import Modal from "./Modal";
import Row from "./Row";

import styled from "styled-components";

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
const StyledSongFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.7rem 0 1.4rem 0;
`;

const SongFilter = () => {
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

  function handleChangeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectGenre(e.target.value);
  }

  return (
    <StyledSongFilter>
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
          onChange={handleChangeSelect}
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
    </StyledSongFilter>
  );
};

export default SongFilter;
