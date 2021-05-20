
const json = fetch("https://api.github.com/users/denoland");

/**
 * json Data
 */
json.then((응답) => {
    return 응답.json();
}).then((제이슨데이터) => {
    console.log(제이슨데이터);
});

/**
 * HTML Data
 */
const text = fetch("https://deno.land/");

text.then((응답) => {
    return 응답.text();
}).then((텍스트데이터) => {
    console.log(텍스트데이터);
});

/**
 * error message
 */
const error = fetch("https://does.not.exist/");

error.catch((오류) => console.log(오류.message));