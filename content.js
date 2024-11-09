console.log("Content script loaded");

// Inject CSS
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = chrome.runtime.getURL("youtube.css");
console.log(link.href);
document.head.appendChild(link);

// For every link element with rel="icon", change the href to chrome.runtime.getURL("blue.png")
var links = document.getElementsByTagName("link");
for (var i = 0; i < links.length; i++) {
  if (links[i].rel === "icon") {
    links[i].href = chrome.runtime.getURL("red_favicon.png");
  }
}

var links = document.getElementsByTagName("link");
for (var i = 0; i < links.length; i++) {
  if (links[i].rel === "shortcut icon") {
    links[i].href = chrome.runtime.getURL("red_favicon.png");
  }
}