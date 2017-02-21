var a = (value) => {
  return () => {
    return b(value + 1);
  }
}

var b = (value) => {
  return value * value;
}

var c = a(1)(4);

console.log('c',c);
