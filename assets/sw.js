w.js
if(
    'serviceWorker' in navigator
    ){
    window.addEventListener('load',function(){
    navigator.serviceWorker.register('/sw.js',{scope:"/"}).then(function(registration){
    console.log('Service worker registration successfull with scope:', registration.scope);
    },function(err){
    console.log('Service worker registration failed: ', err);
    });
    })
    }