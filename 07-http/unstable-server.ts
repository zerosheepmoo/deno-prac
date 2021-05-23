const 서버 = Deno.listen({ port: 8080 });
console.log(`HTTP 웹 서버 실행중. http://localhost:8080/ 로 접근`);

for await (const 연결 of 서버) {
  // 블로킹 되지 않기 위해, 각 asnyc 함수로 연결을 다룰 것이다.
  (async () => {
    // 네트워크 연결을 HTTP 연결로 업그레이드
    const http연결 = Deno.serveHttp(연결);
    // HTTP 연결로 전송된 각 요청들은 HTTP 연결로부터 async iterator 로 yield 된다.
    for await (const 요청이벤트 of http연결) {
      // 네이티브 HTTP 서버는 Request 와 Response 오브젝트를 사용한다 (web standard)
      const body = `Your user-agent is:\n\n${요청이벤트.request.headers.get(
        "user-agent",
      ) ?? "Unknown"}`;
      // 요청이벤트의 `.respondWith()` 메소드로 클라이언트에게 어떻게 응답을 보낼지 설정한다.
      요청이벤트.respondWith(
        new Response(body, {
          status: 200,
        }),
      );
    }
  })();
}