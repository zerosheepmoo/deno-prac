/**
 * 영단어의 첫글자를 대문자로 바꾼다.
 * 
 * @param {string} word - 단어
 * @returns {string} 첫 글자 대문자로 된 단어
 */
function 대문자로(단어: string): string {
    return 단어.charAt(0).toUpperCase() + 단어.slice(1);
}

/**
 * 해당하는 이름에게 인사를 건낸다.
 * 
 * @param {string} name - 이름 
 * @returns {string} 이름이 더해진 인삿말
 */
function 안녕(이름: string): string {
    return `안녕 ${대문자로(이름)}`;
}

console.log(안녕("철수"));
console.log(안녕("영희"));
console.log(안녕("john"));
