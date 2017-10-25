export default function dropElements(arr, func) {
  const idx = arr.findIndex(func);
  if (idx === -1) return [];
  return arr.slice(idx);
}
