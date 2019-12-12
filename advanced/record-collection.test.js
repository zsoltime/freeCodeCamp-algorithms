import test from 'ava';
import update from './record-collection';

test('should return an object', (t) => {
  t.is(typeof update(2548, 'artist', 'Bon Jovi'), 'object');
});

test('should update or set the value for that record albums property if prop is not "tracks" and value is not empty', (t) => {
  const updated = update(5439, 'artist', 'ABBA');
  t.is(updated[5439].artist, 'ABBA');
});

test('should add prop if prop is "tracks" but the album does not have a "tracks" property', (t) => {
  const updated = update(5439, 'tracks', 'Take a Chance on Me');
  t.is(updated[5439].tracks[0], 'Take a Chance on Me');
});

test('should delete given prop if value is empty', (t) => {
  const updated = update(2548, 'artist', '');
  // eslint-disable-next-line no-prototype-builtins
  t.is(updated[2548].hasOwnProperty('artist'), false);
});

test('should push value onto the end if prop is "tracks" and value is not empty', (t) => {
  let updated = null;

  updated = update(1245, 'tracks', 'Addicted to Love');
  const lastTrack =
    updated[1245].tracks[updated[1245].tracks.length - 1];
  t.is(lastTrack, 'Addicted to Love');

  updated = update(2468, 'tracks', 'Free');
  t.is(updated[2468].tracks[0], '1999');
});
