let tg = window.Telegram.WebApp;
tg.expand();

function saveEvent() {
  const date = document.getElementById('datePicker').value;
  const text = document.getElementById('eventText').value;
  if (!date || !text) return alert("Please pick a date and enter an event.");

  let events = JSON.parse(localStorage.getItem("events") || "{}");
  if (!events[date]) events[date] = [];
  events[date].push(text);
  localStorage.setItem("events", JSON.stringify(events));
  renderEvents(date);
}

function renderEvents(date) {
  const list = document.getElementById('eventList');
  list.innerHTML = "";
  let events = JSON.parse(localStorage.getItem("events") || "{}");
  (events[date] || []).forEach(event => {
    let li = document.createElement("li");
    li.textContent = event;
    list.appendChild(li);
  });
}

document.getElementById('datePicker').addEventListener('change', (e) => {
  renderEvents(e.target.value);
});