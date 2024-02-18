import styled from "styled-components";
import Row from "./Row";
import DarkModeButton from "./DarkModeButton";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  border-bottom: 1px solid var(--color-grey-100);
  height: 9vh;
`;

function Header() {
  return (
    <StyledHeader>
      <Row>
        <h1>3songs</h1>
        <small>API</small>
      </Row>

      <DarkModeButton />
    </StyledHeader>
  );
}

export default Header;
