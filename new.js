function rowHeights(rows) {
  return rows.map(function (row) {
    return row.reduce(function (max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function columnWidth(rows) {
  return rows[0].map(function (_, i) {
    return rows.reduce(function (max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function drawTable(rows) {
  heights = rowHeights(rows);
  widths = columnWidth(rows);

  function drawLine(blocks, lineNum) {
    return blocks.map(function (block) {
      return block[lineNum];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function (cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    })
    return blocks[0].map(function (_, i) {
      return drawLine(blocks, i);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}

function repeate(string, times) {
  var result = "";
  for (i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}

TextCell.prototype.minWidth = function () {
  return this.text.reduce(function (width, line) {
    return Math.max(width, line.length);
  }, 0);
};

TextCell.prototype.minHeight = function () {
  return this.text.length;
};

TextCell.prototype.draw = function (width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeate(" ", width - line.length));
  }
  return result;
};

function UnderlinedCell(cell) {
  this.cell = cell;
}

UnderlinedCell.prototype.minWidth = function () {
  return this.cell.minWidth();
}

UnderlinedCell.prototype.minHeight = function () {
  return this.cell.minHeight() + 1;
}

UnderlinedCell.prototype.draw = function (w, h) {
  return this.cell.draw(w, h - 1).concat([repeate("_", w)]);
}

function toTable(objects) {
  var keys = Object.keys(objects[0]);
  console.log(keys);
  var header = keys.map(function (key) {
    return new UnderlinedCell(new TextCell(key));
  });
  console.log(header);
  var body = objects.map(function (object) {
    return keys.map(function (key) {
      return new TextCell(String(object[key]));
    })
  })
  return [header].concat(body);
}

var MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, country: "Tanzania" },
  { name: "Everest", height: 8848, country: "Nepal" },
  { name: "Mount Fuji", height: 3776, country: "Japan" },
  { name: "Mont Blanc", height: 4808, country: "Italy/France" },
  { name: "Vaalserberg", height: 323, country: "Netherlands" },
  { name: "Denali", height: 6168, country: "United States" },
  { name: "Popocatepetl", height: 5465, country: "Mexico" }
];

console.log(drawTable(toTable(MOUNTAINS)));