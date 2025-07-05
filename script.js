document.getElementById("spinButton").addEventListener("click", function () {
  const resultBox = document.getElementById("result");
  resultBox.style.display = "block";

  // Share on X（旧Twitter）
  const shareUrl = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("I got this art from Succinct Gacha! 🎨");
  const tweetUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${text}`;
  document.getElementById("shareButton").href = tweetUrl;
});
