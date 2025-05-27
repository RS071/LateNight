let selectedPark = null;

function toggleChat() {
  const chatBox = document.getElementById("chatBox");
  chatBox.style.display = (chatBox.style.display === "flex") ? "none" : "flex";
}

function nextStep() {
  const chat = document.getElementById("chatBody");
  chat.innerHTML = "";

  const userBubble = document.createElement("div");
  userBubble.className = "chat-bubble user";
  userBubble.textContent = "Get started";
  chat.appendChild(userBubble);

  const botBubble = document.createElement("div");
  botBubble.className = "chat-bubble bot";
  botBubble.innerHTML = "Which park are you interested in?";
  chat.appendChild(botBubble);

  const options = document.createElement("div");
  options.className = "options";
  options.id = "chatOptions";
  options.innerHTML = `
    <button class="optionBtn" onclick="selectPark('white')">White River DGC</button>
    <button class="optionBtn" onclick="selectPark('lake')">Lake Fenwick DGC</button>
  `;
  chat.appendChild(options);

  chat.scrollTop = chat.scrollHeight;
}

function selectPark(park) {
  const chat = document.getElementById("chatBody");
  const options = document.getElementById("chatOptions");

  selectedPark = park;
  options.innerHTML = "";

  const parkName = (park === 'white') ? "White River DGC" : "Lake Fenwick DGC";

  const userBubble = document.createElement("div");
  userBubble.className = "chat-bubble user";
  userBubble.textContent = parkName;
  chat.appendChild(userBubble);

  const botBubble = document.createElement("div");
  botBubble.className = "chat-bubble bot";
  botBubble.innerHTML = `Great! What would you like to know about ${parkName}?`;
  chat.appendChild(botBubble);

  const newOptions = document.createElement("div");
  newOptions.className = "options";
  newOptions.id = "chatOptions";
  newOptions.innerHTML = `
    <button class="optionBtn" onclick="showAnswer('reserve')">How to reserve</button>
    <button class="optionBtn" onclick="showAnswer('address')">What’s the address?</button>
    <button class="optionBtn" onclick="showAnswer('permit')">Do I need a permit?</button>
    <button class="optionBtn" onclick="showAnswer('contact')">Who manages this park?</button>
  `;
  chat.appendChild(newOptions);

  chat.scrollTop = chat.scrollHeight;
}

function showAnswer(choice) {
  const chat = document.getElementById("chatBody");
  const options = document.getElementById("chatOptions");

  options.innerHTML = "";

  let userText = "", botText = "";
  const parkName = (selectedPark === "white") ? "White River DGC" : "Lake Fenwick DGC";

  switch (choice) {
    case "reserve":
      userText = `How to reserve ${parkName}`;
      botText = selectedPark === "white"
        ? `✅ You can reserve White River DGC via the City of Auburn:<br>
          <a class="chat-link" href="https://auburn.seamlessdocs.com/f/FieldRequest" target="_blank">📝 Reserve Now</a>`
        : `📍 Lake Fenwick is managed by the City of Kent. Use their rental form:<br>
          <a class="chat-link" href="https://www.kentwa.gov/home/showpublisheddocument/14834/637279804025430000" target="_blank">📄 Park Rental Form</a>`;
      break;

    case "address":
      userText = "What’s the address?";
      botText = selectedPark === "white"
        ? `📍 White River DGC is at **Stuck River Drive SE, Auburn, WA 98092**.<br>Use Google Maps or UDisc for directions.`
        : `📍 Lake Fenwick DGC is at **25828 Lake Fenwick Rd, Kent, WA 98032**.<br>Use UDisc or your maps app for directions.`;
      break;

    case "permit":
      userText = "Do I need a permit?";
      botText = `Yes! Most tournaments and large gatherings need a permit. Mention it in your form or call the city directly.`;
      break;

    case "contact":
      userText = "Who manages this park?";
      botText = selectedPark === "white"
        ? `White River is managed by the **City of Auburn Parks Department**.<br>
            <a class="chat-link" href="https://www.auburnwa.gov/" target="_blank">🌐 Auburn Parks Site</a>`
        : `Lake Fenwick is managed by the **City of Kent Parks Department**.<br>
            <a class="chat-link" href="https://www.kentwa.gov/" target="_blank">🌐 Kent Parks Site</a>`;
      break;

    default:
      userText = "Not sure";
      botText = "I didn’t understand that. Try selecting one of the options!";
  }

  const userBubble = document.createElement("div");
  userBubble.className = "chat-bubble user";
  userBubble.textContent = userText;
  chat.appendChild(userBubble);

  const botBubble = document.createElement("div");
  botBubble.className = "chat-bubble bot";
  botBubble.innerHTML = `
    ${botText}
    <div style="margin-top: 10px;">
      <button class="optionBtn" onclick="nextStep()">🔄 Start Over</button>
    </div>
  `;
  chat.appendChild(botBubble);

  chat.scrollTop = chat.scrollHeight;
}
