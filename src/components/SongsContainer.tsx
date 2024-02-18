import { useState } from "react";
import CreateSongForm from "./CreateSongForm";
import Modal from "./Modal";
import Row from "./Row";
import SongTable from "./SongTable";
import { PiPlus } from "react-icons/pi";
import Button from "./Button";
import Select from "./Select";
import Input from "./Input";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";

const options = [
  {
    label: "Tizta",
    value: "tizta",
  },
  {
    label: "Hip-pop",
    value: "Hip-pop",
  },
  {
    label: "Ambasel",
    value: "Ambasel",
  },
  {
    label: "African Music",
    value: "African Music",
  },
];

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
  const [selectGenre, setSelectGenre] = useState("genre");

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
            <Input type="text" placeholder="type artist name ..." />
            <CgSearch />
          </SearchInput>
          <Select
            options={options}
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
