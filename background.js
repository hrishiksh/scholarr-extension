chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: "Open with Scholarr",
    contexts: ["selection", "link"],
    id: "openwithscholarr",
  });
  // chrome.contextMenus.create({
  //   title: "Copy APA citation",
  //   contexts: ["selection", "link"],
  //   id: "copycitation",
  // });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == "openwithscholarr") {
    let constructedUrl = `https://sci-hub.ru/${
      info.linkUrl ? info.linkUrl : info.selectionText
    }`;

    console.log(info);
    console.log(constructedUrl);
    chrome.tabs.create({
      url: constructedUrl,
    });
  }
});

// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   if (info.menuItemId == "copycitation") {
//     console.log(document.execCommand("paste"));

//     // let doiLink = info.linkUrl;
//     // fetch(
//     //   `https://citation.crosscite.org/format?doi=${doiLink}&style=apa&lang=en-US`
//     // )
//     //   .then((response) => response.text())
//     //   .then((response) => {
//     //     console.log(response);
//     //     navigator.clipboard.writeText("hi");
//     //   })
//     //   .catch((err) => console.error(err));
//   } else {
//     let constructedUrl = `https://sci-hub.se/${
//       info.linkUrl ? info.linkUrl : info.selectionText
//     }`;

//     console.log(info);
//     console.log(constructedUrl);
//     chrome.tabs.create({
//       url: constructedUrl,
//     });
//   }
// });
