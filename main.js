if (navigator.onLine){
    console.log('online');
} else {
    console.log('offline');
    location.replace("offlineindex.html");
}

// window.addEventListener('offline', function(e) { console.log('offline');});

// window.addEventListener('online', function(e) { console.log('online');});

// if (window.online){
//     console.log('online');
// } else {
//     console.log('offline');
// }

