import styled from "styled-components";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGenreStats } from "../state/song/songStatsSlice";

const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > h3 {
    color: var(--color-grey-600);
  }

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

function GenreChart() {
  const genreStats = useSelector(
    (state: RootState) => state.SongStats.genreStats
  );

  const data = genreStats.map((data, i) => ({
    ...data,
    color: "#" + Math.floor(Math.random() * 16777215 - i).toString(16),
  }));

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGenreStats());
  }, [dispatch]);

  return (
    <ChartBox>
      <h3>Songs in every genre</h3>
      <ResponsiveContainer
        width="100%"
        height={151}
        style={{ fontSize: "1.2rem" }}
      >
        <PieChart>
          <Pie
            data={data}
            nameKey="genre"
            dataKey="number"
            innerRadius={51}
            outerRadius={71}
            cx="40%"
            cy="50%"
            paddingAngle={3}
          >
            {data.map((data) => (
              <Cell key={data.number} fill={data.color} stroke={data.color} />
            ))}
          </Pie>
          <Tooltip />

          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconSize={15}
            iconType="circle"
            fontSize="1px"
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default GenreChart;
