(() => {
 const key='pdlc-cookie-preferences',id='G-HXM22WWPKP';
 let enabled=false,initialized=false;
 const read=()=>{const raw=localStorage.getItem(key);if(raw===null)return false;return JSON.parse(raw).analytics===true;};
 function command(){(window.dataLayer ||= []).push(arguments);}
 const apply=allow=>{
  enabled=allow;window['ga-disable-'+id]=!allow;
  if(!allow){
   if(window.dataLayer)command('consent','update',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
   for(const part of document.cookie.split(';')){const name=part.trim().split('=')[0];if(!/^_ga(?:_|$)|^_gid$|^_gat/.test(name))continue;for(const domain of ['',location.hostname,'.'+location.hostname])document.cookie=name+'=; Max-Age=0; path=/; SameSite=Lax'+(domain?'; domain='+domain:'');}
   return;
  }
  command('consent','update',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  if(initialized)return;initialized=true;
  window.gtag=command;
  command('js',new Date());command('config',id,{anonymize_ip:true});
  const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+id;script.dataset.pdlcGa='true';document.head.appendChild(script);
 };
 // An unsuccessful grant must not knowingly leave new permission in shared storage.
 const refuse=()=>{
  try{localStorage.setItem(key,JSON.stringify({analytics:false,updated:new Date().toISOString()}));if(read()===false)return true;}catch{}
  try{localStorage.removeItem(key);if(localStorage.getItem(key)===null)return true;}catch{}
  return false;
 };
 window.parkAnalytics={get:()=>enabled,set:allow=>{
  if(!allow)apply(false);
  try{
   // Check that the store can be read before attempting to publish permission.
   localStorage.getItem(key);
   localStorage.setItem(key,JSON.stringify({analytics:allow,updated:new Date().toISOString()}));
   if(read()!==allow)throw new Error('Unconfirmed choice');
   if(allow)apply(true);
   return {saved:true,effective:enabled,sharedOff:!allow};
  }catch{
   apply(false);
   const sharedOff=refuse();return {saved:!allow&&sharedOff,effective:false,sharedOff};
  }
 }};
 window.addEventListener('storage',event=>{if(event.key===key||event.key===null){try{apply(read());}catch{apply(false);}}});
 try{apply(read());}catch{apply(false);}
})();
