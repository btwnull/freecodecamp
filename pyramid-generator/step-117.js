// Your pyramid generator is now in a finished state, with more functionality than you originally planned! The next step is to clean up your code.

// Remove all comments, both single- and multi-line, from your code.

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}

for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}
