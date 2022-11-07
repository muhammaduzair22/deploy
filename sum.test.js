const sum = require('./sum');
//import sum from 'sum';


test("test case1 testing sum method", () => {
    expect(sum(12, 4)).toBe(16);
})
