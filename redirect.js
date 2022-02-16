if (location.hostname !=
document.currentScript.getAttribute('domain')){
  location.href = "http://" +
document.currentScript.getAttribute('domain') + location.pathname;
} else{
  console.log("Already Redirected");
}
