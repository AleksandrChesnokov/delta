import { TableBody } from "../componets/TableBody";
import data from "../data.json";

export function Table() {
  const { columns, rows } = data;

  return (
    <main>
      <table>
        <thead>
          <tr>
            {columns.map((colum, i) => (
              <th key={i}>{colum}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <TableBody key={i} row={row} />
          ))}
        </tbody>
      </table>
    </main>
  );
}
