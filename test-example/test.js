
var assert = require('chai').assert;

describe('String#split', function() {
	
	before(function() {
		expected = ['a','b','c'];
	})
	
	beforeEach(function() {
		current = 'a,b,c'.split(',');
	})
	

	it('should return an array', function() {
		assert(Array.isArray(current));
	});

	it('should return the same array', function() {
		assert.equal(['a','b','c'].length, 'a,b,c'.split(',').length, 'arrays have equal length');
		for(var i=0; i<expected.length; i++) {
			assert.equal(expected[1],  current[1], i + 'element is equal');
		};
	});

})