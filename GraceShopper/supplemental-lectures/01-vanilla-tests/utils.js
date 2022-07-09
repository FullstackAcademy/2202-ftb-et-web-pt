const toCurrency = (num) => {
  // multiply the value by `100` to get the value in pennies
  // turn it into a string
  const penniesOnly = (num * 100).toString();
  // get everything except the last 2 chars, save them as dollars
  let dollars = penniesOnly.slice(0, penniesOnly.length - 2);
  // get only the last 2 chars, save them as pennies
  const penniesLessDollars = penniesOnly.slice(penniesOnly.length - 2, penniesOnly.length);
  // if dollars is not defined we need to make it a '0' so that we get our $0.50 format
  if(!dollars) dollars = '0';
  // join the dollars with pennies on a dot
  return '$' + [dollars, penniesLessDollars].join('.');
}

module.exports = toCurrency;
