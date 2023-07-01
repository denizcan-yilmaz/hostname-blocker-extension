const getLocalStorageData = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(["hostnames"], function (res) {
      resolve(res.hostnames || "");
    });
  });
};

getLocalStorageData().then((data) => {
  document.querySelector("#hostname-list").value = data;
});

document.querySelector("#save-button").addEventListener("click", function () {
  var inputText = document.querySelector("#hostname-list").value;
  chrome.storage.local.set(
    { hostnames: inputText.replace("www.", "") },
    function () {
      console.log("Hostnames saved to local storage: ", inputText);
    }
  );
});
