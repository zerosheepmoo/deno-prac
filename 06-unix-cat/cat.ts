const 파일들 = Deno.args;
let 달러 = false;

for (const 파일명 of 파일들) {
    if (파일명 == '--separate' && 파일들.indexOf(파일명) == 0) {
        달러 = true;
        continue;
    }
    const 파일 = await Deno.open(파일명);
    await Deno.copy(파일, Deno.stdout);
    if (달러) {
        Deno.stdout.write(new Uint8Array([10, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 10]));
    }
    파일.close();
}