import "./App.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Задачи", "Часов в день"],
  ["Работа", 12],
  ["Прием пищи", 1],
  ["Учеба", 2],
  ["Прогулка", 2],
  ["Сон", 7], // CSS-style declaration
];

export const options = {
  title: "Мои ежедневные активности",
  pieHole: 0.4,
  is3D: false,
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
export default App;
