const 사람들 = Deno.readTextFile("./05-read-and-write/people.json");

사람들.then((응답) => console.log(응답));
