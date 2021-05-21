const 쓰기 = Deno.writeTextFile("./05-read-and-write/hello.txt", "Hello World!");

쓰기.then(() => console.log("File written to ./hello.txt"));