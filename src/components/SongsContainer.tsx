import { useState } from "react";
import CreateSongForm from "./CreateSongForm";
import Modal from "./Modal";
import Row from "./Row";
import SongTable from "./SongTable";

function SongsContainer() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <section
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>All songs</h1>
        <Row>
          <select>
            <option>Tizta</option>
            <option>Hip-pop</option>
          </select>
          <button onClick={() => setIsOpenModal(true)}>ADD</button>
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
