
function bypass(){
    var blocker = document.getElementsByClassName("css-1dbjc4n r-1awozwy r-1kihuf0 r-18u37iz r-1pi2tsx r-1777fci r-1pjcn9w r-xr3zp9 r-1xcajam r-ipm5af r-g6jmlv")
        if(blocker === undefined){
           
            return;
        }
        blocker[0].style["visibility"] = "hidden";
        document.documentElement.style["overflowY"] = "scroll";

    return;
}


chrome.action.onClicked.addListener((tab) => {
    if(tab.url.includes("twitter")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: bypass
      });
    }

  });

