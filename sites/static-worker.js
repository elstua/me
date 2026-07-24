export default {
  async fetch(request, env) {
    const directResponse = await env.ASSETS.fetch(request);
    if (directResponse.status !== 404) return directResponse;

    const url = new URL(request.url);
    if (url.pathname.includes(".")) return directResponse;

    const pathname = url.pathname.endsWith("/")
      ? `${url.pathname}index.html`
      : `${url.pathname}/index.html`;

    return env.ASSETS.fetch(new Request(new URL(pathname, url), request));
  },
};
