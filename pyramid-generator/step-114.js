// Now move your .unshift() call into your if block.

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  }
}
