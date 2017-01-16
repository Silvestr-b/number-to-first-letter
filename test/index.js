'use strict'

const expect = require('chai').expect;
const toFormat = require('../index');

describe('toFormat', () => {
	
	it('Если передано число 0-9, то должен возвращать соотвестствующую букву', () => {
		expect(toFormat(0)).to.be.equal('a');
		expect(toFormat(1)).to.be.equal('b');
		expect(toFormat(9)).to.be.equal('j');
	})

	it('Если передано число больше, то должен возвращать букву соотвестствующую первой цифре числа + остальную часть числа переведенную в 36-ричную систему', () => {
		expect(toFormat(12)).to.be.equal('b2');
		expect(toFormat(456)).to.be.equal('e1k');
		expect(toFormat(7864)).to.be.equal('ho0');
	})

	it('Если вторая цифра в числе - 0, то возвращает "_" + число в 36-ричной системе', () => {
		expect(toFormat(10)).to.be.equal('_a');
		expect(toFormat(400)).to.be.equal('_b4');
		expect(toFormat(6000)).to.be.equal('_4mo');
	})

	it('Все значения уникальны', () => {
		const set = new Set();

		for(let i = 0; i < 10000; i++){
			set.add(toFormat(i))
		}

		expect(set.size).to.be.equal(10000);
	})

})