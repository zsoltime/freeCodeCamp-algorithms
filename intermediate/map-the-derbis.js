// Return a new array that transforms the element's average
// altitude into their orbital periods. The array will
// contain objects in the format { name: 'name', avgAlt:
// avgAlt }. The values should be rounded to the nearest
// whole number. The body being orbited is Earth. The radius
// of the earth is 6367.4447 kilometers, and the GM value of
// earth is 398600.4418 km3s - 2.

export default function orb(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map(({ name, avgAlt }) => {
    const orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt((earthRadius + avgAlt) ** 3 / GM),
    );

    return {
      name,
      orbitalPeriod,
    };
  });
}
