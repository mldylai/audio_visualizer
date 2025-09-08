function typeNextMessage() {
    if (messageQueue.length === 0) return;
    const message = messageQueue.shift();
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < message.length) {
        typingLine.textContent = message.substring(0, charIndex + 1);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        const newLine = document.createElement("div");
        newLine.className = "terminal-line command-line";
        newLine.textContent = message;
        terminalContent.insertBefore(newLine, typingLine);
        typingLine.textContent = "";
        terminalContent.scrollTop = terminalContent.scrollHeight;
        setTimeout(typeNextMessage, 5000);
      }
    }, 50);
}

function addTerminalMessage(message, isCommand = false) {
    const newLine = document.createElement("div");
    const isFilipMessage =
      message.toLowerCase().includes("filip") ||
      message.toLowerCase().includes("webflow");
    if (isCommand) {
      if (isFilipMessage) {
        newLine.className = "terminal-line command-line";
      } else {
        newLine.className = "terminal-line command-line";
      }
    } else {
      newLine.className = "terminal-line";
    }
    newLine.textContent = message;
    terminalContent.insertBefore(newLine, typingLine);
    terminalContent.scrollTop = terminalContent.scrollHeight;
}