export const api = {
  icon: '👌',
  name: 'esbuild.do',
  description: 'ESBuild-as-a-Service',
  url: 'https://esbuild.do/api',
  type: 'https://apis.do/code',
  endpoints: {
    buildFile: 'https://esbuild.do/:url',
  },
  site: 'https://esbuild.do',
  login: 'https://esbuild.do/login',
  signup: 'https://esbuild.do/signup',
  subscribe: 'https://esbuild.do/subscribe',
  repo: 'https://github.com/drivly/esbuild.do',
}

export default {
  fetch: async (req, env) => {
    const { user, origin, requestId, method, body, time, pathname, pathSegments, pathOptions, url, query, search, hash } = await env.CTX.fetch(req).then(res => res.json())
    if (pathname == '/api') return new Response(JSON.stringify({api,user}, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
    return fetch('https://esb.denoflare.dev/https://' + pathname + search)
  },
}
