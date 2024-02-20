import { BiAlbum } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdAlbum, MdMusicNote } from "react-icons/md";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-grey-100);
  padding: 1rem 3.5rem;
  text-align: center;
  color: var(--color-grey-500);
  border-radius: var(--border-radius-sm);

  h3 {
    color: var(--color-brand-900);
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 100%;
  background-color: var(--color-brand-200);
  opacity: 0.9;
`;

interface Data {
  label: string;
  number: number;
}

type StatusBoxProps = {
  data: Data;
};

function StatusBox({ data }: StatusBoxProps) {
  return (
    <Box>
      <div>
        <h6>Total {data.label}</h6>
        <h3>{data.number}</h3>
      </div>
      <div>
        {data.label === "artist" && (
          <IconBox>
            <CgProfile size={24} color={"var(--color-brand-500)"} />
          </IconBox>
        )}
        {data.label === "songs" && (
          <IconBox>
            <MdMusicNote size={24} color={"var(--color-brand-500)"} />
          </IconBox>
        )}
        {data.label === "album" && (
          <IconBox>
            <MdAlbum size={24} color={"var(--color-brand-500)"} />
          </IconBox>
        )}
        {data.label === "genre" && (
          <IconBox>
            <BiAlbum size={24} color={"var(--color-brand-500)"} />
          </IconBox>
        )}
      </div>
    </Box>
  );
}

export default StatusBox;
