// // Your pyramid is no longer inverted. This is because you are adding new rows to the end of the array.

// Update your loop body to add new rows to the beginning of the array.
for (let i = 1; i <= count; i++) {
  rows.unshift(padRow(i, count));
}
