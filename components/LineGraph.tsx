"use client";

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";

import { faker } from "@faker-js/faker";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Planner",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Planner",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(0, 130, 191)",
      backgroundColor: "rgb(0, 130, 191)",
    },
    {
      label: "Planner",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(86, 188, 110)",
      backgroundColor: "rgb(86, 188, 110)",
    },
  ],
};

const LineGraph = () => {
  return (
    <div className=" flex justify-center">
      <Line
        options={{ responsive: true, plugins: { legend: { position: "bottom", align: "start", labels: { boxWidth: 50, boxHeight: 20 } } } }}
        data={data}
      />
    </div>
  );
};
export default LineGraph;
