chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: "Open with Scholarr",
    contexts: ["selection", "link"],
    id: "openwithscholarr",
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  let constructedUrl = `https://sci-hub.se/${
    info.linkUrl ? info.linkUrl : info.selectionText
  }`;

  console.log(info);
  console.log(constructedUrl);
  chrome.tabs.create({
    url: constructedUrl,
  });
});
