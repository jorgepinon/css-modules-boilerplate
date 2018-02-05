const test_es2015 = (text, status) => {
	return `${text}, babel transpiling ES2015 is ${status}!`;
}

export default test_es2015;

/**
 * To use this test, add this to index.js:
 * 
 * import test_es2015 from './sanitycheck-es2015.js'
 * document.write(test_es2015('YES', 'working'));
 * 
 * and rerun webpack in the terminal
 */