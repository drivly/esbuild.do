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
    const { hostname, pathname, search } = new URL(req.url)
    if (pathname == '/api') return new Response(JSON.stringify({api}, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
    const [args, ...rest] = pathname.split('/')
    const token = `${hostname}/${args}`
    const url = req.url.replace(`${hostname}/${args}`,'')
    const data = await fetch(url, req).then(res => res.json()).catch(({ name, message }) => ({ error: { name, message }}))
    const pluckedData = map(data, [...args.split(',')])
    return new Response(JSON.stringify({url,token,data,pluckedData}, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  },
}
