'use strict';

const { describe, test, expect } = require('@jest/globals');

const findPoint = require('./hrm01-point-reflection');

describe('findPoint', () => {
  test('(1,1) and (2,2) returns (3,3)', () => {
    expect(findPoint(1,1,2,2)).toStrictEqual([3,3]);
  });
  
  test('(2,2) and (3,3) returns (4,4)', () => {
    expect(findPoint(2,2,3,3)).toStrictEqual([4,4]);
  });
});
