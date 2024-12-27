export function TableRow({ data, toggleVisibility, isVisible }) {
  const handleRowClick = () => toggleVisibility(!isVisible);

  const { currentDay, yesterday } = data;
  const getCellClass = (key) => {
    if (key === "yesterday") {
      if (currentDay > yesterday) return "green";
      if (currentDay < yesterday) return "red";
    }
    return "";
  };

  const calculatePercentageChange = () =>
    yesterday === 0 ? 0 : ((currentDay - yesterday) / yesterday) * 100;

  const percentageChange = calculatePercentageChange();

  return (
    <tr onClick={handleRowClick}>
      {Object.entries(data).map(([key, value], i) => (
        <td className={getCellClass(key)} key={i}>
          {key === "yesterday" ? (
            <>
              <span className="price">{value}</span>
              <span className={`percent ${getCellClass(key)}`}>
                {percentageChange.toFixed(0)}%
              </span>
            </>
          ) : (
            <span>{value}</span>
          )}
        </td>
      ))}
    </tr>
  );
}
