// browser.browserAction.onClicked.addListener(async (info, tab) => {
//   console.log('!!!!!!!!!!!!!!!!', tab, info);
// });

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log('111111111', tab);

  if (
    changeInfo.status === 'complete' &&
    tab.url.includes('http') &&
    (/^https:\/\/www\.office/.test(tab.url) ||
      tab.url.includes('outlook.office.com/mail/'))
  ) {
    console.log('22222222222222');

    chrome.tabs.executeScript(
      tabId,
      { file: './inject_script.js' },
      function() {
        // console.log('333333333333333');

        chrome.tabs.executeScript(
          tabId,
          { file: './foreground.bundle.js' },
          function() {
            // console.log('INJECTED AND EXECUTED');
          },
        );
      },
    );
  }
});
