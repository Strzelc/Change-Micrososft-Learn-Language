const microsoftDocsUrlPL = 'https://learn.microsoft.com/pl-pl/';

chrome.action.onClicked.addListener((tab) => {
  if(tab.url.startsWith(microsoftDocsUrlPL)) {

    const newUrl = tab.url.replace("/pl-pl/","/en-us/");
    console.log(newUrl);

    chrome.tabs.update(
      tab.id,
       {"url":newUrl},
    )
  }

  
});
