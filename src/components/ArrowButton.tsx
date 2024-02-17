import styled from "styled-components";

const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: 100%;
  height: 3rem;
  width: 3rem;
  transition: all 0.2s;
  background-color: var(--color-grey-100);

  &:hover {
    background-color: var(--color-grey-200);
  }

  &:focus {
    outline: 1px solid var(--color-brand-50);
  }
  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;

export default ArrowButton;
