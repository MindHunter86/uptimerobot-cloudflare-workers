addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
        (err) => new Response(err.stack, { status: 503 })
      )
  );
});

/**
 * Many more examples available at:
 *   https://developers.cloudflare.com/workers/examples
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleRequest(request) {
  const url = new URL(request.url);
  url.host = "stats.uptimerobot.com";

  const { pathname } = url;
  if ( pathname.startsWith("/3YyVnsprMP") ) {
    return Response.redirect("https://status.mindhunter.info/", 302)
  }

  const req = new Request(request);
  req.headers.set("Host", "stats.uptimerobot.com");

  if (pathname.startsWith("/api") || pathname.startsWith("/assets")) {
    return fetch(url.toString(), req);
  }

  // url.host = "status.mindhunter.info";
  url.pathname = "/3YyVnsprMP" + pathname;
  const root = await fetch(url.toString(), req);
  const text = await root.text();
  const newText = text
    .replaceAll("stats.uptimerobot.com", "status.mindhunter.info");

  return new Response(newText, root);

  // Example code

  // if (pathname.startsWith("/api")) {
  //   return new Response(JSON.stringify({ pathname }), {
  //     headers: { "Content-Type": "application/json" },
  //   });
  // }

  // if (pathname.startsWith("/status")) {
  //   const httpStatusCode = Number(pathname.split("/")[2]);

  //   return Number.isInteger(httpStatusCode)
  //     ? fetch("https://http.cat/" + httpStatusCode)
  //     : new Response("That's not a valid HTTP status code.");
  // }

  // return fetch("https://welcome.developers.workers.dev");
}
