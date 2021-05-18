/**
 * Capitalize the word.
 * 
 * @param {string} word
 * @returns {string} Capitalized word
 */
function captialize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

/**
 * Say hello.
 * 
 * @param {string} name  
 * @returns {string} Greeting
 */
function hello(name) {
    return `Hello ${captialize(name)}`;
}

console.log(hello("john"));
console.log(hello("Sarah"));
console.log(hello("kai"));
