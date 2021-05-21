# Command

## Hello World 예제

- `deno run 01-hello-world/hello-world.js`
- `deno run 01-hello-world/hello-world.ts`

## 모듈 가져오기 내보니기 예제

- `deno run 02-import-export/local.ts`
- `deno run 02-import-export/remote.ts`

## 의존성 관리

- `deno run 03-manage-dep/example.ts`

## Fetch

- `deno run --allow-net 04-fetch/fetch.ts`

## Read And Write

- `deno run --allow-read 05-read-and-write/read.ts`
- `deno run --allow-write 05-read-and-write/write.ts`
- `deno run --allow-write 05-read-and-write/writeSync.ts`

## Unix cat

- `deno run --allow-read 06-unix-cat/cat.ts ./README.md ./06-unix-cat/test.md`
- `deno run --allow-read 06-unix-cat/cat.ts --separate ./README.md ./06-unix-cat/test.md`
