import { ChartRow } from "./ChartRow";
import { TableRow } from "./TableRow";
import { useState } from "react";

export function TableBody({ row }) {
  let [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <TableRow
        data={row}
        toggleVisibility={setIsVisible}
        isVisible={isVisible}
      />
      {isVisible && <ChartRow row={row} />}
    </>
  );
}
