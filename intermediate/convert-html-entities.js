// Convert the characters &, <, >, " (double quote), and '
// (apostrophe), in a string to their corresponding HTML
// entities.

export default function convertHTML(str) {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  const pattern = new RegExp(
    `[${Object.keys(entities).join('')}]`,
    'g',
  );
  return str.replace(pattern, (match) => entities[match]);
}
