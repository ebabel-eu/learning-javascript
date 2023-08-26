"use strict";

// const { describe, test, expect } = require('@jest/globals');

const add1and1 = require("./add1and1");

describe("add1and1", () => {
  test("returns 2", () => {
    expect(add1and1()).toBe(2);
  });
});
