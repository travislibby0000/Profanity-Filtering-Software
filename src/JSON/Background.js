 '{'.//// background.js

Chrome.runtime.onInstalled.addListener((reason) => {
  if (reason === Chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
   '{'.    url: 'onboarding.html'
    });
  }
});
"persistent": false
},

     
