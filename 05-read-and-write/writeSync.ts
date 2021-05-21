
function 제이슨쓰기(경로: string, 데이터: Record<string, unknown>): string {
    try {
        Deno.writeTextFileSync(경로, JSON.stringify(데이터));
        return `${경로}에 작성됨.`;
    } catch (e) {
        return e.message;
    }
}

console.log(제이슨쓰기("./05-read-and-write/data.json", { 안녕: "세상" }));