function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chat-Body");

  if (input.value.trim() !== "") {
    const userMsg = document.createElement("div");
    userMsg.textContent = input.value;
    userMsg.style.alignSelf = "flex-end";
    userMsg.style.background = "#d1ffd6";
    userMsg.style.padding = "8px 12px";
    userMsg.style.borderRadius = "10px";
    userMsg.style.maxWidth = "80%";

    chatBody.appendChild(userMsg);
    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

function toggleChat() {
  const chatBox = document.querySelector(".chatBox");
  chatBox.style.display = (chatBox.style.display === "none" || chatBox.style.display === "") ? "flex" : "none";
}

