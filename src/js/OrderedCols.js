export default class OrderedCols {
  constructor(data) {
    const cols = Object.keys(data[0]);
    // Порядок расположения столбцов в таблице
    this.names = [cols[0], cols[1], cols[3], cols[2]];
    this.prevSortBy = 0; // Индекс предыдущего столбца, по которому была сортировка
    this.sortBy = 0; // Индекс столбца, по которому произойдет сортировка
  }

  // Возвращает следующее по очереди имя столбца, по которому произойдет сортировка
  getName() {
    const name = this.names[this.sortBy];
    this.prevSortBy = this.sortBy;
    this.sortBy += 1;
    if (this.sortBy > this.names.length - 1) this.sortBy = 0;
    return name;
  }
}
