const foo = require('../src/index.js');

describe('First test', () => {
	it('foo return value', () => {
		expect(foo(1)).toBe(1);
	});
});
