if (window.location.hostname != document.currentScript.getAttribute('domain')){
        window.location.href = "http://" + document.currentScript.getAttribute('domain') + window.location.pathname;
}
else{
        console.log("Already Redirected");
}