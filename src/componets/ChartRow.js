import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

export function ChartRow({ row }) {
  const data = Object.values(row);

  const options = {
    title: {
      text: "",
    },
    xAxis: {
      categories: ["Вчера", "Текущий день"],
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    series: [
      {
        name: row.metric,
        data: [row.yesterday, row.currentDay],
      },
    ],
  };

  return (
    <tr>
      <td className="chart" colSpan={data.length}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </td>
    </tr>
  );
}
