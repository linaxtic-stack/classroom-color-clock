function updateClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Turn the current time into a hex color
  const hex =
    "#" +
    String(hours).padStart(2, "0") +
    String(minutes).padStart(2, "0") +
    String(seconds).padStart(2, "0");

  // Display the current time
  const normalTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  });

  document.getElementById("time").textContent = normalTime;
  document.getElementById("hex").textContent = hex;

  // Change the background to the current hex color
  document.body.style.backgroundColor = hex;

  // Choose black or white text based on background brightness
  const red = parseInt(hex.substring(1, 3), 16);
  const green = parseInt(hex.substring(3, 5), 16);
  const blue = parseInt(hex.substring(5, 7), 16);

  const brightness =
    (red * 299 + green * 587 + blue * 114) / 1000;

  if (brightness > 128) {
    document.getElementById("clock").style.color = "black";
  } else {
    document.getElementById("clock").style.color = "white";
  }
}

updateClock();

setInterval(updateClock, 1000);
