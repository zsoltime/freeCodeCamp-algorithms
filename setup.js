/**
 * AVA doesn't compile source files, so we need to load Babel's `register`
 * module, which will compile source files as needed.
 * @babel/register doesn't need to process test files, so we ignore them here.
 */

// eslint-disable-next-line import/no-extraneous-dependencies
require('@babel/register')({
  ignore: ['node_modules/*', '**/*.test.js'],
});
