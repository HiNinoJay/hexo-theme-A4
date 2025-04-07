function wrapEmojis(selector) {
  // 定义正则表达式匹配 emoji
  const emojiRegex =
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F004}\u{1F0CF}\u{1F18E}\u{1F191}-\u{1F1AD}\u{1F1E6}-\u{1F1FF}\u{1F3FB}-\u{1F3FF}\u{1F9B0}-\u{1F9B3}\u{1F9D1}-\u{1F9D4}\u{1F9D6}-\u{1F9D7}\u{1F9D9}-\u{1F9DA}\u{1F9DC}-\u{1F9DD}\u{1F9E0}-\u{1F9E6}\u{1F9E8}-\u{1F9F9}\u{1F9FB}-\u{1F9FF}\u{1FA70}-\u{1FA74}\u{1FA78}-\u{1FA7A}\u{1FA80}-\u{1FA86}\u{1FA90}-\u{1FA96}\u{1FAA0}-\u{1FAA8}\u{1FAB0}-\u{1FAB6}\u{1FAC0}-\u{1FAC2}\u{1FAD0}-\u{1FAD6}]/gu;
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    let originalHTML = element.innerHTML;
    const processedHTML = originalHTML.replace(emojiRegex, (match) => {
      return `<span class="darkmode-ignore">${match}</span>`;
    });
    element.innerHTML = processedHTML;
  });
}
