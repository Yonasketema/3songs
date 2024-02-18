import styled from "styled-components";

export const Table = styled.div`
  border: 1px solid var(--color-grey-100);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
`;

export const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 0.8fr 1fr 0.8fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-brand-400);
  padding: 1.6rem 2.4rem;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 1fr 0.8fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  font-weight: 500;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

export const Primary = styled.div`
  font-size: 1.6rem;
  color: var(--color-grey-700);
`;

export const Secondary = styled.div`
  font-size: 1.6rem;
  color: var(--color-grey-500);
`;
