/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var matches = {'(': ')', '{': '}', '[': ']'};
	var stack = [];
	var currentChar;

	for (var i = 0; i < s.length; i++) {
		currentChar = s[i];
		if (matches[currentChar]) {
			// opening braces
			stack.push(currentChar);
		} else {
			// closing braces
			if (currentChar !== matches[stack.pop()]) {
				return false;
			}
		}
	}

	return stack.length === 0;

};