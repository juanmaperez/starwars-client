export const getCookie = (name) => {
  const match  = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)') 
  return match ? match[2] : undefined;
}

export const setCookie = (name, value, days) => {
  var d = new Date();
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

export const deleteCookie = (name) => { 
  this.setCookie(name, '', -1); 
}