import styled from "styled-components";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

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

const startDataLight = [
  {
    duration: "1 night",
    value: 0,
    color: "#ef4444",
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#f97316",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#eab308",
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#84cc16",
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#22c55e",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#14b8a6",
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#3b82f6",
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#a855f7",
  },
];

const startDataDark = [
  {
    duration: "1 night",
    value: 0,
    color: "#b91c1c",
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#c2410c",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#a16207",
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#4d7c0f",
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#15803d",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#0f766e",
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#1d4ed8",
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#7e22ce",
  },
];

const apidata = [
  {
    _id: "my",
    size: 2,
  },
  {
    _id: "African Music",
    size: 5,
  },
  {
    _id: "hip-pop",
    size: 3,
  },
  {
    _id: "ethio",
    size: 1,
  },
];

function GenreChart() {
  const data = apidata.map((data) => ({ ...data, color: "#1d4ed8" }));

  return (
    <ChartBox>
      <h3>songs in every genre</h3>
      <ResponsiveContainer
        width="100%"
        height={151}
        style={{ fontSize: "1.2rem" }}
      >
        <PieChart>
          <Pie
            data={data}
            nameKey="_id"
            dataKey="size"
            innerRadius={51}
            outerRadius={71}
            cx="40%"
            cy="50%"
            paddingAngle={3}
          >
            {data.map((data) => (
              <Cell key={data.size} fill={data.color} stroke={data.color} />
            ))}
          </Pie>
          <Tooltip />

          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
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
