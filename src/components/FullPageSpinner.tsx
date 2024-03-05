import styled from "styled-components";
import Spinner from "./Spinner";
import { CgMusic } from "react-icons/cg";
import Row from "./Row";

const FullPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;
const Box = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    position: relative;
    left: -50%;
    font-size: 3rem;
  }
`;

const FullPageSpinner = () => {
  return (
    <FullPage>
      <span>
        <Box>
          <Spinner width="12rem" />
          <CgMusic />
        </Box>

        <Row>
          <h1>3songs</h1>
          <small>API</small>
        </Row>
      </span>
    </FullPage>
  );
};

export default FullPageSpinner;
