const foo = require('../src/index.js');

describe('First test', () => {
	it('foo return value', () => {
		const n = 1;
		expect(foo(n)).toBe(n);
	});
});
