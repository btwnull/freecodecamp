// Again, push the result of calling padRow with your i and count variables to your rows array.

// Open up the console to see the upside-down pyramid.

for (let i = count; i > 0; i = i - 1) {
  rows.push(padRow(i, count));
}
