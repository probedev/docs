(function() {
  // Apollo.io Website Tracker
  var script = document.createElement('script');
  script.src = 'https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=' + Math.random().toString(36).substring(7);
  script.async = true;
  script.defer = true;
  
  script.onload = function() {
    if (window.trackingFunctions) {
      window.trackingFunctions.onLoad({
        appId: '68642086b3b8ee00191331ec'
      });
    }
  };
  
  document.head.appendChild(script);
})(); 