'use strict';

const { describe, test, expect } = require('@jest/globals');

const maximumDraws = require('./hrm02-maximumDraws');

describe('findPoint', () => {
  test('2 returns 3', () => {
    expect(maximumDraws(2)).toStrictEqual(3);
  });
  test('3 returns 4', () => {
    expect(maximumDraws(3)).toStrictEqual(4);
  });
});
