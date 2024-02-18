import styled from "styled-components";
import Row from "./Row";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  border-bottom: 1px solid #eee;
  height: 9vh;
`;

function Header() {
  return (
    <StyledHeader>
      <Row>
        <h1>3songs</h1>
        <small>API</small>
      </Row>

      <button>Moon</button>
    </StyledHeader>
  );
}

export default Header;
