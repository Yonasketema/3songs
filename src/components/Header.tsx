import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  border-bottom: 1px solid #eee;
  margin-bottom: 1.5rem;
  height: 9vh;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>3songs</h1>
      <button>Moon</button>
    </StyledHeader>
  );
}

export default Header;
