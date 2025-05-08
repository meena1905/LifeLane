function simulateData() {
  const ambulanceCount = Math.floor(Math.random() * 2) + 1;
  const signalCount = Math.floor(Math.random() * 10) + 1;
  const now = new Date().toLocaleTimeString();

  document.getElementById("ambulance-count").innerText = ambulanceCount;
  document.getElementById("signal-count").innerText = signalCount;
  document.getElementById("last-updated").innerText = now;
}

simulateData();
setInterval(simulateData, 5000);
