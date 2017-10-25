export default function updateInventory(arr1, arr2) {
  for (let i = 0; i < arr2.length; i += 1) {
    const idx = arr1.findIndex(item => item[1] === arr2[i][1]);

    if (idx > -1) {
      arr1[idx][0] += arr2[i][0];
    } else {
      arr1.push(arr2[i]);
    }
  }
  return arr1.sort((a, b) => b[1] < a[1]);
}
