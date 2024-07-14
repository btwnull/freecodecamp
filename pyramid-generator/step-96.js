// Step 96
// You can also replace the done reference in your padRow call.

// Note that rows.length here would give you an off-by-one error, because done is incremented before the call.

// So you'll need to replace done here with rows.length + 1. When you do this, you may see a Range Error, because we've created another off-by-one error.

// You'll need to change the while condition to use the less than operator, instead of the less than or equal operator.

let done = 0;

while (rows.length < count) {
  done++;
  rows.push(padRow(rows.length + 1, count));
}
