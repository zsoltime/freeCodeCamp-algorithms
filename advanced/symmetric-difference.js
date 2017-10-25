function diff(a, b) {
  const arr = [];
  for (let i = 0; i < a.length; i += 1) {
    if (!b.includes(a[i]) && !arr.includes(a[i])) {
      arr.push(a[i]);
    }
  }

  for (let i = 0; i < b.length; i += 1) {
    if (!a.includes(b[i]) && !arr.includes(b[i])) {
      arr.push(b[i]);
    }
  }
  return arr;
}

export default function sym(...args) {
  return args.reduce(diff);
}
