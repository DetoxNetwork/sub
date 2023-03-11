$('.toggle').click(function(e){
  e.preventDefault(); // The flicker is a codepen thing
  $(this).toggleClass('toggle-on');
});

var incognito=false;
document.getElementById("switch").onclick = function() {
 if (incognito===false) {
    incognito=true;
  }
    else {
  incognito=false;
}
 };


"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }
  const url = search(address.value, searchEngine.value);
if (incognito===true) {
  subject.insertAdjacentHTML('afterbegin', '<iframe src='+__uv$config.prefix + __uv$config.encodeUrl(url)+'></iframe>');
}else{
          location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
  
}
});
