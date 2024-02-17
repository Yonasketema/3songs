import styled from "styled-components";

const Box = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  border: 1px solid #c7d2fe;
  padding: 1rem 3.5rem;
  width: 21rem;
  border-radius: var(--border-radius-sm);
`;

function StatusBox() {
  return (
    <Box>
      <div>
        <h6>Total Songs</h6>
        <h3>120</h3>
      </div>
      <div>icon</div>
    </Box>
  );
}

export default StatusBox;
