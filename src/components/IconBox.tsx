import styled from "styled-components";

const IconBox = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  border: 1px solid var(--color-grey-200);

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 1.7rem;
    height: 1.7rem;
    color: var(--color-brand-600);
  }
`;

export default IconBox;
