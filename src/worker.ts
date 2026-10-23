interface Env { ASSETS: { fetch(request: Request): Promise<Response> }; }
export default {
 async fetch(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  if(url.hostname === 'lariojapark.com' && url.protocol === 'http:'){url.protocol='https:';return Response.redirect(url.toString(),308);}
  const response=await env.ASSETS.fetch(request);
  if(response.status===404 || /^\/404(?:\.html|\/)?$/.test(url.pathname)){
   const page=response.status===404 ? response : await env.ASSETS.fetch(new Request(new URL('/_guide-not-found_',url),request));
   const headers=new Headers(page.headers);headers.set('X-Robots-Tag','noindex, follow');headers.delete('Location');return new Response(page.body,{status:404,headers});
  }
  return response;
 }
};
