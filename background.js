chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

const youtube = 'https://www.youtube.com/';

chrome.action.onClicked.addListener(async(tab)=>{
  if(tab.url.startsWith(youtube)){
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'

    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });
  }
})
  