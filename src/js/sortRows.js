export default function sortRows(rows, orderedCols) {
  const col = orderedCols.getName();
  return Array.from(rows)
    .slice(1)
    .sort((rowA, rowB) => {
      const parsedA = parseFloat(rowA.dataset[col]);
      if (Number.isNaN(parsedA)) return rowA.dataset[col] > rowB.dataset[col] ? 1 : -1;
      const parsedB = parseFloat(rowB.dataset[col]);
      return parsedA - parsedB;
    });
}
