const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const tab = await getCurrentTab();

    const data = new FormData(e.target);
    const speed = data.get('speed');

    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: setVideoSpeed,
        args: [speed]
    })
})

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

function setVideoSpeed(value) {
    vid = document.querySelector('video');
    vid.playbackRate = value;
}